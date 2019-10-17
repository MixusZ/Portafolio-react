import styled from 'styled-components';
import React from 'react';

const StyledH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: .8px;
    margin: lem 0 0 0;
    color: #055082
`;

const H2Styled = ({name}) => <StyledH2>{name}</StyledH2>

export default H2Styled;