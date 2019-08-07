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
        //  this function is sent to TodoApp.js <Form /> as props
        this.props.addByProps({
            id:shortid.generate(),
            text:this.state.text,
            complete:false
        })
        this.setState({
            text:''
        })
    }

    render() {
        return (
            <div>
                {/* Main Form */}
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
                    </div>
                </form>
            </div>
        )
    }
}