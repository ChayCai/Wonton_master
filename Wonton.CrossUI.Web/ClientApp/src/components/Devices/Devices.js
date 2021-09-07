import { Button } from "./Button/Button";
import { ButtonCore } from "./Button/ButtonCore";
import { HButton } from "./HButton/HButton";
import { HButtonCore } from "./HButton/HButtonCore";
import { KeyPad4t4 } from "./KeyPad4t4/KeyPad4t4"
import { KeyPad4t4Core } from "./KeyPad4t4/KeyPad4t4Core";
import { RotaryButton } from "./RotaryButton/RotaryButton";
import { RotaryButtonCore } from "./RotaryButton/RotaryButtonCore";
import { LED } from "./LED/LED";
import { LEDCore } from "./LED/LEDCore";
import { SevenSegmentLED } from "./SevenSegmentLED/SevenSegmentLED";
import { SevenSegmentLEDCore } from "./SevenSegmentLED/SevenSegmentLEDCore";
import { LEDMatrix4t4 } from "./LEDMatrix4t4/LEDMatrix4t4";
import { LEDMatrix4t4Core } from "./LEDMatrix4t4/LEDMatrix4t4Core";
import { LEDMatrix8t8 } from "./LEDMatrix8t8/LEDMatrix8t8";
import { LEDMatrix8t8Core } from "./LEDMatrix8t8/LEDMatrix8t8Core";
import { LEDMatrix16t16 } from "./LEDMatrix16t16/LEDMatrix16t16";
import { LEDMatrix16t16Core } from "./LEDMatrix16t16/LEDMatrix16t16Core";
import { LEDText } from "./LEDText/LEDText";
import { LEDTextCore } from "./LEDText/LEDTextCore";
import { ROM } from "./ROM/ROM";
import { ROMCore } from "./ROM/ROMCore";


export const InputDeviceMap = new Map([
    ['Button', [Button, ButtonCore]],
    ['HButton', [HButton, HButtonCore]],
    ['KeyPad4t4', [KeyPad4t4, KeyPad4t4Core]],
    ['RotaryButton', [RotaryButton, RotaryButtonCore]],
])

export const OutputDeviceMap = new Map([
    ['LED', [LED, LEDCore]],
    ['SevenSegmentLED', [SevenSegmentLED, SevenSegmentLEDCore]],
    ['LEDMatrix4t4', [LEDMatrix4t4, LEDMatrix4t4Core]],
    ['LEDMatrix8t8', [LEDMatrix8t8, LEDMatrix8t8Core]],
    ['LEDMatrix16t16', [LEDMatrix16t16, LEDMatrix16t16Core]],
    ['LEDText', [LEDText, LEDTextCore]]
])

export const DataGenDeviceMap = new Map([
    ['ROM',[ROM,ROMCore]],
])

export const DeviceMap = new Map([...InputDeviceMap, ...OutputDeviceMap, ...DataGenDeviceMap]);

export class Devices {
    constructor(className, opts) {
        return new DeviceMap[className][0](opts);
    }
}

export class DeviceCore {
    constructor(className, opts) {
        return new DeviceMap[className][1](opts);
    }
}