import React from 'react';
import Heading from '../components/Heading';
import Text from '../components/Text';
import Block from '../components/Block';
import Card from '../components/Card';

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

            <Block display="flex" flexGrow={1} flexWrap="wrap" flexDirection="row">
                <Block maxWidth="50%" flex="0 0 50%" flexDirection="column">
                    <Block background="orange" flex="0 0 50%" p="1.5rem .35rem">
                        <svg width="661" height="340" viewBox="0 0 661 525" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31 31C31 28.2386 33.2386 26 36 26H586C588.761 26 591 28.2386 591 31V411H31V31Z"
                                fill="url(#pattern0)" />
                        </svg>
                        <Card flexGrow={2} maxWidth="560">
                            <Text textSize={0.9} mB="1.5rem">
                                Provide resources on sexuality and gender identity
                            </Text>
                        </Card>
                    </Block>
                    <Block background="pink" flex="0 0 50%" p="1.5rem .35rem" >
                        <svg width="560" height="243" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M100.815 142.685V243h42.37V142.685H243.5v-42.37H143.185V0h-42.37v100.315H.5v42.37h100.315z"
                                fill="#fff" fill-opacity=".2" />
                        </svg>
                    </Block>
                    <Block background="red" flex="0 0 50%" p="1.5rem .35rem" >
                        <svg width="560" height="444" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M100.815 142.685V243h42.37V142.685H243.5v-42.37H143.185V0h-42.37v100.315H.5v42.37h100.315z"
                                fill="#fff" fill-opacity=".2" />
                        </svg>
                        <Card flexGrow={2} maxWidth="560">
                            <Text textSize={0.9} mB="1.5rem">
                                Corporate support
                            </Text>
                        </Card>
                    </Block>
                </Block>
            </Block>
        </Block>
    </Block>
);

export default Help;
