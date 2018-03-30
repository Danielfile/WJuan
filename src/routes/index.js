/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
// import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';

import Dashboard from '../components/dashboard/Dashboard';

import SearchTable from '../components/search/SearchTable';

import RecDay from '../components/recommend/RecDay';

import ModuleSubmit from '../components/submit/ModuleSubmit';
import SubDay from '../components/submit/SubDay';

import HisPages from '../components/savestars/HisPages';

import AddStars from '../components/stars/AddStars';

import AuthBasic from '../components/download/Downloading';
import AuthBasic2 from '../components/download/Downloaded';
import AuthBasic3 from '../components/download/Rubbish';

import Bundle from '../components/widget/Bundle';
import Wysiwyg from 'bundle-loader?lazy!../components/my/Wysiwyg';  // 按需加载富文本配置
import Drags from '../components/my/Draggable';
import Gallery from '../components/my/Gallery';

import CloudDisk from '../components/cloud';

const WysiwygBundle = (props) => (
    <Bundle load={Wysiwyg}>
        {(Component) => <Component {...props} />}
    </Bundle>
);

export default class CRouter extends Component {
    requireAuth = (permission, component) => {
        const { auth } = this.props;
        const { permissions } = auth.data;
        // const { auth } = store.getState().httpData;
        if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
        return component;
    };
    render() {
        return (
            <Switch>
				<Route exact path="/app/dashboard/index" component={Dashboard} />
			
			    <Route exact path="/app/search/SearchTable" component={SearchTable} />
				
				<Route exact path="/app/recommend/RecDay" component={RecDay} />
				
				<Route exact path="/app/submit/ModuleSubmit" component={ModuleSubmit} />
				<Route exact path="/app/submit/SubDay" component={SubDay} />
			
                <Route exact path="/app/savestars/HisPages" component={HisPages} />
				
				<Route exact path="/app/stars/AddStars" component={AddStars} />

                <Route exact path="/app/my/wysiwyg" component={WysiwygBundle} />
                <Route exact path="/app/my/drags" component={Drags} />
                <Route exact path="/app/my/gallery" component={Gallery} />

                <Route exact path="/app/download/Downloading" component={AuthBasic} />
                <Route exact path="/app/download/Downloaded" component={AuthBasic2} />
                <Route exact path="/app/download/Rubbish" component={AuthBasic3} />               

                <Route exact path="/app/cloud" component={CloudDisk} />

                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}