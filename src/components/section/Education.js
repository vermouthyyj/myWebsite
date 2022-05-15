import React from "react";
import { section4Title, education, industry} from '../../profile'
import { Tabs } from 'antd';


export default function Education() {
    const { TabPane } = Tabs;
    const edu = education.map(item => { 
        return (
            <div>
                <h3>{item.uni}</h3>
                <p>{ item.time}</p>
                <p>{ item.major}</p>
                <br /><br />
            </div>
        )
    })

    const pro = industry.map(item => { 
        return (
            <div>
                <h3>{item.company}</h3>
                <p>{ item.time}</p>
                <p>{ item.position}</p>
                <br /><br />
            </div>
        )
    })
    return (
        <div id="about" className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section4Title}</h1>
                </div>
                <div className="education--container">
                    <Tabs tabPosition={'left'} size={ 'large'} className="tab">
                        <TabPane tab="Education" key="1">
                            { edu }
                        </TabPane>
                        <TabPane tab="Industry" key="2">
                            { pro }
                        </TabPane>
                    </Tabs>
                </div>
                </div>
        </div>
    )
}