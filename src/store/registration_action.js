import { registrationAction } from ".";

export const getRegisteredData = (data)=>{
    return async(dispatch)=>{
        dispatch(registrationAction.collectRegistrationDetails({
            firstname:data.firstname,
            lastname: data.lastname,
            email:data.email,
            password: data.password,
            gender: data.gender,
            contactNumber: data.contactNumber,
            birthDate: data.birthDate
        }))
    }
}