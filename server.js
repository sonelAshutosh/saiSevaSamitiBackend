import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

const app = express()
dotenv.config()

const PORT = 5500
const URI = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.0rs40o3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

app.use(express.json())
app.use(
  cors({
    origin: '*',
  })
)
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  return res.json({
    message: 'Hello World',
  })
})

// ----------------------------------------------------------------
// Database Connection
// ----------------------------------------------------------------
mongoose.connect(URI).then(() => {
  app.listen(PORT, () => {
    console.log('Connected to Database')
    console.log(`App listening on PORT ${PORT}`)
  })
})
// ----------------------------------------------------------------
