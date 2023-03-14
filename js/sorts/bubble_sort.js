const bubbleSort = async (arrayElements) => {

  const n = arrayElements.length;

  // Start the timer
  const startTime = Date.now();
  // Outer loop to iterate through all elements
  for (let i = 0; i < n - 1 && isSorting; i++) {
    // Inner loop to compare adjacent elements
    for (let j = 0; j < n - i - 1 && isSorting; j++) {
      // Highlight the two elements being compared
      const currentElement = arrayElements[j];
      const nextElement = arrayElements[j + 1];
      currentElement.classList.add('active');
      nextElement.classList.add('active');

      // Wait for a short period to show the comparison
      await new Promise((resolve) => setTimeout(resolve, 5));

      // Get the heights of the two elements being compared
      const currentValue = parseInt(currentElement.style.height);
      const nextValue = parseInt(nextElement.style.height);

      // Swap the elements if they are in the wrong order
      if (currentValue > nextValue) {
        currentElement.style.height = `${nextValue}px`;
        nextElement.style.height = `${currentValue}px`;
      }

      // Remove the highlighting from the two elements
      currentElement.classList.remove('active');
      nextElement.classList.remove('active');
    }
    arrayElements[n - i - 1].classList.add('sorted'); // Add sorted class to the last element sorted in the iteration
  }
  if (isSorting){
    arrayElements[0].classList.add('sorted'); // Add sorted class to the first element in the sorted array
  }
  // End the timer
  const endTime = Date.now();

  // Calculate the time taken to sort the array
  const totalTime = endTime - startTime;

  // Display the time taken to sort the array
  const timerElement = document.createElement('div');
  timerElement.textContent = `Time taken: ${totalTime} milliseconds`;
  document.body.appendChild(timerElement);
};

/* Note: isSorting is a global variable that is set to false when the sorting stops.
This is done so that the sorting can be stopped by the user when needed. */