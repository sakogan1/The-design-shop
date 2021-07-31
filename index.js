const express = require("express")
const fs = require("fs")
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3001
const Item = require('./models/galleryItem')

const data = require('./Lev3_1_Project_mongoose_the-design-shop - Sheet1 Kopie.json')



app.use(express.static(`public`))
app.use(express.static(`img`))
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


mongoose.connect('mongodb+srv://Samir:bBazvYWL17O5INf2@supercluster.kar4h.mongodb.net/shop?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(result => {
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
})
.catch((err)=>{console.log(err)})

app.get('/', (req, res) => {
    Item.find()
        .then(result => res.render('index', { data: result }))
        .catch(err => console.log(err))
})

app.get('/product/:id', (req, res) => {
    console.log(req.params.id)
    Item.findById(req.params.id)
        .then(result => res.render('product', { items: result }))
        .catch(err => console.log(err))
})

app.get('/product/:id/delete', (req, res) => {
    console.log(req.params.id)
    Item.findByIdAndDelete(req.params.id)
        .then(result => res.redirect('/'))
        .catch(err => console.log(err))
})

app.get('/product/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(result => res.render('product', { items: result }))
        .catch(err => console.log(err))
})
app.post('/product/:id', (req, res) => {
    // const updatedContact = {
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     email: req.body.email,
    //     age: req.body.age
    // }
    // Contact.findByIdAndUpdate(req.params.id, updatedContact)
    Item.findByIdAndUpdate(req.params.id, req.body)
        .then(result => {
            res.redirect('/')
        })
        .catch(err => console.log(err))
})


// app.get('/', (req, res) => {
//     res.end()
// })

// app.get('/add-new', (req, res) => {
//     const item = new Item({
//     })
//     item.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => console.log(err))
// })

// app.get('/gallery', (req, res) => {
//     item.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => console.log(err))
// })
// app.get('/single', (req, res) => {
//     item.findById('')
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => console.log(err))
// })

