import { generateId } from "../generateId";

describe("generateKey", () => {
  it("should generate a unique id for each object", () => {
    const obj1 = {};
    const obj2 = {};
    const key1 = generateId(obj1);
    const key2 = generateId(obj2);

    expect(key1).toBe("id-1");
    expect(key2).toBe("id-2");
  });

  it("should return the same id for the same object", () => {
    const obj = {};
    const key1 = generateId(obj);
    const key2 = generateId(obj);

    expect(key1).toBe(key2);
  });
});
