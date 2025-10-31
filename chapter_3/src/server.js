import express from 'express'
import path , { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authroute.js'
import todoRoutes from './routes/todo.js'
import authMiddleware from './middleware/auth.js'

const app = express()
const PORT = process.env.port || 5000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
//middleware
app.use(express.json())
app.use(express.static(path.join(__dirname , '../public')))

app.get('/' ,(req,res) => {
    res.sendFile(path.join(__dirname , 'public' , 'index.html'))
})

app.use('/auth' , authRoutes)
app.use('/todos', authMiddleware, todoRoutes)
app.listen(PORT , () => {
    console.log(`server is up and listening to port ${PORT}`)}
)