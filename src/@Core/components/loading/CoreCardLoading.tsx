import { Col, Row, Skeleton, Space } from "antd";
import React from "react";

interface CoreCardLoadingProps {
  type: "product";
  quantity: number;
}

const CoreCardLoading: React.FC<CoreCardLoadingProps> = (props) => {
  const { type, quantity } = props;
  const quantityToArr = new Array(quantity)
    .fill(0)
    .map((_, index) => index + 1);
  return (
    <Row>
      {quantityToArr.map((_, i) =>
        type === "product" ? (
          <Col
            key={`loading card product ${i}`}
            style={{ background: "white" }}
            className="roundedBox boxShadow"
          >
            <Space direction="vertical" style={{ width: "100%" }}>
              <Skeleton.Button />

              <Skeleton.Input />
              <Skeleton.Input />
              <Skeleton.Input active={true} block />
              <Skeleton.Input active={true} block />
            </Space>
          </Col>
        ) : null
      )}
    </Row>
  );
};

export default React.memo(CoreCardLoading);
