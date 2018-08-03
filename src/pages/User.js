import React, { Component } from 'react';
import classes from './Gov.module.css';
import web3 from './../ethereum/Web3';
import hajj from '../ethereum/Hajj';
import EthereumQRPlugin from 'ethereum-qr-code';

let accounts = [];
let item = {};


class User extends Component {
    state = {
        itemId: '',
        item: {}
    }
    async componentDidMount() {
        accounts = await web3.eth.getAccounts();
        item = await hajj.methods.items(1).call();
        await console.log(item.price);
        // later in code
        const qr = new EthereumQRPlugin()

        const qrCode = qr.toCanvas({
            to: await item.owner,
            gas: 21000,
            value: await item.price,
        }, {
                selector: '#my-qr-code',
            })
    }
    render() {
        return (
            <div className={classes.Gov}>
                <div id="my-qr-code"></div>
            </div>
        );
    }
}

export default User;