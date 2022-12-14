import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

import { SendNotificationUseCase } from '@/src/app/use-cases/sendNotification.use-case';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotificationUseCase]
})
export class HttpModule {}