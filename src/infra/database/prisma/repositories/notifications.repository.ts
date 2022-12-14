import { PrismaService } from '../prisma.service';

import { Notification } from '@/src/app/entities/notification.entity';
import { NotificationsRepository } from '@/src/app/repositories/notifications.repository';

export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  public async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        createdAt: notification.createdAt,
        readAt: notification.readAt
      }
    })
  }
}