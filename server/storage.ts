import { db } from "./db";
import { type ContactSubmission, type InsertContactSubmission, contactSubmissions } from "@shared/schema";

export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class DbStorage implements IStorage {
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [result] = await db.insert(contactSubmissions).values(submission).returning();
    return result;
  }
}

export const storage = new DbStorage();
