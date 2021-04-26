import React from 'react';
import PropTypes from 'prop-types';
import Header_Desktop from '../components/header-desktop';
import Header_Mobile from '../components/header-mobile';

Header.propTypes = {

};

function Header(props) {
    return (
        <header className="site-header header">
            <Header_Desktop />
            <Header_Mobile />
        </header>
    );
}

export default Header;