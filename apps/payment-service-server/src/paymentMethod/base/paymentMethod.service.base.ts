/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PaymentMethod as PrismaPaymentMethod } from "@prisma/client";

export class PaymentMethodServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PaymentMethodCountArgs, "select">
  ): Promise<number> {
    return this.prisma.paymentMethod.count(args);
  }

  async paymentMethods(
    args: Prisma.PaymentMethodFindManyArgs
  ): Promise<PrismaPaymentMethod[]> {
    return this.prisma.paymentMethod.findMany(args);
  }
  async paymentMethod(
    args: Prisma.PaymentMethodFindUniqueArgs
  ): Promise<PrismaPaymentMethod | null> {
    return this.prisma.paymentMethod.findUnique(args);
  }
  async createPaymentMethod(
    args: Prisma.PaymentMethodCreateArgs
  ): Promise<PrismaPaymentMethod> {
    return this.prisma.paymentMethod.create(args);
  }
  async updatePaymentMethod(
    args: Prisma.PaymentMethodUpdateArgs
  ): Promise<PrismaPaymentMethod> {
    return this.prisma.paymentMethod.update(args);
  }
  async deletePaymentMethod(
    args: Prisma.PaymentMethodDeleteArgs
  ): Promise<PrismaPaymentMethod> {
    return this.prisma.paymentMethod.delete(args);
  }
}
