class Graph{
    constructor(){
        this.list={}
    }
    
    insertVertex(v){
        if(!this.list[v]){
            this.list[v]=new Set()
        }
    }
    insertEdge(v1,v2){
        if(!this.list[v1]){
            this.insertVertex(v1)
        }
        if(!this.list[v2]){
            this.insertVertex(v2)
        }
        this.list[v1].add(v2)
        this.list[v2].add(v1)
    }
    print(){
        console.log(this.list)
    }
    bfs(start){
        let visited=new Set()
        let queue=[start]
        while(queue.length){
            let node=queue.shift()
            if(!visited.has(node)){
                console.log(node)
                visited.add(node)
                 
                    queue.push(...this.list[node])
                
            }
        }
    }
    dfs(start){
        let visited=new Set()
        let stack=[start]
        while(stack.length){
            let node=stack.pop()
            if(!visited.has(node)){
                console.log(node)
                visited.add(node)
                for(let neighber of this.list[node]){
                    if(!visited.has(neighber)){
                        stack.push(neighber)
                    }
                }
            }
        }
    }
    
    findCycleCount(){
        let visited=new Set()
        let cycleCount=0
        
        const dfs=(node,parent)=>{
            visited.add(node)
            console.log(node)
            for(let n of this.list[node]){
                if(!visited.has(n)){
                    if(dfs(n,node)){
                        cycleCount++
                    }
                }else if(n!==parent){
                    cycleCount++
                }
            }
            return false
        }
        for(let node in this.list){
            if(!visited.has(node)){
                dfs(node,null)
            }
        }
        return cycleCount/2
    }
    
    isCycle(){
        let visited=new Set()
        
        const dfs=(node,parent)=>{
            visited.add(node)
            for(let neighber of this.list[node]){
                if(!visited.has(neighber)){
                    if(dfs(neighber,node)){
                        return true
                    }
                }else if(parent!==neighber){
                    return true
                }
            }
            return true
        }
        for(let node in this.list){
            if(!visited.has(node)){
                if(dfs(node,null)){
                    return true
                }
            }
        }
        return false
    }
}

const graph=new Graph()
graph.insertEdge('a','d')
graph.insertEdge('b','a')
graph.insertEdge('c','b')
graph.insertEdge('d','c')
graph.insertEdge('e','d')
graph.print()
console.log('count cycles',graph.findCycleCount('a'))
console.log('count cycles',graph.isCycle())