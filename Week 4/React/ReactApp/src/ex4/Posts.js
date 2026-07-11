import React, { Component } from 'react';
import Post from './Post';
import './blog.css';

class PostsList extends Component {
  render() {
    if (this.props.simulateError) {
      throw new Error("Simulated rendering error inside child component!");
    }
    return (
      <div className="posts-list">
        {this.props.posts.map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
      simulateError: false
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Map fetched objects to instances of the Post class
        const postInstances = data.slice(0, 10).map(item => new Post(item.id, item.title, item.body));
        this.setState({ posts: postInstances });
      })
      .catch(error => {
        console.error("Fetch error:", error);
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, errorInfo) {
    alert(`[componentDidCatch] Error caught in component: ${error.message}`);
    this.setState({ error: error });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="error-container">
          <h3>An error was caught by the componentDidCatch boundary.</h3>
          <p className="error-message">{this.state.error.message}</p>
          <button 
            className="btn btn-primary" 
            onClick={() => this.setState({ error: null, simulateError: false })}
          >
            Clear Error & Retry
          </button>
        </div>
      );
    }

    return (
      <div className="posts-container">
        <div className="posts-header">
          <h2>Blog Posts</h2>
          <button 
            className="btn btn-danger" 
            onClick={() => this.setState({ simulateError: true })}
          >
            Simulate Component Error
          </button>
        </div>
        <PostsList posts={this.state.posts} simulateError={this.state.simulateError} />
      </div>
    );
  }
}

export default Posts;
