import React, { useEffect, useState } from 'react';


const SecondTextBox = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        document.addEventListener("charTriggered", (ftb) => {
          setText(ftb.detail);
          // console.log(ftb);
        });
    });

    const onChangeHandler = (e) => {
      setText(e.target.value);
    }

  return (
    <div>
        <label htmlFor="stb">Second Text Box:</label>
        <input id="stb" name='stb' type="text" onChange={onChangeHandler} value={text} />
    </div>
  )
}

export default SecondTextBox;