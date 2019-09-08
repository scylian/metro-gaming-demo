import React, { Component } from 'react';
import { Image, Item, Label } from 'semantic-ui-react';

class TournamentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {

    return(
      <Item>
        <Item.Image src={this.props.images.length > 0 ? this.props.images[0].url : 'https://react.semantic-ui.com/images/wireframe/image.png'} />

        <Item.Content>
          <Item.Header as='a'>{this.props.name}</Item.Header>
          <Item.Meta>
            <span className='cinema venue-name'>{this.props.venueName}</span>
          </Item.Meta>
          <Item.Meta>
            <span className='cinema venue-address'>{this.props.venueAddr}</span>
          </Item.Meta>
          <Item.Description>{this.props.details ? this.props.details : 'No description available.'}</Item.Description>
          {/* <Item.Extra>
            <Label>IMAX</Label>
            <Label icon='globe' content='Additional Languages' />
          </Item.Extra> */}
        </Item.Content>
      </Item>
    )
  }
}

export default TournamentCard;