class Node{
    constructor(){
        this.keys = new Map();
        this.end  = false;
    }
    setEnd(){
        this.end = true;
    }
    isEnd(){
        return this.end;
    }
}

class TrieTree{
    constructor(){
        this.root = new Node();
    }
    
    add(input, node = this.root){

        if(input.length === 0){
            node.setEnd();
            return;
        } else if(!node.keys.has(input[0])){
            node.keys.set( input[0], new Node() );
            return this.add(input.substr(1), node.keys.get(input[0]));
        } else {
            return this.add(input.substr(1), node.keys.get(input[0]));
        }

    }
    
    has(string){
        let node = this.root;
        while(string.length > 1){
            if(!node.keys.has(string[0])){
                return false;
            } else {
                node = node.keys.get(string[0]);
                string = string.substr(1);
            }
        }
        return node.keys.has(string) && node.keys.get(string).isEnd() 
    }

    dictionary(){

    }
}

module.exports = new TrieTree();