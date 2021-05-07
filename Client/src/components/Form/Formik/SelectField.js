import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { FormFeedback, FormGroup, Label } from 'reactstrap';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
}

function SelectField(props) {
    let { field, form, options, label, placeholder, disabled, minWidth = '70px', maxWidth = '200px', unit } = props;
    const { name, value } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    if (!options[0].value)
        options = options.map(o => ({ value: o, label: o }))

    const selectedOption = options.find(option => option.value === value);


    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }

    return (
        <FormGroup className='d-flex flex-row'>
            {label && <Label className='mr-3' for={name}>{label}</Label>}
            <div style={{ minWidth: minWidth, maxWidth: maxWidth }}>
                <Select
                    id={name}
                    {...field}
                    value={selectedOption}
                    onChange={handleSelectedOptionChange}
                    placeholder={placeholder}
                    isDisabled={disabled}
                    options={options}
                    className={showError ? 'is-invalid' : ''}
                />
            </div>

            {unit && <Label className='ml-3' for={unit}>({unit})</Label>}
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default SelectField;