import { IStorageParser, Storage } from "./storage";

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

export { Storage, IStorageParser };
