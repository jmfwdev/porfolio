import React, { useEffect } from 'react';
import FOG from 'vanta/src/vanta.fog';


function VantaEffectIntro () {

    useEffect(() => {
        FOG ({
          el: '#vanta',
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x0,
          midtoneColor: 0x2f2f2f,
          lowlightColor: 0xffffff,
          baseColor: 0x434343,
          blurFactor: 0.50,
          speed: 0.00,
          zoom: 0.50
        })
       }, []);

    return (
        <>
        <div id='vanta' className='vanta-effect'></div>
        </>
    )
}

export default VantaEffectIntro;