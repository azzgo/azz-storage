import { IStorageParser, Storage } from "./storage";
import { Memory } from './internal'

export class LocalStorage extends Storage {
  constructor(keyPrefix = "azz", parser?: IStorageParser) {
    super(keyPrefix, globalThis.localStorage, parser);
  }
}
export class SessionStorage extends Storage {
  constructor(keyPrefix = "azz", parser?: IStorageParser) {
    super(keyPrefix, globalThis.sessionStorage, parser);
  }
}

export class MemoryStorage extends Storage {
  constructor(keyPrefix = "azz", parser?: IStorageParser) {
    super(keyPrefix, new Memory(), parser);
  }
}

export { Storage, IStorageParser };
