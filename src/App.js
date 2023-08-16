import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    let post = "react Blog";
    let [coatRecommend, valueConvert] = useState(['남자 코트 추천', '파이썬 독학하기', '강남 맛집 추천']);
    let [like, likeAdd] = useState(0);


    return (
        <div className="App">
            <div className="black-nav">
                <h4>{post}</h4>
            </div>
            <div className="list">
                <button onClick={() => {
                    let copy = [...coatRecommend];
                    copy.sort();
                    valueConvert(copy);
                }}>정렬
                </button>
                <h4>
                    <button onClick={() => {
                        let copy = [...coatRecommend];
                        copy[0] = '여자코트 추천';
                        valueConvert(copy)
                        // valueConvert(['여자코트 추천', '파이썬 독학하기', '강남 맛집 추천'])
                    }}> 수정하기
                    </button>
                    <h4> {coatRecommend[0]} <span onClick={() => {
                        likeAdd(like++)
                    }}>👍</span> {like} </h4>
                </h4>

                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{coatRecommend[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{coatRecommend[2]}</h4>
                <p>2월 17일 발행</p>
            </div>

            <Modal />

        </div>
    );
}

function Modal(){
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
