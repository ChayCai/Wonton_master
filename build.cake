#addin nuget:?package=Cake.DoInDirectory&version=3.3.0
#addin nuget:?package=Cake.CMake&version=1.2.0
#addin nuget:?package=Cake.Npm&version=1.0.0
#addin nuget:?package=Cake.Json&version=6.0.0
#addin nuget:?package=Newtonsoft.Json&version=12.0.2

var target = Argument("target", "Build");
var useMagic = Argument<bool>("useMagic", true);
var elec_target_os = Argument("targetOS", "SameAsHost");
var elec_target_arch = Argument("targetArch", "x64"); //x64, arm64, arm(armv7l)
var fx_deps = Argument<bool>("FxDeps", false);
var addi_name = Argument("AdditionalName", "");
var release_dir = Argument("releaseDir", "Build");
var clean_node = Argument<bool>("CleanNode", false);

var elec_ver = "";
var elec_target_os3 = "";
var elec_target_arch2 = elec_target_arch;
var env_dict = new Dictionary<string, string>();
var pre_package_path = "";
var backend_bin_path = "";
var build_path = "";
var electron_builder_bin = "";
var wonton_version = "";
var isHostMac = System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.OSX);
var isHostWin = System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.Windows);
var isHostLinux = System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.Linux);

Setup(context =>
{
    var pkgJ = ParseJsonFromFile(File("Wonton.CrossUI.Web.HostApp/package.json"));
    var devDependencies = pkgJ["devDependencies"];
    elec_ver = devDependencies["electron"].Value<string>();
    wonton_version = pkgJ["version"].Value<string>();

    if(isHostMac)
    {
        if(elec_target_os == "SameAsHost") { elec_target_os = "mac"; }
    }
    else if(isHostWin)
    {
        if(elec_target_os == "SameAsHost") { elec_target_os = "win"; }
    }
    else if(isHostLinux)
    {
        if(elec_target_os == "SameAsHost") { elec_target_os = "linux"; }
    }

    if(elec_target_os == "mac")
    {
        elec_target_os3 = "osx-" + elec_target_arch;
    }
    if(elec_target_os == "win")
    {
        elec_target_os3 = "win-" + elec_target_arch;
    }
    if(elec_target_os == "linux")
    {
        elec_target_os3 = "linux-" + elec_target_arch;
    }

    if (elec_target_arch == "arm")
    {
        elec_target_arch2 = "armv7l";
    }

    pre_package_path = "Wonton.CrossUI.Web.HostApp/obj/Desktop/"+elec_target_os;
    backend_bin_path = "Wonton.CrossUI.Web.HostApp/obj/Desktop/"+elec_target_os+"/bin";
    build_path = MakeAbsolute(Directory("./Wonton.CrossUI.Web/bin/Desktop")).FullPath;

    if(useMagic)
    {
        env_dict.Add("NPM_CONFIG_REGISTRY", "https://registry.npm.taobao.org");
        env_dict.Add("ELECTRON_CUSTOM_DIR", elec_ver);
        env_dict.Add("ELECTRON_MIRROR", "https://npm.taobao.org/mirrors/electron/");
        env_dict.Add("ELECTRON_BUILDER_BINARIES_MIRROR", "http://npm.taobao.org/mirrors/electron-builder-binaries/");
        env_dict.Add("PUPPETEER_DOWNLOAD_HOST", "https://npm.taobao.org/mirrors/");
        env_dict.Add("SASS_BINARY_SITE", "http://npm.taobao.org/mirrors/node-sass");
    }

    electron_builder_bin = IsRunningOnWindows() ? "electron-builder.cmd" : "electron-builder";
    context.Tools.RegisterFile("./Wonton.CrossUI.Web.HostApp/node_modules/.bin/"+electron_builder_bin);

    Information("Host OS              : " + System.Runtime.InteropServices.RuntimeInformation.OSDescription);
    Information("Host Architecture    : " + System.Runtime.InteropServices.RuntimeInformation.ProcessArchitecture);
    Information("Target OS            : " + elec_target_os);
    Information("Target Architecture  : " + elec_target_arch);
    Information("Framework Dependent  : " + fx_deps);
    Information("Electron Version     : " + elec_ver);
    Information("Wonton Version       : " + wonton_version);
    Information("Release Directory    : " + release_dir);
    Information("Use Magic            : " + useMagic);
});

