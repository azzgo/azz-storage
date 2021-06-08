import { AzzStorage, IAzzStorageParser } from "./store";

const vueLSLikeParser: IAzzStorageParser = {
  get(val: string, defaultVal: unknown): unknown {
    try {
      const data = JSON.parse(val);
      return data.value;
    } catch (e) {
      return defaultVal;
    }
  },
  set(val: unknown) {
    return JSON.stringify({
      value: val,
    });
  },
};

export default AzzStorage;

export const VueLsStorage = (keyPrefix: string) =>
  new AzzStorage(keyPrefix, vueLSLikeParser);


export {
  IAzzStorageParser
}

