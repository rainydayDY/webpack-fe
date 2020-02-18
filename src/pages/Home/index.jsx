import React from 'react';
import { connect } from 'react-redux';
import mapToProps from './mapping';
import PropTypes from 'prop-types';

@connect(mapToProps.mapStateToProps, mapToProps.mapDispatchToProps)
export default class HomePage extends React.Component {


    componentDidMount() {
    }

    static propTypes = {
        push: PropTypes.func,
    }

    render() {
        const { push } = this.props;
        return (
            <div>
                <button onClick={() => push('/detail')}>去往详情页</button>
            </div>
        );
    }
}

