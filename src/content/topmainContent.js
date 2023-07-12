import React, { useState, useEffect } from "react";
import './topmanContent.css';
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopMainContent() {
    const [listProductGames, setListProductGames] = useState([]);
    useEffect(() => {
        axios.get(`https://dummyjson.com/products?limit=10`)
            .then(res => {
                const persons = res.data.products;
                setListProductGames(persons);
                console.log(persons);
            })
            .catch(error => console.log(error));
    }, [])
    // const OnClickTruotNgangLeft = () =>{
    //     this.slider.Prev();
    // }
    // const OnClickTruotNgangRight = () =>{
    //     this.slider.Next();
    // }
    const settings = {
        //dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      };
    return (
        <div>
            <div className="topmain-title">
                <Container className="topmain-sale">
                    <div className="gameonsale">
                        Game On Sale &#62;
                    </div>
                    <div>
                        <button className="btn-chuyen slick-arrow slick-prev">
                            &#60;
                        </button>
                        <button className="btn-chuyen slick-arrow slick-next">
                            &#62;
                        </button>
                    </div>
                </Container>
                <Container>
                    <Row >
                        {/* <div className="gamesale" id="gamesale"> */}
                        <Slider {...settings}>
                        {listProductGames.map((item, index) => (
                            <Col key={index}>
                                <Card style={{ width: '12rem', height: '25rem', marginBottom: '20px', marginTop: '20px', backgroundColor: '#121212' }}>
                                    <Card.Img className="topmain-img" src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/146257/Originals/lol-la-gi-1.jpeg" />
                                    <Card.Body>
                                        <Card.Title className="font-base">BASE GAME</Card.Title>
                                        <div className="font-title">{item.title}</div>
                                        <Card.Text>
                                            <div className="title-text">
                                                <button className="btn btn-primary btnStock">{item.stock}%</button>
                                                <div className="item-price-sale">₫{item.price}</div>
                                                <div className="item-price">₫{item.price}</div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        </Slider>
                        {/* </div> */}

                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default TopMainContent;