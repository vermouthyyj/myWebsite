import React from 'react'
import { education, section6Title } from '../../profile'
import { about, mcourses, bcourses, section2title } from '../../profile'
import MCourses from '../layouts/MCourses'
import BCourses from '../layouts/BCourses'

const Education = () => { 
    return (
        <div id="about" className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
            <div className="col-12 d-none d-md-block offset-md-1 col-md-4 Uni" id="not-dark2"></div>
            <div className="col-12 offset-md-1 col-md-6 about">
                <div className="About-title-box">
                <h1 id="About" className="red-line">{section6Title}</h1>
            </div>
                <p className="lead about-text" >
                    {education.name1}  
                </p>
                <p className="masterDegree">
                    {education.degree1}
                </p>
                
                <div id="Skills"> 
                <div>
                    {mcourses.map((x) => 
                        <MCourses faClass={x.faClass} label={x.course}/>
                    )}
                </div> 
                </div>
                    
                
                <p className="lead about-text">
                    {education.name2}  
                </p>
                <p className="masterDegree">
                    {education.degree2}
                </p>
                    
                <div id="Skills"> 
                <div>
                    {bcourses.map((x) => 
                        <BCourses faClass={x.faClass} label={x.course}/>
                    )}
                </div> 
                </div>
            </div>
        </div>
        </div>
    )
}

export default Education