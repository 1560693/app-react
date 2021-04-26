import React from 'react';
import PropTypes from 'prop-types';
import './loader.scss';

loader.propTypes = {
    
};

function loader(props) {
    return (
        <div>
            <div id="loader-wrapper">
                <div id="loader">
                    <div class="sk-spinner sk-spinner-cube-grid">
                        <div class="sk-cube"></div>
                        <div class="sk-cube"></div>
                        <div class="sk-cube"></div>
                        <div class="sk-cube"></div>
                        <div class="sk-cube"></div>
                        <div class="sk-cube"></div>
                        <div class="sk-cube"></div>
                        <div class="sk-cube"></div>
                        <div class="sk-cube"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default loader;