import React from 'react';
import Heading from '../components/Heading';
import Text from '../components/Text';
import Block from '../components/Block';

const Help = () => (
    <Block background="midLightGrey" textColour="darkBlue">
        <Block textAlign="center" maxWidth="1000px" m="0 auto" p="4rem 2rem">
            <Heading textSize={3.5}>
                How you can help
            </Heading>
            <Text maxWidth="475px" m="3rem auto 4.5rem">
                StartOut encourages you to get involved and help us change lives for good.
                We need all kinds of support to keep our fantastic programs running.
                Here are a few ways you can get involved.
            </Text>
        </Block>
    </Block>
);

export default Help;
