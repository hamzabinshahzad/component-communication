import React, { useEffect } from 'react'

const SecondTextBox = () => {

    useEffect(() => {
        let ftb = document.getElementById("stb");
        ftb.addEventListener("charTriggered", (e) => {
            console.log("Hit!");
        });
    });

  return (
    <div>
        <label htmlFor="stb">Second Text Box:</label>
        <input id="stb" name='stb' type="text" />
    </div>
  )
}

export default SecondTextBox;