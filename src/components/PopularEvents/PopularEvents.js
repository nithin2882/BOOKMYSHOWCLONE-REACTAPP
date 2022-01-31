import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";



function PopularEvents() {
    return (
        <div style={{ background: "#f8f8f8", padding: "5%" }}>
            <h2 style={{ color: "#000" }}>PopularEvents</h2>
            <Carousel indicators={false} variant="dark">
                <Carousel.Item >
                    <CardGroup style={{ gap: "5%" }}>

                        <Card className="bg-slider text-black" style={{ height: "500px", width: "270px", background: "#f8f8f8" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-slider text-black" style={{ height: "500px", width: "270px", background: "#f8f8f8" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-slider text-black" style={{height: "500px", width: "270px", background: "#f8f8f8" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-slider text-black" style={{ height: "500px", width: "270px", background: "#f8f8f8" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-slider text-black" style={{ height: "500px", width: "270px", background: "#f8f8f8" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item >
                    <CardGroup style={{ gap: "5%" }} >
                        <Card className="bg-slider text-black" style={{ height: "500px", width: "270px", background: "#f8f8f8" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-slider text-black" style={{ height: "500px", width: "270px", background: "#f8f8f8" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-slider text-black" style={{ height: "500px", width: "270px", background: "#f8f8f8" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-slider text-black" style={{height: "500px", width: "270px", background: "#f8f8f8" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-slider text-black border" style={{ height: "500px", width: "270px", border: "none", background: "#f8f8f8" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default PopularEvents;
