import {Request, Response, NextFunction} from 'express'
export const meuPrimeiroIntermediario = (req: Request, res: Response, next: NextFunction) => { 
    console.log('passei pelo intermediário');
    if(req.params.item === 'sair'){
        return res.send('A requisiçõ foi respondida antes de chegar no controlador!')
    }
    next()
}
export const intermediarioGeral = (req: Request, res: Response, next: NextFunction) => {
    console.log('Passou no intermediario geral');
    next()
}
    