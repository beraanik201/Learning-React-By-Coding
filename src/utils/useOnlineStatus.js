import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, seOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      seOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      seOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
