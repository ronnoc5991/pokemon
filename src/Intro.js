import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Intro() {

    var container = useRef(null);
    var shadow = useRef(null);
    var rotate = useRef(null);
    var intro = useRef(null);
    var outer = useRef(null);

    useEffect(() => {
        gsap.fromTo(outer, {opacity: 0}, {opacity:1, duration: .1, delay: 1.5});
        gsap.fromTo(container, {x: '-100vw'}, {x:0, duration: 3, delay: 1.5});
        gsap.fromTo(shadow, {x: '-100vw'}, {x:0, duration: 3, delay: 1.5});
        gsap.fromTo(rotate, {rotate: 0}, {rotate: 360, duration: 3, delay: 1.5});
        gsap.to(intro, {opacity: 0, duration: .5, delay: 4.5});
        gsap.to(intro, {y: '-100vh', duration: .1, delay: 5});
    }, [])
    


    return (
        <div className="Intro" ref={ el => { intro = el } }>
            <div className="outer" ref={ el => { outer = el } }>
                <div className="container" ref={ el => { container = el } }>
                    <div className="circle"></div>
                    <div className="rotate" ref={ el => { rotate = el } }>
                        <div className="top"></div>
                        <div className="bottom"></div>
                        <div className="middle-large">
                            <div className="cover"></div>
                            <div className="middle"></div>
                            <div className="middle-med">
                                <div className="middle-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shadow" ref={ el => { shadow = el } }></div>
            </div>
        </div>
    )
}

export default Intro
