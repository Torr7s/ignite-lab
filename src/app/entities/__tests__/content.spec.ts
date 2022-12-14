import { NotificationContent } from '../content.entity';

describe('NotificationContent', (): void => {
  it('should be able to create a notification content', (): void => {
    const content = new NotificationContent('Você recebeu uma nova solicitação de amizade.');
  
    expect(content).toBeTruthy();
  });
  
  it('should not be able to create a notification content with less than 5 characters', (): void => {
    expect((): NotificationContent => new NotificationContent('...')).toThrow();
  });
  
  it('should not be able to create a notification content with more than 240 characters', (): void => {
    expect((): NotificationContent => new NotificationContent('a'.repeat(250))).toThrow();
  });
})
