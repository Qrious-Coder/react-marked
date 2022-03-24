
import { editIcon, clearIcon, 
  LPaTextStyles,ZoomOutBtnStyles,
  clearbtnStyles, toolbarStyles } from './Styles'

const LeftPanel = ({input, setInput, EditorClasses}) => {
  return(
    <div id="left-panel" 
      className={ (!input.htmlMaximized && !input.displayMaximized) ? 
      EditorClasses[1] : 'invisible'} >
      <div id="toolbar" className={toolbarStyles}>
        <h1 className="inline-flex items-center">
          { editIcon }
          <span>EDIT INPUT</span>
        </h1>
        <button id="clearBtn" 
          className={ clearbtnStyles }
          onClick={ (value) => setInput({...input,text:''}) } 
          value={input.text }>
          { clearIcon }
          <span>Clear</span>
        </button>
          <button id="zoom-btn" 
            className={`bg-green-900 hover:bg-green-100 ${ZoomOutBtnStyles}`} 
            value={ input.editorMaximized }
            onClick={ (value) => setInput({ ...input, editorMaximized: !input.editorMaximized }) } 
          >
            {EditorClasses[2]}
        </button>     
      </div> 
      <div>
        <textarea
            className={LPaTextStyles}
            id="editor" 
            placeholder="write your markup here..."
            value={ input.text }
            onChange ={(e) => setInput({...input, text: e.target.value})} 
        />
        </div>
    </div> 
  )
}

export default LeftPanel;