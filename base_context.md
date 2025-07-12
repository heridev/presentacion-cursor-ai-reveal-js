# 🏗️ Contexto Base - Proyecto Cursor AI Presentation

## 📋 Descripción del Proyecto

Este documento sirve como contexto base para cualquier nueva conversación sobre el proyecto de presentación de Cursor AI. Contiene toda la información arquitectónica, servicios utilizados y decisiones técnicas tomadas.

---

## 🎯 Objetivo del Proyecto

Crear una presentación de 25 minutos en español sobre cómo usar Cursor AI para planificar, gestionar y ejecutar proyectos tanto técnicos como generales, demostrando el poder del contexto persistente y la orquestación inteligente.

---

## 🏛️ Arquitectura del Proyecto

### **Stack Tecnológico:**

- **Frontend**: Reveal.js 5.2.1
- **Lenguaje**: Markdown + HTML + JavaScript
- **Servidor**: Node.js 18+ con Gulp
- **Imágenes**: Unsplash API (gratuita)
- **Hosting**: Local development server

### **Estructura de Archivos:**

```
cursor-ai-presentacion/
├── reveal-presentation/
│   ├── index.html                    # Presentación principal (HTML)
│   ├── cursor-ai-presentacion.md     # Contenido en Markdown (SINCRONIZADO)
│   ├── customize.js                  # Script de personalización
│   ├── README.md                     # Documentación
│   └── dist/                         # Archivos de Reveal.js
├── temario_inicial.md               # Outline original
├── base_context.md                  # Este documento
└── PRESENTATION_SUMMARY.md          # Resumen del proyecto
```

### **⚠️ SINCRONIZACIÓN CRÍTICA:**

- **`index.html`** y **`cursor-ai-presentacion.md`** DEBEN estar siempre sincronizados
- El HTML carga automáticamente el contenido del Markdown
- Cualquier cambio en `.md` se refleja inmediatamente en la presentación
- El HTML contiene la configuración de Reveal.js y plugins

---

## 🖼️ Servicios de Imágenes

### **Unsplash Integration:**

- **API**: https://api.unsplash.com/
- **Formato**: URLs directas con parámetros de optimización
- **Tamaño**: 800x600px con crop automático
- **Ejemplo**: `https://images.unsplash.com/photo-ID?w=800&h=600&fit=crop`

### **Imágenes Utilizadas:**

1. **AI Workspace** - Espacios de trabajo con IA
2. **AI Agent** - Agentes inteligentes
3. **Context Memory** - Memoria y contexto
4. **Workflow AI** - Flujos de trabajo automatizados
5. **Project Planning** - Planeación de proyectos
6. **Diverse Team** - Equipos diversos
7. **Code Refactoring** - Refactorización de código
8. **Learning Process** - Proceso de aprendizaje
9. **Desktop App** - Aplicaciones de escritorio
10. **Presentation Workflow** - Flujo de presentaciones
11. **Success** - Éxito y logros
12. **Thank You** - Agradecimientos

---

## 🎨 Sistema de Temas

### **Temas Disponibles:**

- `white` (actual) - Limpio y profesional
- `black` - Elegante y moderno
- `league` - Corporativo
- `sky` - Fresco y dinámico
- `beige` - Suave y acogedor
- `simple` - Minimalista
- `serif` - Clásico
- `blood` - Impactante
- `night` - Oscuro y elegante
- `moon` - Espacial
- `solarized` - Técnico

### **Cambio de Temas:**

```javascript
// Función disponible en customize.js
changeTheme("nombre-del-tema");
```

---

## 🔧 Funcionalidades Implementadas

### **Script de Personalización (`customize.js`):**

- Cambio de temas en tiempo real
- Contador de tiempo de presentación
- Barra de progreso
- Efectos de transición en imágenes
- Controles solo visibles en desarrollo

### **Navegación:**

- **Flechas**: Navegar entre slides
- **F**: Pantalla completa
- **S**: Vista de notas del presentador
- **ESC**: Vista general de todas las slides

---

## 📊 Contenido de la Presentación

### **Slides Principales (15 total):**

1. **Título** - Cursor AI
2. **¿Qué es Cursor AI?** - Definición básica
3. **Chat vs Agent** - Diferencias clave (❌/✅)
4. **Ventajas del contexto persistente** - Beneficios
5. **¿Por qué usar un orquestador AI?** - Limitaciones vs ventajas
6. **Tips prácticos con Cursor AI** - Comandos y mejores prácticas
7. **Usos generales** - Proyectos no técnicos
8. **¿Quién puede beneficiarse?** - Audiencia objetivo
9. **Caso práctico: Rails Upgrade** - Ejemplo técnico
10. **Lecciones aprendidas** - Insights del caso
11. **Caso práctico: Electron + AI** - Ejemplo de app
12. **Crear esta presentación** - Demo en vivo
13. **Conclusiones** - Resumen final
14. **Gracias** - Cierre

---

## 🚀 Comandos de Desarrollo

### **Iniciar servidor:**

```bash
cd reveal-presentation
npm start
```

### **Acceso:**

- **URL**: http://localhost:8000
- **Puerto**: 8000
- **LiveReload**: 35729

### **Dependencias:**

