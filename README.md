# Instrumentación y Metrología Industrial S.R.L. de C.V. (IMI)
### Plataforma B2B Industrial Global · Next.js & TypeScript

Plataforma web corporativa de clase mundial para **Instrumentación y Metrología Industrial S.R.L. de C.V. (IMI)** (sitio de referencia: [imindustrial.mx](https://www.imindustrial.mx/)), diseñada con estándares de nivel internacional (estilo Endress+Hauser, Trescal y Beamex).

---

## 🚀 Características Clave Implementadas

1. **100% Contenido Literal Migrado:**
   - **Acreditaciones Oficiales:**
     - STPS: `IMI150311QL2-0013`
     - CONOCER (SEP): `EC0217`
     - Laboratorio de calibración conforme a: `NMX-EC-17025-IMNC-2018`
     - Válvulas de Seguridad PSV conforme a: `NOM-093-SCFI-1994` y `NOM-093-SCFI-2020`
   - **Catálogo Completo IMI Academy:** Certificación PSV NOM-093-SCFI-2020, NCCER, ISA CCST Nivel 1, Diplomado en Instrumentación, Diplomado en Metrología, 4 Cursos Básicos, 5 Cursos Especializados, calendarios y temarios completos.
   - **Catálogo de Servicios y Metrología:** Calibración de Flujo, Nivel, Presión, Temperatura; Mantenimiento de Válvulas de Control, Prueba de Lazo, Alarmas de Nivel, Reguladores de Presión, Mantenimiento Preventivo y Correctivo PSV; Subcontratación de Personal (Project Manager, Operario de Primera, Instrumentista Técnico, Instrumentista).
   - **Catálogo de Equipos y Tienda:** Equipo de prueba y calibración, equipo eléctrico, manómetros IMI, venta y renta.
   - **Directorio de Sucursales:** Matriz Altamira, Cd. Madero, Cd. del Carmen y los 10 puntos de venta (incluyendo Lima, Perú y Houston, TX, EE. UU.).

2. **Lead Routing Dinámico a WhatsApp Business (`+52 833 155 0189`):**
   - Ningún lead se almacena en base de datos estática; todos los formularios, carritos y solicitudes generan enlaces instantáneos estructurados hacia el canal comercial oficial de IMI.

3. **Multi-Persona UX (Selector de Perfil Rápido):**
   - Segmentación directa para 3 perfiles en el Home:
     1. *Ingeniero / Técnico Operativo* (Toolbox, Certificados, SOS).
     2. *Gerente de Mantenimiento / Compras* (Normas, Activos, Express Cart, Staffing).
     3. *Capital Humano / RH* (Catálogo STPS/CONOCER, Calendarios, Registro de grupos).

4. **Soporte Multilingüe (5 Idiomas):**
   - Español (Nativo/Base), Inglés (EE. UU.), Coreano, Japonés y Chino Mandarín Simplificado, con terminología técnica industrial precisa.

5. **Killer Features Industriales:**
   - **"IMI SOS Plant Down":** Botón de emergencia flotante permanente conectado 24/7 con el ingeniero de guardia.
   - **"IMI Cloud Sync":** Portal demostrativo de gestión de activos, estado de calibración y descarga de certificados trazables ISO/IEC 17025.
   - **"Toolbox del Instrumentista":** Calculadoras técnicas gratuitas para campo (Conversión de presión multidivisión, Escalamiento 4-20 mA con detección de límites NAMUR NE43, Conversor de temperatura).
   - **"Express Cart":** Cotizador interactivo para venta y renta con partidas dinámicas.

6. **Manejo Estricto de Imágenes por URLs Externas:**
   - Cero binarios pesados en el repositorio; consumo optimizado de assets directos desde los servidores de `imindustrial.mx` y CDNs de alta calidad.

---

## 🛠️ Tecnologías

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4 (Paleta corporativa industrial: `#0256B2`, carbón pizarra y naranja de seguridad `#F26B1D`)
- **Iconografía:** Lucide React
- **Internacionalización:** Arquitectura de diccionarios JSON tipados (`es`, `en`, `ko`, `ja`, `zh`)

---

## 📦 Instalación y Desarrollo Local

1. Asegúrate de tener instalado Node.js (v20 o superior):
   ```bash
   node -v
   ```

2. Clona el repositorio e instala las dependencias:
   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
   cd imi-platform
   npm install
   ```

3. (Opcional) Configura tus variables de entorno:
   ```bash
   cp .env.example .env.local
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

5. Construir para producción:
   ```bash
   npm run build
   npm run start
   ```

---

## 🚢 Instrucciones para Subir a GitHub

Para conectar este proyecto a tu repositorio remoto de GitHub:

```bash
# 1. Dentro de la carpeta del proyecto
cd /Users/adalloya/.gemini/antigravity/scratch/imi-platform

# 2. Agregar tu repositorio remoto (reemplaza con la URL de tu repo)
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# 3. Renombrar la rama a main (si aplica)
git branch -M main

# 4. Pushear tus cambios
git push -u origin main
```

---

## 📂 Estructura del Proyecto

```
imi-platform/
├── app/
│   ├── [locale]/             # Rutas localizadas (es, en, ko, ja, zh)
│   │   ├── academy/          # Catálogo completo IMI Academy y calendario
│   │   ├── contacto/         # Formulario de cotización directa a WhatsApp
│   │   ├── laboratorio/      # Laboratorio NMX-EC-17025-IMNC-2018
│   │   ├── portal/           # IMI Cloud Sync (Portal de Activos y Certificados)
│   │   ├── servicios/        # Metrología, Calibración y Staffing
│   │   ├── sucursales/       # Directorio de matriz, sucursales y puntos de venta
│   │   ├── tienda/           # Equipos en venta/renta con Express Cart
│   │   ├── toolbox/          # Calculadoras para instrumentistas (presión, 4-20mA, temp)
│   │   ├── layout.tsx        # Layout con Providers, Header, Footer, SOS y Cart
│   │   └── page.tsx          # Home page con Hero, RoleSelector, Pilares y Acreditaciones
│   ├── globals.css           # Tokens y temas Tailwind CSS
│   ├── robots.ts             # Directivas de indexación para motores de búsqueda
│   └── sitemap.ts            # Mapa de sitio automatizado multilingüe
├── components/               # Componentes UI modulares (Header, Cart, Forms, etc.)
├── data/                     # Toda la información migrada íntegramente
│   ├── academy.ts            # Cursos, certificaciones, horas, temarios y calendario
│   ├── company.ts            # Datos corporativos, registros STPS, CONOCER, NOMs, imágenes
│   ├── locations.ts          # Matriz Altamira, sucursales y puntos de venta
│   ├── products.ts           # Catálogo de instrumentos en venta y renta
│   └── services.ts           # Servicios de metrología, mantenimiento y staffing
├── lib/
│   ├── i18n.ts               # Lógica y diccionarios de internacionalización
│   ├── site.ts               # Constante de URL del sitio
│   └── whatsapp.ts           # Constructor de enlaces API wa.me estructurados
├── locales/                  # Archivos de traducción (es.json, en.json, ko.json, ja.json, zh.json)
└── next.config.ts            # Configuración de dominios remotos de imágenes y redirecciones
```

---

© Instrumentación y Metrología Industrial S.R.L. de C.V.
