import axios from "axios";

export const getAxiosRequest= async () => {
    const response = await axios({
       url: "https://jsonplaceholder.typicode.com/posts/1",
       method: "get",
    })

    console.log("get log : ", response.data);
    return response;
}

export const postAxiosRequest = async (data) => {
    const response = await axios({
       url: "https://jsonplaceholder.typicode.com/posts",
       method: "post",
       data: data
    })
    
    console.log("post : ", response.data);
    return response;
}

export const putAxiosRequest = async (id,data) => {
    const response = await axios({
       url: "https://jsonplaceholder.typicode.com/posts/"+id,
       method: "put",
       data: data
    })
    
    console.log("put : ", response.data);
    return response;
}

export const patchAxiosRequest = async (id,data) => {
    const response = await axios({
       url: "https://jsonplaceholder.typicode.com/posts/"+id,
       method: "patch",
       data: data
    })
    
    console.log("patch : ", response.data);
    return response;
}