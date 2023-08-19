import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    let post = "react Blog";
    let [coatRecommend, valueConvert] = useState(['남자 코트 추천', '파이썬 독학하기', '강남 맛집 추천']);
    let [like, likeAdd] = useState([0,0,0]);
    let [modal, setModel] = useState(false);
    let [title, setTitle] = useState(0)
    let [input, setInput] = useState('')

    // [1, 2, 3].map(function () {
    //     return (
    //         console.log('히히')
    //     );
    // });

    return (
        <div className="App">
            <div className="black-nav">
                <h4>{post}</h4>
            </div>

            {
                coatRecommend.map(function (a, i) {
                    return (
                        <div className="list" key={i} onClick={
                            () => {
                                setTitle(i);
                            }
                        }>
                            <h4> {coatRecommend[i]} <span onClick={() => {
                                let copy = [...like];
                                copy[i]++;
                                likeAdd(copy);
                            }}>👍</span> {like[i]} </h4>
                            <p>2월 17일 발행</p>
                            <button onClick={() => {
                                let copy = [...coatRecommend];
                                copy.splice(i,1);
                                valueConvert(copy);
                            }}>삭제
                            </button>
                        </div>
                    );
                })
            }
            <input onChange={(e) => {
                setInput(e.target.value);
            }}/>
            <button onClick={() => {
                let copy = [...coatRecommend];
                copy.unshift(input)
                valueConvert(copy)
            }}>글 발행
            </button>

            <Modal valueConvert={valueConvert}
                   title={title}
                   coatRecommend={coatRecommend}/>


        </div>
    );
}

function Modal(props){
    return (
        <div className="modal">
            <h4>{props.coatRecommend[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글 수정</button>
        </div>
    )
}

export default App;
