import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const boxVarients = {
  hover: { scale: 1, rotateZ: 90 },
  click: { scale: 0.7, borderRadius: "100px" },
  drag: { backgroundColor: "rgba(162, 155, 254,1.0)", duration: 10 },
};

function GestureAndDrag() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <BiggerBox ref={biggerBoxRef}>
      <Box
        drag
        dragSnapToOrigin
        dragElastic={0.5}
        dragConstraints={biggerBoxRef}
        variants={boxVarients}
        whileHover="hover"
        whileDrag="drag"
        whileTap="click"
      />
    </BiggerBox>
  );
}

export default GestureAndDrag;
