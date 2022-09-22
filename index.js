const express = require('express');
const app = express();


app.get('/' , (req, res) => {
    res.send("Here you go express"); 
    console.log('Here you go express');
});


const port = process.env.port || 3000;
app.listen(port, () => {
    console.log('App initiated')
})