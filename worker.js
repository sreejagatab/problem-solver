// worker.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDocs, query, where } from 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase configuration goes here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function createProblem(problem) {
  try {
    const problemRef = doc(collection(db, 'problems'));
    await setDoc(problemRef, problem);
    return problemRef.id;
  } catch (error) {
    console.error('Error creating problem:', error);
    throw error;
  }
}

export async function getProblemsByUser(userId) {
  try {
    const q = query(collection(db, 'problems'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error('Error getting problems:', error);
    throw error;
  }
}
