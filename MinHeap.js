class MinHeap{
    constructor(){
        this.heap = [null];
    }

    add(data){
        const heap = this.heap;
        if(heap.length < 2){
            heap.push(data);
        } else {
            heap.push(data);
            let entry = heap.length-1
            let parent = ~~(entry/2);
            while(heap[entry] < heap[parent] && heap[parent] !== null){
                [heap[entry], heap[parent]] = [heap[parent], heap[entry]];
                entry = parent;
                parent = ~~(entry/2);
            }
            
        }
    }
    
    remove(minheap = this.heap){
        
        const heap  = minheap;
        const min   = heap[1];
        
        if(heap.length === 2){
            heap.pop();
            return min;
        }
       
        heap[1] = heap.pop();

        if(heap.length === 3){
            [ heap[1], heap[2] ] = [ heap[2], heap[1] ]
            return min;
        }

        let parent  = 1;
        let left = parent * 2;
        let right = parent * 2 + 1;
        
        while(heap[parent] > heap[left] || heap[parent] > heap[right]){
            
            if(heap[left] < heap[right]){
                [ heap[left], heap[parent] ] = [ heap[parent], heap[left] ]
                parent = left;
            } else {
                [ heap[right], heap[parent] ] = [ heap[parent], heap[right] ]
                parent = right;
            }

            left  = parent * 2;
            right = parent * 2 + 1;

        }
        return min;         
    
    }
    sort(){
        let minheap = [...this.heap];
        let result  = [];
        while(minheap.length > 1){
            result.push(this.remove(minheap));
        }        
        return result;
    }
    print(){
        return this.heap.slice(1);
    }

}
module.exports = new MinHeap();