import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export const getBlogs = async () => {
    try{
        const response = await api.get('/api/v1/blog/all');
        return response.data;
    }catch(error){
        console.error("Failed to fetch blogs: ", error);
        return[];
    }
};

export const login = async () => {
    try{
        /*
            on developing!
        */
    }catch(error){
        console.error("Failed to Login : " + error);
        return[];
    }
}