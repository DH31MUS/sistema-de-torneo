import { pgTable, serial, varchar, integer, timestamp } from "drizzle-orm/pg-core";

export const categorias = pgTable("categorias", {
  id: varchar("id", { length: 50 }).primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
});

export const equipos = pgTable("equipos", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  participants: varchar("participants", { length: 255 }),
  categoriaId: varchar("categoria_id", { length: 50 }).references(() => categorias.id).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const llaves = pgTable("llaves", {
  id: serial("id").primaryKey(),
  categoriaId: varchar("categoria_id", { length: 50 }).references(() => categorias.id).notNull(),
  ronda: integer("ronda").notNull(),
  equipo1Id: integer("equipo1_id").references(() => equipos.id),
  equipo2Id: integer("equipo2_id").references(() => equipos.id),
  ganadorId: integer("ganador_id").references(() => equipos.id),
});
