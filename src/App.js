import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* 라우터의 영향을 받지 않고 고정된 컴포넌트 */}
        <Header />
        <Routes>
          {/* path='/' 는 첫 페이지를 의미한다.(홈페이지를 의미한다.) */}
          <Route path='/' element={<DayList />}/> {/* 눌렀을 때 넘어갈 컴포넌트 */} {/* DayList가 DB 안 JSON의 Day를 가져 옴 */}
          {/* 동적라우팅 */} {/* 받은 데이를 :day 로 받음. */} {/* :day = ${k.day} */} {/* :day = 파라미터 */}
          <Route path='/day/:day' element={<Day />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
