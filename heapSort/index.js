class Heap {
    constructor(nums) {
    };

    push(value) {
    };

    heapify(index) {
    };

    pop() {
    };

    getMax() {
    };

    print() {
        const indent = 1;
        const walk = (index, indent) => {
            if (index >= this.heap.length) return;
            console.log(Array(indent).join('--'), this.heap[index]);
            walk(this.leftChild(index), indent + 1);
            walk(this.rightChild(index), indent + 1);
        };
        walk(0, 1);
    };

    leftChild(index) {
        return (index + 1) * 2 - 1;
    };

    rightChild(index) {
        return this.leftChild(index) + 1;
    };

    parent(index) {
        return Math.floor(index / 2);
    };
}


// const heap = new Heap([1, 2, 3, 4, 5, 6, 7]);
const heap = new Heap([7, 6, 5, 4, 3, 2, 1]);

heap.getMax(); // -> returns 7
heap.pop(); // -> returns 7 but also removes 7 from the heap
heap.getMax(); // -> returns 6 because 7 is gone
heap.push(8); // -> returns nothing
heap.getMax(); // -> returns 8