import * as React from "react";
import Moveable from "react-moveable";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

// build a component that looks like a box using antd
const Box = ({ children, style }) => {
  return (
    <div
      style={{
        width: "300px",
        height: "400px",
        backgroundColor: "red",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const MoveableBasic = () => {
  const targetRef = React.useRef(null);
  return (
    <div className="root">
      <div className="container">
        <div className="target" ref={targetRef}>
          <Box>
            <Title>Moveable Box</Title>
            <Paragraph>
              This is just an example of a component, here "Box", that can be
              moved throughout the pagr.
            </Paragraph>
          </Box>
        </div>
        <Moveable
          target={targetRef}
          draggable={true}
          throttleDrag={1}
          edgeDraggable={false}
          startDragRotate={0}
          throttleDragRotate={0}
          onDrag={(e) => {
            e.target.style.transform = e.transform;
          }}
        />
      </div>
    </div>
  );
};

export default MoveableBasic;
