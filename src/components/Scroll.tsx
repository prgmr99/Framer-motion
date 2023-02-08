import styled from "styled-components";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Scroll() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-900, 900], [-360, 360]);
  const gradient = useTransform(
    x,
    [-900, 0, 900],
    [
      "linear-gradient(135deg, rgb(236, 62, 4), rgb(238, 194, 0))",
      "linear-gradient(135deg, rgb(0, 123, 238), rgb(0, 206, 238))",
      "linear-gradient(135deg, rgb(198, 0, 238), rgb(75, 0, 238))",
    ]
  );
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 3]);
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default Scroll;
