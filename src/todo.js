import { Component } from 'react';
import icon from './icon1.ico';

export class TODOLIST extends Component {
    state = {
        textInput: "",
        listTodo: []
    }

    onChangeInput(a) {
        this.setState({textInput: a})
        console.log (a)
    }

    addJob (b) {
        if (b === '') {
            alert ("Please enter an item")
        } else {
            let jobArray = this.state.listTodo;
            jobArray.push(b);
            this.setState({listTodo: jobArray, textInput:''});
            console.log (jobArray);
        }
    }

    crossedWord (c) {
        const punktdone = c.target;
        punktdone.classList.toggle('crossed')
    }

    deleteJobs() {
        let jobArray = this.state.listTodo;
        jobArray=[];
        this.setState( {listTodo: jobArray} )
    }

    onFormSubmit (d) {
        d.preventDefault();
    }

    render() {
        return (
            <div>
            <form onSubmit={this.onFormSubmit} >
                <div className="container">
                    <input type="text" placeholder="What do you plan to do?"
                    onChange={(a) => {this.onChangeInput(a.target.value) }}
                    value={this.state.textInput} />
                </div>
                <div className="container">
                    <button onClick={() => this.addJob(this.state.textInput)} className="add" >Add</button>
                </div>
                <ul>
                    {this.state.listTodo.map((item, i) => (
                        <li onClick={this.crossedWord} key={i} >
                            <img src={icon} alt="icon" width="20px" />
                            {item}</li>
                    ))}
                </ul>
                <div className="container">
                    <button onClick={() => this.deleteJobs()} className="delete">Delete</button>
                </div>
            </form>
            </div>
        )
    }

}