import { IStorageParser, Storage } from "./storage";
export declare class LocalStorage extends Storage {
    constructor(keyPrefix?: string, parser?: IStorageParser);
}
export declare class SessionStorage extends Storage {
    constructor(keyPrefix?: string, parser?: IStorageParser);
}
export declare class MemoryStorage extends Storage {
    constructor(keyPrefix?: string, parser?: IStorageParser);
}
export { Storage, IStorageParser };
