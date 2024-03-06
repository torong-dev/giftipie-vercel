import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { infoToast } from "./toast";

function NotificationComponent() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const eventSource = useRef(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const initializeEventSource = () => {
      eventSource.current = new EventSource(
        `${process.env.REACT_APP_API_URL}/api/notification/subscribe`,
        {
          withCredentials: true,
        }
      );

      eventSource.current.onopen = () => {
        setIsConnected(true);
      };

      eventSource.current.addEventListener("sse", (event) => {
        const data = JSON.parse(event.data);
        infoToast(data.message);
      });

      eventSource.current.onerror = () => {
        console.error("SSE Connection error");
        if (eventSource.current) eventSource.current.close();
        setIsConnected(false);

        setTimeout(() => {
          if (isLoggedIn && !isConnected) {
            initializeEventSource();
          }
        }, 3000);
      };
    };

    if (isLoggedIn && !isConnected) {
      initializeEventSource();
    }

    return () => {
      if (eventSource.current) {
        eventSource.current.close();
        setIsConnected(false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <div>
      <img src="/imgs/Home/no-notification.svg" alt="notification" />
    </div>
  );
}

export default NotificationComponent;