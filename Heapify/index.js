class Heap {
    constructor(nums) {
        this.nums = nums;
        this.size = nums.length;
        for (let index = Math.floor(this.size / 2); index >= 0; index--) {
            this.heapify(index);
        }
    };

    push(value) {
        this.nums.unshift(value);
        this.size++;
        this.heapify(0);
    };

    heapify(index) {
        const left = this.leftChild(index);
        const right = this.rightChild(index);
        let largest = -Infinity;
        if (left <= this.nums.length - 1 && this.nums[left] > this.nums[index]) largest = left;
        else largest = index;
        if (right <= this.nums.length - 1 && this.nums[right] > this.nums[largest]) largest = right;
        if (largest != index) {
            let temp = this.nums[index];
            this.nums[index] = this.nums[largest];
            this.nums[largest] = temp;
            this.heapify(largest);
        }

    };

    pop() {
        if (this.size < 1) alert('error');
        const max = this.nums[0];
        this.nums[0] = this.nums[this.size - 1];
        this.nums.pop();
        this.size--;
        this.heapify(0);
        return max;
    };

    getMax() {
        return this.nums[0];
    };

    print() {
        const indent = 1;
        const walk = (index, indent) => {
            if (index >= this.nums.length) return;
            console.log(Array(indent).join('--'), this.nums[index]);
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

// const heap = new Heap([1, 6, 3, 9, 4, 8, 5]);
// console.log(heap); //-> returns Heap { nums: [9, 6, 8, 1, 4, 3, 5 ], size: 7 }
// heap.getMax(); // -> returns 9
// heap.pop(); // -> returns 9 
// console.log(heap); //-> returns Heap { nums: [8, 6, 5, 1, 4, 3 ], size: 6 }
// heap.push(10); // -> returns nothing (undefined)
// console.log(heap); //-> returns Heap { nums: [10, 8, 6, 5, 1, 4, 3 ], size: 7 }
// heap.push(7); 
// console.log(heap); //-> returns Heap { nums: [10, 8, 6, 7, 3, 5, 1, 4 ], size: 8 }

