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
                                Provide resources on sexuality and gender identity
                            </Text>
                        </Card>
                    </Block>
                </Block>
                <Block maxWidth="50%" flex="0 0 50%" flexDirection="column">
                    <Block background="yellow" flex="0 0 50%" p="1.5rem .35rem">
                        <svg width="560" height="243" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M100.815 142.685V243h42.37V142.685H243.5v-42.37H143.185V0h-42.37v100.315H.5v42.37h100.315z"
                                fill="#fff" fill-opacity=".2" />
                        </svg>
                    </Block>
                    <Block background="green" flexGrow={2} flex="0 0 50%" p="1.5rem .35rem">
                        <svg width="560" height="340" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M100.815 142.685V243h42.37V142.685H243.5v-42.37H143.185V0h-42.37v100.315H.5v42.37h100.315z"
                                fill="#fff" fill-opacity=".2" />
                        </svg>
                        <Card flexGrow={2} maxWidth="560">
                            <Text textSize={0.9} mB="1.5rem">
                                Provide resources on sexuality and gender identity
                            </Text>
                        </Card>
                    </Block>
                    <Block background="purple" flex="0 0 50%" p="1.5rem .35rem">
                        <svg width="560" height="243" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M100.815 142.685V243h42.37V142.685H243.5v-42.37H143.185V0h-42.37v100.315H.5v42.37h100.315z"
                                fill="#fff" fill-opacity=".2" />
                        </svg>
                    </Block>
                    <Block background="yellow" flex="0 0 50%" p="1.5rem .35rem">
                        <svg width="560" height="243" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M100.815 142.685V243h42.37V142.685H243.5v-42.37H143.185V0h-42.37v100.315H.5v42.37h100.315z"
                                fill="#fff" fill-opacity=".2" />
                        </svg>
                    </Block>
                </Block>
            </Block>
            <Block display="flex" flexGrow={1} flexWrap="wrap">
                <Block maxWidth="50%" flex="1 1 100%" p="1.5rem .35rem" display="flex" background="yellow" alignItems="end">
                    <Block display="flex" textAlign="center" maxWidth="560px" margin="31px" alignItems="end">
                        <Heading maxWidth="255px" textSize={1.5}>
                            Become a partner
                        </Heading>
                    </Block>
                    <Block maxWidth="333px" background="yellow" display="flex" alignItems="end">
                        <svg
                            width="216"
                            height="243"
                            viewBox="0 0 216 347"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M215.892.673c-1.278 2.454-2.59 4.874-3.801 7.362-9.52 19.43-19.006 38.895-28.492 58.326l-39.559 80.984c-9.486 19.296-18.905 38.592-28.357 57.922-13.792 28.239-27.584 56.444-41.375 84.682-9.083 18.557-18.132 37.147-27.214 55.704-.336.672-.572 1.21-1.547 1.176-15.676-.033-29.266-.033-44.942-.033-.134 0-.269-.034-.605-.101 1.48-3.026 2.927-5.984 4.373-8.976 15.71-32.171 31.418-64.343 47.161-96.515a57195.184 57195.184 0 0131.62-64.646c14.062-28.776 28.122-57.586 42.217-86.362a58443.5 58443.5 0 0031.654-64.781c3.969-8.135 7.939-16.237 11.874-24.372.135-.303.202-.64.303-.942 15.911 0 29.77 0 45.681.034.337-.034 1.144-.504 1.009.538z"
                                fill="#fff"
                                fill-opacity=".2" />
                        </svg>
                    </Block>
                </Block>
            </Block>
        </Block>
    </Block>
);

export default Help;
