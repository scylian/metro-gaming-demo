import gql from 'graphql-tag';

const QUERY_ALL = gql`
  query Tournaments($perPage: Int!, $page: Int!) {
    tournaments(query: {
      perPage: $perPage
      page: $page
      sortBy: "startAt asc"
      filter: {
        past: false
      }
    }) {
      nodes {
        id
        name
        images(type: "profile") {
          url
        }
        details
        startAt
        url
        venueAddress
        venueName
        addrState
        slug
      }
      pageInfo { totalPages }
    }
  }`

const QUERY_BY_VIDEOGAME = gql`
  query TournamentsByVideogame($perPage: Int!, $page: Int!, $videogameId: ID!) {
    tournaments(query: {
      perPage: $perPage
      page: $page
      sortBy: "startAt asc"
      filter: {
        past: false
        videogameIds: [
          $videogameId
        ]
      }
    }) {
      nodes {
        id
        name
        images(type: "profile") {
          url
        }
        details
        startAt
        url
        venueAddress
        venueName
        addrState
        slug
      }
      pageInfo { totalPages }
    }
  }`

const QUERY_BY_LOCATION = gql`
  query TournamentsByState($perPage: Int!, $page: Int!, $state: String!) {
    tournaments(query: {
      perPage: $perPage
      page: $page
      sortBy: "startAt asc"
      filter: {
        past: false
        addrState: $state
      }
    }) {
      nodes {
        id
        name
        images(type: "profile") {
          url
        }
        details
        startAt
        url
        venueAddress
        venueName
        addrState
        slug
      }
      pageInfo { totalPages }
    }
  }`

const QUERY_BY_BOTH = gql`
  query TournamentsByVideogame($perPage: Int!, $page: Int!, $videogameId: ID!, $state: String!) {
    tournaments(query: {
      perPage: $perPage
      page: $page
      sortBy: "startAt asc"
      filter: {
        past: false
        addrState: $state
        videogameIds: [
          $videogameId
        ]
      }
    }) {
      nodes {
        id
        name
        images(type: "profile") {
          url
        }
        details
        startAt
        url
        venueAddress
        venueName
        addrState
        slug
      }
      pageInfo { totalPages }
    }
  }`

export { QUERY_ALL, QUERY_BY_BOTH, QUERY_BY_LOCATION, QUERY_BY_VIDEOGAME };