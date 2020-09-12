import { firestore, collectionToObj, docToObj } from './firebase';

export async function getCollection(collection, setLoading, setData, setError){
    try{
        setLoading(true);
        const snapshot = await firestore.collection(collection).get();
        const toObj = await collectionToObj(snapshot);
        setData(toObj);
    } catch(error){
        setError(error);
    } finally{
        setLoading(false);
    };
}; 
export async function setItem(selectedCategory, inputContent, inputSumm, elId, onSave){
        const request = await firestore.collection(`expenses`).doc(elId).set({
            categoryId: selectedCategory,
            content: inputContent,
            summ: inputSumm
        });
        onSave();
};