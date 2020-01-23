"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var length = 1;
            var current = this.head;
            while (current.next) {
                length++;
                current = current.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('no index available');
        }
        var counter = 0;
        var current = this.head;
        while (current) {
            if (counter === index) {
                return current;
            }
            counter++;
            current = current.next;
        }
        throw new Error('no index available');
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('list empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    };
    LinkedList.prototype.print = function () {
        if (!this.head)
            return;
        var current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
