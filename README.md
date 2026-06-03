# 🤖 Robot Tournament Manager (Sistema de Llaves)

[![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.30-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)](https://orm.drizzle.team/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

Un sistema moderno, rápido y estético para gestionar torneos de robótica. Permite registrar equipos, generar llaves de combate automáticamente y avanzar a los ganadores a través de un panel de control administrativo, mostrando los resultados en tiempo real a los espectadores.

> *Reemplaza esta imagen con una captura de pantalla de la página principal del proyecto.*
> 
> `![Página Principal](public/principal.png)`

## ✨ Características

- 🏆 **Generación Automática de Llaves**: Crea brackets para torneos (octavos, cuartos, semifinales y final) de forma aleatoria con un solo clic.
- ⚡ **Gestión de Impares**: Lógica inteligente para lidiar con números impares de participantes, garantizando que todos compitan en la primera fase sin dejar espacios vacíos.
- 📊 **Panel de Control de Árbitro**: Interfaz administrativa privada para marcar ganadores y avanzar rondas sin complicaciones.
- 🎨 **Diseño Moderno (Neón/Dark)**: Interfaz de usuario altamente visual construida con Tailwind CSS v4.
- 🚀 **Rendimiento Extremo**: Construido sobre Astro SSR (Server-Side Rendering) para una carga instantánea.
- 💾 **Base de Datos Robusta**: Impulsado por PostgreSQL y Drizzle ORM.

## 📸 Pantallas (Screenshots)

### Vista de Espectador (Llaves del Torneo)
> *Añade aquí una captura de cómo se ve el diseño de las llaves con los equipos compitiendo.*
> 
> [pagina principal](public/llaves.png)

### Panel de Administración (Árbitro)
> *Añade aquí una captura del panel de control donde se generan las llaves y se eligen a los ganadores.*
> 
> `![Panel de Control](docs/screenshots/admin.png)`

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Astro](https://astro.build/) (Modo SSR)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Base de Datos**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Iconos**: [Astro Icon](https://github.com/natemoo-re/astro-icon)

## 🚀 Instalación y Uso Local

### Prerrequisitos
- Node.js (v18+)
- PostgreSQL instalado y corriendo localmente (o un servidor externo).

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/robot-tournament.git
cd robot-tournament
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto y agrega tu cadena de conexión a PostgreSQL:
```env
DATABASE_URL="postgres://usuario:contraseña@localhost:5432/robot-tournament"
```

### 4. Inicializar y poblar la Base de Datos
El proyecto incluye un script preparado para crear la estructura de las tablas e inyectar datos de prueba (equipos ficticios) para que puedas probar el sistema inmediatamente.
```bash
# Sincroniza la estructura de Drizzle con tu DB
npx drizzle-kit push

# Llena la base de datos con equipos al azar y reinicia IDs
npx tsx src/scripts/seed.ts
```

### 5. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Visita `http://localhost:4321` en tu navegador. 
El panel de administración se encuentra en `/admin-secreto-torneo` (recuerda cambiar esta ruta en un entorno de producción o protegerla).

## 📁 Estructura del Proyecto

```text
├── src/
│   ├── components/     # Componentes de Astro (Header, Footer)
│   ├── config/         # Archivos de configuración (Categorías, Enlaces)
│   ├── db/             # Esquema de Drizzle ORM y conexión
│   ├── layouts/        # Layout principal de las páginas
│   ├── pages/          # Rutas principales (Página pública, Panel admin, Llaves dinámicas)
│   ├── scripts/        # Scripts auxiliares (seed.ts)
│   └── styles/         # CSS global y directivas de Tailwind
├── public/             # Fuentes, imágenes y logos estáticos
├── drizzle.config.ts   # Configuración del ORM
└── README.md           # Este archivo
```

## 📝 Configuración de Categorías

Para añadir o modificar las categorías del torneo, edita el archivo `src/config/site.ts`. Estas categorías se reflejarán automáticamente en el menú, en la base de datos y en el panel de control, al igual que los enlaces de las redes sociales.

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si deseas mejorar el proyecto:
1. Haz un Fork del repositorio.
2. Crea una rama para tu característica (`git checkout -b feature/NuevaCaracteristica`).
3. Haz Commit de tus cambios (`git commit -m 'Añade nueva característica'`).
4. Haz Push a la rama (`git push origin feature/NuevaCaracteristica`).
5. Abre un Pull Request.
