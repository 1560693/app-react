import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

block_heading.propTypes = {
    
};

function block_heading(props) {
    return (
        <div className="block-heading block-heading--style block-heading--line">
            <h4 className="block-heading__title f-30 f-w-700">
                LATEST BLOG POSTS          
            </h4>
        </div>
    );
}

export default block_heading;