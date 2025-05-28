'use client';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

export default function PlaygroundRive() {
  const STATE_MACHINE_NAME = 'State Machine 1';
  const INPUT_NAME = 'hovered';

  const { rive, RiveComponent } = useRive({
    src: '/playground.riv',
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const hoveredInput = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME);

  return (
    <div
      onMouseEnter={() => hoveredInput && (hoveredInput.value = true)}
      onMouseLeave={() => hoveredInput && (hoveredInput.value = false)}
      style={{ width: '100%', height: '100px', cursor: 'pointer' }}
    >
      <RiveComponent />
    </div>
  );
}
