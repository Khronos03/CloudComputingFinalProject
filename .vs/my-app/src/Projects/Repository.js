import { firestoreDb } from '../Shared/firebase-config';  

export const Repository = {

  getIACollections: async () => {
    const itemsCollections = await firestoreDb.collection('IAcollections').get();
    const projectsList = itemsCollections.docs.map(project => {
      return {
        ...project.data(),
        idDoc: project.id
      };
    });

    return projectsList;
  },

  setIACollections: (item) => {
    firestoreDb.collection('IAcollections')
      .doc()
      .set(item);
  },

  updateIACollections: (idDoc, project) => {
    firestoreDb.collection('IAcollections').doc(idDoc).set(project);
  },

  getIACollection: async (nameItem) => {
    const getItemFirebase = await firestoreDb.collection('IAcollections').where("name", "==", nameItem).get();
    return getItemFirebase;
  },

};