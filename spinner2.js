process.stdout.write("hello from spinner1.js... \rheyyy\n");

const spinner = ["|", "/", "\r-", "\r\\", "\r/", "\r-", "\r\\", "|"];
console.log(spinner);

const timeout = function () {
  let delay = 100;
  for (let i of spinner) {
    setTimeout(() => {
      process.stdout.write(i);
    }, delay);
    delay += 200;
  }
};

timeout();

console.log("pair programmed with AVA");
/*
setTimeout(() => {
  process.stdout.write("\r|   ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r\\   ");
}, 700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r/   ");
}, 800);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r-   ");
}, 900);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r\\   ");
}, 1000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r|   ");
}, 1100);
*/
