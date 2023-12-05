// CategoryFilter.tsx
import React from "react";
import { Form } from "react-bootstrap";

interface CategoryFilterProps {
  distinctCategories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  distinctCategories,
  selectedCategories,
  onCategoryChange,
}) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
      <h4 style={{ marginBottom: "15px" }}>Filtrar por Categoria</h4>
      <Form.Group>
        {distinctCategories.map((category: string) => (
          <Form.Check
            key={category}
            type="checkbox"
            label={category}
            checked={selectedCategories.includes(category)}
            onChange={() => onCategoryChange(category)}
            style={{ marginBottom: "8px", display: "block" }}
          />
        ))}
      </Form.Group>
    </div>
  );
};

export default CategoryFilter;
