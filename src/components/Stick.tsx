import { useBox } from '@react-three/cannon';
import { useEffect } from 'react';

type StickProps = {
  position?: [number, number, number];
  delay?: number;
};

const Stick = ({ position = [0, 0, 0], delay = 0 }: StickProps) => {
  const [ref, api] = useBox(() => ({
    mass: 0,
    position,
    type: 'Dynamic',
    sleep: true,
  }));

  useEffect(() => {
    const timeout = setTimeout(() => {
      api.mass.set(1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  /* const handleGrabStart = (e: any) => {
    const controller = e.target;
    ref.current.parent = controller;
  };

  const handleGrabEnd = () => {
    ref.current.parent = null;
  }; */

  return (
    <group ref={ref} position={position}>
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.1, 0.5, 5, 10]} />
        <meshLambertMaterial color="#468585" emissive={'#468585'} />
      </mesh>
    </group>
  );
};

export default Stick;
