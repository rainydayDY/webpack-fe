import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from 'components/SvgIcon';
import './index.less';

export default class Loading extends React.Component {

    static propTypes = {
        visible: PropTypes.bool,
        content: PropTypes.string,
    }

    render() {
        const { visible, content } = this.props;

        return (
            <div className={visible ? 'm-loading on' : 'm-loading'}>
                <div className='loading-content'>
                    <SvgIcon iconClass="loading" className="loading-icon"/>
                    <p>{ content || '加载中'}</p >
                </div>
            </div>

        );
    }
}