import React from 'react';
import './index.less';

export default class DetailPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number1: '',
            number2: '',
            val: 'ddddd',
        };
    }

    handleChange = (param, val) => {
        this.setState({
            [param]: val,
        });
    }


    componentDidMount() {
        console.log('ceessssss');
    }

    render() {
        const { number1, number2, val } = this.state;
        return (
            <div className="detail-wrap">
                <span>详情页</span>
                <h1>hello</h1>
                <h3>be happy jjjjj</h3>
                <input type="text" placeholder="请输入" value={number1} onChange={(e) => this.handleChange('number1', e.target.value)}/>
                <input type="text" placeholder="请输入" value={number2} onChange={(e) => this.handleChange('number2', e.target.value)}/>
                {/* <span>{number1 + number2}</span> */}
                <h1>hello{val}</h1>
                <h2>lllljjjj</h2>
            </div>
        );
    }
}

