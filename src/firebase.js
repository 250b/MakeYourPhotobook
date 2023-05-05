import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAj7hIlUzTyImS3lTbD3f2JgwIPikYHF1A",
  authDomain: "makeyourphotobook-eb450.firebaseapp.com",
  projectId: "makeyourphotobook-eb450",
  storageBucket: "makeyourphotobook-eb450.appspot.com",
  messagingSenderId: "982934064903",
  appId: "1:982934064903:web:81db6c0ac45ef81238ffa2",
  measurementId: "G-PQ5C83LCM0"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };
