import { Injectable } from '@nestjs/common';

import { NotificationNotFoundError } from './errors/notificationNotFound.error';

import { Notification } from '../entities/notification.entity';
import { NotificationsRepository } from '../repositories/notifications.repository';

interface CancelNotificationRequestProps {
  notificationId: string;
}

type CancelNotificationResponseProps = void;

@Injectable()
export class CancelNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  public async execute(props: CancelNotificationRequestProps): Promise<CancelNotificationResponseProps> {
    const { notificationId } = props;

    const notification: Notification|null = await this.notificationsRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFoundError();
    }

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}