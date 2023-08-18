import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    let post = "react Blog";
    let [coatRecommend, valueConvert] = useState(['남자 코트 추천', '파이썬 독학하기', '강남 맛집 추천']);
    let [like, likeAdd] = useState([0,0,0]);
    let [modal, setModel] = useState(false);

    [1, 2, 3].map(function () {
        return (
            console.log('히히')
        );
    });

    return (
        <div className="App">
            <div className="black-nav">
                <h4>{post}</h4>
            </div>
            {/*<div className="list">*/}
            {/*    <button onClick={() => {*/}
            {/*        let copy = [...coatRecommend];*/}
            {/*        copy.sort();*/}
            {/*        valueConvert(copy);*/}
            {/*    }}>정렬*/}
            {/*    </button>*/}
            {/*    <h4>*/}
            {/*        <button onClick={() => {*/}
            {/*            let copy = [...coatRecommend];*/}
            {/*            copy[0] = '여자코트 추천';*/}
            {/*            valueConvert(copy)*/}
            {/*            // valueConvert(['여자코트 추천', '파이썬 독학하기', '강남 맛집 추천'])*/}
            {/*        }}> 수정하기*/}
            {/*        </button>*/}
            {/*        <h4> {coatRecommend[0]} <span onClick={() => {*/}
            {/*            likeAdd(like++)*/}
            {/*        }}>👍</span> {like} </h4>*/}
            {/*    </h4>*/}

            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}
            {/*<div className="list">*/}
            {/*    <h4>{coatRecommend[1]}</h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}
            {/*<div className="list">*/}
            {/*    <h4>*/}
            {/*        <span onClick={() => {*/}
            {/*            setModel(true)*/}
            {/*        }}>{coatRecommend[2]}</span>*/}
            {/*    </h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}

             {/*{*/}
             {/*    modal === true ? <Modal coatRecommend ={coatRecommend}/> : null*/}
             {/*}*/}

            {
                coatRecommend.map(function (a, i) {
                    return (
                        <div className="list" key={i}>
                            <h4> {coatRecommend[i]} <span onClick={() => {
                                let copy = [...like];
                                copy[i]++;
                                likeAdd(copy);
                            }}>👍</span> {like[i]} </h4>
                            <p>2월 17일 발행</p>
                        </div>
                    );
                })
            }

            <Modal coatRecommend = {coatRecommend} />


        </div>
    );
}

function Modal(props){
    return (
        <div className="modal">
            <h4>{props.coatRecommend[0]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
