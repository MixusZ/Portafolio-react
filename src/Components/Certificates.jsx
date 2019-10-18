import React from 'react';
import H2Styled from '../styles/H2Styled';
import H3Styled from '../styles/H3Styled';
import PStyled from '../styles/PStyled';

const Certificates = props => (
    <div className="Certificates">
        <H2Styled name="Certificates" />
            {
                props.data.map((cer, index) => (
                    <div className="Certificates-item" key={`Certificates-${index}`}>
                        <H3Styled>{cer.name} {cer.institution}
                            <span>{cer.date}</span>
                        </H3Styled>
                        <PStyled content={cer.description}></PStyled>
                    </div>
                ))
            }
    </div>
);

export default Certificates;