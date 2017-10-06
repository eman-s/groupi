export const AUTHENTICATE_USER = 'AUTHENTICATE_USER'
export const USER_LOG_OUT = 'USER_LOG_OUT'
import { push } from 'react-router-redux'



const makeActionCreator = (type) =>{
  return function(payload){
    return{
      type,
      payload
    }
  }
}

export const authenticateUser =  makeActionCreator(AUTHENTICATE_USER)
export const logOut = makeActionCreator(USER_LOG_OUT)
