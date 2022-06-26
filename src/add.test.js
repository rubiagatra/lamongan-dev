import test from "node:test";
import assert from "assert";
import { add } from "./add.js";

test("additon test", () => {
  assert.equal(add(3, 5), 8);
});
