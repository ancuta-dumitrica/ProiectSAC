import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class MyMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu compact icon='labeled'>
                <Menu.Item name='allBooks' active={activeItem === 'allBooks'} onClick={this.handleItemClick}>
                    <Icon name='book' />
                    All Books
                </Menu.Item>

                <Menu.Item
                    name='favorites'
                    active={activeItem === 'favorites'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='favorite' />
                    Favorites
                </Menu.Item>
            </Menu>
        )
    }
}