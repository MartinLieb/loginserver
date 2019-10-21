const express = require('express')
const app = express()
const port = 80
const path = require('path');
const router = express.Router();

app.use(express.urlencoded())


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/login', function (req, res) {
    res.sendfile('login.html');
});



app.get('/memes', (req, res) => res.send('Her finder du memes'))

var memes = { "Humor": "Dårlig", "Type": "Shitpost" }

app.post('/login', (req, res) => {
    if (req.body.userName =="Martin" && req.body.password =="123") {
        res.send('Du er nu logget ind')
} else {
    res.send("skrid taber")
}
})

app.get('/memes/json', (req, res) => res.send(memes))



app.get('/memes', (req, res) => res.send('Her finder du memes'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
