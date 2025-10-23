import { useState } from 'react'

function Item3() {
    const texts = ['hey', 'How are you?', 'React is awesome!'];
    let counter = 0;
    function handleClick() {
        alert(texts[counter % 3]);
        counter++;
    }

    return (
       <div className="messages">
            <h1>הודעות</h1>
            <button onClick={handleClick}>לחיצה</button>
         </div>
    );
}

export default Item3;