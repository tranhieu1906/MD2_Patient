"use strict";
exports.__esModule = true;
exports.PriorityQueue = void 0;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.data = [];
    }
    PriorityQueue.prototype.max = function () {
        if (this.isEmpty()) {
            return null;
        }
        var max = this.data[0];
        this.data.forEach(function (item, index) {
            if (item > max) {
                max = item;
            }
        });
        return max[1];
    };
    PriorityQueue.prototype.show = function () {
        this.data.forEach(function (item) {
            return { name: item[0], code: item[1] };
        });
    };
    PriorityQueue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return null;
        }
        var min = this.max();
        var minIndex = -1;
        this.data.forEach(function (item, index) {
            if (item < min) {
                min = item;
                minIndex = index;
            }
        });
        this.data.splice(minIndex, 1);
        return min[1];
    };
    PriorityQueue.prototype.enqueue = function (name, code) {
        this.data.push([code, name]);
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    PriorityQueue.prototype.size = function () {
        return this.data.length;
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Smith", 5);
priorityQueue.enqueue("Jones", 4);
priorityQueue.enqueue("Fehrenbach", 6);
priorityQueue.enqueue("Brown", 1);
priorityQueue.enqueue("Ingram", 1);
console.log(priorityQueue.max());
console.log(priorityQueue.show());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
