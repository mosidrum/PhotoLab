import './favicon.ico';
import React from 'react';


class logo extends React.Component {
    render () {
       return (
            <div>
                <img src={favicon} alt="logo"/>
            </div>
        );
    }
}

export default logo