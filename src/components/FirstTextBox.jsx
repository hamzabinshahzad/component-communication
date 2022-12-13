import React, { useEffect, useState } from 'react'

const FirstTextBox = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        let event = new Event("charTriggered");
        document.dispatchEvent(event, { detail: "123"})
    }, [text]);

  return (
    <div>
        <label htmlFor="ftb">First Text Box:</label>
        <input id="ftb" name='ftb' type="text" onChange={ (e) => setText(e.target.value)} />
    </div>
  )
}

export default FirstTextBox;
