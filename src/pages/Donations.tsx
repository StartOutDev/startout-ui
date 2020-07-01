import React from "react";
import Heading from "../components/Heading";
import Text from "../components/Text";
import Block from "../components/Block";
import Card from "../components/Card";
import Button from "../components/Button";
import Toggle from "../components/Toggle";
import TextBox from "../components/TextBox";

const Donations = () => (
  <Block background="midLightGrey" textColour="darkBlue">
    <Block textAlign="center" maxWidth="1000px" m="0 auto" p="4rem 2rem">
      <Heading textSize={3.5}>
        Your support
        <br /> keeps us going
      </Heading>
      <Text maxWidth="475px" m="3rem auto 4.5rem">
        Donate today and help support our continued DSG youth support programs.
        You can support StartOut through once-off or monthly donations, or
        through purchasing some of our merchandise. All transactions are
        processed securely and are in Australian Dollars.
      </Text>
      <Block display="flex" justifyContent="center" mB="2rem" textSize={1.25}>
        <Toggle offLabel="Once-off" onLabel="Monthly" />
      </Block>
      <Block display="flex" flexGrow={1} flexWrap="wrap">
        <Block maxWidth="25%" flex="0 0 25%" p="1.5rem .35rem" display="flex">
          <Card flexGrow={1}>
            <Heading level={1} text="$50" />
            <Text textSize={0.9} mB="1.5rem">
              Provide resources on sexuality and gender identity
            </Text>
            <Button text="Select" />
          </Card>
        </Block>
        <Block maxWidth="25%" flex="0 0 25%" p=".35rem" display="flex">
          <Card flexGrow={1} background="yellow">
            <Heading level={1} text="$125" mT="1.35rem" />
            <Text textSize={0.9} mB="2rem">
              Help us train a new mentor to provide invaluable support
            </Text>
            <Button text="Select" />
          </Card>
        </Block>
        <Block maxWidth="25%" flex="0 0 25%" p="1.5rem .35rem" display="flex">
          <Card flexGrow={1}>
            <Heading level={1} text="$365" />
            <Text textSize={0.9} mB="1.5rem">
              Keep us on the road with a regional program for priority
              populations
            </Text>
            <Button text="Select" />
          </Card>
        </Block>
        <Block maxWidth="25%" flex="0 0 25%" p="1.5rem .35rem" display="flex">
          <Card flexGrow={1}>
            <Heading level={1} text="$1100" />
            <Text textSize={0.9} mB="1.5rem">
              Contribute to 12-months of program delivery throughout Australia
            </Text>
            <Button text="Select" />
          </Card>
        </Block>
        <Block
          maxWidth="50%"
          flex="0 0 50%"
          p="1.5rem .35rem"
          display="flex"
          flexDirection="column"
        >
          <Text textSize={0.8} text="Other amount?" textAlign="left" />
          <Card
            flexGrow={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading level={1} text="$" mB="0" />
            <TextBox
              variant="underline"
              value="1000"
              colour="darkBlue"
              width="100%"
              mB="0"
              mR="1rem"
              fontWeight={600}
              textSize={2.25}
            />
            <Button text="Add" />
          </Card>
        </Block>
        <Block
          maxWidth="50%"
          flex="0 0 50%"
          p="1.5rem .35rem"
          display="flex"
          flexDirection="column"
        >
          <Text
            textSize={0.8}
            text="StandOut for StartOut with our tee."
            textAlign="left"
          />
          <Card
            flexGrow={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pR="160px"
          >
            <Heading level={1} text="$30" mB="0" />
            <Button text="Add" />
            <img
              alt="StartOut Shirt"
              src="shirt.png"
              style={{
                position: "absolute",
                right: 0,
                width: "150px",
                margin: "0 -10px",
                userSelect: "none",
              }}
            />
          </Card>
        </Block>
      </Block>
    </Block>
    <Block pY="4rem" pL="4rem" display="flex" alignItems="center">
      <svg
        width="23"
        height="27"
        viewBox="0 0 23 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4447 27C11.4816 27 11.5132 27 11.55 27C11.5869 26.9683 11.6237 26.9313 11.6658 26.9048C13.8611 25.6941 15.9194 24.2878 17.7988 22.6278C19.3623 21.2479 20.7837 19.7359 21.8103 17.896C22.5736 16.532 23 15.0781 23 13.5026C22.9947 9.50049 23 5.49834 23 1.49618C23 0.999217 23 0.496965 23 0C15.314 0 7.66491 0 0 0C0 0.0898766 0 0.158606 0 0.227335C0 4.59957 0 8.96652 0 13.3388C0 14.4278 0.152666 15.4852 0.542229 16.5109C1.22659 18.282 2.32685 19.7676 3.61662 21.121C5.32227 22.908 7.26482 24.3989 9.33898 25.7259C10.0339 26.1647 10.7446 26.5771 11.4447 27ZM15.8563 10.1085C15.9773 10.1243 16.0721 10.1402 16.1669 10.1402C17.0302 10.1666 17.7251 10.9438 17.7093 11.906C17.6777 13.693 17.7093 15.4746 17.6935 17.2616C17.6935 17.5154 17.6304 17.7903 17.5251 18.0229C17.2092 18.7102 16.6196 18.9587 15.8984 18.9534C14.5086 18.9481 13.1135 18.9481 11.7237 18.9481C10.176 18.9481 8.62303 18.9481 7.0753 18.9428C5.94873 18.9375 5.29595 18.282 5.29595 17.1612C5.29595 15.3742 5.29595 13.5925 5.29595 11.8056C5.29595 10.9227 5.86976 10.2777 6.74365 10.1561C6.86999 10.1402 6.99634 10.1191 7.13848 10.0979C7.13848 9.43176 7.12795 8.7709 7.13848 8.11004C7.149 7.43861 7.24903 6.78304 7.5491 6.16977C8.36507 4.52027 9.69696 3.62679 11.5237 3.63736C13.303 3.64265 14.6139 4.52555 15.4246 6.12219C15.7404 6.74604 15.8615 7.41218 15.8615 8.11004C15.8563 8.77619 15.8563 9.44233 15.8563 10.1085Z"
          fill="#414858"
        />
        <path
          d="M9.33922 10.1137C10.7817 10.1137 12.203 10.1137 13.6402 10.1137C13.6507 10.0555 13.6613 10.0079 13.6613 9.95505C13.6613 9.26247 13.6665 8.56989 13.6507 7.87203C13.6192 6.68249 12.5663 5.76257 11.3818 5.82073C10.2605 5.8736 9.34975 6.8358 9.33922 7.89318C9.33395 8.62805 9.33922 9.35235 9.33922 10.1137Z"
          fill="#414858"
        />
      </svg>

      <Text
        textSize={0.7}
        colour="darkGrey"
        maxWidth="500px"
        textAlign="left"
        mL="0.8rem"
        mB="0"
      >
        All transactions are processed securely with VISA, MasterCard, or Amex
        and in Australian Dollars. Cheques can be mailed to: StartOut PO Box
        299, CAMPSIE NSW 2194
      </Text>
    </Block>
  </Block>
);

export default Donations;
