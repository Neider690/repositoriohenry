import { eventWrapper } from "@testing-library/user-event/dist/utils";

const validation = (userData) => {
    const errors = {};
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'El email NO Messirve y/o no es válido'
    }
    if (!userData.email){
        errors.email = "Digite email"
    }
    if (userData.email.length > 35){
        errors.email = "El email no debe superar la edad de Messi"
    }
    if (!/.*\d+.*/.test(userData.password)){
        errors.password = 'Debe contener al menos un numero '
    }
    if ( userData.password.length < 6 || userData.password.length > 10 ){
        errors.password = 'Deber tener minimo 6 caracteres y mas de 10 '
    }

    return errors;
}

export default validation 