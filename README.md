# Azz Storage

This is a handy wrapper for web localStorage for now

Support localStorage, sessionStorage, and InMemory Storage

## Installation

```sh
npm install --save azz-storage
```

## Usage

```ts
import { LocalStorage } from "azz-storage";
// import { SessionStorage } from "azz-storage";
// import { MemoryStorage } from "azz-storage";

const lStore = new LocalStorage("__pro");

lStore.set("token", "logined"); // Will save key as __protoken in localStorage

lStore.get("token"); // "logined"
```

with parser like vue-ls

```ts
const vueLSLikeParser: IStorageParser = {
  getVal(val: string, defaultVal: unknown): unknown {
    try {
      const data = JSON.parse(val);
      return data.value;
    } catch (e) {
      return defaultVal;
    }
  },
  setVal(val: unknown) {
    return JSON.stringify({
      value: val,
    });
  },
};

const localVueLikeStore = new LocalStorage("__vuels", vueLSLikeParser);
```

## API

### Storage

**Contructor**

```js
import { LocalStorage }  from "azz-storage";
// SessionStorage and MemoryStorage have same api with LocalStorage

const lStore = new LocalStorage([keyPrefix, parser]);
```

| argument  | type              | description                                                                    | default   | required |
| :-------- | :---------------- | :----------------------------------------------------------------------------- | --------- | -------- |
| keyPrefix | string            | the key prefix for preventing conflict in your web app with other library      | undefined | true     |
| parser    | IAzzStorageParser | for sepecific use, liking auto JSON parse/stringify like vue-ls or do some log | undefined | false    |

**Instance APi**

```js
lStore.get([key, defaultVal]);
lStore.set([key, val]);
lStore.remove([key]);
```

| method | argument   | type    | description                                                     | default   | required |
| :----- | ---------- | ------- | --------------------------------------------------------------- | --------- | -------- |
| get    | key        | string  | the storage key                                                 | undefined | true     |
| get    | defaultVal | unknown | when the target value not defined, you will get the default one | undefined | false    |
| set    | key        | string  | same as get method key                                          | undefined | true     |
| set    | val        | unknown | the val you want to save                                        | undefined | true     |
| remove | key        | remove  | remove key mapped value                                         | undefined | true     |

