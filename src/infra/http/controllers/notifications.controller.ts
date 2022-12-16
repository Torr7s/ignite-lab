import { Body, Controller, Post } from '@nestjs/common';

import { Notification } from '@/src/app/entities/notification.entity';
import { CreateNotificationDto } from '@/src/infra/http/dtos/create-notification.dto';

import { SendNotificationUseCase } from '@/src/app/use-cases/sendNotification.use-case';
import { NotificationToHTTP, NotificationViewModel } from '../view-models/notification.view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotificationUseCase) {}

  @Post()
  public async create(@Body() body: CreateNotificationDto): Promise<{ notification: NotificationToHTTP }> {
    const { notification } = await this.sendNotification.execute(body);

    return {
      notification: NotificationViewModel.toHTTP(notification)
    }
  }
}