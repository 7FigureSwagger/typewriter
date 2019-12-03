const sentence = "hello there from lighthouse labs";
let timer = 100;
let counter = 0;

for (const char of sentence) {
	setTimeout(() => {
		process.stdout.write(char);
		counter += 1;
	}, (timer += 100));
}

setTimeout(() => {
	if (counter >= sentence.length) {
		process.stdout.write("\n");
	}
}, (timer += 100));
