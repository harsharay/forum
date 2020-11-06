import React from "react"

import "./PinnedBoards.css"

const PinnedBoard = ({ boardName }) => {
    return (
        <div className="pinnedBoardComponent">
            <h2>{boardName}</h2>
        </div>
    )
}

export default PinnedBoard;