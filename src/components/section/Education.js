import React from "react";
import { projects, miscellaneous, section3Title, section4Title } from '../../profile'
import { Carousel } from 'antd';


export default function Education() {
    const contentStyle = {
        height: '60vh',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        marginTop: '10vh'
    };
    
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section4Title}</h1>
                        
                    </div>
                    <Carousel dotPosition={'left'}>
                            <div>
                            <h3 style={contentStyle}>School</h3>
                            </div>
                            <div>
                            <h3 style={contentStyle}>Industry</h3>
                            </div>
                    </Carousel>
                </>
                </div>
        </>
    )
}