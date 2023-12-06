// ProductDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Card, ListGroup, Button } from "react-bootstrap";
import { StoreItemType } from "../types/StoreItemType";
import { formatCurrency } from "../utils/formatCurrency";
import storeItems from "../data/items.json"; // Import your data source
import { useShoppingCart } from "../context/ShoppingCartContext";

interface ProductDetailsProps { }

const ProductDetails: React.FC<ProductDetailsProps> = () => {
    const { id } = useParams();
    const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart } = useShoppingCart();

    // Fetch the item details based on the ID
    const item: StoreItemType | undefined = storeItems.find(
        (item: StoreItemType) => item.id.toString() === id
    );

    if (!item) {
        // Handle case where the item is not found
        return <div>Product not found</div>;
    }

    const quantity = getItemQuantity(item.id);

    return (
        <Container className="mt-4">
            <Row>
                <Col xs={12} md={6}>
                    <Image src={item.imageUrl} alt={item.name} fluid />
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
                        {quantity === 0 ? (
                            <Button variant="primary" size="lg" onClick={() => increaseItemQuantity(item.id)}>
                                Comprar
                            </Button>
                        ) : (
                            <div className="d-flex align-items-center flex-row" style={{ gap: ".5rem" }}>
                                <Button onClick={() => decreaseItemQuantity(item.id)} size="lg">-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> no carrinho
                                </div>
                                <Button onClick={() => increaseItemQuantity(item.id)} size="lg">+</Button>
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