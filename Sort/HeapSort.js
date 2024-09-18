function minHeapify(arr, n, i) {
    let smallest = i; // Initialize smallest as root
    let left = 2 * i + 1; // Left child
    let right = 2 * i + 2; // Right child

    // Check if left child exists and is smaller than root
    if (left < n && arr[left] < arr[smallest]) {
        smallest = left;
    }

    // Check if right child exists and is smaller than smallest so far
    if (right < n && arr[right] < arr[smallest]) {
        smallest = right;
    }

    // Swap and continue min-heapifying if root is not smallest
    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        minHeapify(arr, n, smallest);
    }
}

function heapSort(arr) {
    let n = arr.length;

    // Build min-heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        minHeapify(arr, n, i);
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call min-heapify on the reduced heap
        minHeapify(arr, i, 0);
    }
}

// Example usage
const array = [12, 11, 13, 5, 6, 7];
heapSort(array);
console.log('Sorted array:', array);
