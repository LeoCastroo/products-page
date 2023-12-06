//Store.tsx
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StoreItemList from "../components/StoreItemList";
import BrandFilter from "../components/filters/BrandFilter";
import CategoryFilter from "../components/filters/CategoryFilter";
import storeItems from "../data/items.json";
import { StoreItemType } from "../types/StoreItemType";

interface StoreProps { }

const Store: React.FC<StoreProps> = () => {

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

    // Extraindo as categorias distintas para visualização
    const distinctCategories: string[] = Array.from(
        new Set(storeItems.map((item: StoreItemType) => item.category))
    );

    // Extraindo as marcas distintas para visualização
    const distinctBrands: string[] = Array.from(
        new Set(storeItems.map((item: StoreItemType) => item.brand))
    );

    const filteredItems: StoreItemType[] = storeItems.filter(
        (item: StoreItemType) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
            (selectedBrands.length === 0 || selectedBrands.includes(item.brand))
    );

    const handleCategoryChange = (category: string): void => {
        const newSelectedCategories: string[] = selectedCategories.includes(category)
            ? selectedCategories.filter((c: string) => c !== category)
            : [...selectedCategories, category];
        setSelectedCategories(newSelectedCategories);
    };

    const handleBrandChange = (brand: string): void => {
        const newSelectedBrands: string[] = selectedBrands.includes(brand)
            ? selectedBrands.filter((c: string) => c !== brand)
            : [...selectedBrands, brand];
        setSelectedBrands(newSelectedBrands);
    };

    const handleItemClick = (item: StoreItemType): void => {
        navigate(`/product/${item.id}`);
    };

    return (
        <Row>
            <Col md={3} className="mb-3">
                <Form className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Buscar por nome"
                        value={searchTerm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    />
                </Form>
                <CategoryFilter
                    distinctCategories={distinctCategories}
                    selectedCategories={selectedCategories}
                    onCategoryChange={handleCategoryChange}
                />
                <BrandFilter
                    distinctBrands={distinctBrands}
                    selectedBrands={selectedBrands}
                    onBrandChange={handleBrandChange}
                />
            </Col>
            <Col md={9}>
                <h1>Aproveite as melhores promoções</h1>
                <StoreItemList
                    filteredItems={filteredItems}
                    onItemClick={handleItemClick}
                />
            </Col>
        </Row>
    );
};

export default Store;
