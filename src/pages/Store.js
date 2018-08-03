import React, { Component } from 'react';
import classes from './Store.module.css';
import web3 from './../ethereum/Web3';
import hajj from '../ethereum/Hajj';
import EthereumQRPlugin from 'ethereum-qr-code';

let accounts = [];
let itemId = 2;
let item = {};

class Store extends Component {
    state = {
        iName: '',
        iPrice: 0,
        exDate: ''
    }
    async componentDidMount() {
        accounts = await web3.eth.getAccounts();
    }
    addItem = async () => {
        let iName = this.state.iName;
        let iPrice = this.state.iPrice;
        let exDate = this.state.exDate;

        const qr = new EthereumQRPlugin()

        const qrCode = qr.toCanvas({
            to: accounts[0],
            gas: 35000,
            value: iPrice,
        }, {
                selector: '#my-qr-code',
            })
        await hajj.methods.addItem(iName, iPrice, exDate).send({
            from: accounts[0]
        });
        itemId += 1;
        item = await hajj.methods.items(itemId).call();
        
    }
    render() {
        return (
            <div>
                <h1>Add Item</h1>
                <div className={classes.contaner}>
                    <div className={classes.Gov}>
                        <div>
                            <label>Name</label>
                            <input type='text' placeholder='Item Name' onChange={(e) => { this.setState({ iName: e.target.value }) }} />
                            <label>Price</label>
                            <input type='text' placeholder='Item Price' onChange={(e) => { this.setState({ iPrice: e.target.value }) }} />
                            <label>Expire Date</label>
                            <input type='text' placeholder='Expire Date' onChange={(e) => { this.setState({ exDate: e.target.value }) }} />
                            <button onClick={this.addItem}>Add Item</button>
                        </div>
                    </div>
                    <div className={classes.code} id='my-qr-code'>

                    </div>
                </div>
            </div>
        );
    }
}

export default Store;