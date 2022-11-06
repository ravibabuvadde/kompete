const express = require('express')
const app = express()

app.set('view-engine','ejs')

app.use(express.static('static'))

app.get('/',(req,res)=>{
    fetch('https://kontests.net/api/v1/all')
    .then(res => res.json())
    .then(data => {
        res.render('index.ejs',{contests:data})
    })
    
    
})

app.listen(80)