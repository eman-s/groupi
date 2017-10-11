import { push } from 'react-router-redux'




const makeActionCreator = (type) =>{
  return function(payload){
    return{
      type,
      payload
    }
  }
}

export const logOut = () => {
  return (dispatch, _, getFirebase) => {
    const firebase = getFirebase()
    return firebase.logout()
    .then(response => dispatch(push('/')))

  }
}
