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
            recommendations: [],
            activeItem: 'recommendations'
        };
    }

    componentDidMount() {
        let arr = [];

        post("recomandation", {idUser: localStorage.getItem('userId') }).then(response => {
            response.forEach(function(key) {
                arr.push({
                    header: key.title,
                    meta: key.author,
                    href: `http://127.0.0.1:3000/book/${key.id}`
                })
            });

            this.setState({
                recommendations: arr
            });
        });
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

                {!this.state.recommendations.length ? "No recommendations for you. Mark your favorite books so we can learn your book tastes :D." :
                    <div className="favorites">
                        <Card.Group centered items={this.state.recommendations}/>
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

export default Recommendations;