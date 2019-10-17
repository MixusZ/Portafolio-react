import styled from 'styled-components';
import React from 'react';

const StyledP = styled.p `
    font-weight: 350;
    margin: .5em 0 1.2em 0;
    color: #757575;
    font-size: 1.2em;
`;

const PStyled = ({content}) => <StyledP>{content}</StyledP>

export default PStyled;