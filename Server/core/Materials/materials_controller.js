// const GetAllMaterials = (classId) => {
//     return db('materials as m')
//         .join('classes as c', 'c.class_id', 'm.class_id')
//         .select('m.material_id', 'm.title', 'm.class_id', 'm.url', 'm.description', 'm.posted_at')
// }
const db = require('../Database/postgres_connector')
const { HttpStatus } = require("../Http/index")

const GetAllMaterials = async (req, res) => {
    const { class_id } = req.body
    let materials

    if (class_id) {
        materials = await db('materials as m')
            .join('classes as c', 'c.class_id', 'm.class_id')
            .where('c.class_id', class_id)
            .select('m.material_id', 'm.title', 'm.class_id', 'm.url', 'm.description', 'm.posted_at')
    }
    else {
        materials = await db('materials')
            .select()
    }

    HttpStatus.ok(res, {
        materials
    })
}

const GetMaterialDetails = async (req, res) => {
    const material_id = req.params.id

    const material = await db('materials')
        .where('material_id', material_id)
        .select()

    HttpStatus.ok(res, {
        material
    })
}

const CreateMaterial = async (req, res) => {
    const { title, class_id, url, description } = req.body

    const material_id = Math.random().toString().split('.')[1].slice(0, 8)
    const posted_at = new Date(Date.now())

    const [newMaterial] = await db('materials')
        .insert({
            material_id, title, class_id, posted_at, url, description
        })
        .returning('*')

    HttpStatus.ok(res, {
        newMaterial
    })
}

const EditMaterial = async (req, res) => {
    const material_id = req.params.id
    const { title, class_id, posted_at, url, description } = req.body

    const [updatedMaterial] = await db('materials')
        .update({
            material_id, title, class_id, posted_at, url, description
        })
        .where('material_id', material_id)
        .returning('*')

    HttpStatus.ok(res, {
        updatedMaterial
    })
}

const DeleteMaterial = () => {

}

module.exports = {
    GetAllMaterials, CreateMaterial,
    GetMaterialDetails, EditMaterial, DeleteMaterial
}