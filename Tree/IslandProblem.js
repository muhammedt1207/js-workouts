var numIslands = function(grid) {
    if (grid.length === 0) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    // Helper function to perform DFS and mark the visited land.
    const dfs = (i, j) => {
        // Check for boundaries and if the current cell is water or already visited.
        if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === '0') {
            return;
        }

        // Mark the current cell as visited (turn it into '0').
        grid[i][j] = '0';

        // Call DFS for all adjacent cells (up, down, left, right).
        dfs(i - 1, j); // Up
        dfs(i + 1, j); // Down
        dfs(i, j - 1); // Left
        dfs(i, j + 1); // Right
    };

    // Iterate through the grid.
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // If we find an unvisited land, initiate a DFS and increase the island count.
            if (grid[i][j] === '1') {
                islandCount++;
                dfs(i, j);
            }
        }
    }

    return islandCount;
};
