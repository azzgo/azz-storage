export interface IStorageParser {
  get(val: string, defaultVal: unknown): unknown;
  set(val: unknown): string;
}

type StorageType = "localStorage" | "sessionStorage";

export class Storage {
  private storage?: globalThis.Storage;

  constructor(
    private keyPrefix = "azz",
    storageType: StorageType = "localStorage",
    private parser?: IStorageParser
  ) {
    switch (storageType) {
      case "localStorage":
        this.storage = globalThis.localStorage;
        break;
      case "sessionStorage":
        this.storage = globalThis.sessionStorage;
        break;
    }
  }

  get(key: string, defaultVal?: unknown) {
    return this.parser
      ? this.parser.get(localStorage.getItem(this.keyPrefix + key)!, defaultVal)
      : this.storage?.getItem(this.keyPrefix + key) || defaultVal;
  }

  set(key: string, val: unknown) {
    this.storage?.setItem(
      this.keyPrefix + key,
      (this.parser ? this.parser.set(val) : val) as string
    );
  }

  remove(key: string) {
    this.storage?.removeItem(this.keyPrefix + key);
  }
}

export class LocalStorage extends Storage {
  constructor(keyPrefix = "azz", parser?: IStorageParser) {
    super(keyPrefix, "localStorage", parser);
  }
}
export class SessionStorage extends Storage {
  constructor(keyPrefix = "azz", parser?: IStorageParser) {
    super(keyPrefix, "sessionStorage", parser);
  }
}
