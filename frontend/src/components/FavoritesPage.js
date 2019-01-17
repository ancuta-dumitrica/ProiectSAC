import React, {Component} from 'react'
import {getAllBooks, post} from "../data/DataUtils";
import { Card } from 'semantic-ui-react'
import "./Favorites.css"
import MyMenu from "./MyMenu";
import Icon from "../../node_modules/semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import Segment from "../../node_modules/semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import Header from "../../node_modules/semantic-ui-react/dist/commonjs/elements/Header/Header";

class FavoritesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favoriteBooks: [],
            activeItem: 'favorites'
        };
    }

    componentDidMount() {
        let arr = [];

        post("myFavorites", {idUser: localStorage.getItem('userId') }).then(response => {
            response.forEach(function(key) {
                arr.push({
                    header: key.title,
                    meta: key.author,
                    href: `http://127.0.0.1:3000/book/${key.id}`
                })
            });

            this.setState({
                favoriteBooks: arr
            });
        });


    }

    onclick(id) {
        this.props.history.push('/book/' + id)
    }

    render() {
        return (
            <div className='all'>
                <div className='header'>
                    <Segment  inverted color='teal'>
                        <Header as='h1'>
                            Book Recommender 📚
                        </Header>
                    </Segment>
                </div>
                <MyMenu {...this.props} activeItem={this.state.activeItem }/>

                {!this.state.favoriteBooks.length ? "No favorites." :
                    <div className="favorites">
                        <Card.Group centered items={this.state.favoriteBooks}/>
                    </div>
                }

                <div className='footer'>
                    <Segment inverted color='teal'>
                        <Icon name='copyright outline' /> 2019 Proiect SAC
                    </Segment>
                </div>
            </div>
        )
    }
}

export default FavoritesPage;