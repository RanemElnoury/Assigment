import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL="https://jsonplaceholder.typicode.com/posts";
export const fetchPosts =createAsyncThunk("posts/fetchPosts",async()=>{
 const response = await axios.get(BASE_URL)
 return response.data;
});


export const addPosts =createAsyncThunk("posts/addPosts",async(postData)=>{
    const response = await axios.post(BASE_URL,postData)
    return response.data;
});


export const deletePosts = createAsyncThunk("posts/deletePosts", async (postId) => {
    await axios.delete(`${BASE_URL}/${postId}`);
    return postId; 
  });
  

  export const updatePosts = createAsyncThunk("posts/updatePosts", async ({id,updatedData}) => {
   const response= await axios.patch(`${BASE_URL}/${id}`,updatedData);
    return response.data;
  });
  