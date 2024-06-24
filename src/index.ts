import 'dotenv/config'
import express from 'express'

const servidor = express()

servidor.get('/', (req, res)=>{
    console.log(req)
    return res.send('Servidor está ok!')
})
servidor.get('/usuarios', (req, res)=>{
    console.log(req)
    return res.send('Servidor está ok!')
})
servidor.listen(process.env.PORT)