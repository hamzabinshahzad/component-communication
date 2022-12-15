import React, { useEffect, useState } from 'react';
// testing common:
import bus from './common';

const FirstTextBox = () => {
    const [text, setText] = useState("");

    useEffect(() => {
      // console.log(text);
      // bus.sender(text);
      document.dispatchEvent(new CustomEvent("charTriggered", { detail: text}));
    }, [text]);

  return (
    <div>
        <label htmlFor="ftb">First Text Box:</label>
        <input id="ftb" name='ftb' type="text" onChange={ (e) => setText(e.target.value)} />
    </div>
  )
}

export default FirstTextBox;
