/**
 * 错误边界组件，当load chunk失败或者组件内部错误导致页面白屏时展示
 * @author dongyu
 * created at 2019/12/7
 */

import React from 'react';
import PropTypes from 'prop-types';
// import NotFound from '../NotFound';
// import Raven from 'raven-js';

export default class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static propTypes = {
        children: PropTypes.node,
    }
    
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    
    componentDidCatch(error, errorInfo) {
        // Raven.captureException(error, { extra: errorInfo });
        // Catch errors in any components below and re-render with error message
        this.setState({
            hasError: true,
        });
    }
    
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            // return <NotFound content="页面出错了"/>;
            return <div>页面出错了</div>;
        }
    
        return this.props.children; 
    }
}