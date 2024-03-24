"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export function Computer(props) {
  const { nodes, materials } = useGLTF("/models/scene.gltf");
  const group = useRef();
  const { camera } = useThree();

  // 카메라를 뒤로 이동하여 줌아웃 효과 구현
  camera.position.z = 45;

  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.5; // 회전 속도 조절
  });

  return (
    <group {...props} dispose={null} ref={group}>
      <mesh
        geometry={
          nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry
        }
        material={materials.retro_computer_setup_Mat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/scene.gltf");
