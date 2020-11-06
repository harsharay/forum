import React, { useState, useEffect, useRef } from "react"

import SingleBoard from "../SingleBoard/SingleBoard";
import BoardSeperator from "../BoardSeperator/BoardSeperator"
import "./OtherBoards.css"

const OtherBoards = () => {

    // let finalDate = useRef("");

    // useEffect(() => {
    //     let getCurrentDate = new Date()

    //     let currentDate = getCurrentDate.getDate()
    //     let currentMonth = getCurrentDate.getMonth()
    //     let currentYear = getCurrentDate.getFullYear()

    //     finalDate.current = `${currentDate}/${currentMonth}/${currentYear}`
    //     console.log(finalDate.current)

    // }, [])

    const [data, setData] = useState([
        {
            name: "First Board",
            author: "Harsha",
            itemsCount: "89000",
            // lastPostDate: finalDate.current
        },
        {
            name: "Second Board",
            author: "Siddhu",
            itemsCount: "119229",
            // lastPostDate: new Date()
        },
        {
            name: "Third Board",
            author: "Gerrard",
            itemsCount: "14020",
            // lastPostDate: new Date()
        },
        {
            name: "Fourth Board",
            author: "Hendo",
            itemsCount: "232322",
            // lastPostDate: new Date()
        },
    ])

    return (
        <>
            {data.map((board, index) => {
                return (
                    <React.Fragment key={index}>
                        <SingleBoard boardName={board.name} author={board.author} itemsCount={board.itemsCount} lastPostDate={board.lastPostDate} />
                        <BoardSeperator />
                    </React.Fragment>
                )
            })}
             
        </>
    )
}

export default OtherBoards;