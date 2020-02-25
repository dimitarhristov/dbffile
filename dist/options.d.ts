import { FileVersion } from './file-version';
/** Options for opening or creating a DBF file. */
export interface Options {
    /** The file version to open or create. Currently versions 0x03, 0x83 and 0x8b are supported. */
    fileVersion?: FileVersion;
    /** The character encoding(s) to use when reading/writing the DBF file. Defaults to ISO-8859-1. */
    encoding: Encoding;
}
/**
 * Character encoding. Either a string, which applies to all fields, or an object whose keys are field names and
 * whose values are encodings. If given as an object, field keys are all optional, but a 'default' key is required.
 * Valid encodings may be found here: https://github.com/ashtuchkin/iconv-lite/wiki/Supported-Encodings
 */
export declare type Encoding = string | {
    default: string;
    [fieldName: string]: string;
};
/** Validates the given options and substitutes defaults for missing properties. Returns a new options object. */
export declare function normaliseOptions(options?: Partial<Options>): Options;
