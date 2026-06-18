"use client";

import { useEffect } from "react";

export default function ContactHashScroll() {
  useEffect(() => {
    if (window.location.hash !== "#consultation") {
      return;
    }

    const target = document.getElementById("consultation");
    if (!target) {
      return;
    }

    target.scrollIntoView({ block: "start" });
  }, []);

  return null;
}
