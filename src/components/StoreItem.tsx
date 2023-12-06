import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utils/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { StoreItemType } from "../types/StoreItemType";


export function StoreItem(item: StoreItemType) {
    const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart } = useShoppingCart(); 
    const quantity = getItemQuantity(item.id);
    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={item.imageUrl}
                height="200px"
                style={{ objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column ">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">
                        {item.name}
                    </span>
                    <span className="ms-2 text-muted">
                        {formatCurrency(item.price)}
                    </span>
                </Card.Title>
                <Card.Text>
                    {item.price}
                </Card.Text>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button variant="primary" className="w-100" onClick={() => increaseItemQuantity(item.id)}>Comprar</Button>
                    ) : <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                        <Button onClick={() => decreaseItemQuantity(item.id)}>-</Button>
                        <div>
                            <span className="fs-3">{quantity}</span> no carrinho
                        </div>
                        <Button onClick={() => increaseItemQuantity(item.id)}>+</Button>
                        <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }} >
                        </div>
                        <Button onClick={() => removeFromCart(item.id)} variant="danger" size="sm">Apagar</Button>
                    </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}