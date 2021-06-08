export interface IAzzStorageParser {
  get(val: string, defaultVal: unknown): unknown;
  set(val: unknown): string;
}

export class AzzStorage {
  constructor(private keyPrefix: string, private parser?: IAzzStorageParser) {}

  get(key: string, defaultVal?: unknown) {
    return this.parser
      ? this.parser.get(localStorage.getItem(this.keyPrefix + key)!, defaultVal)
      : localStorage.getItem(this.keyPrefix + key) || defaultVal;
  }

  set(key: string, val: unknown) {
    localStorage.setItem(
      this.keyPrefix + key,
      (this.parser ? this.parser.set(val) : val) as string
    );
  }

  remove(key: string) {
    localStorage.removeItem(this.keyPrefix + key);
  }
}
