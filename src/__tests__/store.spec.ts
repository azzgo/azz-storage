import { SessionStorage, LocalStorage, IStorageParser } from "../index";
import  { test, expect } from 'vitest'

test("LocalStorage can normal invode Browser Local Storage", () => {
  const lStore = new LocalStorage("__pro");

  lStore.set("token", "logined");

  expect(localStorage.getItem("__protoken")).toBe("logined");
});

test("LocalStorage parser works right on get and set", () => {
  const fakeParser: IStorageParser = {
    get(val: string, defaultVal: unknown): unknown {
      return val ? `getValue: ${val}` : defaultVal;
    },
    set(val: unknown): string {
      return "setValue: " + val;
    },
  };

  const lStore = new LocalStorage("__fake", fakeParser);

  lStore.set("token", "logined");

  expect(localStorage.getItem("__faketoken")).toBe("setValue: logined");

  expect(lStore.get("token")).toBe("getValue: setValue: logined");
});

test("SessionStorage can normal invode Browser SessionStorage", () => {
  const sStore = new SessionStorage("__pro");

  sStore.set("token", "logined");

  expect(sessionStorage.getItem("__protoken")).toBe("logined");
});

test("SessionStorage parser works right on get and set", () => {
  const fakeParser: IStorageParser = {
    get(val: string, defaultVal: unknown): unknown {
      return val ? `getValue: ${val}` : defaultVal;
    },
    set(val: unknown): string {
      return "setValue: " + val;
    },
  };

  const sStore = new SessionStorage("__fake", fakeParser);

  sStore.set("token", "logined");

  expect(localStorage.getItem("__faketoken")).toBe("setValue: logined");

  expect(sStore.get("token")).toBe("getValue: setValue: logined");
});
