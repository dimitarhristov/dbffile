export declare type FileVersion = 0x03 | 0x83 | 0x8b | 0x30;
export declare function isValidFileVersion(fileVersion: number): fileVersion is FileVersion;
