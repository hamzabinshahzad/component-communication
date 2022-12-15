import React, { useEffect, useState } from 'react';


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
