class Node{
    constructor(){
        this.data = null;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree{
    constructor(){
        this.root = new Node();
    }
    add(data){
        let node = this.root;
        if(node.data === null){
            node.data = data;
        } else {
            const traversal = function(node,data){
                if(data < node.data){
                    if(node.left){
                        traversal(node.left,data);
                    } else {
                        node.left = new Node();
                        node.left.data = data;
                    }
                } else {
                    if(node.right){
                        traversal(node.right, data);
                    } else {
                        node.right = new Node();
                        node.right.data = data;
                    }
                }
            }
            traversal(node, data);
        }
    }
    max(){
        let current = this.root;
        while(current.right){
            current = current.right;
        }
        return current.data; 
    }
    min(){
        let current = this.root;
        while(current.left){
            current = current.left;
        }
        return current.data; 
    }

    has(data){
        let result = false;
        let current = this.root;
        while(current){

            if(current.data === data){
                result = true;
                break;
            }

            if(data < current.data){
                current = current.left;
            } else {
                current = current.right;
            }

        }
        return result;
    }
    
    remove(data){

        const removeData = function(node,data){

            if(node === null){
                return null;
            }

            if(node.data === data){
                 
                if(node.left === null && node.right === null){
                    return null;
                }

                if(node.left !== null && node.right === null){
                    return node.left;
                }

                if(node.left === null && node.right !== null){
                    return node.right
                }
                if(node.left !== null && node.right !== null){
                    
                    let tempNode = node.right;
                    while(tempNode.left !== null){
                        tempNode = tempNode.left;
                    }
                    node.data  = tempNode.data;
                    node.right = removeData(node.right, tempNode.data);
                    return node;

                }
            } else {

                if(data < node.data){
                    node.left  = removeData(node.left,data);
                    return node;
                } else {
                    node.right = removeData(node.right,data);
                    return node;
                }

            }

            

        }
        this.root = removeData(this.root,data)
    }
    
}
module.exports = new BinaryTree(); 