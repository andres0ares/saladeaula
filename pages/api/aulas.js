import connect from '../../utils/database'

export default async (req, res)  => {

    const { db } = await connect()
    const response = await db.collection('aulas').insertOne({name: 'andre', age: '22'})

    res.status(200).json(response.ops[0])
}
  