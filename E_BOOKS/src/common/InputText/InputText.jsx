import React from 'react';
import './InputText.css';

export const InputText = ({className, type, name, placeholder, required, error, changeFunction, blurFunction}) => {

 
    const nameConversor = (name) => {

        let upperName = name.charAt(0).toUpperCase() + name.slice(1);

        let splitUpperName = upperName.split("_")

        let inputName = splitUpperName.join([" "])

        
        if( upperName === "Password2"){
            inputName = 'Confirm Password';
        };

        return inputName;
    };


    return (
        <>
            <div className='inputName'>{nameConversor(name)}:</div>
            <input 
                className={className}
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                onChange={(e)=>changeFunction(e)}
                onBlur={(e)=>blurFunction(e)}
                maxLength={20}
            />
            <div>{error}</div>
        </>
    );
};