export interface IStorageParser<T = unknown> {
  getVal(val: string, defaultVal: T): T;
  setVal(val: T): string;
}

export class Storage {
  constructor(
    private keyPrefix = "azz",
    private storage: globalThis.Storage = globalThis.localStorage,
    private parser?: IStorageParser
  ) {}

  private prefixedKey(key: string) {
    return this.keyPrefix + key;
  }

  get(key: string, defaultVal?: unknown) {
    return this.parser
      ? this.parser.getVal(localStorage.getItem(this.prefixedKey(key))!, defaultVal)
      : this.storage?.getItem(this.keyPrefix + key) || defaultVal;
  }

  set(key: string, val: unknown) {
    this.storage?.setItem(
      this.prefixedKey(key),
      (this.parser ? this.parser.setVal(val) : val) as string
    );
  }

  remove(key: string) {
    this.storage?.removeItem(this.prefixedKey(key));
  }
}

