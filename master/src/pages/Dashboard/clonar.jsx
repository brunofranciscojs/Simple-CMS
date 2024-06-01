import React, { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs, doc, writeBatch } from 'firebase/firestore';

const CloneCollection = () => {
    const [clone, setClone] = useState([]);
  
    useEffect(() => {
      const cloneData = async () => {
        const sourceCollection = collection(db, 'ingles'); // replace with your source collection name
        const sourceSnapshot = await getDocs(sourceCollection);
  
        if (!sourceSnapshot.empty) {
          const data = sourceSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setClone(data);
        }
      };
  
      cloneData();
    }, []);
  
    const clonar = async () => {
      const targetCollection = 'sample2'; // replace with your target collection name
      const batch = writeBatch(db); // Use writeBatch for efficient writes
  
      clone.forEach(docData => {
        const newDocRef = doc(db, targetCollection, docData.id);
        batch.set(newDocRef, docData);
      });
  
      await batch.commit();
    };
  
    return (
      <div>
        <button onClick={clonar}>Clone Collection</button>
      </div>
    );
  };
  
  export default CloneCollection;
  

