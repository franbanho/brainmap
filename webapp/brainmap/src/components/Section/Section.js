import React, { Component } from 'react';
import './Section.css';

class Section extends Component {

    state = {
        id: null,
        title: null,
        content: null,
        labels: []
    }

    componentDidMount() {
        console.log(this.props);
    }


    render() {

        return (
            <div className="Section">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );

    }

}

export default Section;