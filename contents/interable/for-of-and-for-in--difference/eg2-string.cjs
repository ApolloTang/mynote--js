Object.prototype.objCustom = function () {};
String.prototype.arrCustom = function () {};

const someString = 'abc';
someString.foo = "hello";   // can't add property to primitive
                            // see:  https://stackoverflow.com/questions/5201138/why-cant-i-add-properties-to-a-string-object-in-javascript

console.log('---- for-in')
for (const i in someString) {
  console.log(i);
}
// "0", "1", "2", "arrCustom", "objCustom"


console.log('---- for-in, own property')
for (const i in someString) {
  if (Object.hasOwn(someString, i)) {
    console.log(i);
  }
}
// "0" "1" "2"


console.log('---- for-of')
for (const i of someString) {
  console.log(i);
}
// "a" "b" "b"
