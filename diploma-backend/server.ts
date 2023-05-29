import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
import UserRouter from './routes/user/route'
import mongoose from 'mongoose'
import UserModel from "./db/models/user.model";
import AuthRouter from './routes/auth/route'
import {auth} from "./middleware/jwt";

app.use(bodyParser.json())
app.use(cors())

app.use('/auth', AuthRouter)
app.use('/user', auth, UserRouter)
const dev = false

app.listen(4000, 'localhost', async () => {
    console.log('Backend connected')
    mongoose.connect('mongodb://localhost:27017/diploma').then(r => {
        console.log('Database connected')
    })

    if (dev) {
        const res = await new UserModel({email: 'test@test.com', password: '123456', role: 'admin'})
        console.log(res)
        await res.save()
    }
})
