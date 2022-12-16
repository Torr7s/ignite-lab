import { Notification } from '@/src/app/entities/notification.entity';

export interface NotificationToHTTP {
  id: string;
  content: string;
  category: string;
  recipientId: string;
}

export class NotificationViewModel {
  public static toHTTP(notification: Notification): NotificationToHTTP {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId
    }
  }
}