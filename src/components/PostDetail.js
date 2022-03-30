import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { API_BASE_URL } from '../config/constant'
import './PostDetail.css';

function PostDetail() {

    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);

    const getPostDetail = () => {
        setLoading(true)
        axios.get(`${API_BASE_URL}/posts/${postId}`)
            .then((response) => {
                console.log(response.data);
                setPost(response.data);
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            });
    }

    useEffect(() => {
        getPostDetail();
    }, [])

    return (
        <div className='container my-3 post-detail-container'>
            <div className='col-md-12 col-sm-12 p-2 mb-3'>
                <h2 className='text-center text-uppercase'>Post Detail</h2>
            </div>
            {loading ? <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
                :
                <div className='row'>
                    <div className='col-md-12 col-sm-12'>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <img src="https://source.unsplash.com/random/800*300/?city,night" className="img-fluid" alt="..." />
                            </li>
                            <li className="list-group-item">
                                <h3>Post ID: {post.id}</h3>
                            </li>
                            <li className="list-group-item">
                                <h3>Post Title</h3>
                                <p>{post.title}</p>
                            </li>
                            <li className="list-group-item">
                                <h3>Post Description</h3>
                                <p>{post.body}</p>
                            </li>
                            <li className="list-group-item">
                                <div className='row'>
                                    <div className='col-md-4 col-sm-12 d-grid mb-2'>
                                        <button onClick={() => navigate(-1)} className='btn btn-primary text-white'>Back</button>
                                    </div>
                                    <div className='col-md-4 col-sm-12 d-grid mb-2'>
                                        <a href="#" className='btn btn-warning text-white'>Edit</a>
                                    </div>
                                    <div className='col-md-4 col-sm-12 d-grid mb-2'>
                                        <a href="#" className='btn btn-danger'>Delete</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default PostDetail