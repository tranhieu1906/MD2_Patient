export interface IPriorityQueue<T> {
    enqueue(name: T, code: number): void
    dequeue(): T | null;
    max(): T | null
    size(): number
    isEmpty(): boolean
}