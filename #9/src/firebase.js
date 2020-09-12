import { initializeApp } from "firebase";

const app = initializeApp({
    apiKey: "AIzaSyC1AN-aLd5DzQ4zgyfqMQg8xgg4109Q9zo",
    authDomain: "my-freedom-test-project.firebaseapp.com",
    databaseURL: "https://my-freedom-test-project.firebaseio.com",
    projectId: "my-freedom-test-project",
    storageBucket: "my-freedom-test-project.appspot.com",
    messagingSenderId: "736300167372",
    appId: "1:736300167372:web:3ab69b55483562ef19d269"
});

export const firestore = app.firestore();

export function docToObj(doc){
    return {
        id : doc.id,
        ...doc.data(),
    };
};
export function collectionToObj(collection){
    return collection.docs.map(docToObj);
};