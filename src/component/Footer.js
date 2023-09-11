import React from 'react';
import { styled } from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkTitle>
            넷플릭스 대한민국
            <FooterLinkContent>
              <FooterLink
                href='https://help.netflix.com/ko/node/412'
                target='_blank'
              >
                넷플릭스 소개
              </FooterLink>
              <FooterLink href='https://help.netflix.com/ko/' target='_blank'>
                고객 센터
              </FooterLink>
              <FooterLink href='https://help.netflix.com/ko/' target='_blank'>
                미디어 센터
              </FooterLink>
              <FooterLink
                href='https://help.netflix.com/ko/legal/termsofuse'
                target='_blank'
              >
                이용약관
              </FooterLink>
              <FooterLink
                href='https://help.netflix.com/ko/legal/privacy'
                target='_blank'
              >
                개인정보
              </FooterLink>
              <FooterLink
                href='https://help.netflix.com/ko/legal/corpinfo'
                target='_blank'
              >
                회사정보
              </FooterLink>
              <FooterLink
                href='https://help.netflix.com/ko/contactus'
                target='_blank'
              >
                문의하기
              </FooterLink>
              <FooterLink
                href='https://help.netflix.com/ko/legal/notices'
                target='_blank'
              >
                법적 고지
              </FooterLink>
            </FooterLinkContent>
          </FooterLinkTitle>
        </FooterLinkContainer>
        <FooterDescContainer>
          <FooterDescRight>ⓒ Netflix RIGHTS RESERVED.</FooterDescRight>
        </FooterDescContainer>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 40px 0;
  z-index: 1000;
  border-top: 1px solid rgb(25, 25, 25);

  @media (max-width: 768px) {
    padding: 20px 20px 30px 20px;
  }
`;

const FooterContent = styled.div``;
const FooterLinkContainer = styled.div`
  width: 500px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const FooterLinkTitle = styled.h1`
  color: gray;
  font-size: 17px;
`;
const FooterLinkContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 35px;
  @media (max-width: 768px) {
    margin-top: 26px;
  }
`;
const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 110px;
  margin-bottom: 21px;
  text-decoration: none;

  &::hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;
const FooterDescContainer = styled.div`
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const FooterDescRight = styled.h2`
  color: white;
  font-size: 14px;
  text-align: center;
`;
