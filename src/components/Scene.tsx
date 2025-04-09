'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { XR, createXRStore } from '@react-three/xr';
import Stick from './Stick';
import Floor from './Floor';
import { DoubleSide } from 'three';

const store = createXRStore();

type XRButtonProps = {
  text: string;
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
  return (
    <div className="w-full h-9/10 flex flex-col items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <XR store={store}>
          <mesh rotation={[-Math.PI / 2, 0, -0.1]} position={[0, 1.34, 0.1]} scale={[1, 1.5, 0]}>
            <ringGeometry args={[0.5, 0.85, 8, 7, 0, 3.25]} />
            <meshStandardMaterial color="#468585" side={DoubleSide} />
          </mesh>
          <Stick position={[-0.7, 1, 0]} />
          <Stick position={[-0.7, 1, -0.25]} />
          <Stick position={[-0.6, 1, -0.5]} />
          <Stick position={[-0.35, 1, -0.75]} />
          <Stick position={[0, 1, -0.85]} />
          <Stick position={[0.35, 1, -0.75]} />
          <Stick position={[0.6, 1, -0.5]} />
          <Stick position={[0.7, 1, -0.25]} />
          <Stick position={[0.7, 1, 0]} />
          <Floor />
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
