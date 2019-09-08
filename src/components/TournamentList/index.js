import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getTournamentListState } from '../../redux/selectors';
import { print } from 'graphql';

import { Item } from 'semantic-ui-react'

// Components
import TournamentCard from '../TournamentCard';
// API endpoint
import API from '../../utils/API';
// GraphQL Queries
import { QUERY_ALL, QUERY_BY_VIDEOGAME, QUERY_BY_LOCATION, QUERY_BY_BOTH } from '../../utils/queries';

class TournamentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      game: null,
      location: null,
      nodes: []
    }
  };

  async componentDidMount() {
    await API.post('', {
      query: print(QUERY_ALL),
      variables: {
        "perPage": 10,
        "page": 1,
        "videogameId": 287
      }
    })
    .then(res => {
      this.setState({nodes: res.data.data.tournaments.nodes});
    })
    .catch(err => console.log(err))
  }

  render() {

    return (
      <Item.Group divided>
        {this.state.nodes.map((node, index) => {
          return  <TournamentCard
            key={index}
            id={node.id}
            name={node.name}
            images={node.images}
            details={node.details}
            startAt={node.startAt}
            url={node.url}
            venueAddr={node.venueAddress}
            venueName={node.venueName}
            addrState={node.addrState}
            slug={node.slug}
          />
        })}
      </Item.Group>
    );
  }
}

const mapStateToProps = state => {
  const { byIds, allIds } = state.todos || {};
  const todos =
    allIds && allIds.length
      ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
      : null;
  return { todos };
};

export default TournamentList;