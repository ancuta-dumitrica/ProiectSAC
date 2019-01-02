import React, {Component} from 'react'
import {getAllBooks, post} from "../data/DataUtils";
import { Card } from 'semantic-ui-react'
import "./Favorites.css"

class FavoritesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favoriteBooks: []
        };
    }

    componentDidMount() {
        var arr = [];

        // post("myFavorites", {idUser: localStorage.getItem('userId') }).then(response => {
        //     response.forEach(function(key) {
        //         arr.push({
        //             header: key.title,
        //             meta: key.author
        //         })
        //     });
        // });

        getAllBooks().forEach(function(key) {
            arr.push({
                header: key.title,
                meta: key.author
            })
        });
        this.setState({
            favoriteBooks: arr,
        })

    }

    render() {
        return (
            <div className="favorites">
                <Card.Group centered items={this.state.favoriteBooks} />
            </div>
        )
    }
}

export default FavoritesPage;