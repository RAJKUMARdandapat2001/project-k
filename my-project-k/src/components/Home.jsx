import React from 'react'
import './HomePage.css'
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="homepage">

            {/* Banner Carousel */}
            <section className="banner-carousel">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" height={500} src="https://gphome.gumlet.io/gpcdn/promotions/Diwali-mobile-offers-and-sale-today-gopaisa.jpg?w=400&dpr=2.6" alt="First slide" />
                        <Carousel.Caption>
                            <h3>Big Discounts on Samsung Galaxy</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" height={500} src="https://www.bajajmall.in/content/dam/emistoremarketplace/index/10-10-22/geetanjali/mobile-phones-diwali-page/big-banner/desk/MCLP_Row5_1_BigBanner_Desk_vivoT15G_PDP_B2B.jpg" alt="Second slide" />
                        <Carousel.Caption>
                            <h3>Mobile Sale - Up to 70% Off</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" height={500} src="https://www.bajajmall.in/content/dam/emistoremarketplace/index/10-10-22/geetanjali/mobile-phones-diwali-page/big-banner/desk/MCLP_Row3_1_BigBanner_Desk_OnePlus10Pro_PDP_B2B.jpg" alt="Third slide" />
                        <Carousel.Caption>
                            <h3>One Plus sale - Up to 60% Off</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            {/* Categories */}
            <section className="categories my-4">
                <Container>
                    <Row>
                        <Col md={3}>
                            <Card className="category-card">
                                <Card.Img variant="top" src="https://exstatic-in.vivo.com/Oz84QB3Wo0uns8j1/in/1719395286096/a7e2092c6c96f52e787b6608662dc5b5.png_w860-h860.webp" />
                                <Card.Body>
                                    <Card.Title>Vivo</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="category-card">
                                <Card.Img variant="top" src="https://bestbuymobiles.in/wp-content/uploads/2023/08/Apple-iPhone-14-Pro-Space-Black-Open-Box-Mobile-Bestbuy-Mobiles-1.png" />
                                <Card.Body>
                                    <Card.Title>Apple iphone 14 pro</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="category-card">
                                <Card.Img variant="top" src="https://image01-in.oneplus.net/ebp/202404/07/1-M00-52-A2-CpgM7WYR-viATDPnAATPnD-sVqo964.png?x-amz-process=image/format,webp/quality,Q_80" />
                                <Card.Body>
                                    <Card.Title>Oneplus 5G</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="category-card">
                                <Card.Img variant="top" src="https://m.media-amazon.com/images/I/41OmEIOlJCL._SL500_.jpg" />
                                <Card.Body>
                                    <Card.Title>Samsung Galaxy S24 </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
  )
}

export default Home