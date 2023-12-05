// Store.tsx
import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import storeItems from "../data/items.json";
import CategoryFilter from "../components/filters/CategoryFilter";
import StoreItemList from "../components/StoreItemList";
import { StoreItemType } from "../types/StoreItemType";
import BrandFilter from "../components/filters/BrandFilter";

interface StoreProps { }

const Store: React.FC<StoreProps> = () => {
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

    return (
        <Row>
            <Col md={3} className="mb-3">
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
                <h1>Loja</h1>
                <Form className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Buscar por nome"
                        value={searchTerm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    />
                </Form>
                <StoreItemList filteredItems={filteredItems} />
            </Col>
        </Row>
    );
};

export default Store;
