import { useState } from 'react'

function Item1() {
    return (
        <div className="item-list">
            <h1>רשימת פריטים</h1>
            <ul>
                <li>
                    <input type="checkbox" id="one"/>
                    <label for="one">פריט 1</label>
                </li>
                <li>
                    <input type="checkbox" id="two"/>
                    <label for="two">פריט 2</label>
                </li>
                <li>
                    <input type="checkbox" id="three"/>
                    <label for="three">פריט 3</label>
                </li>
            </ul>
        </div>
    );
}

export default Item1;