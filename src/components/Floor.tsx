import { usePlane } from '@react-three/cannon';

const Floor = () => {
  const [floorRef] = usePlane(() => ({
    position: [0, -3, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }));

  return (
    <mesh ref={floorRef} receiveShadow>
      <boxGeometry args={[5, 5, 0.5]} />
      <meshStandardMaterial color="#468585" emissive={'#468585'} />
    </mesh>
  );
};

export default Floor;
