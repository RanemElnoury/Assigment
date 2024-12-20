import React, {useState, useEffect } from "react";
import { Link } from 'react-router-dom'; 
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, addPosts, deletePosts,updatePosts } from "./postSlice";
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./style.css";
import UpdatePostModel from "../../Component/Models/UpdatePostModel";

function PostsList() {
  
  const [showModel, setShowModel] = useState(false);
  const [currentPost, setCurrentPost] = useState({
    title:"",
    body:"",
  });
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsData.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleAddPosts = (newPost) => {
    dispatch(addPosts(newPost)).then(() => {
      toast.success("Post Added Successfully");
    });
  };

  const handleDeletePost = (postId) => {
    dispatch(deletePosts(postId)).then(() => {
      toast.dark("Post Deleted Successfully", {
        className: "custom-toast",
        progressClassName: "custom-progress-bar",
      });
    });
  };

  const handleShowModel=(post)=>{
    setCurrentPost(post)
    setShowModel(true)
  }
  const handleCloseModel=()=>{
    setShowModel(false)
  }
  const handleUpdatePost=()=>{
    const updatePostData={title:currentPost.title,body:currentPost.body}
    dispatch(updatePosts({id:currentPost.id,updatedData:updatePostData})).then(() => {
      handleCloseModel()
      toast.success("Post has been updated Successfully");
    });
    
  }

  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Title is required')
      .min(5, 'Title must be at least 5 characters')
      .max(50, 'Title must not exceed 50 characters'),
    body: Yup.string()
      .required('Body is required')
      .min(20, 'Body must be at least 20 characters')
      .max(500, 'Body must not exceed 500 characters'),
  });

  return (
    <>
      <div className="posts-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {posts && posts.map((post) => (
                <div className="card post-item" key={post.id}>
                  <div className="card-body">
                  <h5><Link to={`/post/${post.id}`}>{post.id} - {post.title}</Link></h5>
                    <p className="card-text">{post.body}</p>
                    <div className="postControlButtons">
                      <button className="btn btn-primary" onClick={()=>handleShowModel(post)}>
                        <FontAwesomeIcon icon={faEdit} /> Update
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              <Formik
                initialValues={{ title: '', body: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  handleAddPosts(values);
                  resetForm();
                }}
              >
                {({ isValid, dirty }) => (
                  <div className="add-post-form">
                    <Form>
                      <div className="form-group mb-2">
                        <Field
                          name="title"
                          type="text"
                          className="form-control"
                          placeholder="Title"
                        />
                        <ErrorMessage
                          name="title"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="form-group mb-2">
                        <Field
                          name="body"
                          as="textarea"
                          className="form-control"
                          placeholder="Body"
                          rows="4"
                        />
                        <ErrorMessage
                          name="body"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success"
                        disabled={!(isValid && dirty)}
                      >
                        <FontAwesomeIcon icon={faPlus} /> Add Post
                      </button>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <UpdatePostModel
      showModel={showModel}
      handleCloseModel={handleCloseModel}
      currentPost={currentPost}
      handleChangeData={setCurrentPost}
      handleUpdatePost={handleUpdatePost}
      />
      <ToastContainer />
    </>
  );
}

export default PostsList;
