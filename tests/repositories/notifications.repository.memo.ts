import { Notification } from '@/src/app/entities/notification.entity';
import { NotificationsRepository } from '@/src/app/repositories/notifications.repository';

export class NotificationsRepositoryInMemory implements NotificationsRepository {
  public notifications: Notification[] = [];

  public async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  public async findById(notificationId: string): Promise<Notification|null> {
    const notification: Notification|undefined = this.notifications.find(
      (item: Notification): boolean => item.id === notificationId
    );

    return notification ?? null;
  }

  public async save(notification: Notification): Promise<void> {
    const notificationIndex: number = this.notifications.findIndex(
      (item: Notification): boolean => item.id === notification.id
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
}