import { LED } from "./LED/LED";
import { LEDCore } from "./LED/LEDCore";
import { HButton } from "./HButton/HButton";
import { HButtonCore } from "./HButton/HButtonCore";
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

export const deviceMap = new Map([
    ['LED', [LED, LEDCore]],
    ['HButton', [HButton, HButtonCore]],
    ['SevenSegmentLED', [SevenSegmentLED, SevenSegmentLEDCore]],
    ['LEDMatrix4t4', [LEDMatrix4t4, LEDMatrix4t4Core]],
    ['LEDMatrix8t8', [LEDMatrix8t8, LEDMatrix8t8Core]],
    ['LEDMatrix16t16', [LEDMatrix16t16, LEDMatrix16t16Core]],
    ['LEDText', [LEDText, LEDTextCore]]
])

export class Devices {
    constructor (className, opts) {
        return new deviceMap[className][0](opts);
    }
}

export class DeviceCore {
    constructor (className, opts) {
        return new deviceMap[className][1](opts);
    }
}