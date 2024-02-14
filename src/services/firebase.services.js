import { db } from "../firebaseConfig";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";

export const getCollection = async (nameCollection) => {
  try {
    let items = [];
    const refCollection = collection(db, nameCollection);
    const querySnapshot = await getDocs(refCollection);
    querySnapshot.forEach((doc) => items.push({ ...doc.data(), id: doc.id }));
    console.log(items);
    return items;
  } catch (error) {
    throw new Error(error);
  }
};

export const getDocumentById = async (nameCollection, id) => {
  try {
    const docRef = doc(db, nameCollection, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        ...docSnap.data(),
        id: docSnap.id,
      };
    } else {
      throw new Error("not found");
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const updateDocument = async (nameCollection, id, amount) => {
  try {
    const docRef = doc(db, nameCollection, id);
    await updateDoc(docRef, {
      stock: amount,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const AddDocument = async () => {
  try {
    const docRef = doc(collection(db, "Pedidos"));
    await addDoc(docRef);
  } catch (error) {
    throw new Error(error);
  }
};
