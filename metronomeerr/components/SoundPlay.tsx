"use client";
import tickSound from "../public/sounds/tick1.wav";

export default function SoundPlay() {
  const tick = new Audio(tickSound);

  const soundHandler = () => {
    tick.play();
  };

  return (
    <>
      <button onClick={soundHandler}>소리 재생 버튼</button>
    </>
  );
}
