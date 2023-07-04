//     Object.prototype.objCustom = function () {};
//     Array.prototype.arrCustom = function () {};
// The above does not work in ipynb

Object.defineProperty(Array.prototype, "arrCustom", {
  value: function () {},
  enumerable: true,
});
Object.defineProperty(Object.prototype, "objCustom", { value: function () {} });

const iterable = [3, 5, 7];
Object.defineProperty(iterable, "foo", { value: "foo", enumerable: true });

for (const i in iterable) {
  console.log(i);
}
