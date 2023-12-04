import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utils/formatCurrency"

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imageUrl: string,
}

export function StoreItem({ id, name, price, imageUrl }: StoreItemProps) {
    const quantity = 1;
    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={imageUrl}
                height="200px"
                style={{ objectFit: 'cover' }}
            />
            <Card.Body className="d-flex flex-column ">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">
                        {name}
                    </span>
                    <span className="ms-2 text-muted">
                        {formatCurrency(price)}
                    </span>
                </Card.Title>
                <Card.Text>
                    {price}
                </Card.Text>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button variant="primary" className="w-100">Comprar</Button>
                    ) : <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                        <Button>-</Button>
                        <div>
                            <span className="fs-3">{quantity}</span> no carrinho
                        </div>
                        <Button>+</Button>
                        <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }} >
                        </div>
                        <Button variant="danger" size="sm">Apagar</Button>
                    </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}