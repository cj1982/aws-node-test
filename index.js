const express = require('express');
const app = express();


app.get('/' , (req, res) => {
    res.send("Here you go express"); 
    console.log('Here you go express');
});

app.listen(8000, () => {
    console.log('App initiated')
})