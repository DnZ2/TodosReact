import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyBBbFCc0Y_DeFtzgvmgb_wnluI8x5VnOK8",
	authDomain: "serverrequeststodos.firebaseapp.com",
	projectId: "serverrequeststodos",
	storageBucket: "serverrequeststodos.appspot.com",
	messagingSenderId: "657461210170",
	appId: "1:657461210170:web:ceec027e3cb1c7de1d1903",
	databaseURL:
		"https://serverrequeststodos-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
