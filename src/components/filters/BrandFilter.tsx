// BrandFilter.tsx
import React from "react";
import { Form } from "react-bootstrap";

interface BrandFilterProps {
  distinctBrands: string[];
  selectedBrands: string[];
  onBrandChange: (brand: string) => void;
}

const BrandFilter: React.FC<BrandFilterProps> = ({
  distinctBrands,
  selectedBrands,
  onBrandChange,
}) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
      <h4 style={{ marginBottom: "15px" }}>Filtrar por Marca</h4>
      <Form.Group>
        {distinctBrands.map((brand: string) => (
          <Form.Check
            key={brand}
            type="checkbox"
            label={brand}
            checked={selectedBrands.includes(brand)}
            onChange={() => onBrandChange(brand)}
            style={{ marginBottom: "8px", display: "block" }}
          />
        ))}
      </Form.Group>
    </div>
  );
};

export default BrandFilter;
