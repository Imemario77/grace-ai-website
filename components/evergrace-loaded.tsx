"use client";

import React, { useEffect, useRef } from "react";

const WIDGET_ID = "687135c0e2b83a22041d8128";

const EvergraceLoaded: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the custom element
    const widgetElement = document.createElement("evergraceai");
    widgetElement.setAttribute("widget_id", WIDGET_ID);
    if (containerRef.current) {
      containerRef.current.appendChild(widgetElement);
    }

    // Inject the script if not already present
    if (!document.getElementById("evergrace-widget-script")) {
      const script = document.createElement("script");
      script.id = "evergrace-widget-script";
      script.src = "https://app.evergrace.ai/widget/evergrace-widget.min.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Cleanup: remove the widget element on unmount
    return () => {
      if (
        containerRef.current &&
        widgetElement.parentNode === containerRef.current
      ) {
        containerRef.current.removeChild(widgetElement);
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default EvergraceLoaded;
