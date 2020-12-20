const express = require("express");
const path = require('path');
const logger = require('./middleware/logger')


const app = express();

app.use(logger);

app.use(express.static(path.join(__dirname , 'public')));

app.get ('/' , (req, res) =>{
    res.sendFile(path.join(__dirname, 'public' , 'index.html'))
})

app.get ('/Services' , (req, res) =>{
    res.sendFile(path.join(__dirname, 'public' , 'our services.html'))
})

app.get ('/Contact' , (req, res) =>{
    res.sendFile(path.join(__dirname, 'public' , 'contact.html'))
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
