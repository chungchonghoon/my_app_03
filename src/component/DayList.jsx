import { Link } from "react-router-dom";
import dummy from "../db/data.json" /* DB 데이터 읽기 */

function DayList(props) {
    // console.log(dummy)
    return (
        <div>
            <ul className="list_day">
                {/* 리스트니까 map을 사용하자 */} {/* map 쓸 땐 무조건 키 사용 */}
                {dummy.days.map(k=>{ 
                    return <li key={k.id}> 
                    {/* 백틱을 사용해서 day별로 구분해 데이터를 넘겨 주자 */}
                    <Link to={`/day/${k.day}`}> Day {k.day} </Link> {/* 넘어가기 위해 Link 컴포넌트 사용 */}
                    </li> 
                })}
            </ul>
        </div>
    );
}

export default DayList;