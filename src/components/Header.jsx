import React from 'react';

function Header() {
  return (
    <div className="header">
      <nav className="nav-bar">
        <h2 className="blind">네비게이션 영역입니다.</h2>
        <div className="nav-burger">
          <button type="button" className="btn-jobgroup">
            <h3 className="blind">직군 별 검색</h3>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <h1 className="logo">wanted</h1>
        </div>
        <ul className="nav-menu">
          <h3 className="blind">네비게이션 메뉴</h3>
          <li className="item-home">홈</li>
          <li>채용</li>
          <li>이벤트</li>
          <li>직군별 연봉</li>
          <li>이력서</li>
          <li className="after new">커뮤니티</li>
          <li>프리랜서</li>
          <li className="after beta">AI 합격예측</li>
        </ul>
        <aside className="nav-aside">
          <div className="sec-btn">
            <h3 className="blind">검색, 알림, 프로필</h3>
            <button
              style={{
                backgroundImage: 'url(/images/search.png)',
              }}
              className="btn-search"
            ></button>
            <button
              style={{
                backgroundImage: 'url(/images/bell.png)',
              }}
              className="btn-notice"
            ></button>
            <button className="btn-profile"></button>
            <button className="btn-moremenu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <button className="btn-enterprise">기업 서비스</button>
        </aside>
      </nav>
    </div>
  );
}

export default Header;
