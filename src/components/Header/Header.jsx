import { useState } from 'react';

import './Header.css';

function Header () {
    console.log('This is the HEADER');

    return (
        <>
            <div className="App">
            <header className="App-header">
                <h1 className="App-title">Gallery of My Life</h1>
            </header>
            </div>
        </>
    );
}

export default Header;