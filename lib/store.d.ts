export interface IStorageParser {
    get(val: string, defaultVal: unknown): unknown;
    set(val: unknown): string;
}
declare type StorageType = "localStorage" | "sessionStorage";
export declare class Storage {
    private keyPrefix;
    private parser?;
    private storage?;
    constructor(keyPrefix?: string, storageType?: StorageType, parser?: IStorageParser | undefined);
    get(key: string, defaultVal?: unknown): unknown;
    set(key: string, val: unknown): void;
    remove(key: string): void;
}
export declare class LocalStorage extends Storage {
    constructor(keyPrefix?: string, parser?: IStorageParser);
}
export declare class SessionStorage extends Storage {
    constructor(keyPrefix?: string, parser?: IStorageParser);
}
export {};
