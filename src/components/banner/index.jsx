import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BannerImg from '../../image/img.jpg';
import './styles.scss';

Banner.propTypes = {
    
};

function Banner(props) {
    return (
        <article className="post post--overlay post--overlay-bottom post--overlay-banner">
            <div className="post__thumb post__thumb--overlay object-fit">
                <Link to="/">
                    <img src={BannerImg} alt="File not found" />
                </Link>
            </div>
            <div className="post__text inverse-text">
                <div className="post__text-wrap">
                    <div className="post__text-inner">
                        <Link href="" class="post__cat post__cat-style">travel</Link>
                        <h3 className="post__title f-36 f-w-900 bg-title">
                            <Link to="/">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</Link>
                        </h3>
                    </div>
                </div>
            </div>
            <Link to="/#" className="link-overlay" />
        </article>
    );
}

export default Banner;