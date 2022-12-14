import { SendNotificationUseCase } from '../sendNotification.use-case';

import { NotificationsRepositoryInMemory } from '@/tests/repositories/notifications.repository.memo';

describe('SendNotificationUseCase', (): void => {
  it('should be able to send a notification', async (): Promise<void> => {
    const notificationsRepository = new NotificationsRepositoryInMemory();
    const sendNotificationUseCase = new SendNotificationUseCase(notificationsRepository);

    const { notification } = await sendNotificationUseCase.execute({
      category: 'social',
      content: 'Esta é uma notificação',
      recipientId: 'fake-recipient-id'
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});