Task("BuildNative")
    .WithCriteria(FileExists("NativeDeps.zip"))
    .Does(() =>
{
    Information("构建Native依赖");
    DelDir("VLFDDriver");
    DelDir("SharpVLFD");
    DelFile("build.sh");
    Unzip("NativeDeps.zip", ".");

    if(IsRunningOnWindows())
    {
        var is64 = System.Environment.Is64BitOperatingSystem;
        var p = PlatformTarget.x64;
        if(!is64){ p = PlatformTarget.x86;  }
        MSBuild("./VLFDDriver/VLFDDriver.sln", new MSBuildSettings {
            Verbosity = Verbosity.Minimal,
            Configuration = "Release",
            PlatformTarget = p
        });
    }
    else
    {
        DoInDirectory("./VLFDDriver/VLFDLibUSBDriver", () => {
            var shs = GetFiles("../**/*.sh");
            foreach(var sh in shs)
            {
                Information("Add excutable permission for "+sh);
                StartProcess("chmod", new ProcessSettings { Arguments = "+x "+ sh });
            }
            CMake(new CMakeSettings
            {
                SourcePath = ".",
                OutputPath = "."
            });
            CMake(new CMakeSettings
            {
                SourcePath = ".",
                OutputPath = "."
            });
            CMakeBuild(new CMakeBuildSettings
            {
                BinaryPath = "."
            });
        });

    }
});

Task("InstallClientApp")
    .Does(()=>
{
    NpmInstallElectronWithRegistry("Wonton.CrossUI.Web/ClientApp");
});

Task("CopyPackage")
    .WithCriteria(!string.IsNullOrEmpty(release_dir))
    .Does(() =>
{
    Information("目标目录: "+ release_dir);
    if(!DirectoryExists(release_dir)){ CreateDirectory(release_dir); }
    var files = GetFiles(build_path+"/*.7z");
    CopyFiles(files, release_dir);
    files = GetFiles(build_path+"/*.deb");
    CopyFiles(files, release_dir);
    files = GetFiles(build_path+"/*.dmg");
    CopyFiles(files, release_dir);
    files = GetFiles(build_path+"/*.exe");
    CopyFiles(files, release_dir);
});

Task("Build")
    .IsDependentOn("BuildNative")
    .IsDependentOn("PackageApp")
    .IsDependentOn("CopyPackage");

void DelDir(string dir)
{
    if(DirectoryExists(dir))
    {
        DeleteDirectory(dir, new DeleteDirectorySettings{Recursive=true, Force=true});
        Information("删除目录: "+ dir);
    }
}

void DelFile(string file)
{
    if(FileExists(file))
    {
        DeleteFile(file);
        Information("删除文件: "+ file);
    }
}

Task("Clean")
    .Does(() =>
{
    DelDir("VLFDDriver");
    DelDir("SharpVLFD");
    DelDir("Build");
    DelFile("build.sh");
    DelDir("Wonton.Common/bin");
    DelDir("Wonton.Common/obj");
    DelDir("Wonton.CrossUI/bin");
    DelDir("Wonton.CrossUI/obj");
    DelDir("Wonton.CrossUI.Web/bin");
    DelDir("Wonton.CrossUI.Web/obj");
    DelDir("Wonton.CrossUI.Web/logs");
    DelDir("Wonton.CrossUI.Web/ClientApp/build");
    DelDir("Wonton.CrossUI.Web.HostApp/bin");
    DelDir("Wonton.CrossUI.Web.HostApp/obj");
    DelFile("Wonton.CrossUI.Web.HostApp/main.js");
    DelDir("Wonton.Test/bin");
    DelDir("Wonton.Test/obj");
    DelDir("Wonton.WinUI.UWP/bin");
    DelDir("Wonton.WinUI.UWP/obj");
    DelDir("Wonton.WinUI.WPF/bin");
    DelDir("Wonton.WinUI.WPF/obj");

    if(clean_node)
    {
        DelDir("Wonton.CrossUI.Web/ClientApp/node_modules");
        DelDir("Wonton.CrossUI.Web/ElectronHost/node_modules");
        DelDir("Wonton.CrossUI.Web.HostApp/node_modules");
    }
});

void NpmInstallElectronWithRegistry(string dir, bool production = false)
{
    var settings = new NpmInstallSettings
    {
        Production = production,
        EnvironmentVariables = env_dict
    };

    DoInDirectory(dir, () => {
        NpmInstall(settings);
    });
}

