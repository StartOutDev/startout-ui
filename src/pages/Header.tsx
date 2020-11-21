import React, { useState } from 'react';
import Heading from '../components/Heading';
import Block from '../components/Block';
import Search from '../icons/Search';
import Button from '../components/Button';
import Text from '../components/Text';
import DropdownContainer from '../components/DropdownContainer';
import { Menu } from '../icons';

const Header = () => {

  const [openDropdown, setOpenDropdown] = useState<number>(0);
  const [selectedRow, setSelectedRow] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  function toggleDropdown(menu: number) {
    if (menu === openDropdown) {
      setOpenDropdown(0);
    } else {
      setOpenDropdown(menu);
    }
  }

  function toggleRow(item: string) {
    setSelectedRow(item);
  }

  return (
    <Block background="darkBlue" textColour="white">
      <div className={"header-container"}>
        <div className={"centered-div"}>
          <Block justifyContent="center" >
            <Heading textSize={2}>
              <div className={"header-stretch"}>
                StartOut/
              </div>
              <div className={"mobile-menu header-stretch"}>
                <div onClick={() => setIsExpanded(!isExpanded)}>
                  <Menu colour="white" />
                </div>
              </div>
            </Heading>
          </Block>
        </div>
        <div className={"centered-div"} style={isExpanded ? { display: 'block' } : { display: 'none' }}>
          <Block justifyContent="center" alignItems="center" flexDirection="column" display="flex" p="10px" background={(openDropdown === 1 || selectedRow === '1_0') ? 'midBlue' : 'darkBlue'}>
            <div onMouseEnter={() => toggleDropdown(1)} onClick={() => toggleDropdown(1)}>
              <Text text="What we do" variant="underline" />
              {openDropdown === 1 ?
                <div onMouseEnter={() => toggleDropdown(1)} onMouseLeave={() => toggleDropdown(0)} style={{ position: 'relative' }} className={'drop-container'}>
                  <DropdownContainer position="absolute" width={150} backgroundColor="midBlue">
                    <div style={{ padding: '10px', backgroundColor: selectedRow === '1_0' ? '#5070BF' : 'transparent' }} onMouseEnter={() => toggleRow('1_0')} onMouseLeave={() => toggleRow('')}>
                      <a href="https://esoe.qut.edu.au/">
                        <Text text="Stories" colour={'white'} />
                      </a>
                    </div>

                    <div style={{ padding: '10px', backgroundColor: selectedRow === '1_1' ? '#5070BF' : 'transparent' }} onMouseEnter={() => toggleRow('1_1')} onMouseLeave={() => toggleRow('')}>
                      <a href="https://esoe.qut.edu.au/">
                        <Text text="Stories" colour={'white'} />
                      </a>
                    </div>
                  </DropdownContainer>
                </div>
                : null
              }
            </div>
          </Block>
        </div>
        <div className={"centered-div"} style={isExpanded ? { display: 'block' } : { display: 'none' }}>
          <Block justifyContent="center" m="auto" p="20px" textAlign="center">
            <Text text="Stories" />
          </Block>
        </div>
        <div className={"centered-div"} style={isExpanded ? { display: 'block' } : { display: 'none' }}>
          <Block justifyContent="center" alignItems="center" flexDirection="column" display="flex" p="10px" background={(openDropdown === 2 || selectedRow === '2_0') ? 'midBlue' : 'darkBlue'}>
            <div onMouseEnter={() => toggleDropdown(2)} onClick={() => toggleDropdown(2)}>
              <Text text="Role Models" variant="underline" />
              {openDropdown === 2 ?
                <div onMouseEnter={() => toggleDropdown(2)} onMouseLeave={() => toggleDropdown(0)} style={{ position: 'relative' }} className={'drop-container'}>
                  <DropdownContainer position="absolute" width={150} backgroundColor="midBlue">
                    <div style={{ padding: '10px', backgroundColor: selectedRow === '2_0' ? '#5070BF' : 'transparent' }} onMouseEnter={() => toggleRow('2_0')} onMouseLeave={() => toggleRow('')}>
                      <a href="https://esoe.qut.edu.au/">
                        <Text text="Stories" colour={'white'} />
                      </a>
                    </div>

                    <div style={{ padding: '10px', backgroundColor: selectedRow === '2_1' ? '#5070BF' : 'transparent' }} onMouseEnter={() => toggleRow('2_1')} onMouseLeave={() => toggleRow('')}>
                      <a href="https://esoe.qut.edu.au/">
                        <Text text="Stories" colour={'white'} />
                      </a>
                    </div>
                  </DropdownContainer>
                </div>
                : null
              }
            </div>
          </Block>
        </div>
        <div className={"centered-div"} style={isExpanded ? { display: 'block' } : { display: 'none' }}>
          <Block justifyContent="center" m="auto" p="20px" textAlign="center">
            <Text text="How you can help" />
          </Block>
        </div>
        <div className={"centered-div"} style={isExpanded ? { display: 'block' } : { display: 'none' }}>
          <Block justifyContent="center" m="auto" p="20px" textAlign="center">
            <Text text="Who we are" />
          </Block>
        </div>
        <div className={"centered-div"} style={isExpanded ? { display: 'block' } : { display: 'none' }}>
          <Block justifyContent="center" m="auto" p="20px" textAlign="center">
            <Text text="Register/Login" />
          </Block>
        </div>
        <div className={"centered-div"} style={isExpanded ? { display: 'block' } : { display: 'none' }}>
          <Block justifyContent="flex-end" m="auto" p="20px" textAlign="center">
            <Button text="Donate" />
          </Block>
        </div>
        <div className={"centered-div"} style={isExpanded ? { display: 'block' } : { display: 'none' }}>
          <Block justifyContent="flex-end" m="auto" p="20px" textAlign="center">
            <Search colour="white" />
          </Block>
        </div>
      </div>
    </Block>
  )
};

export default Header;
