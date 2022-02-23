import React, {useState} from 'react';
import {CopyToClipboard } from 'react-copy-to-clipboard'
import Swatch from '../components/Swatch';


function Home(){
    const [color1, setColor1] = useState ('')
    const [color2, setColor2] = useState ('')
    const [copied, setCopy] = useState (false)

    const colors = [
        "#9253a1",
        "#f063a4",
        "#2dc5f4",
        "#fcee21",
        "#f16164",
        "#70327e",
        "#a42963",
        "#0b6a88",
        "#f89e4f",
        "#ec015a"
    ];

    return (<>
        <h1>Splat</h1>
        <div className="Home">
            <h1>Welcome to Color Palette</h1>
            <h2>Start editing your colors</h2>
        </div>
        <Swatch colors={colors} value={color1} setValue={setColor1} />
        <Swatch colors={colors} value={color2} setValue={setColor2} />
        
  
          
          <CopyToClipboard text={[color1, color2]}
            onCopy={() => setCopy(true)}>
            <button>Copy to clipboard with button</button>
          </CopyToClipboard>
  
          {copied ? <span style={{color: 'red'}}>Copied.</span> : null}
        

    </>)
}

export default Home;