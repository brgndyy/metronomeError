"use client";
import tickSound from "../public/sounds/tick1.wav";

export default function SoundPlay() {
  const sound1 = new Audio(tickSound);

  const soundPlayHandler = () => {
    sound1.play();
    console.log("hi");
  };
  return (
    <>
      <button onClick={soundPlayHandler}>소리 재생 버튼</button>
    </>
  );
}
