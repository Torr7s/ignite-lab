import { Notification } from 'src/app/entities/notification.entity';
import { SendNotificationUseCase } from '../sendNotification.use-case';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification): Promise<void> {
    notifications.push(notification);
  }
}

describe('SendNotificationUseCase', (): void => {
  it('should be able to send a notification', async (): Promise<void> => {
    const sendNotification = new SendNotificationUseCase(notificationsRepository);

    await sendNotification.execute({
      category: 'social',
      content: 'Esta é uma notificação',
      recipientId: 'fake-recipient-id'
    });

    expect(notifications).toHaveLength(1);
  });
});