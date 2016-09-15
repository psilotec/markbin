/**
 * Created by Scott on 9/14/2016.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
    componentDidMount() {
        // Render the Blaze accounts form then find the div that was
        // just rendered in the 'render' method and place the
        // Blaze accounts form in that div
        this.view = Blaze.render(Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount() {
        // Go find the forms we created and destroy them
        // Forms need to be cleaned up manually
        Blaze.remove(this.view);
    }

    render() {
        return (
            <div ref="container"></div>
        );
    }
}

export default Accounts;