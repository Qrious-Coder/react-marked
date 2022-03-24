import { zoomOutIcon, ZoomOutBtnStyles,MPaTextStyles } from './Styles'
const MiddlePanel = ({input, setInput, HtmlClasses, rawInput}) => {
  return (
    <div id="middle-panel" 
    className={(!input.displayMaximized && !input.editorMaximized) ? HtmlClasses[1]: 'invisible'}>
        <h1 className="text-blue-400 inline-flex items-center my-7" >
          {zoomOutIcon}
          <span>HTML OUTPUT</span>
        </h1>
          <button 
            className={`bg-blue-900 hover:bg-blue-100 ${ZoomOutBtnStyles}`} 
            onClick={(value) => setInput({ ...input, htmlMaximized: !input.htmlMaximized })} 
            value={ input.htmlMaximized }>
            {HtmlClasses[2]}
        </button>  
        <div id="preview-html" 
          className={ MPaTextStyles }>
          { rawInput }
        </div>
    </div>

  )
}

export default MiddlePanel;