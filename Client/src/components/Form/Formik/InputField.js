import React, { useState } from 'react'
import { FormGroup, Input, Label } from 'reactstrap'


const InputField = (props) => {

    const { field, label, placeholder, type, disabled, value } = props;
    const { name, onBlur, onChange } = field;

    const [isStudying, setIsStudying] = useState(value)

    if (type === 'checkbox') {
        return (
            <FormGroup>
                {label ? <span className="mr-3"><Label className="mr-3">{label}</Label></span> : ''}
                <Input
                    id={name}
                    placeholder={placeholder}
                    type={type}
                    disabled={disabled}
                    name={name}
                    onBlur={onBlur}
                    onChange={(e) => { setIsStudying((pre) => !pre) }}
                    checked={isStudying}
                    classnames={'ml-3'}
                />
            </FormGroup>
        )
    }

    return (
        <FormGroup>
            {label ? <span className="mr-3"><Label className="mr-3">{label}</Label></span> : ''}
            <Input
                id={name}
                placeholder={placeholder}
                type={type}
                disabled={disabled}
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                defaultValue={value}
            />
        </FormGroup>
    )
}

export default InputField