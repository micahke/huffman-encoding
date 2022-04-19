class Node {
    constructor(dist) {
        this.values = dist;
        this.leftChild = null;
        this.rightChild = null;
        this.parent = null;
    }

    getValues() {
        return this.values
    }

    contains(char) {
        // loop through values
        if (this.values.key.includes(char)) {
            return true;
        }
        return false;
    }

    addRightChild(node) {
        this.rightChild = node;
    }

    addLeftChild(node) {
        this.leftChild = node;
    }

    addParent(node) {
        this.parent = node;
    }

    right() {
        return this.rightChild;
    }

    left() {
        return this.leftChild;
    }

    parent() {
        return this.parent;
    }
}

module.exports = Node;