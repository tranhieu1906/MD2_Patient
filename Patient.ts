import { IPriorityQueue } from "./interface";

export class PriorityQueue<T> implements IPriorityQueue<T> {

    data: [number, T][] = []

    max(): T | null {
        if (this.isEmpty()) {
            return null;
        }
        let max = this.data[0]
        this.data.forEach((item, index) => {
            if (item > max) {
                max = item
            }
        })
        return max[1];
    }
    dequeue(): T | null {
        if (this.isEmpty()) {
            return null;
        }

        let min: T | null = this.max()
        let minIndex = -1
        this.data.forEach((item, index) => {
            if (item < min) {
                min = item
                minIndex = index
            }
        })

        this.data.splice(minIndex, 1);
        return min[1];
    }
    show(){
        this.data.forEach((item) => {
            console.log(item[0])
            console.log({name:item[0],code:item[1]})
        });
    }
    enqueue(name: T, code: number): void {
        this.data.push([code, name])
    }
    isEmpty(): boolean {
        return this.data.length === 0;
    }

    size(): number {
        return this.data.length;
    }
}


let priorityQueue = new PriorityQueue<string>()
priorityQueue.enqueue("Smith", 5);
priorityQueue.enqueue("Jones", 4);
priorityQueue.enqueue("Fehrenbach", 6);
priorityQueue.enqueue("Brown", 1);
priorityQueue.enqueue("Ingram", 1);
console.log(priorityQueue.max())

console.log(priorityQueue.show())

console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())


