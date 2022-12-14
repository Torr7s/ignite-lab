import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsUUID()
  @IsNotEmpty()
  recipientId: string;
}