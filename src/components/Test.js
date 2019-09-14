import React, { Component } from 'react';

const apiEndpoint = 'https://trim-seahorse.cloudvent.net/api';

export default class Test extends Component {
  state = {
    thebook: [],
  }

  async componentDidMount() {
    const thebook = await (await fetch(`${apiEndpoint}/books/ottolenghi.json`)).json()
    this.setState({ thebook })
  }

  render() {
    const { thebook } = this.state;
    console.log(thebook);
    return (
      <div className='main'>
        {thebook.title}
      </div>
    );
  }
}


