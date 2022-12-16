import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { NotificationToPrisma, PrismaNotificationMapper } from '../mappers/notification.mapper';

import { Notification } from '@/src/app/entities/notification.entity';
import { NotificationsRepository } from '@/src/app/repositories/notifications.repository';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  public async create(notification: Notification): Promise<void> {
    const raw: NotificationToPrisma = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw
    });
  }
}