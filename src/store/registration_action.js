import { registrationAction } from ".";

export const getRegisteredData = (data)=>{
    return async(dispatch)=>{
        dispatch(registrationAction.collectRegistrationDetails({
            firstname:data.firstname,
            lastname: "Kwankwan",
            email:data.email,
            password: data.password,
            gender: "male",
            contactNumber: data.contactNumber,
            birthDate: data.birthDate
        }))
    }
}