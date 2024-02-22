// class Main {
//     static sayHello(n:number) {
//         for (let i=0; i<n; i++) console.log("Hello World");
//     }
// }

// Main.sayHello(3);
// Main.sayHello(4);
// console.log("Das funktioniert!");
// console.log("super!");

import express, { Request, Response } from 'express';
import { Queue } from './Queue/queue';

const app = express();
const port = process.env.PORT || 3000;
// https://dev.to/wizdomtek/typescript-express-building-robust-apis-with-nodejs-1fln

var bodyParser = require('body-parser')

app.post('/', (req: Request, res: Response) => {
    const queue: Queue<any> = {
        elements: [],
        capacity: 0,
        length: function (): number {
            throw new Error('Function not implemented.');
        },
        setCapacity: function (capacity: number): void {
            throw new Error('Function not implemented.');
        },
        getCapacity: function (): number {
            throw new Error('Function not implemented.');
        },
        enqueue: function (item: any): void {
            throw new Error('Function not implemented.');
        },
        dequeue: function () {
            throw new Error('Function not implemented.');
        },
        peek: function () {
            throw new Error('Function not implemented.');
        }
    }
    queue.push(queue);
    res.status(201).json(queue);
});

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.get('/queue/enqueue', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.get('/queue/peek', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.get('/queue/dequeue', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/queue/peek`);
});