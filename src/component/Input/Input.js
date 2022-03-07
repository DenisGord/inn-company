import PropTypes from 'prop-types'
import React from 'react';
import { daData } from '../../functions/daData';

import './style.css';

const Input = ({label, value, onChange, action, setDataList}) => {
    const onKey=(e)=>{
        if(action && e.key === "Enter" ){
            daData(value, setDataList );
        }
    }
    return (
        <label className='label'>
            <span> {label} </span> 
            <input onKeyDown={(e)=> onKey(e)} value={value} onChange={(e)=> onChange(e.target.value)} />
        </label>
    );
};

Input.propTypes={
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    action: PropTypes.bool,
}

export default Input;