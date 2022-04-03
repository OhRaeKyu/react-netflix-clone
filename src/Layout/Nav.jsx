import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [show, setShow] = useState(false);
  const [seacrhClicked, setSeacrhClicked] = useState(false);
  const [seacrhValue, setSeacrhValue] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.addEventListener('scroll', () => {});
    };
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSeacrhValue(e.value);
  };

  return (
    <NavWrap className={show && 'nav-black'}>
      <Link to="/">
        <h1 className="blind">Netflix</h1>
        <LogoImg
          alt="Netflix Logo"
          src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
        />
      </Link>
      <SearchWrap className={seacrhClicked && 'clicked'}>
        <SearchBtn onClick={() => setSeacrhClicked(!seacrhClicked)} />
        <SearchInput
          value={seacrhValue}
          type="text"
          onChange={handleChange}
          placeholder="영화를 검색하세요."
          className={(show && 'nav-black') || (seacrhClicked && 'clicked')}
        />
      </SearchWrap>
      <ProfileImg alt="User Profile" src="/images/profile.png" />
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
  z-index: 100;
  transition: all 0.5s ease-in;

  &.nav-black {
    background-color: rgb(20, 20, 20);
  }
`;

const LogoImg = styled.img`
  cursor: pointer;
  height: 30px;
  margin: 0 50px;
`;

const ProfileImg = styled(LogoImg)`
  border-radius: 5px;
`;

const SearchWrap = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(calc(-50% + 155px));
  display: flex;
  align-items: center;
  transition: all 0.5s ease-out;

  &.clicked {
    transform: translateX(-50%);
  }
`;

const SearchBtn = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  background: url('/images/search.png');
  background-size: cover;
  border: none;
`;

const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  margin-left: 10px;
  padding: 0;
  border: none;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  background-color: inherit;
  opacity: 0;
  transition: opacity 0.5s ease-in;

  &.nav-black {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &.clicked {
    opacity: 1;
  }

  &::placeholder {
    color: #fff;
    text-align: center;
  }
`;
