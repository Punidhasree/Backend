import express from 'express'

import prisma from '../prismaClient.js'
const router = express.Router()
// to get all todos
router.get('/' , async (req,res) => {
    const todos = await prisma.todo.findMany({
        where: {
            userId: req.userId
        }
    })

    
    res.json(todos)
})
// create todos
router.post('/', async (req,res) => {
    const { task } = req.body
    const todo = await prisma.todo.create({
        data: {
            task,
            userId: req.userId
        }
    })

    res.json(todo);

})
//update todos
router.put('/:id' , async (req,res) => {
    const { completed } = req.body
    const { id } = req.params
    const { page } = req.query

    const updatedTodo = await prisma.todo.update({
        where: {
            id: parseInt(id),
            userId: req.userId
        },
        data: {
            completed: !!completed
        }
    })

    res.json({ message: "Todo completed" })
})
//delete todos
router.delete('/:id', async  (req,res) => {
    const { id } = req.params
    const userId = req.userId
    await prisma.todo.delete({
        where: {
            id: parseInt(id),
            userId
        }
    })
    
    res.send({ message: "Todo deleted" })
})


export default router