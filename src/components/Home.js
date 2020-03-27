import React from 'react';
import ChuckLogo from '../img/ChuckNorris224.png'
// import logo from '../img/Nordic2.png';

export default function Home() {
    return(
        <div className="AppImg">
            <img alt="chucklogo" src={ChuckLogo}/>
        </div>
    );
}