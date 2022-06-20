import React from 'react';
import styled from 'styled-components';

export default function BannerSkeleton() {
  return <Skeleton />;
}

const Skeleton = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(20, 20, 20);

  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(95vw);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20vw;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(50, 50, 50, 0.1),
      rgba(50, 50, 50, 0.5),
      rgba(50, 50, 50, 0.1)
    );
    animation: loading 0.5s infinite linear;
  }
`;
