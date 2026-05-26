"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    calendar: {
      schedulingButton: {
        load: (config: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

const CALENDAR_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3dihWRn0S4DUnNwstQu_fcIAG8uPSbtOcFUNBXBlRBN9HRYRKnjYX1LNmdJ_3gduGFO0vdjzja?gv=true";

export { CALENDAR_URL };

export default function BookCallButton({ label = "Book a Call" }: { label?: string }) {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const init = () => {
      if (window.calendar?.schedulingButton && targetRef.current) {
        window.calendar.schedulingButton.load({
          url: CALENDAR_URL,
          color: "#f4bd26",
          label,
          target: targetRef.current,
        });
        return true;
      }
      return false;
    };

    if (init()) return;

    const id = setInterval(() => {
      if (init()) clearInterval(id);
    }, 100);

    return () => clearInterval(id);
  }, [label]);

  return <div ref={targetRef} />;
}
