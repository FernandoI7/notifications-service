import { Controller } from '@nestjs/common';
import { Body, Get, Post } from '@nestjs/common/decorators';
import { CreateNotificationBody } from './notification.model';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  list() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  create(@Body() createNotification: CreateNotificationBody) {
    return this.prismaService.notification.create({ data: createNotification });
  }
}
