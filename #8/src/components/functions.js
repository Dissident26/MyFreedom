export async function getData(url, setLoading, setData, setError){
    try{
        setLoading(true);
        const request = await fetch(url);
        const response = await request.json();
        setData(response.message);
    }catch(error){
        setError(error);
    }finally{
        setLoading(false);
    };
};