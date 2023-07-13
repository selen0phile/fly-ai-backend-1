const router = require('express').Router()
const { body, validationResult } = require('express-validator')
const {getBooks, getBook, createBook, searchByTitle, searchByKeyword, updateBook, deleteBook} = require('../controllers/book')

router.get('/book', async (req,res,next) => {
    console.log(req.query)
    try{
        const books = await getBooks(req.query)
        console.log(books)
        res.json(books)
    }
    catch(err){
        next(err)
    }
})
router.get('/book/:bookId', async (req,res,next) => {
    try{
        const book = await getBook(req.params)
        console.log(book)
        res.json(book)
    }
    catch(err){
        next(err)
    }
})

router.post('/book/', async (req, res, next) => {
    const result = validationResult(req)
    console.log(req.body)
    if(result.isEmpty() === false) {
        return res.send({errors: result.array()})
    }
    try {
        var payload = req.body 
        payload.author = 'a'
        if(req.user !== undefined) {
            payload.author = req.user.username
        }
        const book = await createBook(req.body)
        res.json(book)
    }
    catch (error) {
        next(error)
    }
})

router.put('/book/', async (req,res,next) => {
    const result = validationResult(req)
    if(result.isEmpty() === false) {
        return res.send({errors: result.array()})
    }
    try {
        const user = await updateBook(req.body)
        res.json(user);
    }
    catch(error) {
        next(error)
    }
})

router.delete('/book/:bookId', async(req, res, next)=> {
    const result = validationResult(req)
    if(result.isEmpty() === false) {
        return res.send({errors: result.array()})
    }
    try {
        const user = await deleteBook(req.params)
        res.json(user)
    }
    catch(error) {
        next(error)
    }
})

module.exports = router