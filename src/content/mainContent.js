import React, { useState, useEffect } from "react";
import './mainContent.css';
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Card from 'react-bootstrap/Card';

function MainContent() {
    const [listProductGames, setListProductGames] = useState([]);
    const [listGames, setListGames] = useState([]);
    const [listTopMore, setListTopMore] = useState([]);
    useEffect(() => {
        axios.get(`https://dummyjson.com/products?limit=2`)
            .then(res => {
                const persons = res.data.products;
                setListProductGames(persons);
                console.log(persons);
            })
            .catch(error => console.log(error));
    }, [])
    useEffect(() => {
        axios.get(`https://dummyjson.com/products?limit=3`)
            .then(res => {
                const persons = res.data.products;
                setListGames(persons);
                console.log(persons);
            })
            .catch(error => console.log(error));
    }, [])
    useEffect(() => {
        axios.get(`https://dummyjson.com/products?limit=5`)
            .then(res => {
                const persons = res.data.products;
                setListTopMore(persons);
                console.log(persons);
            })
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <div className="mainContent">
                <Container>
                    <Row>
                        {listProductGames.map((item, index) => (
                            <Col md={6} key={index}>
                                <img className="img-fluid main-img" src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/146257/Originals/lol-la-gi-1.jpeg"></img>
                                <div className="main-title">{item.title}</div>
                                <div className="main-description">{item.description}</div>
                                <div className="main-price">₫{item.price}</div>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <div className="mainfreeg">
                            <div className="mainfreeGame">
                                <div className="NamefreeGame">
                                    Free Games
                                </div>
                                <button className="viewmorefg">View More</button>
                            </div>
                            <Row>
                                <Col md={6}>
                                    <img className="img-fluid main-img" src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/146257/Originals/lol-la-gi-1.jpeg"></img>
                                    <div className="click-free">FREE NOW</div>
                                    <div className="pt-3 text-light pb-4">Free Now - Jul 14 at 10:00 PM</div>
                                </Col>
                                <Col md={6}>
                                    <img className="img-fluid main-img" src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/146257/Originals/lol-la-gi-1.jpeg"></img>
                                    <div className="click-coming">COMING SOON</div>
                                    <div className="pt-3 text-light pb-4">Free Jul 14 - Jul 21</div>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>
                <div className="mainnd1">
                    <div className="mainGame">
                        <div className="NameGame">
                            LEAGUE OF LEGEND
                        </div>
                        <button className="btnGame">VISIT LEAGUEOFLEGEND.COM</button>
                    </div>
                    <Row>
                        {listGames.map((item, index) => (
                            <Col md={4} key={index} className="main-img">
                                <img className="img-fluid" src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/146257/Originals/lol-la-gi-1.jpeg"></img>
                                <div className="font-base">ADD-ON</div>
                                <div>{item.title}</div>
                                <div className="text-light">Free</div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="MoreTop mt-3">
                    <Row>
                        <Col md={4}>
                            <div className="topsellers mb-2">
                                <div className="nametopsellers">
                                    Top Sellers
                                </div>
                                <button className="viewmorefg me-2">View More</button>
                            </div>

                            {listTopMore.map((item, index) => (
                                <Row key={index} className="topmore-data">
                                    <Col md={3}>
                                        <img className="maintopmore" src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/146257/Originals/lol-la-gi-1.jpeg"></img>
                                    </Col>
                                    <Col md={9}>
                                        <div className="title-topmore">{item.title}</div>
                                        <div className="price-topmore">₫{item.price}</div>
                                    </Col>
                                </Row>
                            ))}

                        </Col>
                        <Col md={4}>
                            <div className="mostplayer mb-2">
                                <div className="namemostplayer">
                                    Most Player
                                </div>
                                <button className="viewmorefg me-2">View More</button>
                            </div>
                            {listTopMore.map((item, index) => (
                                <Row key={index} className="topmore-data">
                                    <Col md={3}>
                                        <img className="maintopmore" src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/146257/Originals/lol-la-gi-1.jpeg"></img>
                                    </Col>
                                    <Col md={9}>
                                        <div className="title-topmore">{item.title}</div>
                                        <div className="price-topmore">₫{item.price}</div>
                                    </Col>
                                </Row>
                            ))}

                        </Col>
                        <Col md={4}>
                            <div className="topupcoming mb-2">
                                <div className="namemostplayer">
                                    Top Upcoming Wishlisted
                                </div>
                                <button className="viewmorefg me-2">View More</button>
                            </div>
                            <Container>
                                {listTopMore.map((item, index) => (

                                    <Row key={index} className="topmore-data">
                                        <Col md={3}>
                                            <img className="maintopmore" src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/146257/Originals/lol-la-gi-1.jpeg"></img>
                                        </Col>
                                        <Col md={9}>
                                            <div className="title-topmore">{item.title}</div>
                                            <div className="price-topmore">₫{item.price}</div>
                                        </Col>
                                    </Row>
                                ))}
                            </Container>
                        </Col>
                    </Row>
                </div>
                <div className="bestgame mt-4">

                    <Container>
                        <Row>
                            {listGames.map((item, index) => (
                                <Col md={4} key={index}>
                                    <img className="img-fluid img-bestgame" src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/146257/Originals/lol-la-gi-1.jpeg"></img>
                                    <div className="fs-5 text-light">{item.title}</div>
                                    <div className="bestgame-description">{item.description}</div>
                                    <div className="fs-4 text-light">₫{item.price}</div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
                <div className="trending">
                    <div className="mainGame">
                        <div className="NameGame fs-4">
                            Trending
                        </div>
                        <button className="viewmorefg me-2">View More</button>
                    </div>
                    <Container>
                        <Row>
                            {listTopMore.map((item, index) => (
                                <Col key={index}>
                                    <Card style={{ width: '12rem', height: '25rem', marginBottom: '20px', backgroundColor: '#121212' }}>
                                        <Card.Img className="topmain-img" src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/146257/Originals/lol-la-gi-1.jpeg" />
                                        <Card.Body>
                                            <Card.Title className="font-base">BASE GAME</Card.Title>
                                            <Card.Title className="font-title">{item.title}</Card.Title>
                                            <Card.Text>
                                                <div className="title-text">
                                                    <div className="item-price">₫{item.price}</div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            ))}
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}
export default MainContent;