export const USER_DELETE = 'USER_DELETE'
export const USER_UPDATE = 'USER_UPDATE'
export const USER_SAVE='USER_SAVE'

export function deleteUser(id){
    return{
        type:"USER_DELETE",
        payload:id
    }
}
export function updateUser(id,name,age,location){
    return{
        type:"USER_UPDATE",
        payload:{id,name,age,location}
    }
}
export function saveUser(id,name,age,location){
    return{
        type:"USER_SAVE",
        payload:{id,name,age,location}
    }
}
