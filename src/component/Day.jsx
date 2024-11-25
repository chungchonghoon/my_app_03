import { useParams } from "react-router-dom";
import dummy from "../db//data.json"
import Word from "./Word";


function Day(props) {
    /* const day = 1; */

    // url에 포함된 day값을 가져오기 위해서 useParams() 를 사용 함
    const day = useParams().day; /* App.js에서 day로 파라미터를 받았기 때문에 day를 받음 */

    const wordList = dummy.words.filter(k=> (k.day) === Number(day)); /* day별로 필터로 걸러내기 */

    return (
        <table>
            <tbdoy>
                {/* {dummy.wordList.map(k => { */}
                {wordList.map(k => {
                    return <Word key={k.id} word={k} />
                })}
            </tbdoy>
        </table>
    );
}

export default Day;