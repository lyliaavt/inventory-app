const tambah = require("./index");

test("penjumlahan sederhana", () => {
  expect(tambah(1, 2)).toBe(3);
});
