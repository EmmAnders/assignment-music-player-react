import { v4 as uuidv4 } from "uuid";

import egilRemix from "./songs/egil.mp3"
import cover1 from "./cover/san-andreas.png"
import cover2 from "./cover/sandersen.png"

function chillHop() {
  return [
    {
      name: "Egil Remix - New Kick",
      cover: cover1,
      artist: "Andreas Sandersen",
      audio: egilRemix,
   
      id: uuidv4(),
      active: true,
    },
    {
      name: "Raw Master",
      cover: cover2,
      artist: "Andreas Sandersen",
      audio: egilRemix,
   
      id: uuidv4(),
      active: false,
    },
 
    //ADD MORE HERE
  ];
}

export default chillHop;