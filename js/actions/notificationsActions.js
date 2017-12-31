export const showNotification = type => ({
  type: 'NOTIFICATION_SHOW',
  notificationType: type,
});

export const hideNotification = type => ({
  type: 'NOTIFICATION_HIDE',
  notificationType: type,
});
