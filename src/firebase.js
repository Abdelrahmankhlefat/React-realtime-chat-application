// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyD0kEBqUVyb8F74e25jCcjiPjzUH9ueAEI',
//   authDomain: 'chat-25cb2.firebaseapp.com',
//   projectId: 'chat-25cb2',
//   storageBucket: 'chat-25cb2.appspot.com',
//   messagingSenderId: '195427557812',
//   appId: '1:195427557812:web:26c699c23a02e1bb1892e1',
// }

const firebaseConfig = {
  apiKey: 'AIzaSyDFgKV3l_RxbhCq2DXgGmEIJqvrKFvdLdo',
  authDomain: 'example1-51cb0.firebaseapp.com',
  projectId: 'example1-51cb0',
  storageBucket: 'example1-51cb0.appspot.com',
  messagingSenderId: '1047758484363',
  appId: '1:1047758484363:web:6e7a54aa3c784ad710f58e',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
