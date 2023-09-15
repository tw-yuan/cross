/* init */
const data = require('./config.json');
const express = require('express')
const engine = require("ejs-locals");
const session = require('express-session')

const app = express();
const port = 3000;

app.set('views','./template');
app.set("view engine", "ejs");

app.use(session({
    secret: 'frqrgqrgtb4qg654t65g15',
    name: 'user',
    saveUninitialized: false,
    resave: true, 
  }))

/* function */
function check_login() {
    if (req.session.user == null) {
        res.send(`<meta http-equiv="refresh" content="0;url=./login" />`);
    }
}

/* route */
app.get("/", (req, res) => {
    req.session.user = "Yuan"
    res.send(`${data.discord_id}+${data.discord_secert}`);
    console.log(req.session.user)
});

app.get("/login", (req, res) => {
    req.session.user = "Yuan"
    res.send(`${req.session.user}`);
    console.log(req.session.user)
});
/* start */
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
