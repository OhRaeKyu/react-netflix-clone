import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterWrap>
      <FooterContent>
        <LinkTitle>넷플릭스 코리아</LinkTitle>
        <LinkConatiner>
          <LinkItem>
            <a href="/">음성 지원</a>
          </LinkItem>
          <LinkItem>
            <a href="/">고객 센터</a>
          </LinkItem>
          <LinkItem>
            <a href="/">기프트 카드</a>
          </LinkItem>
          <LinkItem>
            <a href="/">미디어 센터</a>
          </LinkItem>
          <LinkItem>
            <a href="/">투자 정보(IR)</a>
          </LinkItem>
          <LinkItem>
            <a href="/">입사 정보</a>
          </LinkItem>
          <LinkItem>
            <a href="/">이용 약관</a>
          </LinkItem>
          <LinkItem>
            <a href="/">개인정보</a>
          </LinkItem>
          <LinkItem>
            <a href="/">법적 고지</a>
          </LinkItem>
          <LinkItem>
            <a href="/">쿠키 설정</a>
          </LinkItem>
          <LinkItem>
            <a href="/">회사 정보</a>
          </LinkItem>
          <LinkItem>
            <a href="/">문의하기</a>
          </LinkItem>
        </LinkConatiner>
        <CopyRight>
          <small>Netflix Rights Reserved.</small>
        </CopyRight>
      </FooterContent>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;

  @media (max-width: 769px) {
    padding: 20px 20px 30px 20px;
  }
`;

const FooterContent = styled.div`
  width: 1000px;

  @media (max-width: 769px) {
    width: 100%;
  }
`;

const LinkTitle = styled.h2`
  color: gray;
  font-size: 1.2rem;
`;

const LinkConatiner = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 769px) {
    margin-top: 25px;
  }
`;

const LinkItem = styled.li`
  width: 25%;
  margin-bottom: 20px;

  a {
    color: #808080;
    font-size: 0.8rem;

    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 769px) {
    margin-bottom: 15px;
  }
`;

const CopyRight = styled.div`
  margin-top: 50px;
  font-size: 1.2rem;
  text-align: center;
`;
