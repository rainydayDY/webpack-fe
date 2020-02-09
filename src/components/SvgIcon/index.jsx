/**
 * svg图标组件
 * @author dongyu
 * created at 2018/10/30
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.less';

export default class SvgIcon extends React.Component {

    static propTypes = {
        iconClass: PropTypes.string.isRequired,
        className: PropTypes.string,
    }

    render() {
        const { iconClass, className } = this.props;
        return (
            <svg className={classNames(['svg-icon', className])} aria-hidden="true">
                <use xlinkHref={`#icon-${iconClass}`}></use>
            </svg>
        );
    }
}

