import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @Length(5, 20)
  category: string;
  @IsNotEmpty()
  @Length(5, 140)
  content: string;
  @IsUUID()
  @IsNotEmpty()
  recipientId: string;
}
