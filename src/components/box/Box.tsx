import {  useRef } from "react";
import {  useFrame } from "react-three-fiber";

export const Box = () => {
  const boxRef = useRef<any>();

  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};