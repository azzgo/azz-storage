import AzzStorage, { IAzzStorageParser } from "../index";

test("AzzStorage can normal invode Browser Local Storage", () => {
  const lStore = new AzzStorage("__pro");

  lStore.set("token", "logined");

  expect(localStorage.getItem("__protoken")).toBe("logined");
});


test("AzzStorage parser works right on get and set", () => {

  const fakeParser: IAzzStorageParser = {
    get(val: string, defaultVal: unknown): unknown {
      return val ? `getValue: ${val}` : defaultVal
    },
    set(val: unknown): string {
      return "setValue: " + val
    }
  }

  const lStore = new AzzStorage("__fake", fakeParser);

  lStore.set("token", "logined");

  expect(localStorage.getItem("__faketoken")).toBe("setValue: logined")

  expect(lStore.get("token")).toBe("getValue: setValue: logined")

})
