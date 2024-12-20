import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts ,addPosts,deletePosts,updatePosts} from "../../network/postsApi";
export const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        error: null,
        loading: false,
        status: 'idle',
    },
    reducers: {},
    extraReducers:(builder)=>{
           builder
           .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.posts=action.payload
           })

           .addCase(addPosts.fulfilled,(state,action)=>{
            state.posts.push(action.payload)
           })
           .addCase(deletePosts.fulfilled, (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);
          })
          .addCase(updatePosts.fulfilled,(state,action)=>{
            const postIndex= state.posts.findIndex(
                (post)=>post.id ===action.payload.id
            )
            if(postIndex !==-1){
                state.posts[postIndex]=action.payload
            }
           });
          
          
    }
})
export {fetchPosts,addPosts,deletePosts,updatePosts};
export default postSlice.reducer