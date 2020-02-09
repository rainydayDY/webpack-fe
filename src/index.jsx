import React from "react";
import ReactDom from "react-dom";
import './index.less';
import 'utils/svgIcon.js';
import SvgIcon from 'components/SvgIcon';
import cakeImg from 'assets/img/cake.png';

ReactDom.render(
    <div>
        <h4>hello webpack!</h4>
        <p>hello loader!</p>
        <img src={cakeImg} alt="cake"/>
        <SvgIcon iconClass="phone"/>
    </div>,
    document.getElementById("root")
);