import React from 'react';
import useGetData from '../hooks/useGetData';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';

const data = useGetData();
console.log(data);

const App = () => {
    return (
        <Main>
            <Sidebar>
                <About />
            </Sidebar>
            <Info>
                <Education />
                <Experience />
                <Certificates />
                <Skills />
            </Info>
        </Main>
    )
};

export default App;