Task("InstallHostApp")
    .Does(() =>
{
    NpmInstallElectronWithRegistry("Wonton.CrossUI.Web.HostApp");
});

Task("BuildHostApp")
    .IsDependentOn("InstallHostApp")
    .Does(() =>
{
    var settings = new NpmRunScriptSettings
    {
        ScriptName = "build"
    };
    DoInDirectory("Wonton.CrossUI.Web.HostApp", () => {
        NpmRunScript(settings);
    });
});

Task("PublishBackendApp")
    .IsDependentOn("InstallClientApp")
    .Does(() =>
{
    DelDir(backend_bin_path);
    var config = new DotNetCorePublishSettings
    {
        Configuration = "Release",
        OutputDirectory = backend_bin_path
    };
    if(!fx_deps)
    {
        config.Runtime = elec_target_os3;
        config.SelfContained = true;
    }
    DotNetCorePublish("Wonton.CrossUI.Web/Wonton.CrossUI.Web.csproj", config);
});

Task("CopyHostApp")
    .Does(()=>
{
    var electron_files = GetFiles("Wonton.CrossUI.Web.HostApp/*.js");
    var electron_files2 = GetFiles("Wonton.CrossUI.Web.HostApp/*.json");
    var electron_files3 = GetFiles("Wonton.CrossUI.Web.HostApp/*.html");
    CopyFiles(electron_files, pre_package_path);
    CopyFiles(electron_files2, pre_package_path);
    CopyFiles(electron_files3, pre_package_path);
});

Task("InstallPrepackageHostApp")
    .Does(()=>
{
    NpmInstallElectronWithRegistry(pre_package_path, true);
});

Task("PackageDependency")
    .WithCriteria(!isHostLinux)
    .Does(() =>
{
    var gtkWaveDir = "Dependency/gtkwave/" + elec_target_os3;
    var gtkWaveZipPath = gtkWaveDir + "/gtkwave.zip";
    var gtkWaveZip = GetFiles(gtkWaveZipPath);
    Information("Copy: " + gtkWaveZipPath);
    if (isHostWin)
    {
        Information("Windows:");
        Unzip(gtkWaveZipPath, backend_bin_path);
    }
    if (isHostMac)
    {
        Information("Mac:");
        var desktop = System.Environment.GetFolderPath(Environment.SpecialFolder.Desktop);
        if (desktop == "") Information("Desktop Wrong!");
        if (!DirectoryExists(desktop + "/gtkwave.app"))
            Unzip(gtkWaveZipPath, desktop);

        var osxBinDir = desktop + "/gtkwave.app/Contents/MacOS";    // 鼠标点击用
        Information("OSX bin path: " + osxBinDir);
        var shs = GetFiles(osxBinDir + "/*");
        foreach (var sh in shs)
            StartProcess("chmod", new ProcessSettings {Arguments = "+x " + sh});

        osxBinDir = desktop + "/gtkwave.app/Contents/Resources/bin";    // 命令行打开用
        shs = GetFiles(osxBinDir + "/*");
        foreach (var sh in shs)
            StartProcess("chmod", new ProcessSettings {Arguments = "+x " + sh});

        var app = "/Applications/gtkwave.app";
        if(!DirectoryExists(app))
        {
            CreateDirectory(app);
            CopyDirectory(desktop + "/gtkwave.app", "/Applications/gtkwave.app");
        }
    }

});

Task("PackageApp")
    .IsDependentOn("BuildHostApp")
    .IsDependentOn("PublishBackendApp")
    .IsDependentOn("PackageDependency")
    .IsDependentOn("CopyHostApp")
    .IsDependentOn("InstallPrepackageHostApp")
    .Does(() =>
{
    var args = new ProcessArgumentBuilder()
        .Append("--"+elec_target_os)
        .Append("--"+elec_target_arch2)
        .Append("-c.electronVersion="+elec_ver)
        .Append("--publish never");

    env_dict.Add("ADDI_NAME", addi_name == "" ? "" : "-"+addi_name);
    env_dict.Add("FXDEPS", "");
    if(fx_deps)
    {
        env_dict["FXDEPS"] = "-fxdependent";
    }

    DoInDirectory(pre_package_path, () =>
    {
        var electron_builder = Context.Tools.Resolve(electron_builder_bin);
        StartProcess(electron_builder, new ProcessSettings { Arguments = args, EnvironmentVariables = env_dict});
    });
});

RunTarget(target);
