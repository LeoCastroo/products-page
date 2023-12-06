import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utils/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { StoreItemType } from "../types/StoreItemType";


export function StoreItem(item: StoreItemType) {
    const { increaseItemQuantity, getItemQuantity } = useShoppingCart();
    const quantity = getItemQuantity(item.id);

    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={item.imagesUrl[0]}
                height="200px"
                style={{ objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column ">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-5">
                        {item.name}
                    </span>
                    <span className="ms-2 text-muted">
                        {formatCurrency(item.price)}
                    </span>
                </Card.Title>
                <Card.Text>
                    {item.resume}
                </Card.Text>
                <div className="mt-auto">
                    {(quantity - item.stock) < 0 ?
                        <Button variant="primary" className="w-100" onClick={() => increaseItemQuantity(item.id)}>Comprar</Button>
                        : <Button variant="secondary" className="w-100" disabled>Indisponível</Button>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}