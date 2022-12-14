export class NotificationContent {
  private readonly content: string;

  public get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLengthValid: boolean = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content length error.');
    }
  }
}