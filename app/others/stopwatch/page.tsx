"use client";

import { useEffect, useState } from "react";

export default function StopWatch() {
  const [hour, setHour] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [inputHour, setInputHour] = useState<string>(""); // 문자열 타입 유지
  const [inputMinutes, setInputMinutes] = useState<string>(""); // 문자열 타입 유지
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [pomodoroCount, setPomodoroCount] = useState<number>(0);
  const [isPomodoro, setIsPomodoro] = useState<boolean>(false);

  useEffect(() => {
    if (isRunning && !isPaused) {
      const timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else {
          if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else if (hour > 0) {
            setHour((prevHour) => prevHour - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            clearInterval(timer);
            setIsRunning(false);
            if (isPomodoro) {
              setPomodoroCount((prevCount) => prevCount + 1); // Pomodoro 카운트 증가
            }
          }
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isRunning, isPaused, hour, minutes, seconds, isPomodoro]);

  const handleStart = () => {
    setHour(Number(inputHour) || 0);
    setMinutes(Number(inputMinutes) || 0);
    setSeconds(0);
    setIsRunning(true);
    setIsPaused(false);
    setIsPomodoro(false); // 일반 타이머
  };

  const handlePause = () => setIsPaused(true);

  const handleResume = () => setIsPaused(false);

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setHour(0);
    setMinutes(0);
    setSeconds(0);
    setInputHour("");
    setInputMinutes("");
  };

  const handlePomodoro = () => {
    setHour(0);
    setMinutes(0);
    setSeconds(1); // 1초로 설정하여 타이머가 종료되게 함
    setIsRunning(true);
    setIsPaused(false);
    setIsPomodoro(true);
  };

  return (
    <div className="py-56 px-12 max-w-xl mx-auto max-h-screen">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleStart();
          }}
          className="flex flex-col gap-6 items-center"
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">시간 입력</span>
            </label>
            <input
              type="number"
              value={inputHour}
              onChange={(e) => setInputHour(e.target.value)}
              placeholder="시간"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">분 입력</span>
            </label>
            <input
              type="number"
              value={inputMinutes}
              onChange={(e) => setInputMinutes(e.target.value)}
              placeholder="분"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={Number(inputHour) <= 0 && Number(inputMinutes) <= 0}
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
            <button
              type="button"
              onClick={handlePomodoro}
              className="btn btn-accent"
            >
              뽀모도로
            </button>
          </div>
        </form>

        <div className="text-center mt-8">
          <span className="text-3xl font-bold">
            {hour.toString().padStart(2, "0")}:
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </span>
        </div>

        <div className="text-center mt-6">
          <span className="text-lg">
            Pomodoro 카운트:{" "}
            <span className="font-semibold">{pomodoroCount}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
