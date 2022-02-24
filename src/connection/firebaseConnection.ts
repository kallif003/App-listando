import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyBwKtnMfogxkOB3YGmvOx8VaPZ0F-J3Duo",
	authDomain: "listando-382ee.firebaseapp.com",
	projectId: "listando-382ee",
	storageBucket: "listando-382ee.appspot.com",
	messagingSenderId: "726952033583",
	appId: "1:726952033583:web:e0b91398013f3301d1f5da",
	measurementId: "G-H06LYRBF1L",
}

// Initialize Firebase
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

export default firebase
