import { NotificationContent } from '../content.entity';
import { Notification } from '../notification.entity';

describe('Notification', (): void => {
  it('should be able to create a notification', (): void => {
    const notification = new Notification({
      category: 'social',
      content: new NotificationContent('Nova solicitação de amizade'),
      recipientId: 'fake-recipient-id'
    });

    expect(notification).toBeTruthy();
  });
});