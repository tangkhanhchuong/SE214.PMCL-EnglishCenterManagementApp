import React, { useState } from 'react'
import { FormGroup, Input, Label } from 'reactstrap'


const InputField = (props) => {

    const { field, label, placeholder, type, disabled, value, width = '70px' } = props;
    const { name, onBlur, onChange } = field;

    const [isStudying, setIsStudying] = useState(value)

    if (type === 'checkbox') {
        return (
            <div>
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
            </div>
        )
    }

    const onNumberInputChange = (e) => {
        const value = e.target.value
        const lastChar = value[value.length - 1]
        if (isNaN(parseInt(lastChar))) e.target.value = value.slice(0, -1)
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
                onChange={type === 'number' ? onNumberInputChange : onChange}
                defaultValue={value}
            />
        </FormGroup>
    )
}

export default InputField