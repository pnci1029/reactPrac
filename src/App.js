import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import mainImage from './img/logo.svg'
import shoesData from './data'
import {useState} from "react";

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
            <div className="main-bg" style={{backgroundImage: 'url(' + mainImage + ')' }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
                        <h4>상품명</h4>
                        <p>상품정보</p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
                        <h4>상품명</h4>
                        <p>상품정보</p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
                        <h4>상품명</h4>
                        <p>상품정보</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
