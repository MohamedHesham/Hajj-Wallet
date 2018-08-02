import React,{ Component } from 'react';
import classes from './Gov.module.css';

class Gov extends Component {
    state = {
        view:'Add Store'
    }

    toggle = () => {
        if(this.state.view === 'Add Store') {
            this.setState({view: 'Remove Store'})
        } else {
            this.setState({ view: 'Add Store' })
        }
    }
    render() {
        return (
            <div className={classes.Gov}>
                <button onClick={this.toggle}>{this.state.view}</button>
                <div>
                    <h1>Add Store</h1>
                    <label>Name:</label>
                    <input type='text' placeholder='Store Name' />
                    <label>Address:</label>
                    <input type='text' placeholder='Store Address' />
                    <label>Phone:</label>
                    <input type='text' placeholder='Store Phone' />
                    <label>Key:</label>
                    <input type='text' placeholder='Store Key' />
                    <button>Add Store</button>
                </div>
                <div>
                    <h1>Remove Store</h1>
                    <label>Key:</label>
                    <input type='text' placeholder='Store Key' />
                    <button>Remove Store</button>
                </div>
            </div>
        );
    }
}

export default Gov;