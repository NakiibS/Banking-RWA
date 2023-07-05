export const mockCreateNewUser = async (firstName, lastName, username, password, confirmPassword) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            const jsonResponse = { message:"OK!", body:{
                firstName,
                lastName,
                username,
                password,
                confirmPassword
            }};
            resolve(jsonResponse);
        }, 5000); // Esperar 3 segundos (3000 ms)
    });
} 