class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class BT {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value)
        if (this.root == null) {
            this.root = node
        } else {
            this.insertFunction(this.root, node)
        }
    }
 
    insertFunction(root, node) {
        if(root.value>node.value){
            if(root.left==null){
                root.left=node
            }else{
                this.insertFunction(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                this.insertFunction(root.right,node)
            }
        }
    }

    print() {
        return this.inOrder(this.root)
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    countLeaf() {
        const counter = (root) => {
            if (root == null) {
                return 0
            }
            if (root.left == null && root.right == null) {
                return 1
            }
            return counter(root.left) + counter(root.right)
        }
        return counter(this.root)
    }

    getLeafs() {
        let leafs = []
        const findLeafs = (root) => {
            if (root == null) {
                return 
            }
            if (root.left == null && root.right == null) {
                return leafs.push(root.value)
            } else {
                findLeafs(root.left)
                findLeafs(root.right)
            }
        }
        findLeafs(this.root)
        return leafs
    }

    findKthElement(k) {
        let elements = []
        const traverse = (root) => {
            if (root) {
                traverse(root.left)
                elements.push(root.value)
                traverse(root.right)
            }
        }
        traverse(this.root)
        return k > 0 && k <= elements.length ? elements[k - 1] : null
    }
    findDepth() {
        const depthHelper = (node) => {
            if (node == null) {
                return 0
            }
            const leftDepth = depthHelper(node.left)
            const rightDepth = depthHelper(node.right)
            return Math.max(leftDepth, rightDepth) + 1
        }
        return depthHelper(this.root)
    }

    isSymmatrix(){
        if(this.root==null){
            return true
        }
    
            return this.checkMirror(this.root.left,this.root.right)
        
    }
    checkMirror(left,right){
        if(!left&&!right){
            return true
        }
        if(!left || !right){
            return false
        }

        return(left.value==right.value && this.checkMirror(left.left,right.right) && this.checkMirror(left.right,right.left))
    }

    isBalanced(root=this.root){
        if(root){
            return this.checkHight(root)!==-1;
        }
    }

    checkHight(root){
        if(!root){
            return 0
        }
        let leftDepth=this.checkHight(root.left)
        if(leftDepth===-1) return -1

        let rightDepth=this.checkHight(root.right)
        if(rightDepth==-1) return -1

        if(Math.abs(leftDepth-rightDepth)>1){
            return -1
        }
        return Math.max(leftDepth,rightDepth)+1
    }
    findAncestor(root=this.root,target){
        if(!root){
            return false
        }

        if(root.value==target){
            return true
        }
        if(this.findAncestor(root.left,target)||this.findAncestor(root.right,target)){
            console.log('ancestor of',target,'is',root.value)
            return true
        }

        return false
    }
    findLowestAncestor(root,q,p){
        if(!root){
            return null
        }

        if(q<root.value && p<root.value){
            return this.findLowestAncestor(root.left,q,p)
        }
        if(q>root.value && p > root.value){
            return this.findLowestAncestor(root.right,q,p)
        }
        return root.value
    }
}

// Test the Binary Tree
const tree = new BT()
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(20);
tree.insert(30);
tree.insert(31);
tree.insert(32);



tree.print()
console.log('count of leaf', tree.countLeaf())
console.log('leaf', tree.getLeafs())
console.log('depth of bst',tree.findDepth());

console.log('3rd element :', tree.findKthElement(3))
console.log('this bt is symmatrix :',tree.isSymmatrix());
console.log('this bt is balanced :',tree.isBalanced())
tree.findAncestor(tree.root, 20);
console.log('---',tree.findLowestAncestor(tree.root,2,15));

