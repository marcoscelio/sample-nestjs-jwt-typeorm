import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { getConnection } from 'typeorm';
import { AppModule } from './app.module';
import { User, UserStatus } from './models/User';
import bcrypt = require('bcrypt');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const repo = await getConnection().getRepository(User);
  const found = await repo.findOne({ name: 'Admin' });
  if (!found) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const user = {
      name: 'Admin',
      password: await bcrypt.hashSync('admin123', salt),
      email: 'jonh@gmail.com',
      phone: '89247128974',
      gender: 'M',
      cpf: '65487643220',
      address: 'Woodville grange 2 Street',
      zipcode: '127318264',
      city: 'Athlone',
      state: 'WM',
      status: UserStatus.ACTIVE,
      preferences: 'Coffee',
    };
    repo.insert(user);
  }

  await app.listen(3000);
}
bootstrap();
