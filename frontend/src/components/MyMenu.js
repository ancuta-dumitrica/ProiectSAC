import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import './MyMenu.css'

export default class MyMenu extends Component {

    constructor(props) {
        super(props);

        this.state = { activeItem: props.activeItem };
    }

    handleItemClick = (e, { name }) => {
        this.setState({activeItem: name});
        this.props.history.push(`/${name}`);
    };


    render() {
        const { activeItem } = this.state

        return (
            <div className='styleit'>
                <Menu widths={3} color='teal' icon='labeled'>
                    <Menu.Item name='allBooks' active={activeItem === 'allBooks'} onClick={this.handleItemClick}>
                        <Icon name='book' />
                        All Books
                    </Menu.Item>

                    <Menu.Item
                        name='favorites'
                        active={activeItem === 'favorites'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name='like' />
                        Favorites
                    </Menu.Item>

                    <Menu.Item
                        name='recommendations'
                        active={activeItem === 'recommendations'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name='favorite' />
                        Recommendations
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}