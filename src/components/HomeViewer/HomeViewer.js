import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import App from 'components/App';
import Test from 'components/Test';
const HomeViewer = props => {
    return (
        <Router>
            <React.Fragment>
            <Route exact path="/" component={Test} />
            <Route path="/Viewer" render={() => <App {...props}/>} />
            </React.Fragment>
        </Router>
    );
};

export default HomeViewer;