import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

class ListPosts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api', {
            params: {
                email: JSON.parse(localStorage.getItem('key')).email
            }
        }).then(posts => {
            console.log(posts);
            this.setState({
                'posts': posts.data
            })
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <p>Welcome to My Blogs!!</p>
                <div>
                    {this.displayPosts()}
                </div>
            </div>
        );
    }

    displayPosts() {
        let { posts } = this.state;
        if (!posts.length) return null;
        return posts.map((post, index) => {
            return (
                <div key={index}>
                    <h3>{post.title}</h3>
                    <p>{post.post}</p>
                    <Link to={"/edit/" + post._id}>Edit</Link>
                </div>
            )
        })
    }
}

export default ListPosts;