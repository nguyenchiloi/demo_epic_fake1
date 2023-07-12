import React,{ useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import './topContent.css';
import axios from "axios";

function TopContent(){
    const [listProductGames, setListProductGames] = useState([]);
    useEffect(() => {
        axios.get(`https://dummyjson.com/products?limit=6`)
            .then(res => {
                const persons = res.data.products;
                setListProductGames(persons);
                console.log(persons);
            })
            .catch(error => console.log(error));
    }, [])

    return(
        <div className="main">
        <Container>
            <Row>
                <Col md={10}>
                    <img className="img-fluid main-img" src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/146257/Originals/lol-la-gi-1.jpeg"></img>
                </Col>
                <Col md={2}>
                    {listProductGames.map((item,index)=> (
                        <div className="main-include" key={index}>
                            <img className="mainImg-nd" src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/146257/Originals/lol-la-gi-1.jpeg"></img>
                            <div className="main-title">{item.title}</div>
                        </div>
                        ))}
                </Col>
            </Row>
        </Container>
        </div>
    )
};
export default TopContent;