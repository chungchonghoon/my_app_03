import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className='header'>
            <h1><Link to='/'>토익 영단어(고급)</Link></h1> {/* App.js의 홈페이지(루트)인 '/'를 사용한다.*/}
            <div className='menu'> 
                <Link className='link'>단어추가</Link> {/* 라우터는 <Link> 컴포넌트를 사용한다. */}
                <Link className='link'>Day 추가</Link>
            </div>
        </div>
    );
}

export default Header;