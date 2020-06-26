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
        axios.get(`${process.env.REACT_APP_AXIOS_URL}/api`, {
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

    deletePost(id) {
        axios.delete(`${process.env.REACT_APP_AXIOS_URL}/api/delete/${id}`, {
            params: {
                email: JSON.parse(sessionStorage.getItem('key')).email
            }
        }).then(posts => {
            var data = posts.data.sort((data1, data2) => new Date(data2.date) - new Date(data1.date));
            this.setState({
                'posts': data
            })
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        let { posts } = this.state;
        if (!posts.length)
            return (
                <div className="no-notes">
                    You have no notes yet!!
                </div>
            );
        return (
            <div>
                {this.displayPosts()}
            </div>
        );
    }

    //displays a list of all the notes
    displayPosts() {
        let { posts } = this.state;
        if (!posts.length) return null;
        return posts.map((post, index) => {
            return (
                <div key={index} className="list-group-item m-2 border">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{post.title}</h5>
                    </div>
                    <p className="mb-1">{post.post}</p>
                    <Link className="list-group-item-action" to={"/edit/" + post._id}>Edit</Link>
                    <span className="list-group-item-action link-span" onClick={this.deletePost.bind(this, post._id)}>Delete</span>
                    <small className="text-muted float-right">{this.displayDate(post.date)}</small>
                </div>
            )
        })
    }

    //Formats the date using moment.js library in the format Do MMMM YYYY
    displayDate(date) {
        return moment(date).format('Do MMMM YYYY');
    }
}

export default ListPosts;