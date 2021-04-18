import { db } from "../firebase/firebaseConfig"

export const loadNotes =  async(uid) => {
  const noteSnap =  await db.collection(`${uid}/Journal/notes`).get();
  const notes = [];

  noteSnap.forEach(snapChild => {
      notes.push({
        id: snapChild.id ,
        ...snapChild.data()         
        });
  } )

    return notes ;
}