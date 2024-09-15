import React, {useContext, useRef}from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext"; //audioRef nhi aaa raha tha bcs playerContext ek name export tha


const App = () => {

  const { audioRef,track } = useContext(PlayerContext);


  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">  {/*  height 90% dono mein laag gaya but flex ka karan dono ik dusra ka side mein aa gaya */   }
        <Sidebar />
        <Display />
      </div>
      <Player /> {/* Player bhar hai un dono sa tho ya dono ka nicha aa gaya */}
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
