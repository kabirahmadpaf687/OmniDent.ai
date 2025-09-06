"use client";
import { useState } from "react";

const availableSlots: Record<string, string[]> = {
  "2025-09-06": ["10:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"],
  "2025-09-07": ["9:00 AM", "1:00 PM", "3:00 PM"],
  "2025-09-08": ["8:30 AM", "12:00 PM", "5:00 PM"],
};

const timezones = [
  "Asia/Karachi",
  "Asia/Dubai",
  "Europe/Berlin",
  "America/New_York",
  "America/Los_Angeles",
];

export default function MeetingScheduler() {
  const today = new Date();
  const todayDay = today.getDate();
  const [selectedDate, setSelectedDate] = useState("2025-09-06");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState("Asia/Karachi");

  const slots = availableSlots[selectedDate] || [];

  return (
    <section className="flex min-h-screen flex-col items-center justify-center dark:bg-[#0a0f1c]  bg-white px-6 py-[7rem]">
      
      <div className="mb-10 text-center max-w-3xl">
        <h1 className="text-3xl font-bold dark:text-white text-black sm:text-4xl lg:text-5xl mb-5  leading-tight sm:leading-tight md:text-5xl md:leading-tight drop-shadow-[0_0_20px_rgba(74,108,247,0.8)] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 animate-pulse">
          Ready To Transform Your Practice?
        </h1>
        <p className="mt-4  text-base text-gray-300 sm:text-lg lg:text-xl">
          See <span className="text-blue-400">OmniDent.ai</span> in action. Get a
          personalized demo and learn how we can revolutionize your patient
          experience.
        </p>
      </div>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 rounded-xl border border-blue-900 bg-[#0d1528] shadow-[0_0_20px_rgba(0,0,50,0.6)] sm:grid-cols-3">
        
        <div className="p-6 text-gray-200">
          <h2 className="mb-1 text-lg font-bold text-white">Han Kim</h2>
          <h3 className="mb-3 text-xl font-semibold text-blue-300">
            OmniDent Discovery
          </h3>
          <p className="mb-4 text-sm text-gray-400">
            By the end of this call you will know exactly what{" "}
            <span className="text-blue-400">OmniDent.ai</span> is and how it will
            transform the way you run your practice forever.
          </p>

          <div className="mb-4 flex gap-3">
            <button className="rounded-md border border-blue-600 bg-[#1a2742] px-3 py-1 text-sm text-white hover:bg-blue-700">
              30m
            </button>
            <button className="rounded-md border border-blue-600 bg-[#1a2742] px-3 py-1 text-sm text-white hover:bg-blue-700">
              45m
            </button>
          </div>

          <p className="mb-2 text-sm">📍 Google Meet</p>

          <div className="relative">
            <select
              value={selectedTimezone}
              onChange={(e) => setSelectedTimezone(e.target.value)}
              className="w-full rounded-md border border-blue-600 bg-[#1a2742] px-3 py-2 text-sm text-white focus:outline-none"
            >
              {timezones.map((tz) => (
                <option key={tz} value={tz} className="bg-[#0d1528]">
                  {tz}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="border-l border-r border-blue-800 p-6 text-gray-200">
          <h4 className="mb-4 text-lg font-semibold">Select a Date</h4>
          <div className="grid grid-cols-7 gap-2 text-center">
            {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
              const dateKey = `2025-09-${String(day).padStart(2, "0")}`;
              const isSelected = dateKey === selectedDate;
              const isPast = day < todayDay; 

              return (
                <button
                  key={day}
                  onClick={() => !isPast && setSelectedDate(dateKey)}
                  disabled={isPast}
                  className={`rounded-md px-2 py-2 text-sm ${
                    isPast
                      ? "cursor-not-allowed bg-gray-800 text-gray-500"
                      : isSelected
                      ? "bg-blue-600 text-white shadow-[0_0_10px_#2563eb]"
                      : "bg-[#1a2742] text-gray-300 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-6 text-gray-200">
          <h4 className="mb-4 text-lg font-semibold">
            {new Date(selectedDate).toDateString()}
          </h4>
          <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto">
            {slots.length > 0 ? (
              slots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`rounded-md px-4 py-2 text-sm transition ${
                    selectedSlot === slot
                      ? "bg-blue-600 text-white shadow-[0_0_10px_#2563eb]"
                      : "bg-[#1a2742] text-gray-300 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {slot}
                </button>
              ))
            ) : (
              <p className="text-sm text-gray-400">
                No slots available for this date.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
