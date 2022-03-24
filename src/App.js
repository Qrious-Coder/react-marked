import React from 'react';
import { useState } from 'react';
import { marked } from 'marked';
import Prism from "prismjs"
import DefaultText from './components/DefaultText';
import LeftPanel from './components/LeftPanel';
import MiddlePanel from './components/MiddlePanel';
import RightPanel from './components/RightPanel';

import {wrappedFullScreen, inputFullScreen, displayFullScreen, htmlFullScreen,
  wrappedMinScreen, inputMinScreen,displayMinScreen, htmlMinScreen,
  zoomInIcon, zoomOutIcon 
} from './components/Styles'
import './App.css';

const App = () => {
  const [input, setInput] = useState({
    text: DefaultText,
    editorMaximized: false,
    htmlMaximized: false,
    displayMaximized: false,
    }); 
  const rawInput = marked.parse(input.text);

  marked.setOptions({
      breaks: true,
      highlight: function (code) {
          return Prism.highlight(code, Prism.languages.javascript, 'javascript');
      }
  });

  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
  return `<a target="_top" href="${href}">${text}</a>`;
  };

  //Zoom
  const EditorClasses = input.editorMaximized ? 
  [wrappedFullScreen, inputFullScreen, zoomInIcon] : 
  [wrappedMinScreen, inputMinScreen, zoomOutIcon];

  const HtmlClasses = input.htmlMaximized ? 
  [wrappedFullScreen,  htmlFullScreen, zoomInIcon] : 
  [wrappedMinScreen, htmlMinScreen, zoomOutIcon];

  const displayClasses = input.displayMaximized ? 
  [wrappedFullScreen,  displayFullScreen, zoomInIcon] : 
  [wrappedMinScreen, displayMinScreen, zoomOutIcon];


  return(
    <div>
      <div className="text-center text-blue-200 font-lg m-5">
        <h1 className="font-link text-4xl">Markdown Previewer</h1>
        <p><small>This project is built with React and Tailwind CSS.</small></p>
        <p><small>View and comment on my code at <a href='https://github.com/Qrious-Coder/react-marker.git' 
          target="_blank"
          rel="noneferrer"
          > Github </a></small></p>
        <p><small>Copyright © 2022 Q_coder. All Rights Reserved.</small></p>
      </div>
      <div id='wrapper' className={ EditorClasses[0] }>
        <LeftPanel input={ input } 
        setInput={ setInput }
        EditorClasses={ EditorClasses }
        />

        <MiddlePanel input={ input } 
        setInput={ setInput }
        rawInput={ rawInput }
        HtmlClasses ={ HtmlClasses }
        /> 

        <RightPanel  input={ input } 
        setInput={ setInput }
        rawInput={ rawInput }
        renderer={ renderer }
        displayClasses ={ displayClasses }
        />
      </div>
     </div>
  );
};

export default App;
