import React from 'react'


import {AvField} from 'availity-reactstrap-validation';



export default (
    {
        name = "Sample Name", label="Sample Label", type="text", 
        required=false, errorRequired="This field is required !",
        pattern, errorPattern="This field is not match the pattern !",
        minLength, maxLength,
        errorMinLength=`Your name must be between ${minLength} and ${maxLength} characters`,
        errorMaxLength=`Your name must be between ${minLength} and ${maxLength} characters`
    }
) => {
    
    let GetPatternName = (pat) =>{
        switch(pat){
            case "phone":
                return '^[0-9]+$';

            default: return '';
        }
    }

    let GenerateValidate = () => {
        let kValidate = {};
        if(required) kValidate.required = {value: required, errorMessage: errorRequired};
        if(pattern) kValidate.pattern = {value: GetPatternName(), errorMessage: errorPattern};
        if(minLength > 0) kValidate.minLength = {value: minLength, errorMessage: errorMinLength};
        if(maxLength > 0) kValidate.maxLength = {value: maxLength, errorMessage: errorMaxLength}
        
        console.log(kValidate);
        return kValidate;
    }

    console.log("21323");

    return (
        <AvField 
            name={name} 
            label={label} 
            type={type} 
            validate={GenerateValidate()} 

        />

       
    )
}
