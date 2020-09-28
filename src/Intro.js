import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Intro() {

    var flap = useRef(null);
    var flapInsideSmaller = useRef(null);
    var insideOfFlap = useRef(null);
    var outer = useRef(null);
    var screenInner = useRef(null);
    var container = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(flap, {rotationY: 0}, {rotationY: 180, duration: 2, delay: 1.5});
        tl.fromTo(flapInsideSmaller, {opacity: 0}, {opacity: 1, duration: .1, delay: '-1.1'});
        tl.fromTo(insideOfFlap, {opacity: 0}, {opacity: 1, duration: .1, delay: '-1.3'});
        tl.to(outer, {scaleX: 2, scaleY: 2, duration: 1});
        tl.to(screenInner, {backgroundColor: 'rgb(0, 215, 252)'});
        tl.to(outer, {scaleX: 15, scaleY: 15, duration: 1});
        tl.to(container, {opacity: 0, duration: .5});
        tl.to(container, {top: '-100vh', duration: .1} )
    }, [])

    return (
        <div class="container" ref={ el => { container = el } }>
            <div class="outer"  ref={ el => { outer = el } }>
                
                <div class="blue-light-outer">
                <div class="blue-light-inner">
                    <div class="blue-light-lighter">
                    <div class="blue-light-lightest"></div>
                    </div>
                </div>
                </div>
                
                <div class="red-light-outer">
                <div class="red-light-lighter">
                    <div class="red-light-lightest"></div>
                </div>
                </div>
                
                <div class="yellow-light-outer">
                <div class="yellow-light-lighter">
                    <div class="yellow-light-lightest"></div>
                </div>
                </div>
                
                <div class="green-light-outer">
                <div class="green-light-lighter">
                    <div class="green-light-lightest"></div>
                </div>
                </div>
                
                <div class="flap" ref={ el => { flap = el } }>
                    <div class="cover"></div>
                    <div class="trapezoid"></div>
                    <div class="diagonal"></div>
                    
                    <div class="flap-inside-smaller" ref={ el => { flapInsideSmaller = el } }>
                    <div class="cover-smaller"></div>
                    <div class="trapezoid-smaller"></div>
                    <div class="diagonal-smaller"></div>
                    </div>
                    
                <div class="inside-of-flap" ref={ el => { insideOfFlap = el } }>
                    
                    <div class="inside-black-screen">
                    <div class="shadow"></div>
                    </div>
                    
                    <div class="blue-button-container">
                    <div class="blue-button">
                        <div class="shadow"></div>
                    </div>
                    <div class="blue-button">
                        <div class="shadow"></div>
                    </div>
                    <div class="blue-button">
                        <div class="shadow"></div>
                    </div>
                    <div class="blue-button">
                        <div class="shadow"></div>
                    </div>
                    <div class="blue-button">
                        <div class="shadow"></div>
                    </div>
                    <div class="blue-button">
                        <div class="shadow"></div>
                    </div>
                    <div class="blue-button">
                        <div class="shadow"></div>
                    </div>
                    <div class="blue-button">
                        <div class="shadow"></div>
                    </div>
                    <div class="blue-button">
                        <div class="shadow"></div>
                    </div>
                    <div class="blue-button">
                        <div class="shadow"></div>
                    </div>
                    </div>
                    
                    <div class="small-black-button small-black-button-1">
                    <div class="shadow"></div>
                    </div>
                    
                    <div class="small-black-button small-black-button-2">
                    <div class="shadow"></div>
                    </div>
                    
                    <div class="grey-button-container">
                    <div class="grey-button">
                        <div class="shadow"></div>
                    </div>
                    <div class="grey-button">
                        <div class="shadow"></div>
                    </div>
                    </div>
                    
                    <div class="yellow-button"></div>
                    
                    <div class="wide-black-button">
                    <div class="shadow"></div>
                    </div>
                    
                    <div class="narrow-black-button">
                    <div class="shadow"></div>
                    </div>
                    
                </div>
                    
                </div>
                
                <div class="inside">
                    <div class="cover"></div>
                    <div class="trapezoid"></div>
                    <div class="diagonal"></div>
                
                    <div class="inside-smaller">
                    <div class="cover-smaller"></div>
                    <div class="trapezoid-smaller"></div>
                    <div class="diagonal-smaller"></div>
                    
                    <div class="screen">
                        <div class="screen-corner"></div>
                        <div class="screen-outer">
                        <div class="dots">
                            <div class="dot"></div>
                            <div class="dot"></div>
                        </div>
                        <div class="red-button"></div>
                        <div class="bars-container">
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                        </div>
                        <div class="screen-inner"  ref={ el => { screenInner = el } }></div>
                    </div>
                    </div>
                    
                    <div class="black-round-button"></div>
                    
                    <div class="small-red-button">
                        <div class="shadow"></div>
                    </div>
                    
                    <div class="small-blue-button">
                        <div class="shadow"></div>
                    </div>
                    
                    <div class="green-rectangle">
                        <div class="shadow"></div>
                    </div>
                    
                    <div class="d-pad">
                        <div class="vertical"></div>
                        <div class="horizontal"></div>
                        <div class="center">
                        <div class="circle"></div>
                        </div>
                    </div>
                    
                    </div>
                
                </div>
                
            </div>
        </div>
    )
}

export default Intro
