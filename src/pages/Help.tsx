import React from 'react';
import Heading from '../components/Heading';
import Block from '../components/Block';

const Help = () => (
    <Block background="midLightGrey" textColour="darkBlue">
        <Block textAlign="center" maxWidth="1000px" m="0 auto" p="4rem 2rem">
            <Heading textSize={3.5}>
                How you can help
            </Heading>
        </Block>
    </Block>
);
export default Help;