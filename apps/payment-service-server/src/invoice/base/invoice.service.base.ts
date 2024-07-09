/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Invoice as PrismaInvoice } from "@prisma/client";

export class InvoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.InvoiceCountArgs, "select">): Promise<number> {
    return this.prisma.invoice.count(args);
  }

  async invoices(args: Prisma.InvoiceFindManyArgs): Promise<PrismaInvoice[]> {
    return this.prisma.invoice.findMany(args);
  }
  async invoice(
    args: Prisma.InvoiceFindUniqueArgs
  ): Promise<PrismaInvoice | null> {
    return this.prisma.invoice.findUnique(args);
  }
  async createInvoice(args: Prisma.InvoiceCreateArgs): Promise<PrismaInvoice> {
    return this.prisma.invoice.create(args);
  }
  async updateInvoice(args: Prisma.InvoiceUpdateArgs): Promise<PrismaInvoice> {
    return this.prisma.invoice.update(args);
  }
  async deleteInvoice(args: Prisma.InvoiceDeleteArgs): Promise<PrismaInvoice> {
    return this.prisma.invoice.delete(args);
  }
}
