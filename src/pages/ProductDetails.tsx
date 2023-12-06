import React from "react";
import { Button, Card, Carousel, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { StoreItemType } from "../types/StoreItemType";
import { formatCurrency } from "../utils/formatCurrency";

interface ProductDetailsProps { }

const ProductDetails: React.FC<ProductDetailsProps> = () => {
    const { id } = useParams();
    const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart } = useShoppingCart();

    // Função para buscar detalhes do item com base no ID
    const item: StoreItemType | undefined = storeItems.find(
        (item: StoreItemType) => item.id.toString() === id
    );

    if (!item) {
        // Função para buscar detalhes do item com base no ID
        return <div>Product not found</div>;
    }

    const quantity = getItemQuantity(item.id);

    return (
        <Container className="mt-4">
            <Row>
                <Col xs={12} md={6}>
                    <Carousel>
                        {item.imagesUrl.map((imageUrl, index) => (
                            <Carousel.Item key={index}>
                                <img src={imageUrl} className="d-block w-100" />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                        </Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>Características do Produto:</strong>
                                <br />
                                {item.characteristics}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Marca:</strong> {item.brand}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Categoria:</strong> {item.category}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Preço:</strong> {formatCurrency(item.price)}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <div className="mt-3 d-flex align-items-center justify-content-center">
                        {((quantity - item.stock) == 0 && quantity === 0) ?
                            (<Button variant="secondary" className="w-100" disabled>Indisponível</Button>)
                            :
                            quantity === 0 ? (
                                <Button variant="primary" size="lg" onClick={() => increaseItemQuantity(item.id)}>
                                    Comprar
                                </Button>
                            )
                                : (
                                    <div className="d-flex align-items-center flex-row" style={{ gap: ".5rem" }}>
                                        <Button onClick={() => decreaseItemQuantity(item.id)} size="lg">-</Button>
                                        <div>
                                            <span className="fs-3">{quantity}</span> no carrinho
                                        </div>
                                        {quantity - item.stock != 0 &&
                                            <Button onClick={() => increaseItemQuantity(item.id)} size="lg">+</Button>
                                        }
                                        <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}></div>
                                        <Button onClick={() => removeFromCart(item.id)} variant="danger" size="sm">
                                            Apagar
                                        </Button>
                                    </div>
                                )}
                    </div>

                </Col>
            </Row>
        </Container >
    );
};

export default ProductDetails;