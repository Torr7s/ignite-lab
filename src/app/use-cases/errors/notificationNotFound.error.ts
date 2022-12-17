import { HttpException, HttpStatus } from '@nestjs/common';

export class NotificationNotFoundError extends HttpException {
  constructor() {
    super(
      'Notification not found.',
      HttpStatus.BAD_REQUEST
    );
  }
}