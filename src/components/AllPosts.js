import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../config/constant'
import { Link } from 'react-router-dom';

function AllPosts() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllPosts = () => {
        setLoading(true)
        axios.get(`${API_BASE_URL}/posts`)
            .then((response) => {
                console.log(response.data);
                setPosts(response.data);
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            });
    }
    useEffect(() => {
        getAllPosts();
    }, [])
    return (
        <div className='container my-3'>
            <div className='col-md-12 col-sm-12 p-2'>
                <h2 className='text-center text-uppercase'>All Posts</h2>
            </div>
            <div className='row my-3'>
                {loading ? <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                    :
                    posts.map((post, index) => {
                        return <div className='col-md-4 col-sm-12 mb-2' key={index}>
                            <div className="card">
                                <img src="https://source.unsplash.com/random/800*200/?city,night" class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Post {index + 1}</h5>
                                    <p className="card-text">{post.title}</p>
                                    <Link to={`/posts/${post.id}`} className="card-link">Read More</Link>
                                </div>
                            </div>
                        </div>

                    })
                }
            </div>
        </div>
    )
}

export default AllPosts