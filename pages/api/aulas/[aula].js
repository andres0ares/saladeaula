import Turma from '../../../models/Turma'
import dbConnect from '../../../utils/dbConnect'

dbConnect()

export default async (req, res) => {

    const { aula } = req.query
    const { method } = req
    const turma = aula

    switch(method){
        case 'GET':
            try {
                const data = await Turma.findOne({ key: {$eq : turma}})
                
                res.status(200).json({success: true, data: data.aulas})
        
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        case 'POST':
            try {
                const newValue = await Turma.findOne({ key: {$eq : turma}})
                newValue.aulas.push(req.body)

                await Turma.updateOne({ key: {$eq : turma}}, newValue)
                const data = await Turma.findOne({ key: {$eq : turma}})
                
                res.status(200).json({ success: true, data: data.aulas })

            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        case 'DELETE':
            console.log('delete operation')
            console.log(req.body._id)
            try {
                const newValue = await Turma.findOne({ key: {$eq : turma}})
                const index = newValue.aulas.findIndex((element) => element._id == req.body._id)
                if (index > -1) {
                    newValue.aulas.splice(index, 1)
                    console.log(newValue)

                    await Turma.updateOne({ key: {$eq : turma}}, newValue)
                    const data = await Turma.findOne({ key: {$eq : turma}})
                
                    res.status(200).json({ success: true, data: data.aulas })
                } else {
                    res.status(400).json({success: false})
                }               

            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        default:
            res.status(400).json({success: false})
            break
    }
}
  