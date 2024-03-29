# Difference between `for..of` and `for..in`

## TL;DR

|                          | for-of       | for-in     |
| ------------------------ | ------------ | ---------- |
| walks up prototype chain | no           | yes        |
| includes own property    | no           | yes        |
| iterates contents        | yes (values) | yes (keys) |

Note that `for..of` and `for...in` will not list autoboxing properties.



## Reference: 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#difference_between_for...of_and_for...in


# Example: complex object:

eg1-array.cjs

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

const iterable = [3, 5, 7];
iterable.foo = "hello";

console.log('---- for-in')
for (const i in iterable) {
  console.log(i);
}
// "0", "1", "2", "foo", "arrCustom", "objCustom"

console.log('---- for-in, own property')
for (const i in iterable) {
  if (Object.hasOwn(iterable, i)) {
    console.log(i);
  }
}
// "0" "1" "2" "foo"

console.log('---- for-of')
for (const i of iterable) {
  console.log(i);
}
// 3 5 7
```

ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#difference_between_for...of_and_for...in


# Example: Primitive value:

eg2-string.cjs

```js
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
// "a" "b" "c"
```

