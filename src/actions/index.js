import { push } from 'react-router-redux'
export const POST = 'POST'




export const storePost = (message, pos) =>{
  return {
    type: POST,
    message,
    pos
  }
}



export const logOut = () => {
  return (dispatch, _, getFirebase) => {
    const firebase = getFirebase()
    return firebase.logout()
    .then(response => dispatch(push('/')))

  }
}




export const handleSubmit = (text) =>{
  return (dispatch, _, getFirebase) => {
    navigator.geolocation.getCurrentPosition((position) => {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      return getFirebase().push('/posts', storePost(text, pos))
    })

  }
}
