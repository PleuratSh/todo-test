import React, { Component } from 'react'
import shortid from 'shortid'

export default class Form extends Component {

    state = {
        text:''
    }

    handleChange = (e) => {
        this.setState({
            text:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addByProps({
            id:shortid.generate(),
            text:this.state.text,
            complete:false
        })
        this.setState({
            text:''
        })
    }

    onCancel = (e) => {
        e.preventDefault();
        this.setState({
            text:''
        })
    }

    render() {

        return (
            <div>
                <form className="main-form" onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    name="name"
                    placeholder="What Needs to be done?"
                    value={this.state.text}
                    onChange={this.handleChange}
                    />
                    <div className="btn-section">
                    <button className="custom-btn btn-medium" onSubmit={this.handleSubmit}>+ Add Task</button>
                    <button className="custom-btn btn-simple btn-medium" onClick={this.onCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}
