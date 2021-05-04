import React from 'react';
import { Field } from 'formik'
import {
    Label, FormGroup
} from 'reactstrap';

const RadioField = (props) => {
    const { field, label, placeholder, type, disabled, values } = props;
    const { value, name, onBlur, onChange } = field;

    if (!values || values.length === 0) return <></>

    return (
        <FormGroup tag="fieldset">
            {label ? <Label>{label}</Label> : ''}
            <div>
                {
                    values.map(value => {
                        return (
                            <Label className='mr-3' key={value} >
                                <Field type="radio" name="gender" value={value} />
                                {value}
                            </Label>
                        )
                    })
                }

            </div>

        </FormGroup>
    )
}

export default RadioField