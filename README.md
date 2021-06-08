# Azz Storage

This is a handy wrapper for web localStorage for now

## Installation

```sh
npm install --save-dev azz-storage
```

## Usage

```ts
import AzzStorage from "azz-storage";

const lStore = new AzzStorage("__pro");

lStore.set("token", "logined"); // Will save key as __protoken in localStorage

lStore.get("token"); // "logined"
```

with parser like vue-ls

```ts
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

const localVueLikeStore = new AzzStorage("__vuels", vueLSLikeParser);
```

## API

### AzzStorage

**Contructor**

```js
import AzzStorage from "azz-storage";

const lStore = new AzzStorage([keyPrefix, parser]);
```

| argument  | type              | description                                                                    | default   | required |
| :-------- | :---------------- | :----------------------------------------------------------------------------- | --------- | -------- |
| keyPrefix | string            | the key prefix for preventing conflict in your web app with other library      | undefined | true     |
| parser    | IAzzStorageParser | for sepecific use, liking auto JSON parse/stringify like vue-ls or do some log | undefined | false    |

**Instance APi**

```js
lStore.get([key, defaultVal]);
lStore.set([key, val]);
```

| method | argument   | type    | description                                                     | default   | required |
| :----- | ---------- | ------- | --------------------------------------------------------------- | --------- | -------- |
| get    | key        | string  | the storage key                                                 | undefined | true     |
| get    | defaultVal | unknown | when the target value not defined, you will get the default one | undefined | false    |
| set    | key        | string  | same as get method key                                          | undefined | true     |
| set    | val        | unknown | the val you want to save                                        | undefined | true     |
