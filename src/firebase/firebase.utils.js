import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAbGvR6NTdGAMRbTyMLWCRZvOoaZ_wZkmk',
  authDomain: 'crwn-db-58ce7.firebaseapp.com',
  databaseURL: 'https://crwn-db-58ce7.firebaseio.com',
  projectId: 'crwn-db-58ce7',
  storageBucket: 'crwn-db-58ce7.appspot.com',
  messagingSenderId: '584409289918',
  appId: '1:584409289918:web:80c8af941f6adf2cab7aef',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
