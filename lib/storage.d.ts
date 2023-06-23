export interface IStorageParser<T = unknown> {
    getVal(val: string, defaultVal: T): T;
    setVal(val: T): string;
}
export declare class Storage {
    private keyPrefix;
    private storage;
    private parser?;
    constructor(keyPrefix?: string, storage?: globalThis.Storage, parser?: IStorageParser<unknown> | undefined);
    private prefixedKey;
    get(key: string, defaultVal?: unknown): unknown;
    set(key: string, val: unknown): void;
    remove(key: string): void;
}
