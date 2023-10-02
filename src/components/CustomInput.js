 import React from 'react';

const CustomInput = (props) =>
 {
    const{type,label,i_id,i_class,name,val,onCh}=props;

  return (
    <div className="form-floating mt-3">
  <input className={`form-control ${i_class}`}
    type={type} 
   id={i_id} placeholder={label} 
   name={name} value={val}
   onChange={onCh}
   onBlur={onCh} />
  <label htmlFor={label}>{label}</label>
</div>
  );
};

export default CustomInput;