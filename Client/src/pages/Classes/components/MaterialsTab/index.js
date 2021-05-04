import React from 'react'

import MaterialsList from './MaterialsList'
import AddMaterial from './AddMaterial'

const MaterialsTab = ({ classId }) => {

    return (
        <div className="d-flex flex-row justify-content-between">
            <MaterialsList />
            <AddMaterial />
        </div>
    )
}

export default MaterialsTab
