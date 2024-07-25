"use client";

import { useEffect, useState } from "react";

export default function StopWatch() {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [inputHour, setInputHour] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isRunning && !isPaused) {
      const timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else {
          if (minutes > 0) {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          } else if (hour > 0) {
            setHour((prev) => prev - 1);
            setMinutes(59);
            setSeconds(59);
          } else if (minutes === 0 && hour === 0) {
            console.log("finish");
            clearInterval(timer);
            setIsRunning(false);
            return 0;
          }
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isRunning, isPaused, hour, minutes, seconds]);

  const handleStart = () => {
    setHour(inputHour);
    setMinutes(inputMinutes);
    setSeconds(0);
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setHour(0);
    setMinutes(0);
    setSeconds(0);
    setInputHour(0);
    setInputMinutes(0);
  };

  return (
    <div className="py-44 px-24">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleStart();
        }}
        className="flex flex-col gap-8 max-w-96 justify-center items-center border border-gray-300 py-12"
      >
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">시간 입력</span>
            </div>
            <input
              type="text"
              value={inputHour}
              onChange={(e) => setInputHour(Number(e.target.value))}
              placeholder="시간"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">분 입력</span>
            </div>
            <input
              type="text"
              value={inputMinutes}
              onChange={(e) => setInputMinutes(Number(e.target.value))}
              placeholder="분"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={inputHour <= 0 && inputMinutes <= 0}
        >
          시작
        </button>
        <button
          type="button"
          onClick={handlePause}
          className="btn btn-secondary"
          disabled={!isRunning || isPaused}
        >
          일시 정지
        </button>
        <button
          type="button"
          onClick={handleResume}
          className="btn btn-secondary"
          disabled={!isRunning || !isPaused}
        >
          재개
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="btn btn-secondary"
        >
          초기화
        </button>
      </form>
      <span className="text-2xl">
        {hour.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}
        :{seconds.toString().padStart(2, "0")}
      </span>
    </div>
  );
}
