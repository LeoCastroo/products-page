import { Carousel } from "react-bootstrap";

type ProductsDetailsProps = {

}

export default function ProductsDetails() {
    return (
        <>
            <h1>Título</h1>
            <Carousel>
                <Carousel.Item>
                    <img src={"/img/tenis1.jpg"}></img>
                </Carousel.Item>
            </Carousel>
            <>
            </>
        </>
    );
}