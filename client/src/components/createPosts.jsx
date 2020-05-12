//Component to display a form for creating new notes
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

    //hadles change on form input elements
    handleChange({ target }) {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        if (!this.props.match.params.id) return
        axios.get(`http://localhost:4000/api/${this.props.match.params.id}`).then(post => {
            this.setState({
                'title': post.data.title,
                'post': post.data.post
            })
        }).catch(error => {
            console.log(error);
        })
    }

    //handles submission of the form
    handleSubmit(e) {
        e.preventDefault()
        const payload = {
            'title': this.state.title,
            'post': this.state.post,
            'user': JSON.parse(sessionStorage.getItem('key')).email
        }
        const url = this.props.match.params.id ? `http://localhost:4000/api/${this.props.match.params.id}` : 'http://localhost:4000/api/add';
        axios.post(url, payload).then(data => {
            this.props.history.push('/');
        })
        /* this.setState({
            title: '',
            post: ''
        }) */
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Note Content" name="post" value={this.state.post} onChange={this.handleChange} />
                </div>
                <button className="btn btn-primary" type="submit" >Submit</button>
            </form>
        );
    }
}

export default CreatePosts;