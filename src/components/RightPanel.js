import React from 'react';
import { marked } from 'marked';
import {zoomOutIcon, ZoomOutBtnStyles, RPaTextStyles} from './Styles'

const RightPanel = ({input, setInput, displayClasses, rawInput, renderer}) => {
  return(
  <div id="right-panel" 
    className={ (!input.editorMaximized && !input.htmlMaximized) ? displayClasses[1] :'invisible' }>
      <h1 className="text-yellow-400 inline-flex items-center my-7">
        {zoomOutIcon}
        <span>DISPLAY OUTPUT</span>
      </h1>
    <button 
          className={`bg-yellow-800 hover:bg-yellow-300 ${ZoomOutBtnStyles}`} 
         onClick={ (value) => setInput({ ...input, displayMaximized: !input.displayMaximized }) } 
         value={ input.htmlMaximized }>
         {displayClasses[2]}
      </button>  
      <div 
        id="preview" 
        className={ RPaTextStyles }
        dangerouslySetInnerHTML={{__html: marked(rawInput, {renderer: renderer})
      }}>
      </div>
  </div>
  )
}

export default RightPanel;