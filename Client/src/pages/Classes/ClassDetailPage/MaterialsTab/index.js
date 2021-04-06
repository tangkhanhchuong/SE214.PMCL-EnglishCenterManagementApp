import React, { useState } from 'react'
import { Button } from 'reactstrap'

import TreeView from 'components/TreeView'
import AddMaterial from './AddMaterial'

const MaterialsTab = () => {
    const [isViewMode, setIsViewMode] = useState(true)

    const onViewModeToggle = () => {
        setIsViewMode(prev => !prev)
    }

    if (isViewMode) {
        return (
            <>
                <Button outline className="mr-3" color="success" onClick={onViewModeToggle}>Add Study Material</Button>
                <TreeView />
            </>
        )
    }

    return (
        <>
            <Button outline color="warning" onClick={onViewModeToggle}>View Class's Materials</Button>
            <AddMaterial />
        </>
    )
}

export default MaterialsTab
