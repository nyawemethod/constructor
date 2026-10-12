const graph = {
    A: ["B", "C"],
    B: ["D"],
    C: ["E"],
    D: [],
    E: []
};

function dfs(node, visited = new Set()) {
    if (visited.has(node)) return;
    
    console.log(node);
    visited.add(node);
    
    for (let neighbor of graph[node]) {
        dfs(neighbor, visited);
    }
}

dfs("A");
