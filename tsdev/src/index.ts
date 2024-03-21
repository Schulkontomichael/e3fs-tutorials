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
import { register } from 'module';

const app = express();
const port = process.env.PORT || 3000;
// https://dev.to/wizdomtek/typescript-express-building-robust-apis-with-nodejs-1fln

var bodyParser = require('body-parser')

// https://expressjs.com/en/resources/middleware/body-parser.html
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs');

let queue: Queue<any> = new Queue<any>();

app.post('/queue/setcapacity', (req: Request, res: Response) => { 
    queue.setCapacity(req.body.value);
    res.send('Die Kapazität wurde auf ' + queue.getCapacity() + ' gesetzt.');
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.post('/queue/enqueue', (req: Request, res: Response) => {
    try {
        queue.enqueue(req.body.value);
        res.send(`Ein Element wurde hinzugefügt ${req.body.value}`);
        res.send(`<a class="nav-link" href="/">zurück</a>`);
      } catch (e) {
        res.send(JSON.stringify(e));
      }
    
});

app.get('/queue/peek', (req: Request, res: Response) => {
    queue.peek();
    // res.send('Das erste Element ist ' + queue.peek());

    var peek = queue.peek();

    res.render('pages/peek', {
        peek: peek,
    });
});

app.get('/queue/dequeue', (req: Request, res: Response) => {
    queue.dequeue();
    var peek = queue.peek();

    res.render('pages/peek', {
        peek: peek,
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// index page
app.get('/', function(req: Request, res: Response) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});