import React, {Component} from 'react'
import {post} from "../data/DataUtils";
import { Card } from 'semantic-ui-react'
import "./Favorites.css"
import MyMenu from "./MyMenu";
import Icon from "../../node_modules/semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import Segment from "../../node_modules/semantic-ui-react/dist/commonjs/elements/Segment/Segment";
import Header from "../../node_modules/semantic-ui-react/dist/commonjs/elements/Header/Header";

class Recommendations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favoriteBooks: [],
            activeItem: 'favorites'
        };
    }

    componentDidMount() {
        var arr = [];

        post("recomandation", {idUser: localStorage.getItem('userId') }).then(response => {
            response.forEach(function(key) {
                arr.push({
                    header: key.title,
                    meta: key.author
                })
            });
        });

        this.setState({
            favoriteBooks: arr,
        })

    }

    render() {
        return (
            <div className='all'>
                <Segment inverted color='teal'>
                    <Header as='h1'>
                        Book Recommender 📚
                    </Header>
                </Segment>
                <MyMenu {...this.props} activeItem={this.state.activeItem }/>

                <div className="favorites">
                    <Card.Group centered items={this.state.favoriteBooks} />
                </div>

                <Segment className='footer' inverted color='teal'>
                    <Icon name='copyright outline' /> 2019 Proiect SAC
                </Segment>
            </div>
        )
    }
}

export default Recommendations;