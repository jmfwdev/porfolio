import React, { useEffect } from 'react';
import WAVES from 'vanta/src/vanta.waves';


function VantaEffectWorks () {

    useEffect(() => {
        WAVES ({
            el: "#vantaWorks",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x0,
            shininess: 20.00,
            waveHeight: 3.00,
            zoom: 1.21
        })
       }, []);

    return (
        <>
        <div id='vantaWorks' className='vantaWorks'></div>
        </>
    )
}

export default VantaEffectWorks;