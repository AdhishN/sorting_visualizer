const generateArray = (arrayContainer) => {
    // Get the array size from the input field
    const arraySize = Number(document.getElementById('array-size-btn').value);
	// Generate an array of random numbers between 1 and 100
	const array = Array.from({ length: arraySize}, () => Math.floor(Math.random() * 150) + 1);
	// Clear the previous array
	arrayContainer.innerHTML = '';
	// Add array elements to the container
    array.forEach((value) => {
        const arrayElement = document.createElement('div');
        arrayElement.classList.add('array-element');
        arrayElement.style.height = `${value * 4}px`;
        arrayContainer.appendChild(arrayElement);
      });
};
