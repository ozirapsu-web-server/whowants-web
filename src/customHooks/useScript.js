import { useEffect } from "react";
const useScript = (url) => {
  const script = document.createElement("script");
  useEffect(() => {
    script.src = url;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, script]);
  return script;
};
export default useScript;
