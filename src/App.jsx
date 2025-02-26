import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import './App.css'
import { marked } from 'marked';
import { useState } from 'react';
function App() {
  const [markdown, setMarkdown] = useState('');
  return (
    <>
         <div className='app'>
            <h1 className='title'>Markdown Previewer</h1>
            <div className="content-wrapper">
              <div className="editor-container">

                <FormGroup>
                  <FormLabel>Editor</FormLabel>
                  <FormControl as ="textarea" className="editor" placeholder="Write your markdown here" value={markdown} onChange={(e)=>setMarkdown(e.target.value)}/>
                </FormGroup>
              </div>
              <div className="preview-container">
                <FormGroup>
                  <FormLabel>Preview</FormLabel>
                  <div className='preview' dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}></div>
                  </FormGroup>

              </div>
            </div>
         </div>
    </>
  )
}

export default App
