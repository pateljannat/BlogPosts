import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

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
                email: JSON.parse(sessionStorage.getItem('key')).email
            },
            headers: { 'Content-Type': 'application/json' }
        }).then(posts => {
            var data = posts.data.sort((data1, data2) => new Date(data2.date) - new Date(data1.date));
            this.setState({
                'posts': data
            })
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h1>Welcome to My Blogs!!</h1>
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
                <div key={index} className="list-group-item">
                    <div className="d-flex w-100 justify-content-between">
                    <h3 className="mb-1">{post.title}</h3>
                    <small className="text-muted">{this.displayDate(post.date)}</small>
                    </div>
                    <p className="mb-1">{post.post}</p>
                    <Link className="list-group-item-action" to={"/edit/" + post._id}>Edit</Link>
                </div>
            )
        })
    }

    displayDate(date) {
        return moment(date).format('Do MMMM YYYY');
    }
}

export default ListPosts;