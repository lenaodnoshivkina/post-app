import React from 'react';

import './post-list-item.css'

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-label">
                Hello world!
            </span>
            <div className="d-flex justify-content align-items-center">
               <button 
                    className="btn-star btn-sm"
                    type="button"
                >
                    <i className="fa fa-star"></i>
                </button>
                <button 
                    className="btn-trash btn-sm"
                    type="button"
                >
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )
}
export default PostListItem;