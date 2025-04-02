'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { XR, createXRStore  } from '@react-three/xr';

const store = createXRStore()

type XRButtonProps = {
  text: string; 
  onClick: () => {};
}

const XRButton = ({text, onClick}: XRButtonProps) => {
  return (
      <button
          onClick={onClick}
          className="bg-[#000] text-[#fff] rounded-[8px] px-[16px] py-[8px] text-[16px] font-bold hover:bg-[#111] transition-colors duration-200 ease-in-out"
        >
          {text}
      </button>
)};

export default function Scene() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
        <XR store={store}>

          <mesh position={[0, 1, 0]} pointerEventsType={{ deny: 'grab' }}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="#e0e0e0" />
          </mesh>
        </XR>

        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 2]} intensity={1} />
        <OrbitControls />
      </Canvas>
      <div className='flex flex-row space-x-4 items-center justify-center'>
        <XRButton text="Enter VR" onClick={() => store.enterVR()} />
        <XRButton text="Enter AR" onClick={() => store.enterAR()} />
      </div>
    </div>
  );
}
