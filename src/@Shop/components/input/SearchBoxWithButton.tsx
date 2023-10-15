import { Button, Col, Input, Row } from "antd";
import React from "react";

const SearchBoxWithButton: React.FC = () => {
  return (
    <Row className="flex flex-nowrap">
      <Col span={20} className="px-8">
        <Input
          // onChange={(e) => handleFilterChange("name", e.target.value)}
          placeholder="Nhập tên sản phẩm hoặc từ khoá để tìm kiếm"
          style={{ marginRight: "0.5rem" }}
        />
      </Col>
      <Col span={4} className="px-8">
        <Button onClick={() => 1} type="primary">
          Tìm kiếm
        </Button>
      </Col>
    </Row>
  );
};

export default React.memo(SearchBoxWithButton);
