import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { User } from "../models/User";
import { UsersResolver } from "./resolvers/UsersResolver";
import { Address } from "../models/Address";
import { AddressesRepository } from "./addresses.repository";
import { AuthService } from "../auth/auth.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { jwtConstants } from "../auth/constants";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([User, AddressesRepository]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "60s" },
    }),
  ],
  providers: [UsersService, UsersResolver, AuthService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
