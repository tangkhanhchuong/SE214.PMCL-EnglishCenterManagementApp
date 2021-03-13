import React, { useState } from 'react'
import { Button } from 'reactstrap'

import TreeView from 'components/TreeView'
import AddDocument from './AddDocument'

const WorkSpace = () => {
    const [isViewMode, setIsViewMode] = useState(true)

    const onViewModeToggle = () => {
        setIsViewMode(prev => !prev)
    }

    if (isViewMode) {
        return (
            <>
                <Button outline className="mr-3" color="success" onClick={onViewModeToggle}>Add Document</Button>
                <TreeView />
            </>
        )
    }

    return (
        <>
            <Button outline color="warning" onClick={onViewModeToggle}>View Documents</Button>
            <AddDocument />
        </>
    )
}

export default WorkSpace
