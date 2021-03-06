import React from 'react';
import faqs from '../testdata/faq';
import FAQ from "../components/FAQ";
import styled from 'styled-components';


function AboutPage() {
    return (
        <div>
            <h3>FAQ</h3>
            <AboutStyle >
            <ul>
            {faqs.map((faq) => {
                return <FAQ key={faq.id} {...faq} />;
            })}
         
            </ul>
            </AboutStyle>
        </div>
    )
}

const AboutStyle = styled.ul`

display: flex;
flex-direction: column;

align-items: flex-start;
background-color: whitesmoke;


`

export default AboutPage
