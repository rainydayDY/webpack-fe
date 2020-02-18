import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import mapToProps from './mapping';
import device from 'utils/device';
import classNames from 'classnames';
import SvgIcon from 'components/SvgIcon';
import './index.less';

// @connect(null, mapToProps.mapDispatchToProps)
export default class GlobalHeader extends React.Component {

    static propTypes = {
        type: PropTypes.string, // 操作按钮类型
        children: PropTypes.node, // 子节点
        redirectUrl: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
        ]), // 指定跳转到某个页面
        goBack: PropTypes.func,
        push: PropTypes.func,
        location: PropTypes.object,
        needShadow: PropTypes.bool,
    };

    componentWillMount() {
        this.preSet(this.props);
    }

    componentWillUpdate(nextProps) {
        this.preSet(nextProps);
    }

    preSet = (props) => {
        const { children } = props;
        document.title = children;
    }

    // h5头返回操作
    back = () => {
        const { redirectUrl, goBack, push } = this.props;
        if (redirectUrl) {
            push(redirectUrl);
        } else {
            goBack();
        }
    }


    render() {
        const { children, needShadow = false } = this.props; 
        return !device.isWeixin ? (
            <div className={classNames(['header-container', { 'top-shadow': needShadow }])}>
                <span className="back-wrap" role="button" onClick={this.back}>
                    <SvgIcon iconClass="back" className="back-icon" />
                </span>
                <span className="title">{children}</span>
            </div>
        ) : null;
    }
}