import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';

// Components
import TournamentList from '../../components/TournamentList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      game: null,
      location: null
    };
  }

  render() {
    return (
      <Container fluid>
        <TournamentList/>
      </Container>
    )
  }
}

export default Home;