import { db } from "./index";
import { categorias, equipos } from "./schema";
import { siteConfig } from "../config/site";

async function seed() {
  console.log("🌱 Insertando datos de prueba...");

  try {
    console.log("Insertando categorías...");
    for (const cat of siteConfig.categorias) {
      await db.insert(categorias).values({
        id: cat.id,
        name: cat.name,
      }).onConflictDoNothing();
    }

    console.log("Insertando equipos de prueba para Sumo Autónomo...");
    const testTeams = [
      { name: "Eva-01", participants: "Shinji Ikari", categoriaId: "sumo-autonomo" },
      { name: "Gipsy Danger", participants: "Raleigh Becket", categoriaId: "sumo-autonomo" },
      { name: "Wall-E", participants: "Axiom", categoriaId: "sumo-autonomo" },
      { name: "Terminator T-800", participants: "Skynet", categoriaId: "sumo-autonomo" },
      { name: "Optimus Prime", participants: "Cybertron", categoriaId: "sumo-autonomo" },
      { name: "Megatron", participants: "Decepticons", categoriaId: "sumo-autonomo" },
      { name: "R2-D2", participants: "Luke", categoriaId: "sumo-autonomo" },
      { name: "Bumblebee", participants: "Sam", categoriaId: "sumo-autonomo" },
    ];

    for (const team of testTeams) {
      await db.insert(equipos).values(team);
    }

    console.log("✅ Datos de prueba insertados correctamente.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error insertando datos:", error);
    process.exit(1);
  }
}

seed();
