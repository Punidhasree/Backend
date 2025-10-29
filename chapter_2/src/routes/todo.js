import express from 'express'
import db from '../db.js'
const router = express.Router()
// to get all todos
router.get('/' , (req,res) => {})
// create todos
router.post('/', (req,res) => {})
//update todos
router.put('/:id' ,(req,res) => {})
//delete todos
router.delete('/:id', (req,res) => {})


export default router