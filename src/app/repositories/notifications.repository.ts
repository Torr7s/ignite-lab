import { Notification } from '../entities/notification.entity';

export abstract class NotificationsRepository {
  public abstract create(notification: Notification): Promise<void>;
}