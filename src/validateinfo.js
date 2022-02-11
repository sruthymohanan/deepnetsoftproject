export default function validateInfo(values){
    let errors = {};
// product name
    if(!values.productname.trim()){
        errors.productname = "product name is  required"
    }

    // productcode
    if(!values.productcode.trim()){
        errors.productcode = "product code is required"
    }else if(values.productcode.length<3){
        errors.productcode = "product code need to be 3 character "
    }
    // productqty
    if(!values.productqty.trim()){
        errors.productqty = "product qty is required"
    }

    return errors;
}