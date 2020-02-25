import { FieldDescriptor } from "./field-descriptor";
import { Encoding, Options } from "./options";
/** Represents a DBF file. */
export declare class DBFFile {
    /** Opens an existing DBF file. */
    static open(path: string, options?: Partial<Options>): Promise<DBFFile>;
    /** Creates a new DBF file with no records. */
    static create(path: string, fields: FieldDescriptor[], options?: Partial<Options>): Promise<DBFFile>;
    /** Full path to the DBF file. */
    path: string;
    /** Total number of records in the DBF file. (NB: includes deleted records). */
    recordCount: number;
    /** Metadata for all fields defined in the DBF file. */
    fields: FieldDescriptor[];
    /** Reads a subset of records from this DBF file. */
    readRecords(maxCount?: number, startPos?: number): Promise<Record<string, unknown>[]>;
    /** Appends the specified records to this DBF file. */
    appendRecords(records: any[]): Promise<DBFFile>;
    _encoding: Encoding;
    _recordsRead: number;
    _headerLength: number;
    _recordLength: number;
    _memoPath?: string | undefined;
    _version?: number | undefined;
}
