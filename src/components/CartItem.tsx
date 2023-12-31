import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find(item => item.id === id);
    if (!item) { return null; }
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imagesUrl[0]} style={{ width: "125px", height: "75px", objectFit: "cover" }}>
            </img>
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && <span className="text-muted" style={{ fontSize: "1.0rem" }}>{quantity}</span>}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {formatCurrency(item.price)}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {formatCurrency(item.price* quantity)}
                </div>
                <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
            </div>
        </Stack>
    )
}