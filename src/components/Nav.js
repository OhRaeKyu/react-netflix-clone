import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    // return () => {
    //   window.addEventListener('scroll', () => {});
    // };
  }, []);

  return (
    <NavWrap className={show && 'nav-black'}>
      <img
        alt="Netflix Logo"
        src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
        onClick={window.location.reload}
      />
      <img
        alt="User Profile"
        src="/images/profile.png"
        className="nav-profile"
      />
    </NavWrap>
  );
}

const NavWrap = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 15px 0;
  z-index: 1;
  transition: all 0.5s ease-in;

  img {
    margin: 0 60px;
    cursor: pointer;
    height: 30px;
  }

  &.nav-black {
    background-color: rgb(20, 20, 20);
  }

  .nav-profile {
    border-radius: 5px;
  }
`;
