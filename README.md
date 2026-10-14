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

## 🛠️ Panel Super Admin (Actualización Autónoma Sin Programador)

La plataforma incluye un panel de administración completo accesible desde la ruta:
👉 **`/es/admin`** (Clave de acceso predeterminada: `imi2026`)

### Módulos del Super Admin:
1. **Empresa & Contacto:** Modifica en tiempo real el número de WhatsApp receptor de leads (`+52 833 155 0189`), teléfonos de oficina, conmutador, correo y enlaces de logotipos sin tocar código.
2. **IMI Academy:** Agrega, edita o retira cursos y diplomados. Define horas, modalidades, temarios completos y programa próximas fechas en el calendario oficial.
3. **Servicios & Laboratorio:** Administra capacidades de metrología, mantenimiento de válvulas de control y perfiles de subcontratación de personal.
4. **Tienda & Equipos:** Da de alta instrumentos de medición, asigna fotografías por URL, descripción técnica y define disponibilidad para Venta, Renta o ambas.
5. **Sucursales & Cobertura:** Gestiona matrices, laboratorios y los 10 puntos de venta en México, Perú y EE. UU.
6. **Recursos & PDFs:** Administra los 7 brochures y acreditaciones oficiales en PDF extraídos de la web original de IMI, con opción de registrar nuevos enlaces descargables.
7. **Tutoriales Paso a Paso:** Cada módulo incluye su sección interactiva de ayuda con:
   - *¿Qué es y para qué sirve?*
   - *Paso a paso para usarlo sin conocimientos técnicos.*
   - *Consejos y buenas prácticas.*
8. **Respaldo & Restauración:** Exporta e importa respaldos completos en formato `.json` con un solo clic o restablece a valores de fábrica originales.

---

## 📑 Documentos y Recursos Oficiales en PDF

El sistema enlaza y organiza los 7 documentos oficiales extraídos de `imindustrial.mx`:
1. **Brochure Corporativo General IMI:** `https://www.imindustrial.mx/wp-content/uploads/2021/02/Brochure-IMI.pdf`
2. **Brochure Válvulas de Seguridad PSV:** `https://www.imindustrial.mx/wp-content/uploads/2021/02/Brochure-PSV.pdf`
3. **Acreditación EMA ISO/IEC 17025:** `https://www.imindustrial.mx/wp-content/uploads/EMA-NMX-EC-17025-IMNC-2018-ISOIEC.pdf`
4. **Anexo Técnico EMA Anexo A (Alcances):** `https://www.imindustrial.mx/wp-content/uploads/EMA-anexo-A.pdf`
5. **Acreditación Calibración de Flujo EMA:** `https://www.imindustrial.mx/wp-content/uploads/EMA-certificado-de-acreditacion-flujo.pdf`
6. **Solicitud Oficial de Inscripción STPS:** `https://www.imindustrial.mx/wp-content/uploads/2020/08/SOLICITUD-DE-INSCRIPCIÓN-1.1.pdf`
7. **Certificado Oficial de Registro Institucional:** `https://www.imindustrial.mx/wp-content/uploads/2018/07/Certificado-OFICIAL.pdf`

Disponibles para el público en la sección: **`/es/descargas`**.

---

## 📂 Estructura del Proyecto

```
imi-platform/
├── app/
│   ├── [locale]/             # Rutas localizadas (es, en, ko, ja, zh)
│   │   ├── academy/          # Catálogo completo IMI Academy y calendario
│   │   ├── admin/            # Super Admin CMS con tutoriales y editores
│   │   ├── contacto/         # Formulario de cotización directa a WhatsApp
│   │   ├── descargas/        # Centro de descargas y folletos oficiales PDF
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
├── components/
│   ├── CmsProvider.tsx       # Estado reactivo y persistencia local del CMS
│   ├── SuperAdmin.tsx        # Panel de administración interactivo con tutoriales
│   ├── Header.tsx            # Navegación, selector de idioma y carrito
│   └── ...                   # Componentes modulares
├── data/
│   ├── academy.ts            # Cursos, certificaciones, horas, temarios y calendario
│   ├── company.ts            # Datos corporativos, registros STPS, CONOCER, NOMs, imágenes
│   ├── documents.ts          # Directorio de los 7 PDFs oficiales originales
│   ├── locations.ts          # Matriz Altamira, sucursales y puntos de venta
│   ├── products.ts           # Catálogo de instrumentos en venta y renta
│   └── services.ts           # Servicios de metrología, mantenimiento y staffing
```

---

© Instrumentación y Metrología Industrial S.R.L. de C.V.