- Node.js >= 18.0.0
- npm (incluido con Node.js)
- Gulp (instalado localmente)

---

## 🎯 Casos de Uso Demostrados

### **1. Proyectos Técnicos:**

- **Upgrade de Rails 4.2 a 7.1**
  - Planificación por fases
  - Documentación técnica automática
  - Rollback controlado
  - Testing paralelo

### **2. Proyectos Generales:**

- **Planeación administrativa**
- **Seguimiento por fases**
- **Generación de reportes**
- **Validación de documentos**

### **3. Equipos Interdisciplinarios:**

- **Colaboración entre departamentos**
- **Documentación compartida**
- **Onboarding rápido**
- **Trazabilidad de decisiones**

---

## 🔄 Flujo de Trabajo con Cursor AI

### **1. Planeación:**

- Documento base con objetivos
- Estructura de fases
- Definición de entregables

### **2. Ejecución:**

- Implementación iterativa
- Documentación automática
- Testing continuo

### **3. Documentación:**

- Actualización automática
- Historial de cambios
- Contexto persistente

---

## 🔗 Flujo de Sincronización de Archivos

### **⚠️ REGLA FUNDAMENTAL:**

**Siempre que se modifique `cursor-ai-presentacion.md`, verificar que `index.html` esté configurado correctamente.**

### **Archivos que deben estar sincronizados:**

#### **1. `cursor-ai-presentacion.md` (CONTENIDO)**

- Contiene todas las slides en Markdown
- Separadores: `---` para nuevas slides
- Imágenes: URLs de Unsplash
- Formato: Markdown estándar

#### **2. `index.html` (PRESENTACIÓN)**

- Carga automáticamente el archivo `.md`
- Configuración de Reveal.js
- Plugins habilitados
- Scripts de personalización

### **Configuración de carga en `index.html`:**

```html
<section
  data-markdown="cursor-ai-presentacion.md"
  data-separator="^\n---\n$"
  data-separator-vertical="^\n--\n$"
  data-separator-notes="^Note:"
  data-charset="utf-8"
></section>
```

### **Verificación de sincronización:**

1. ✅ El HTML carga el archivo `.md` correcto
2. ✅ Los separadores coinciden con el formato Markdown
3. ✅ Los plugins están habilitados
4. ✅ Los scripts de personalización están incluidos

### **🔄 Flujo de Desarrollo Recomendado:**

#### **1. Editar contenido:**

```bash
# Editar el archivo Markdown
code reveal-presentation/cursor-ai-presentacion.md
```

#### **2. Verificar HTML:**

```bash
# Verificar que index.html esté configurado
cat reveal-presentation/index.html | grep "data-markdown"
```

#### **3. Probar cambios:**

```bash
# El servidor se recarga automáticamente
# Visitar http://localhost:8000
```

#### **4. Si hay problemas:**

- Verificar que el archivo `.md` existe
- Confirmar que los separadores son `---`
- Revisar que el HTML carga el archivo correcto
- Reiniciar el servidor si es necesario

---

## 📈 Métricas del Proyecto

- **Tiempo de creación**: ~15 minutos
- **Slides**: 15 (expandidas de 10 originales)
- **Imágenes**: 12 de Unsplash
- **Idioma**: Español completo
- **Tecnologías**: 4 (Reveal.js, Markdown, Node.js, Unsplash)
- **Archivos**: 8 principales
- **Archivos sincronizados**: 2 (index.html + cursor-ai-presentacion.md)

---

## 🛠️ Personalización Disponible

### **Contenido (SINCRONIZADO):**

- **Editar `cursor-ai-presentacion.md`** ← Cambios automáticos en presentación
- Agregar slides con `---`
- Cambiar imágenes con URLs de Unsplash
- **Verificar `index.html`** después de cambios importantes

### **Estilo:**

- Cambiar tema en `index.html` (línea 10)
- Modificar CSS en `customize.js`
- Agregar animaciones personalizadas

### **Funcionalidad:**

- Extender `customize.js`
- Agregar plugins de Reveal.js en `index.html`
- Integrar APIs adicionales

### **⚠️ Checklist de Sincronización:**

- [ ] `cursor-ai-presentacion.md` actualizado
- [ ] `index.html` carga el archivo correcto
- [ ] Separadores Markdown coinciden
- [ ] Scripts incluidos en HTML
- [ ] Servidor reiniciado si es necesario

---

## 🔮 Próximos Pasos Sugeridos

### **Corto Plazo:**

1. Revisar timing para 25 minutos
2. Agregar notas del presentador
3. Practicar transiciones

### **Mediano Plazo:**

1. Exportar a PDF
2. Crear versiones en otros idiomas
3. Agregar interactividad

### **Largo Plazo:**

1. Integrar con APIs de presentación
2. Crear plantillas reutilizables
3. Automatizar generación de slides

---

## 📞 Información de Contacto

**Heriberto Magaña**  
Desarrollador y consultor en tecnologías emergentes

---

## 🏷️ Tags del Proyecto

`#cursor-ai` `#revealjs` `#presentacion` `#inteligencia-artificial` `#orquestacion` `#contexto-persistente` `#markdown` `#unsplash` `#nodejs` `#gulp`

---

_Este documento se actualiza automáticamente conforme evoluciona el proyecto. Última actualización: 2025_
