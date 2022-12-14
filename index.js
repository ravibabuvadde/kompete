const express = require('express')
const app = express()
const axios = require('axios')
const PORT = process.env.PORT || 3000;

app.set('view-engine','ejs')

app.use(express.static('static'))

app.get('/',async(req,res)=>{
    await axios.get('https://kontests.net/api/v1/all')
    .then(data => {
        res.render('index.ejs',{contests:data.data})
    })
    
    
})

app.listen(PORT);