import { CancelNotificationUseCase } from '../cancelNotification.use-case';

import { Notification } from '../../entities/notification.entity';
import { NotificationContent } from '../../entities/content.entity';

import { NotificationsRepositoryInMemory } from '@/tests/repositories/notifications.repository.memo';
import { NotificationNotFoundError } from '../errors/notificationNotFound.error';

describe('CancelNotificationUseCase', (): void => {
  it('should be able to cancel a notification', async (): Promise<void> => {
    const notificationsRepository = new NotificationsRepositoryInMemory();
    const cancelNotificationUseCase = new CancelNotificationUseCase(notificationsRepository);

    const notification = new Notification({
      category: 'social',
      content: new NotificationContent('Nova solicitação de amizade'),
      recipientId: 'fake-recipient-id'
    });

    await notificationsRepository.create(notification);

    await cancelNotificationUseCase.execute({
      notificationId: notification.id
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date)
    );
  });

  it('should not be able to cancel a non-existent notification', async (): Promise<void> => {
    const notificationsRepository = new NotificationsRepositoryInMemory();
    const cancelNotificationUseCase = new CancelNotificationUseCase(notificationsRepository);

    expect((): Promise<void> => {
      return cancelNotificationUseCase.execute({
        notificationId: 'fake-notification-id'
      })
    }).rejects.toThrow(NotificationNotFoundError);
  });
});

