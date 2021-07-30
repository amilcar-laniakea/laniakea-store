/** @format */

import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
	apiKey: 'AIzaSyCnuOblLRX2_m3fkB4cAOaVKF-V43nOXYQ',
	authDomain: 'laniakea-coder.firebaseapp.com',
	projectId: 'laniakea-coder',
	storageBucket: 'laniakea-coder.appspot.com',
	messagingSenderId: '804961367852',
	appId: '1:804961367852:web:17cf81828fe00e72b95e89',
}

firebase.initializeApp(config)

export const db = firebase.firestore()
