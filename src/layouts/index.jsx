import React, { Suspense, Fragment } from 'react';
import { hot } from 'react-hot-loader/root';
import GlobalHeader from 'components/GlobalHeader';
import Loading from 'components/Loading';
import ErrorBoundary from 'components/ErrorBoundary';
import { Route, Switch, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import routeConfig from '../router';
import device from 'utils/device';

@hot
@withRouter
export default class Layout extends React.Component {

    
    static propTypes = {
        location: PropTypes.object,
    }

    render() {
        const { location } = this.props;
        const currentRoute = routeConfig.filter(item => item.path === location.pathname)[0];
        const style = !device.isWeixin ? {
            paddingTop: `${132/108}rem`,
        } : null;
        return <Fragment>
            <GlobalHeader>{currentRoute ? currentRoute.title : '无标题'}</GlobalHeader>
            <div style={style}>
                <ErrorBoundary>
                    <Suspense fallback={<Loading />}>
                        <Switch>
                        {
                            routeConfig.map((route, index) => 
                            <Route
                                key={route.key || index}
                                path={route.path}
                                exact={route.exact}
                                render={(props) => <route.component {...props} key={route.key || index}/>}
                            />)
                        }
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
            </div>
        </Fragment>;
    }
}