import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { connectDB } from './config/db.js'
import authRoutes from './routes/auth.routes.js'
import applicantRoutes from './routes/applicants.routes.js'

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))

app.get('/api/health', (req, res) => res.json({ ok: true }))
app.use('/api/auth', authRoutes)
app.use('/api/applicants', applicantRoutes)

const port = process.env.PORT || 5000
connectDB(process.env.MONGO_URI).then(() => {
  app.listen(port, () => console.log(`✅ API running at http://localhost:${port}`))
})
