import React, { Component } from 'react';
import { orgName } from '../config';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <h1 className="icon icon-logo"><span className="sr-only">{orgName}</span></h1>
                    <a href="http://www.divio.com">Visit us</a>
                    <div className="lead">
                        <div>
                            Lorem Ipsum is simply dummy text of the <br />
                            printing and typesetting industry.
                        </div>
                        <small>Lorem Ipsum is simply dummy text</small>
                    </div>
                </div>
            </div>
        )
    }
}
