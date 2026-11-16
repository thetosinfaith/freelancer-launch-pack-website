import { useEffect } from "react";

const WhatsAppWidget = () => {
  useEffect(() => {
    const scriptId = "elfsight-platform-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="elfsight-app-30f6fde1-c3c0-4f4d-bb69-5c392c3626ee"
      data-elfsight-app-lazy
    />
  );
};

export default WhatsAppWidget;
