import { Notification } from '../entities/notification.entity';
import { NotificationContent } from '../entities/content.entity';

interface SendNotificationRequestProps {
  category: string;
  content: string;
  recipientId: string;
}

interface SendNotificationResponseProps {
  notification: Notification
}

export class SendNotificationUseCase {
  public async execute(props: SendNotificationRequestProps): Promise<SendNotificationResponseProps> {
    const { category, content, recipientId } = props;

    const notification: Notification = new Notification({
      category,
      content: new NotificationContent(content),
      recipientId
    });

    return {
      notification
    }
  }
}