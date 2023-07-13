const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getUsers = async () => {
    const users = await prisma.user.findMany({})
    return users
}

const getSingleUser = async (username) => {
    console.log('controllers/user.js getSingleUser', username)
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })
    return user
}


const createUser = async (payload) => {
    console.log('controllers/user createUser', payload)
    const user = await prisma.user.create({
        data: {
            username: payload.username, 
            password: payload.password,
        }
    })
    return user
}
const deleteUser = async (payload) => {
    console.log('controllers/user deleteUser', payload)
    const user = await prisma.user.delete({
        where: {
            username: payload.username
        }
    })
    return user
}
const updateUser = async (payload) => {
    console.log('controllers/user updateUser', payload)
    var newdata = {}
    if(!(payload.password == undefined || payload.password == '')) { 
        newdata.password = payload.password 
    }
    if(!(payload.bio == undefined || payload.bio == '')) { 
        newdata.bio = payload.bio 
    }
    if(!(payload.name == undefined || payload.name == '')) { 
        newdata.name = payload.name 
    }
    if(!(payload.dp == undefined || payload.dp == '')) { 
        newdata.dp = payload.dp 
    }
    const user = await prisma.user.update({
        where: {
            username: payload.username
        }, 
        data: newdata
    })
    return user
}


module.exports = {getUsers, getSingleUser, deleteUser, updateUser, createUser}