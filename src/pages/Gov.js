import React,{ Component } from 'react';
import classes from './Gov.module.css';
import web3 from './../ethereum/Web3';
import hajj from '../ethereum/Hajj';
import Dash from '../assets/Dash.png';

let accounts = [];


class Gov extends Component {
    state = {
        view:'Remove Store',
        manager: '',
        sName: '',
        sAddress:'',
        sPhone: '',
        sKey: ''
    }
    async componentDidMount() {
        const manager = await hajj.methods.Gov().call();
        accounts = await web3.eth.getAccounts();
        console.log(accounts);
        // const players = await lottery.methods.getPlayers().call();
        // const balance = await web3.eth.getBalance(lottery.options.address);
        this.setState({ manager });
    }
    addStore = async() => {
        let sName = this.state.sName;
        let sAddress = this.state.sAddress;
        let sPhone = this.state.sPhone;
        let sKey = this.state.sKey;
        await hajj.methods.addStore(sName, sAddress, sPhone, sKey).send({
        from: accounts[0]
        });
    }
    removeStore = async() => {
        let sKey = this.state.sKey;
        await hajj.methods.removeStore(sKey).send({
            from: accounts[0]
        });
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
            <div className={classes.contaner}>
                <div className={classes.image}>
                    <img src={Dash} />
                </div>
                <div className={classes.Gov}>
                    <h1>Dashboard</h1>
                    <p>System Manager: {this.state.manager}</p>
                    <button onClick={this.toggle}>{this.state.view}</button>
                    {
                        (this.state.view === 'Add Store') ?
                            <div>
                                <h1>Remove Store</h1>
                                <label>Key</label>
                                <input type='text' placeholder='Store Key' onChange={(e) => { this.setState({ sKey: e.target.value }) }} />
                                <button onClick={this.removeStore}>Remove Store</button>
                            </div>
                            :
                            <div>
                                <h1>Add Store</h1>
                                <label>Name</label>
                                <input type='text' placeholder='Store Name' onChange={(e) => { this.setState({ sName: e.target.value }) }} />
                                <label>Address</label>
                                <input type='text' placeholder='Store Address' onChange={(e) => { this.setState({ sAddress: e.target.value }) }} />
                                <label>Phone</label>
                                <input type='text' placeholder='Store Phone' onChange={(e) => { this.setState({ sPhone: e.target.value }) }} />
                                <label>Key</label>
                                <input type='text' placeholder='Store Key' onChange={(e) => { this.setState({ sKey: e.target.value }) }} />
                                <button onClick={this.addStore}>Add Store</button>
                            </div>
                    }

                </div>
            </div>
        );
    }
}

export default Gov;