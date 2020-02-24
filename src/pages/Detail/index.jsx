import React from 'react';
import './index.less';

export default class DetailPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number1: '',
            number2: '',
        }
    }

    handleChange = (param, val) => {
        this.setState({
            [param]: val,
        });
    }


    componentDidMount() {
    }

    render() {
        const { number1, number2 } = this.state;
        return (
            <div className="detail-wrap">
                <span>详情页</span>
                <h1>hello</h1>
                <h3>be happy jjjjj</h3>
                <input type="text" placeholder="请输入" value={number1} onChange={e => this.handleChange('number1', e.target.value)}/>
                <input type="text" placeholder="请输入" value={number2} onChange={e => this.handleChange('number2', e.target.value)}/>
                <span>{number1 + number2}</span>
            </div>
        );
    }
}

