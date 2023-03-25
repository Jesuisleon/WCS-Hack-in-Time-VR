import Frame from "./Frame";
import React from "react";
import { useState } from "react";


const Theme = ({ image, title, setThemeSelected }) => {
  const [ShowFrame, setShowFrame] = useState(title)

  return (

<div
      onMouseOver={() => setShowFrame(title)}
      onMouseOut={() => setShowFrame(null)}
      onClick={() => setThemeSelected(title)}
      className={`period ${title}`}
      id="theme">
      <img src={image} alt={title} />
      {ShowFrame && <Frame
                    theme={ShowFrame}
                />}
      
    </div>
  )
}

export default Theme;