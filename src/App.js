import React from "react"
import { AiFillPushpin } from 'react-icons/ai';
import { SiCoderwall } from 'react-icons/si';

import { colors } from "./Constants/constants";
import PinnedBoard from "./Components/PinnedBoard/PinnedBoards";
import OtherBoards from "./Components/OtherBoards/OtherBoards.js"

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Silent Forum</h1>
      </div>
      <div className="paragraphBlocks">
        <p>Pinned boards <AiFillPushpin color={colors.pink} /></p>
      </div>
      <div className="pinnedBoardBlock">
        <PinnedBoard boardName="Games"/>
        <PinnedBoard boardName="Sports" />
        <PinnedBoard boardName="Music" />
        <PinnedBoard boardName="Science"/>
        <PinnedBoard boardName="Movies"/>
      </div>
      <div className="paragraphBlocks">
        <p>Other boards <SiCoderwall color={colors.lightBlue} /></p>
      </div>
      <div className="otherBoardBlock"> 
        <OtherBoards />
      </div>
    </div>
  );
}

export default App;
