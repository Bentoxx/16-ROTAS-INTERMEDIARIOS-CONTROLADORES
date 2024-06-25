import 'dotenv/config'
import express from 'express'
import { buscarUsuario, buscarUsuarioQuery, itemProdutos } from './controladores'
import { intermediarioGeral, meuPrimeiroIntermediario } from './intermediarios'

const servidor = express()
servidor.use(intermediarioGeral)
//ROTEADOR
servidor.get('/produtos/:item', meuPrimeiroIntermediario, itemProdutos)
servidor.get('/usuarios/:email', buscarUsuario)
servidor.get('/usuarios', buscarUsuarioQuery)

servidor.listen(process.env.PORT)//DECLARAÇÃO DE PORTA QUE ESTÁ SENDO ESCUTADA PELO SERVIDOR