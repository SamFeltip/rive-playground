'use client';
import { useRive } from '@rive-app/react-canvas';

export default function PlaygroundRive() {
  const { RiveComponent } = useRive({
    src: '/playground.riv', // path in the public folder
    autoplay: true,
  });

  return <RiveComponent style={{ width: '100%', height: '400px' }} />;
}
