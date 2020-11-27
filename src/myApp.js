import React from 'react';
import Hello from './Hello'

function MyApp({salary,freelancing,techwork}){
    return(
        <div>
            <br></br>
        <h1>Mern Stack Developer</h1>
    <h2>Remote Job <u>{salary}</u></h2>
        <h2>Panacloud Private Limited, Karachi</h2>
        <h2>Panacloud Silicon Valley, America</h2>
    <h2>Freelancing <u>{freelancing}</u></h2>
    <Hello work = {techwork}/>
        </div>

    );
}
export default MyApp;