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
        <div className="container" ref={ el => { container = el } }>
            <div className="outer"  ref={ el => { outer = el } }>
                
                <div className="blue-light-outer">
                <div className="blue-light-inner">
                    <div className="blue-light-lighter">
                    <div className="blue-light-lightest"></div>
                    </div>
                </div>
                </div>
                
                <div className="red-light-outer">
                <div className="red-light-lighter">
                    <div className="red-light-lightest"></div>
                </div>
                </div>
                
                <div className="yellow-light-outer">
                <div className="yellow-light-lighter">
                    <div className="yellow-light-lightest"></div>
                </div>
                </div>
                
                <div className="green-light-outer">
                <div className="green-light-lighter">
                    <div className="green-light-lightest"></div>
                </div>
                </div>
                
                <div className="flap" ref={ el => { flap = el } }>
                    <div className="cover"></div>
                    <div className="trapezoid"></div>
                    <div className="diagonal"></div>
                    
                    <div className="flap-inside-smaller" ref={ el => { flapInsideSmaller = el } }>
                    <div className="cover-smaller"></div>
                    <div className="trapezoid-smaller"></div>
                    <div className="diagonal-smaller"></div>
                    </div>
                    
                <div className="inside-of-flap" ref={ el => { insideOfFlap = el } }>
                    
                    <div className="inside-black-screen">
                    <div className="shadow"></div>
                    </div>
                    
                    <div className="blue-button-container">
                    <div className="blue-button">
                        <div className="shadow"></div>
                    </div>
                    <div className="blue-button">
                        <div className="shadow"></div>
                    </div>
                    <div className="blue-button">
                        <div className="shadow"></div>
                    </div>
                    <div className="blue-button">
                        <div className="shadow"></div>
                    </div>
                    <div className="blue-button">
                        <div className="shadow"></div>
                    </div>
                    <div className="blue-button">
                        <div className="shadow"></div>
                    </div>
                    <div className="blue-button">
                        <div className="shadow"></div>
                    </div>
                    <div className="blue-button">
                        <div className="shadow"></div>
                    </div>
                    <div className="blue-button">
                        <div className="shadow"></div>
                    </div>
                    <div className="blue-button">
                        <div className="shadow"></div>
                    </div>
                    </div>
                    
                    <div className="small-black-button small-black-button-1">
                    <div className="shadow"></div>
                    </div>
                    
                    <div className="small-black-button small-black-button-2">
                    <div className="shadow"></div>
                    </div>
                    
                    <div className="grey-button-container">
                    <div className="grey-button">
                        <div className="shadow"></div>
                    </div>
                    <div className="grey-button">
                        <div className="shadow"></div>
                    </div>
                    </div>
                    
                    <div className="yellow-button"></div>
                    
                    <div className="wide-black-button">
                    <div className="shadow"></div>
                    </div>
                    
                    <div className="narrow-black-button">
                    <div className="shadow"></div>
                    </div>
                    
                </div>
                    
                </div>
                
                <div className="inside">
                    <div className="cover"></div>
                    <div className="trapezoid"></div>
                    <div className="diagonal"></div>
                
                    <div className="inside-smaller">
                    <div className="cover-smaller"></div>
                    <div className="trapezoid-smaller"></div>
                    <div className="diagonal-smaller"></div>
                    
                    <div className="screen">
                        <div className="screen-corner"></div>
                        <div className="screen-outer">
                        <div className="dots">
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                        <div className="red-button"></div>
                        <div className="bars-container">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        <div className="screen-inner"  ref={ el => { screenInner = el } }></div>
                    </div>
                    </div>
                    
                    <div className="black-round-button"></div>
                    
                    <div className="small-red-button">
                        <div className="shadow"></div>
                    </div>
                    
                    <div className="small-blue-button">
                        <div className="shadow"></div>
                    </div>
                    
                    <div className="green-rectangle">
                        <div className="shadow"></div>
                    </div>
                    
                    <div className="d-pad">
                        <div className="vertical"></div>
                        <div className="horizontal"></div>
                        <div className="center">
                        <div className="circle"></div>
                        </div>
                    </div>
                    
                    </div>
                
                </div>
                
            </div>
        </div>
    )
}

export default Intro
