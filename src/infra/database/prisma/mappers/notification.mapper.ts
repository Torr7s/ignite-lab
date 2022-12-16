import { Notification } from '@/src/app/entities/notification.entity';

export interface NotificationToPrisma {
  id: string;
  category: string;
  content: string;
  recipientId: string;
  createdAt: Date;
  readAt: Date | null | undefined;
}

export class PrismaNotificationMapper {
  public static toPrisma(notification: Notification): NotificationToPrisma {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      createdAt: notification.createdAt,
      readAt: notification.readAt
    }
  }
}