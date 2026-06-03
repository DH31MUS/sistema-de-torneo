import { db } from "../db/index.js";
import { equipos, llaves } from "../db/schema.js";
import { siteConfig } from "../config/site.js";
import { sql } from "drizzle-orm";

async function seed() {
  console.log("Reiniciando base de datos...");
  // Truncate tables and restart identity
  await db.execute(sql`TRUNCATE TABLE llaves, equipos RESTART IDENTITY CASCADE;`);
  
  console.log("Tablas limpiadas. Creando equipos de prueba...");
  
  const allTeams = [];
  
  for (const cat of siteConfig.categorias) {
    const numTeams = Math.floor(Math.random() * (13 - 4 + 1)) + 4; // Random between 4 and 13
    for (let i = 1; i <= numTeams; i++) {
      allTeams.push({
        name: `Bot ${cat.name.split(' ')[0]} ${i}`,
        categoriaId: cat.id
      });
    }
    console.log(`Generados ${numTeams} equipos para la categoría ${cat.name}`);
  }
  
  if (allTeams.length > 0) {
    await db.insert(equipos).values(allTeams);
  }
  
  console.log("¡Base de datos inicializada correctamente con equipos aleatorios!");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
