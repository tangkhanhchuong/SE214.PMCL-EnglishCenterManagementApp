const db = require('../Database/postgres_connector')

const GetAllMaterials = async (classId) => {
    let materials

    if (classId) {
        materials = await db('materials as m')
            .join('classes as c', 'c.class_id', 'm.class_id')
            .where('c.class_id', classId)
            .select('m.material_id', 'm.title', 'm.class_id', 'm.url', 'm.description', 'm.posted_at')
    }
    else {
        materials = await db('materials')
            .select()
    }

    return materials
}

module.exports = {
    GetAllMaterials
}