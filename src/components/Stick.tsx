import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';

type StickProps = {
  position?: [number, number, number];
  color?: string;
};

const Stick = ({ position = [0, 0, 0], color = '#468585' }: StickProps) => {
  const ref = useRef<Group>(null!);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  const handleGrabStart = (e: any) => {
    const controller = e.target;
    ref.current.parent = controller;
  };

  const handleGrabEnd = () => {
    ref.current.parent = null;
  };

  return (
    <group
      position={position}
      ref={ref}
      scale={[0.02, 0.02, 0.02]}
      onSelectStart={handleGrabStart}
      onSelectEnd={handleGrabEnd}
    >
      <mesh position={[0, 5, 0]}>
        <capsuleGeometry args={[2, 20, 10, 20]} />
        <meshLambertMaterial color="#468585" emissive={'#468585'} />
      </mesh>
    </group>
  );
};

export default Stick;
