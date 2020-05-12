import React, { Component } from 'react';
import axios from "axios";
//import { Redirect } from 'react-router-dom';

class EditPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'title': '',
            'post': ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/api/${this.props.match.params.id}`).then(post => {
            this.setState({
                'title': post.data.title,
                'post': post.data.post
            })
        }).catch(error => {
            console.log(error);
        })
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
            'post': this.state.post
        }
        axios.post(`http://localhost:4000/api/${this.props.match.params.id}`, payload).then(data => {
            this.props.history.push('/');
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

export default EditPosts;