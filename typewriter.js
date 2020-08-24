const sentence = "hello there from lighthouse labs";
let timer = 0;
let delay = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += delay;
}
setTimeout(() => {
  process.stdout.write('\n');
}, delay * sentence.length);
