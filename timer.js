let count = 0;

const waitAndPrint = (message, delay) => {
    console.log("Press 'q' to stop the function.");

    const interval = setInterval(() => {
        console.log(message + ' world'.repeat(count));
        count++;
    }, delay);

    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', (key) => {
        if (key.toString() === 'q') {
            clearInterval(interval);
            console.log('Stopped.');
            process.exit();
        }
    });
}

waitAndPrint('hello world', 3000);