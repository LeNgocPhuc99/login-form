import React from 'react';
import { withRouter } from 'react-router';
import { CURRENT_USER } from '../../constants/constants';


function Home(props) {
    return (
        <div className="mt-2">
            <h3>Home page content</h3>
            <p>Hello {sessionStorage.getItem(CURRENT_USER)} !!</p>
        </div>
    );
}

export default withRouter(Home);