import { Module, forwardRef } from "@nestjs/common";
import { MorModuleBase } from "./base/mor.module.base";
import { MorService } from "./mor.service";
import { MorController } from "./mor.controller";
import { MorResolver } from "./mor.resolver";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [MorModuleBase, forwardRef(() => AuthModule)],
  controllers: [MorController],
  providers: [MorService, MorResolver],
  exports: [MorService],
})
export class MorModule {}
