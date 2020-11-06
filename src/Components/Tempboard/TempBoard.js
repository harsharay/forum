import React, { useEffect } from 'react'

function TempBoard(props) {

    useEffect(() => {
        console.log(props)
    },[])


    return (
        <div>
            <h1>Temporary</h1>
        </div>
    )
}

export default TempBoard;
