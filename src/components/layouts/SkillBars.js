import React, { useState, useEffect } from "react";

export default function SkillBars(props) {
    const [collapsed, setCollapsed] = useState(true);
    const { hue, saturation, skills } = props;

    // 定义多久之后开始渲染skillBars组件
    useEffect(() => { 
        setTimeout(() => { 
            setCollapsed(false);
        }, 1000)
    }, []);

    return (
        <div id="skill-bar-component">
            <div id="app" className={`container ${collapsed ? 'collapsed' : ''}`}>
            <ul className="skills">
            {skills.map((skill, index) => 
                    <li
                    key={skill.type}
                    style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5) }%)` }}
                    >
                    <p>{skill.type}<span>{skill.level}</span></p>
                </li>
            )}
            </ul>
            </div>  
      </div>      
    )
}