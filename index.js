/// 1 ///
let cats = ["Milo", "Otis", "Garfield"];

/// 2 ///
const cat1 = "Ralph";
function destructivelyAppendCat(p_cat1) {
  cats.push(p_cat1);
}
destructivelyAppendCat(cat1);

/// 3 ///
const cat2 = "Bob";
function destructivelyPrependCat(p_cat2) {
  cats.unshift(p_cat2);
}
destructivelyPrependCat(cat2);

/// 4 ///
function destructivelyRemoveLastCat() {
  cats.pop();
}
destructivelyRemoveLastCat();

/// 5 ///
function destructivelyRemoveFirstCat() {
  cats.shift();
}
destructivelyRemoveFirstCat();

/// 4 ///
const cat3 = "Broom";
function appendCat(p_cat) {
  return cats.concat(p_cat);
}
const appendedArray = appendCat(cat3);
console.log(cats);

/// 5 ///
const cat4 = "Bob";
function prependCat(p_cat) {
  return [p_cat, ...cats];
}
prependedArray = prependCat(cat4);
console.log(prependedArray);

/// 6 ///
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}
shortArray = removeLastCat();
console.log(shortArray);

/// 7 ///
function removeFirstCat() {
  return cats.slice(1, cats.length);
}
shortArray2 = removeFirstCat();
console.log(shortArray2);
