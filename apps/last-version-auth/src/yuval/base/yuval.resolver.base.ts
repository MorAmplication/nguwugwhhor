/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeleteYuvalArgs } from "./DeleteYuvalArgs";
import { YuvalCountArgs } from "./YuvalCountArgs";
import { YuvalFindManyArgs } from "./YuvalFindManyArgs";
import { YuvalFindUniqueArgs } from "./YuvalFindUniqueArgs";
import { Yuval } from "./Yuval";
import { YuvalService } from "../yuval.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Yuval)
export class YuvalResolverBase {
  constructor(
    protected readonly service: YuvalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Yuval",
    action: "read",
    possession: "any",
  })
  async _yuvalsMeta(
    @graphql.Args() args: YuvalCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Yuval])
  @nestAccessControl.UseRoles({
    resource: "Yuval",
    action: "read",
    possession: "any",
  })
  async yuvals(@graphql.Args() args: YuvalFindManyArgs): Promise<Yuval[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Yuval, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Yuval",
    action: "read",
    possession: "own",
  })
  async yuval(
    @graphql.Args() args: YuvalFindUniqueArgs
  ): Promise<Yuval | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Yuval)
  @nestAccessControl.UseRoles({
    resource: "Yuval",
    action: "delete",
    possession: "any",
  })
  async deleteYuval(
    @graphql.Args() args: DeleteYuvalArgs
  ): Promise<Yuval | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
