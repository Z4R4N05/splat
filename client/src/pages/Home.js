import React, {useState} from 'react';
import {CopyToClipboard } from 'react-copy-to-clipboard'

function Home(){
    const [value, setValue] = useState ('')
    const [copied, setCopy] = useState (false)
    return (<>
        <h1>Splat</h1>
        <div>
          <input value={value}
            onChange={({target}) => {
                setValue(target.value)
                setCopy(false)
            } } />
  
          
          <CopyToClipboard text={value}
            onCopy={() => setCopy(true)}>
            <button>Copy to clipboard with button</button>
          </CopyToClipboard>
  
          {copied ? <span style={{color: 'red'}}>Copied.</span> : null}
        </div>
    </>)
}

export default Home;