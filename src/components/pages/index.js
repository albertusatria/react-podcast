import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import Podcastlist from './podcast/podcastlist';
import Podcastview from './podcast/podcastview';
import NoRoute from './noroute';

const Pages = (props) => {
    return (
        <Switch>
            <Route exact path="/podcast/:podcastID">
                <Podcastview podcastdata={props.podcastgrid}/>
            </Route>
            <Route exact path="/">
                <Podcastlist podcastgrid={props.podcastgrid} keyword={props.keyword} />
            </Route>
            <Route component={NoRoute}/>
        </Switch>
    );
}

export default Pages;
