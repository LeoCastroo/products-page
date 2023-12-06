// StoreItemList.tsx
import React from "react";
import { Row, Col } from "react-bootstrap";
//import { StoreItem as StoreItemType } from "../data/items.json";
import { StoreItem } from "../components/StoreItem";
import { StoreItemType } from "../types/StoreItemType";

interface StoreItemListProps {
  filteredItems: StoreItemType[];
  onItemClick: (item: StoreItemType) => void;
}

const StoreItemList: React.FC<StoreItemListProps> = ({ filteredItems, onItemClick }) => {
  return (
    <Row xs={1} lg={3} className="g-3">
      {filteredItems.map((item: StoreItemType) => (
        <Col key={item.id} style={{ cursor: "pointer" }} onClick={() => onItemClick(item)} >
          <StoreItem {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default StoreItemList;
