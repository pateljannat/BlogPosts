import React, { Component } from 'react';
import axios from 'axios';

class CreatePosts extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            post: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({ target }) {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const payload = {
            'title': this.state.title,
            'post': this.state.post,
            'user': JSON.parse(localStorage.getItem('key')).email
        }
        axios.post('http://localhost:4000/api/add', payload).then(data => {
            console.log(data)
        })
        this.setState({
            title: '',
            post: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Post" name="post" value={this.state.post} onChange={this.handleChange} />
                </div>
                <button className="btn btn-primary" type="submit" /* onClick={this.handleSubmit} */ >Submit</button>
            </form>

        );
    }
}

export default CreatePosts;