// bubble-sort.js

const bubbleSort = async (arrayElements) => {
    const n = arrayElements.length;
  
    // Bubble sort algorithm
    for (let i = 0; i < n - 1 && isSorting; i++) {
      for (let j = 0; j < n - i - 1 && isSorting; j++) {
        const currentElement = arrayElements[j];
        const nextElement = arrayElements[j + 1];
        currentElement.classList.add('active');
        nextElement.classList.add('active');
        await new Promise((resolve) => setTimeout(resolve, 50));
        const currentValue = parseInt(currentElement.style.height);
        const nextValue = parseInt(nextElement.style.height);
        if (currentValue > nextValue) {
          currentElement.style.height = `${nextValue}px`;
          nextElement.style.height = `${currentValue}px`;
        }
        currentElement.classList.remove('active');
        nextElement.classList.remove('active');
      }
    }
  };
  