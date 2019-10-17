import React from 'react';
import H2Styled from '../styles/H2Styled'
import H3Styled from '../styles/H3Styled'
import PStyled from '../styles/PStyled'

const Experience = props => (
    <div className="Experience">
        <H2Styled name="Experience" />
        {
            props.data.map((exp, index) =>(
                <div className="Experience-item" key={`Experience-${index}`}>
                    <H3Styled>{exp.jobTitle} {exp.company}
                        <span>{exp.startDate} - {exp.endDate}</span>
                    </H3Styled>
                    <PStyled content = {exp.jobDescription} />
                </div>
            ))
        }
    </div>  
);

export default Experience;