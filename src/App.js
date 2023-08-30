import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import mainImage from './img/logo.svg'
import shoesData from './data'
import {useState} from "react";
import {Routes, Route, Link} from 'react-router-dom'
import Detail from './routes/Detail';

function App() {

    let [shoes] = useState(shoesData);

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <p><Link to={"/"}>메인화면</Link></p>
            <p><Link to={"/detail"}>상세페이지</Link></p>
            <Routes>
                <Route path="/" element={
                    <>
                        <div className="main-bg" style={{backgroundImage: 'url(' + mainImage + ')'}}></div>
                        <div className="container">

                            <div className="row">
                                {
                                    shoes.map((a, i) => {
                                        return (
                                            <Card shoes={shoes[i]} i={i + 1}/>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </>
                }/>
                <Route path="/detail" element={<Detail/>}/>
            </Routes>
        </div>
    );
}

function Card(props) {
    return (
        <div className="col-md-4">
            <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%"/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{props.shoes.price}</p>
        </div>
    )
}



export default App;
