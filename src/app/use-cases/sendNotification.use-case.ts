import { Injectable } from '@nestjs/common';

import { Notification } from '../entities/notification.entity';
import { NotificationContent } from '../entities/content.entity';

import { NotificationsRepository } from '../repositories/notifications.repository';

interface SendNotificationRequestProps {
  category: string;
  content: string;
  recipientId: string;
}

interface SendNotificationResponseProps {
  notification: Notification;
}

@Injectable()
export class SendNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  public async execute(props: SendNotificationRequestProps): Promise<SendNotificationResponseProps> {
    const { category, content, recipientId } = props;

    const notification: Notification = new Notification({
      category,
      content: new NotificationContent(content),
      recipientId
    });

    await this.notificationsRepository.create(notification);

    return {
      notification
    }
  }
}