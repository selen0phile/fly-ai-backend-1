const router = require('express').Router()
const {getUsers, getSingleUser, deleteUser, createUser, updateUser} = require('../controllers/user')
const { body, validationResult } = require('express-validator')

router.get('/user', async (req, res, next) => {
    try {
      const data = await getUsers()
      res.json(data)
    }
    catch (error) {
        next(error)
    }
})

router.post('/user/', [
    body('username').notEmpty(),
    body('password').notEmpty()
], async (req, res, next) => {
    const result = validationResult(req)
    console.log(req.body)
    if(result.isEmpty() === false) {
        return res.send({errors: result.array()})
    }
    try {
        const temp = await getSingleUser(req.body.username)
        if(temp === null) {
            const user = await createUser(req.body)
            res.json(user)
        }
        else {
            next({message: 'username already exists!'})
        }
    }
    catch (error) {
        next(error)
    }
})

router.put('/user/', [
    body('username').notEmpty()
], async (req,res,next) => {
    const result = validationResult(req)
    if(result.isEmpty() === false) {
        return res.send({errors: result.array()})
    }

    try {
        const temp = await getSingleUser(req.body.username)
        if(temp == null) {
            next({message: 'username does not exist'})
        }
        else {
            console.log(req.body)
            const user = await updateUser(req.body)
            res.json(user);
        }
    }
    catch(error) {
        next(error)
    }
})

router.get('/user/:userName', async (req, res, next) => {
    try {
        const data = await getSingleUser(req.params.userName)
        res.json(data)
    }
    catch (error) {
        next(error)
    }
})

router.delete('/user/:username', async(req, res, next)=> {
    const result = validationResult(req)
    if(result.isEmpty() === false) {
        return res.send({errors: result.array()})
    }
    try {
        const user = await deleteUser(req.params)
        res.json(user)
    }
    catch(error) {
        next(error)
    }
})
module.exports = router;