const quicksort = require('./QuickSort')
const mergesort = require('./MergeSort')
const minheap   = require('./MinHeap')
const binary    = require('./BinaryTree')
const fibonacci = require('./Fibonacci')
const trietree  = require('./TrieTree')

test('QuickSort should be [1,10,15,22]',()=>{
    expect(quicksort([10,1,22,15])).toEqual([1,10,15,22]);
})

test('MergeSort should be [1,10,15,22]',()=>{
    expect(mergesort([10,1,22,15])).toEqual([1,10,15,22]);
})

test('MinHeap should be []',()=>{
    minheap.add(7);
    minheap.add(3);
    minheap.add(5);
    minheap.add(9);
    minheap.add(2);
    expect(minheap.sort()).toEqual([2,3,5,7,9])
    expect(minheap.print()).toEqual([2,3,5,9,7]); 
    expect(minheap.remove()).toEqual(2);
    expect(minheap.remove()).toEqual(3);
    expect(minheap.remove()).toEqual(5);
    expect(minheap.remove()).toEqual(7);
    expect(minheap.remove()).toEqual(9);
    expect(minheap.print()).toEqual([]);  

})

test('Binary Max should be 75',()=>{
    binary.add(5);
    binary.add(4);
    binary.add(9);
    binary.add(18);
    binary.add(75);
    binary.add(12);   
    expect(binary.max()).toBe(75);
})

test('Binary Min should be 4',()=>{ 
    expect(binary.min()).toBe(4);
})

test('Binary should have 4',()=>{
    expect(binary.has(4)).toBeTruthy();
})

test('Binary should not have 56',()=>{   
    expect(binary.has(56)).toBeFalsy();
})

test('Binary should not have 4',()=>{ 
    binary.remove(4); 
    expect(binary.has(4)).toBeFalsy();
})

test('Fibonacci sequence of 8 should be 13',()=>{  
    expect(fibonacci(8)).toBe(13);
})

test('Trie tree should have "batman"',()=>{
    trietree.add('batman'); 
    trietree.add('bat');
    trietree.add('battery');   
    expect(trietree.has("batman")).toBeTruthy();
})

test('Trie tree should have "batender"',()=>{
    trietree.add('batender');
    expect(trietree.has("batender")).toBeTruthy();
})
