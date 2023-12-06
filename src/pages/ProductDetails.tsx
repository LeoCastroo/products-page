// ProductDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Card, ListGroup } from "react-bootstrap";
import { StoreItemType } from "../types/StoreItemType";
import { formatCurrency } from "../utils/formatCurrency";
import storeItems from "../data/items.json"; // Import your data source

interface ProductDetailsProps { }

const ProductDetails: React.FC<ProductDetailsProps> = () => {
    const { id } = useParams();

    // Fetch the item details based on the ID
    const item: StoreItemType | undefined = storeItems.find(
        (item: StoreItemType) => item.id.toString() === id
    );

    if (!item) {
        // Handle case where the item is not found
        return <div>Product not found</div>;
    }

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
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;