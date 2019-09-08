import React, { Component } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

import logo from '../../assets/logos/metro-logo.png';

// Dropdown Data
import videogames from '../../assets/data/videogames';
import states from '../../assets/data/states';

class HeaderBar extends Component {
  state = {}
  
  getVideogames = () => {
    let options = videogames.map(videogame => {
      let obj = {
        text: videogame.name,
        value: videogame.id
      }

      return obj;
    })

    return options;
  }

  getStates = () => {
    let options = states.map(state => {
      let obj = {
        text: state.name,
        value: state.code
      }

      return obj
    })

    return options;
  }

  dropdownOnChange = (e, {value}) => {
    console.log(value);
  }

  render() {

    return (
      <Menu stackable>
        <Menu.Item>
          <img src={logo} alt="Metro Gaming Logo" />
        </Menu.Item>

        <Dropdown item placeholder="Filter by Videogame" scrolling options={this.getVideogames()} onChange={this.dropdownOnChange} />

        <Dropdown item placeholder="Filter by States" scrolling options={this.getStates()} onChange={this.dropdownOnChange} />

      </Menu>
    )
  }
}

export default HeaderBar;