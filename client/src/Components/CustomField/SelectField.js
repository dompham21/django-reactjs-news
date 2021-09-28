import React from 'react'
import { Form, Select } from 'antd';


function SelectField(props) {
    const { field, options, label, placeholder, disabled } = props;
    const { name, value } = field;
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
        <Form.Item>
            {label && <label>{label}</label>}
            <Select 
                placeholder={placeholder} 
                {...field}
                value={selectedOption}
                onChange={handleSelectedOptionChange}
                options={options}
            />
        </Form.Item>
        
    )
}

export default SelectField
