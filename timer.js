waitAndPrint = (message, delay) => {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

// Example usage:
waitAndPrint("Hello, world!", 2000); 
