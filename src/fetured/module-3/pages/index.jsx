import React, { useState, useEffect } from 'react';
import Block_heading from '../components/block-heading';
import { Link } from 'react-router-dom';

function Module_3(props) {

    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(6);

    const showLoadMore = () => {
        setVisible((addItems) => addItems + 3);
    }

    useEffect(() => {
        fetch('http://localhost:3000/posts')
        
        .then((res) => res.json())
        .then((data) => setItems(data))
    }, []);

    return (
        <div className="mnmd-block mnmd-block--fullwidth featured-module-3">
            <div className="mnmd-block__inner">
                <Block_heading />
                <div className="posts-list flex-box flex-box-3i flex-space-30">
                    {items.slice(0, visible).map((item) => (
                        <article className="post post--vertical">
                            <div className="post__thumb object-fit">
                                <Link to="/">
                                    <img src={item.thumbUrl} alt={item.title}/>
                                </Link>
                            </div>
                            <div className="post__text">
                                <h3 className="post__title f-24 f-w-700">
                                    <Link>
                                        {item.title}
                                    </Link>
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
                <nav className="pagination text-center">
                    <button onClick={showLoadMore} className="btn-defaule btn-loadmore">Load More</button>
                </nav>
            </div>
        </div>
    );
}

export default Module_3;