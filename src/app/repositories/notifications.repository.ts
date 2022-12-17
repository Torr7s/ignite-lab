import { Notification } from '../entities/notification.entity';

export abstract class NotificationsRepository {
  public abstract create(notification: Notification): Promise<void>;
  public abstract findById(notificationId: string): Promise<Notification|null>;
  public abstract save(notification: Notification): Promise<void>;
}