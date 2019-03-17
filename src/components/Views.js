import React, { Component } from 'react';

class Views extends Component {

  state={
    soccer: {}
  }

  componentDidMount() {
    const itemidLeague = this.props.match.param.itemidLeague
    axios.get(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${itemidLeague}`)
    .then(res => {
        this.setState({ soccer: res.data })
        console.log(res.data);
    })
  }

  render() {
    const { soccer } = this.state
    return (
      <div>
        <h1>{soccer.strTeam}</h1>
      </div>
    );
  }
}

export default Views;