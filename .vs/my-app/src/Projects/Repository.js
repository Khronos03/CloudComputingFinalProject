import { firestoreDb } from '../Shared/firebase-config';  

export const Repository = {

  getCollections: async (name) => {
    const itemsCollections = await firestoreDb.collection(name).get();
    const projectsList = itemsCollections.docs.map(project => {
      return {
        ...project.data(),
        idDoc: project.id
      };
    });

    return projectsList;
  },

  setCollections: (name, item) => {
    firestoreDb.collection(name)
      .doc()
      .set(item);
  },

  updateCollections: (name, idDoc, project) => {
    firestoreDb.collection(name).doc(idDoc).set(project);
  },

  getCollection: async (name, nameItem) => {
    const getItemFirebase = await firestoreDb.collection(name).where("name", "==", nameItem).get();
    return getItemFirebase;
  },

};