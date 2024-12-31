// firebase/addMovie.js
import { db } from './index';
import { collection, addDoc } from 'firebase/firestore';

export const addMovie = async (movie) => {
  try {
    await addDoc(collection(db, "movies"), movie);
    console.log('Movie added successfully!');
  } catch (error) {
    console.error('Error adding movie: ', error);
  }
};
