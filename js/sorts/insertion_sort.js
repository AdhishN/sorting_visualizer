const insertionSort = async (arrayElements) => {

    const n = arrayElements.length;
  
    // Outer loop to iterate through all elements
    for (let i = 1; i < n && isSorting; i++) {
      // Get the value of the current element
      const currentValue = parseInt(arrayElements[i].style.height);
      
      // Set the initial position of the element to i-1
      let j = i - 1;
  
      // Inner loop to compare the current element with its predecessors
      while (j >= 0 && parseInt(arrayElements[j].style.height) > currentValue && isSorting) {
        // Shift the larger element to the right
        arrayElements[j + 1].style.height = arrayElements[j].style.height;
        j--;
        
        // Highlight the element being shifted
        arrayElements[j + 1].classList.add('active');
        
        // Wait for a short period to show the shift
        await new Promise((resolve) => setTimeout(resolve, 5));
  
        // Remove the highlighting from the shifted element
        arrayElements[j + 1].classList.remove('active');
      }
  
      // Insert the current element into its correct position
      arrayElements[j + 1].style.height = `${currentValue}px`;
  
      // Add sorted class to the sorted element
      arrayElements[i].classList.add('sorted');
    }
    arrayElements[0].classList.add('sorted'); // Mark the first element as sorted
  };
  