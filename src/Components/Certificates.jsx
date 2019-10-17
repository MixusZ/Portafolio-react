import React from 'react';
import H2Styled from '../styles/H2Styled'
import H3Styled from '../styles/H3Styled'
import PStyled from '../styles/PStyled'

const Certificates = props => (
    <div className="Certificates">
        <H2Styled name="Certificates" />
        {
            props.data.map((cert, index) =>(
                <div className="Certificates-item" key={`Certificates-${index}`}>
                    <H3Styled>{cert.name} {cert.institution}
                    <span>{cert.date}</span>
                    </H3Styled>
                    <PStyled content={cert.description}/>
                </div>
            ))
        }
    </div>
);

export default Certificates;