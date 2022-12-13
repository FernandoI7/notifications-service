import { Controller } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { randomUUID } from 'crypto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  getHello() {
    return this.prismaService.notification.create({
      data: {
        category: 'race',
        content: 'Uma nova corrida foi criada',
        recipientId: randomUUID(),
      },
    });
  }
}
