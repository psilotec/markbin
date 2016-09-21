/**
 * Created by Scott on 8/2/2016.
 */
import React from 'react'

import Header from './header';

export default (props) => {
    return (
    <div>
        <Header />
        {props.children}
    </div>
    );
};