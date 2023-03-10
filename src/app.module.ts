import { Module } from '@nestjs/common';
import { PetsModule } from './pets/pets.module';
import { FeedsModule } from './feeds/feeds.module';
import { AutomapperModule } from '@automapper/nestjs';
import { pojos } from '@automapper/pojos';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ChatroomModule } from './chatroom/chatroom.module';

@Module({
  imports: [
    PetsModule, 
    FeedsModule,
    AuthModule,
    AutomapperModule.forRoot({
      strategyInitializer: pojos(),
    }), AuthModule, UsersModule, ChatroomModule,],
})
export class AppModule { }
