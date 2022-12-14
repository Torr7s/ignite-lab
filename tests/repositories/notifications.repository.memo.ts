import { Notification } from '@/src/app/entities/notification.entity';
import { NotificationsRepository } from '@/src/app/repositories/notifications.repository';

export class NotificationsRepositoryInMemory implements NotificationsRepository {
  public notifications: Notification[] = [];

  public async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}