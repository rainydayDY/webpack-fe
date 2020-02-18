import React, { Suspense } from 'react';
import GlobalHeader from 'components/GlobalHeader';
import Loading from 'components/Loading';
import { Route, Switch, withRouter } from 'react-router-dom'
import routeConfig from '../router';

@withRouter
export default class Layout extends React.Component {

    render() {
        return <div>
            <GlobalHeader/>
            <Suspense>
                <Switch fallback={<Loading />}>
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
        </div>;
    }
}