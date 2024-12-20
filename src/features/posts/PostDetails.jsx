import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './PostDetails.css'
import image from '../../assets/images/2 (2).jpg'; 
function PostDetails() {
  const { id } = useParams();  // استخدام useParams للحصول على id من الـ URL
  const posts = useSelector((state) => state.postsData.posts);
  
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = posts.find((p) => p.id === parseInt(id));  // البحث عن المنشور باستخدام id
    setPost(foundPost);
  }, [id, posts]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="post-details">
      <h2><span>Title: </span> {post.title}</h2>
      <p> <span>Body: </span>{post.body}</p>
      <img src={image} alt="" />
    </div>
  );
}

export default PostDetails;
