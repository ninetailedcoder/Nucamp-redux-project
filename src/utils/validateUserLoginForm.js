export const validateUserLoginForm = (values) =>{
    const errors = {};
    if (!values.username){
        errors.username='Required'
    } else if (values.username.length < 6) {
        errors.username = "username is to short must be at least 6 characters"
    } else if (values.username.length > 15) {
        errors.username = "username is to long must be no more than 15 characters"
    }

    if (!values.password) {
        errors.password="Required"
    } else if (values.password.length < 8) {
        errors.password = "invalid password must be at least 8 characters"
    }

    return(errors)
}