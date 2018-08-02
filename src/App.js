import React, { Component } from 'react';
import './App.css';
import web3 from './ethereum/Web3';
import hajj from './ethereum/Hajj';
import Gov from './pages/Gov';


class App extends Component {
  state = {
    gov: ''
  };

  async componentDidMount() {
    const gov = await hajj.methods.Gov().call();
    // const players = await lottery.methods.getPlayers().call();
    // const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({ gov });
  }

  // onSubmit = async (e) => {
  //   e.preventDefault();
  //   const accounts = await web3.eth.getAccounts();
  //   this.setState({ message: 'Transaction Pending...' });
  //   await lottery.methods.enter().send({
  //     from: accounts[0],
  //     value: web3.utils.toWei(this.state.value, 'ether')
  //   });

  //   this.setState({ message: 'You have been Entered the Lottery, Good Luck!' });
  // };

  // onClick = async (e) => {
  //   const accounts = await web3.eth.getAccounts();
  //   this.setState({ message: 'Transaction Pending...' });
  //   await lottery.methods.pickWinner().send({
  //     from: accounts[0]
  //   });
  //   this.setState({ message: 'the winner has been Picked!' });
  // };

  render() {
    console.log(web3.version);
    web3.eth.getAccounts().then(console.log);
    console.log(this.state.gov);
    return (
      <div>
        <Gov />
        {/* <h2>Lottery Club</h2>
        <p>This Contract is managed by {this.state.manager}.
        there are currently {this.state.players.length} people entered,
        competing to win {web3.utils.fromWei(this.state.balance, 'ether')} ether !</p>

        <hr />
        <form onSubmit={this.onSubmit}>
          <h4>Let's Play</h4>
          <div>
            <label>Amount of Ether to Enter</label>
            <input value={this.state.value} onChange={e => this.setState({ value: e.target.value })}></input>
          </div>
          <button>Enter</button>
        </form>
        <hr />
        <h4>Pick a Winner!</h4>
        <button onClick={this.onClick}>Pick One</button>
        <hr />
        <h1>{this.state.message}</h1> */}

      </div>
    );
  }
}

export default App;