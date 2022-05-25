import React from "react";

type NotificationProps = {
  notification: string;
};

function Notification({ notification }: NotificationProps) {
  if (!notification) return null;

  return <div className="alert alert-primary">{notification}</div>;
}

export default Notification;
