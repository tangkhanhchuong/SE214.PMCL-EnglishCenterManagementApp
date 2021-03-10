import React from 'react'
import { Button } from 'reactstrap';

export default ({title, size, onClick=()=>{}}) => {
    
    return (
        <Button outline color="secondary" className={`kBtn-Size-${size}`} onClick={onClick}>
            {title}
        </Button>
    )
}
