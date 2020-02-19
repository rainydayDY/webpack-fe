import React from "react";
import ReactDom from "react-dom";
import './index.less';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import Layout from './layouts'
import store from './store'
import { history } from './store/configStore'
import 'utils/svgIcon.js';

ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

// ReactDom.render(
//     <Layout />,
//     document.getElementById("root")
// );