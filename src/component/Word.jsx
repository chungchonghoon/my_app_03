import React, { useState } from 'react';

function Word({word}) { /* 뜻 보기, 뜻 숨기기 컴포넌트 */
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    /* 토글 함수 */
    function toggleShow (params) {
        setIsShow(!isShow);
    }

    function toggleDone (params) {
        setIsDone(!isDone);
    }

    
    return (
            <tr className={isDone ? "off" : ""}>
                <td><input type='checkbox' checked={isDone} onChange={toggleDone} /> </td>
                <td>{word.eng}</td>
                <td>{isShow && word.kor}</td> {/* 조건부 렌더링에서 제일 많이 쓰이는 1번 */}
                <td>
                    {/* 조건부 렌더링에서 제일 많이 쓰이는 2번 */}
                    <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button> {/* 토글키 온 클릭 */}
                    <button className="btn_del">삭제</button>
                </td>
            </tr>
    );
}

export default Word;