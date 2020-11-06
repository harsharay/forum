import React, { useEffect } from "react"

import "./SingleBoard.css"


const SingleBoard = ({ boardName, author, itemsCount, lastPostDate }) => {

    return (
        <div className="singleBoardComponent">
            <h4>{boardName}</h4>
            <div className="singleBoardSubHeading">
                <small><i>By: {author}</i></small>
                <small>/ <i>Items: {itemsCount}</i></small>
                {/* <small>{lastPostDate}</small> */}
            </div>
        </div>
    )
}

export default SingleBoard;