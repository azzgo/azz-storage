import { IStorageParser, Storage } from "../storage";
import { test, expect } from "vitest";

test("Storage can get item last set value", () => {
  const storage = new Storage("test_", global.localStorage);

  expect(storage.get("foo")).toBeUndefined();
  storage.set("foo", "foz");
  expect(storage.get("foo")).toEqual("foz");
});

test("Storage can remove item", () => {
  const storage = new Storage("test_", global.localStorage);

  globalThis.localStorage.setItem("test_foo", "foz");

  expect(storage.get("foo")).not.toBeUndefined();
  storage.remove("foo");
  expect(storage.get("foo")).toBeUndefined();
});

test("Storage can use parser handle get & set", () => {
  const parser: IStorageParser = {
    getVal(val: string) {
      return `custom_${val}`;
    },
    setVal(val: string): string {
      return `${val}_subfix`;
    },
  };
  const storage = new Storage("test_", global.localStorage, parser);

  storage.set("foo", "baz");
  expect(storage.get("foo")).toEqual("custom_baz_subfix");
});
