import Rebase from 're-base'
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyA36-vC8oLXSWM71pxSePtOOjKoyd23f94",
  authDomain: "cards-7a60c.firebaseapp.com",
  databaseURL: "https://cards-7a60c.firebaseio.com",
  projectId: "cards-7a60c",
  storageBucket: "cards-7a60c.appspot.com",
  messagingSenderId: "750485176095"
};

const baseApp = firebase.initializeApp(config);
const base = Rebase.createClass(baseApp.database());

export default base