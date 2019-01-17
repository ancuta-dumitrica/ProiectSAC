/* Copyright (C) Maria-Ramona Raducu - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Maria-Ramona Raducu <raducu.ramona95@gmail.com>, December 2018
*/

import React, { Component } from 'react';
import './Dashboard.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import AllBooks from "./components/AllBooks";
import Book from "./components/Book";
import FavoritesPage from "./components/FavoritesPage";
import Recommendations from "./components/Recommendations";

class Dashboard extends Component {
 constructor(props) {
    super(props);
  }

  render() {

    return (
            <BrowserRouter forceRefresh>
                <Switch>
                    <Route path="/login" render={ props => <LoginPage {...props}/> } />
                    <Route path="/allBooks" render={ props => (
                        localStorage.getItem('userId')?
                            <AllBooks {...props}/> :
                            <Redirect to="/login"/>
                    )}
                    />

                    <Route path="/book/:idBook" render={ props => (
                        localStorage.getItem('userId')?
                            <Book {...props}/> :
                            <Redirect to="/login"/>
                    )}
                    />

                    <Route path="/favorites" render={ props => (
                        localStorage.getItem('userId')?
                            <FavoritesPage {...props}/> :
                            <Redirect to="/login"/>
                    )}
                    />

                    <Route path="/recommendations" render={ props => (
                        localStorage.getItem('userId')?
                            <Recommendations {...props}/> :
                            <Redirect to="/login"/>
                    )}
                    />
                </Switch>
            </BrowserRouter>
    );
  }
}

export default Dashboard;
