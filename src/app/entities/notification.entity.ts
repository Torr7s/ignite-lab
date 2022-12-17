import crypto from 'node:crypto';

import { NotificationContent } from './content.entity';

import { Replace } from '@/src/helpers/replace.helper';

export interface NotificationProps {
  category: string;
  content: NotificationContent;
  recipientId: string;
  canceledAt?: Date|null;
  createdAt: Date;
  readAt?: Date|null;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = crypto.randomUUID();

    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date()
    }
  }

  public get id(): string {
    return this._id;
  }

  public cancel(): void {
    this.props.canceledAt = new Date();
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get content(): NotificationContent {
    return this.props.content;
  }

  public set content(content: NotificationContent) {
    this.props.content = content;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get canceledAt(): Date|null|undefined {
    return this.props.canceledAt;
  }

  public get readAt(): Date|null|undefined {
    return this.props.readAt;
  }

  public set readAt(readAt: Date|null|undefined) {
    this.props.readAt = readAt;
  }
}
