import {AbstractQueue} from './AbstractQueue';
import { QueueError, QueueErrorType } from './Queue.interface';

export class Queue<T> extends AbstractQueue<T> {
    private elements: T[] = [];
    private capacity = Number.MAX_SAFE_INTEGER;

    length(): number {
        return this.elements.length;
    }
    setCapacity(capacity: number): void {
        this.capacity = capacity
    }
    getCapacity(): number {
        return this.capacity
    }
    enqueue(item: T): void {
        if(this.length() >= this.capacity){

            throw new QueueError(QueueErrorType.QueueMaxSizeReached,QueueErrorType.QueueMaxSizeReached);
        } else {
            this.elements.push(item);
        }
    }
    dequeue(): T | undefined {
        let queuepostion = this.elements[0]
        this.elements.splice(0,1);
        return queuepostion;
    }
    peek(): T | undefined {
        if(this.length() > 0){
            return this.elements[0];
        } else {
            return undefined
        }
    }
}