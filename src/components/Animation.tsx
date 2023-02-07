import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Smile = styled.span`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 190px;
`;

function Animation() {
  return (
    <Wrapper>
      <Box
        transition={{ type: "spring", damping: 100 }}
        initial={{ scale: 0, borderRadius: "100px" }}
        animate={{ scale: 2, borderRadius: "100px", rotateZ: 360 }}
      >
        <Smile>😞</Smile>
      </Box>
    </Wrapper>
  );
}

export default Animation;
