import Turma from '../../../models/Turma'
import dbConnect from '../../../utils/dbConnect'

dbConnect()

export default async (req, res) => {

    const { turma } = req.query
    const { method } = req

    switch(method){
        case 'GET':
            try {
                const data = await Turma.find({ key: {$eq : turma}})
                res.status(200).json({ success: true, data: data })
        
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        default:
            res.status(400).json({success: false})
            break
    }
}
  