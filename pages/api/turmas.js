import Turma from '../../models/Turma'
import dbConnect from '../../utils/dbConnect'

dbConnect()

export default async (req, res)  => {
    const { method } = req
    
    switch(method) {
        case 'GET':
            try {
                const turmas = await Turma.find({})
                res.status(200).json({ success: true, data: turmas })
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        case 'POST': 
            try {
                const turma = await Turma.create(req.body);
                res.status(201).json({success: true, data: turma})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        default:
            res.status(400).json({success: false})
            break
    }
    
}
  