// // class Node {
// //     constructor(value) {
// //         this.value = value;
// //         this.left = null;
// //         this.right = null;
// //     }
// // }

// // class BST {
// //     constructor() {
// //         this.root = null;
// //     }

// //     isEmpty() {
// //         return this.root === null;
// //     }

// //     insert(value) {
// //         const node = new Node(value);
// //         if (this.isEmpty()) {
// //             this.root = node;
// //         } else {
// //             this.bineryInsert(this.root, node);
// //         }
// //     }

// //     bineryInsert(root, node) {
// //         if (node.value < root.value) {
// //             if (root.left == null) {
// //                 root.left = node;
// //             } else {
// //                 this.bineryInsert(root.left, node);
// //             }
// //         } else {
// //             if (root.right == null) {
// //                 root.right = node;
// //             } else {
// //                 this.bineryInsert(root.right, node);
// //             }
// //         }
// //     }

// //     inOrder(root) {
// //         if (root) {
// //             this.inOrder(root.left);
// //             console.log(root.value);
// //             this.inOrder(root.right);
// //         }
// //     }

// //     search(key) {
// //         return this.searchFunction(this.root, key);
// //     }

// //     searchFunction(root, key) {
// //         if (root === null || key == root.value) {
// //             return root !== null;
// //         } else if (key < root.value) {
// //             return this.searchFunction(root.left, key);
// //         } else {
// //             return this.searchFunction(root.right, key);
// //         }
// //     }

// //     minOrder(root) {
// //         if (!root.left) {
// //             return root.value;
// //         } else {
// //             return this.minOrder(root.left);
// //         }
// //     }

// //     maxOrder(root) {
// //         if (!root.right) {
// //             return root.value;
// //         } else {
// //             return this.maxOrder(root.right);
// //         }
// //     }

// //     delete(value) {
// //         this.root = this.deleteFunction(this.root, value);
// //     }

// //     deleteFunction(root, value) {
// //         if (root == null) {
// //             return null;
// //         }

// //         if (value < root.value) {
// //             root.left = this.deleteFunction(root.left, value);
// //         } else if (value > root.value) {
// //             root.right = this.deleteFunction(root.right, value);
// //         } else {

// //             if (!root.left && !root.right) {
// //                 return null;
// //             }

// //             if (!root.left) {
// //                 return root.right;
// //             } else if (!root.right) {
// //                 return root.left;
// //             }

// //             root.value = this.minOrder(root.right);

// //             root.right = this.deleteFunction(root.right, root.value);
// //         }
// //         return root;
// //     }

// //     print() {
// //         this.inOrder(this.root);
// //     }
// // }


// // const tree = new BST();
// // tree.insert(5);
// // tree.insert(4);
// // tree.insert(39);
// // tree.insert(10);
// // tree.insert(1);
// // tree.print();
// // console.log('---');
// // tree.delete(10);
// // console.log(tree.search(13));
// // tree.print();



// class Node{
//     constructor(value){
//         this.value=value
//         this.right=null
//         this.left=null
//     }
// }

// class BST{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root==null
//     }
//     insert(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.root=node
//         }
//         else{
//            return this.insertFunction(this.root,node)
//         }
//     }

//     insertFunction(root,node){
//         if(node.value<root.value){
//             if(root.left==null){
//                 root.left=node
//             }else{
//                 return this.insertFunction(root.left,node)
//             }
//         }else{
//             if(root.right==null){
//                 root.right=node
//             }else{
//                 return this.insertFunction(root.right,node)
//             }
//         }
//     }

//     findClosestValue(target) {
//         return this.findClosest(this.root, target, this.root.value);
//     }

//     findClosest(root, target, closest) {
//         if (root === null) {
//             return closest;
//         }

//         if (Math.abs(target - closest) > Math.abs(target - root.value)) {
//             closest = root.value;
//         }

//         if (target < root.value) {
//             return this.findClosest(root.left, target, closest);
//         } else if (target > root.value) {
//             return this.findClosest(root.right, target, closest);
//         } else {
//             return closest;
//         }
//     }

//     findDuplicates() {
//         const seen = new Set();
//         const duplicates = [];

//         const inOrder = (root) => {
//             if (root) {
//                 inOrder(root.left);
                
//                 if (seen.has(root.value)) {
//                     duplicates.push(root.value);
//                 } else {
//                     seen.add(root.value);
//                 }
                
//                 inOrder(root.right);
//             }
//         };

//         inOrder(this.root);
//         return duplicates;
//     }

//     findKthSmallest(k) {
//         let count = 0;
//         let result = null;

//         const inOrder = (node) => {
//             if (node === null || result !== null) {
//                 return;
//             }

//             inOrder(node.left);

//             count++;
//             if (count === k) {
//                 result = node.value;
//                 return;
//             }
//             inOrder(node.right);
//         };

//         inOrder(this.root);
//         return result;
//     }


//     print(){
//         this.inOrder(this.root)
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }
// }

// const tree=new BST()

// tree.insert(10)
// tree.insert(12)
// tree.insert(2)
// tree.insert(5)
// tree.insert(16)
// tree.insert(1)
// tree.insert(12)
// tree.print()
// console.log(tree.findDuplicates())
// console.log(tree.findClosestValue())
// console.log('k th value :',tree.findKthSmallest(4))

class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root==null
    }

    insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertFunction(this.root,node)
        }
    }
    insertFunction(root,node){
        if(root.value>node.value){
            if(root.left==null){
                root.left=node
            }else{
                return this.insertFunction(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                return this.insertFunction(root.right,node)
            }
        }
    }

    print(){
        return this.inOrder(this.root)
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    minOrder(root){
        if(root.left==null){
            return root.value
        }else{
            return this.minOrder(root.left)
        }
    }
    delete(value){
        this.root=this.deleteFunction(this.root,value)
    }

    deleteFunction(root,value){
        if(root==null){
            return root
        }

        if(value<root.value){
            root.left= this.deleteFunction(root.left,value)
        }else if(root.value<value){
           root.right= this.deleteFunction(root.right,value)
        }else{
            if(!root.left&&!root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }

            root.value=this.minOrder(root.right)
            root.right=this.deleteFunction(root.right,root.value)
        }
        return root
    }
    findDepth(){
        return this.findDepthFunction(this.root)
    }
    findDepthFunction(root){
        if(root==null){
            return 0
        }
        

        let left=this.findDepthFunction(root.left)
        let right=this.findDepthFunction(root.right)

        return Math.max(left,right)+1
    }
}

const tree=new BST()
tree.insert(20)
tree.insert(59)
tree.insert(1)
tree.insert(10)
tree.insert(-123)
tree.print()
console.log(tree.findDepth())
console.log('---------');

tree.delete(1)
tree.print()
