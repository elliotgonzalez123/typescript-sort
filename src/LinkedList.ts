class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  get length(): number {
    if (!this.head) return 0;
    let length = 1;
    let current = this.head;
    while (current.next) {
      length++;
      current = current.next;
    }
    return length;
  }
  at(index: number): Node {
    if (!this.head) {
      throw new Error('no index available');
    }
    let counter = 0;
    let current = this.head;
    while (current) {
      if (counter === index) {
        return current;
      }
      counter++;
      current = current.next;
    }
    throw new Error('no index available');
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('list empty');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }
  print(): void {
    if (!this.head) return;

    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
