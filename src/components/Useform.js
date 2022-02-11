import {useState,useEffect} from 'react'

const Useform =(validate)=>{
    const [values , setValues] = useState({
        name:'',
        email:'',
        password:'',
        place:'',
    }); 
    const[errors , setErrors] = useState({});

    const handleChange = e=>{
        const {name,values} = e.target;
        setValues({
            ...values,
            [name]:values
        });
    };

    const handleSubmit = e=>{
        e.preventDefault();

        setErrors(validate(values));
    };

    return {handleChange,values,handleSubmit,errors};
};
export default Useform