'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { XR, createXRStore } from '@react-three/xr';
import Stick from './Stick';
import Floor from './Floor';
import { DoubleSide } from 'three';
import { Physics } from '@react-three/cannon';

const store = createXRStore();

type XRButtonProps = {
  text: string;
  // eslint-disable-next-line
  onClick: () => {};
};

const XRButton = ({ text, onClick }: XRButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#000] text-[#fff] rounded-[8px] px-[16px] py-[8px] text-[16px] font-bold hover:bg-[#111] transition-colors duration-200 ease-in-out"
    >
      {text}
    </button>
  );
};

export default function Scene() {
  const NUMBER_OF_STICKS = 8;
  const STICK_DELAY = 1000;
  const STICK_POSITION: [number, number, number][] = [
    [-0.7, 1, 0],
    [-0.7, 1, -0.25],
    [-0.6, 1, -0.5],
    [-0.35, 1, -0.75],
    [0, 1, -0.85],
    [0.35, 1, -0.75],
    [0.6, 1, -0.5],
    [0.7, 1, -0.25],
    [0.7, 1, 0],
  ];
  const stickDelays = Array.from({ length: NUMBER_OF_STICKS }, (_, i) => i * STICK_DELAY);
  const shuffledSticksDelays = stickDelays.sort(() => Math.random() - 0.5);

  return (
    <div className="w-full h-9/10 flex flex-col items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <XR store={store}>
        <Physics gravity={[0, -9.8, 0]}>
            <mesh rotation={[-Math.PI / 2, 0, -0.1]} position={[0, 1.35, 0.1]} scale={[1, 1.5, 0]}>
              <ringGeometry args={[0.5, 0.85, 8, 7, 0, 3.25]} />
              <meshStandardMaterial color="#468585" side={DoubleSide} />
            </mesh>
            {Array.from({ length: NUMBER_OF_STICKS }).map((_, i) => (
              <Stick
                key={i}
                position={STICK_POSITION[i]}
                delay={shuffledSticksDelays[i]}
              />
            ))}
            <Floor />
          </Physics>
        </XR>

        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 2]} intensity={6} color={'#9CDBA6'} />
        <OrbitControls enableDamping enableZoom enablePan dampingFactor={0.05} />
      </Canvas>
      <div className="flex flex-row space-x-4 items-center justify-center">
        <XRButton text="Enter VR" onClick={() => store.enterVR()} />
        <XRButton text="Enter AR" onClick={() => store.enterAR()} />
      </div>
    </div>
  );
}
