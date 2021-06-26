export const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api'
/// ACTIVITIES
export async function getActivities() {
    try {
        const response = await fetch(`${BASE_URL}/activities`)
        const data = response.json()

        return data 
    }catch(error){
        throw error
    }
}
/// ROUTINES
export async function getRoutines() {
    try {
        const response = await fetch(`${BASE_URL}/routines`)
        const data = response.json()

        return data 
    }catch(error){
        throw error
    }
}


/// USERS
export async function registerUser(usernameValue, passwordValue) {
    const url = `${BASE_URL}/users/register`
    
    try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username: usernameValue,
              password: passwordValue,
            },
          }),
        });
        const {
          data: { token },
        } = await response.json();
        
        localStorage.setItem("token", JSON.stringify(token));
      } catch (error) {
            throw error
    }
}