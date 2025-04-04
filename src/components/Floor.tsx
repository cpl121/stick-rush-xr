const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <boxGeometry args={[5, 5, 0.5]} />
      <meshStandardMaterial color="#468585" emissive={'#468585'} />
    </mesh>
  );
};

export default Floor;
