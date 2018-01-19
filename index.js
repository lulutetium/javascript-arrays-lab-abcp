const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  return [...kittens, "Arnold"];
}

function prependKitten(name){
  return ["Arnold", ...kittens];
}

removeLastKitten(){
  array.slice(0, array.length-1);
}