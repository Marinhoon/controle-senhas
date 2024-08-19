import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { initialPatients } from "../../listaPacienteData";

const firebaseConfig = {
  apiKey: "AIzaSyDPj7kWZaWsFG2rzVoGBYijxM-9Qv7cyIs",
  authDomain: "controle-de-senha.firebaseapp.com",
  projectId: "controle-de-senha",
  storageBucket: "controle-de-senha.appspot.com",
  messagingSenderId: "354138826943",
  appId: "1:354138826943:web:a0d9130656302a06f8be0a",
  measurementId: "G-XFD9MRGQGP",
};

const app = initializeApp(firebaseConfig);
const db_firebase = getFirestore(app);

export const useControleDeSenhaService = () => {
  const obterListaDeSenha = async () => {
    try {
      const senhaCollection = collection(db_firebase, "controle-de-senha");

      const query_historico = query(senhaCollection);
      const querySnapshot = await getDocs(query_historico);

      // initialPatients.forEach(async(obj) => {
      //   const docRef = await addDoc(collection(db_firebase,"controle-de-senha" ),obj);
      //   console.log("Pacientes Adicionado!", docRef.id)
      // })

      return querySnapshot;
    } catch (error) {
      console.error("Error fetching control password ", error);
    }
  };

  return { obterListaDeSenha };
};
