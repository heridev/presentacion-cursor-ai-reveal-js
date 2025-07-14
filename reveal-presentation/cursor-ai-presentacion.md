# Cursor AI.

## De la planeación a la ejecución

_Charla práctica sobre casos reales de uso_  
**Heriberto Magaña ·July 2025**

---

<img src="images/cursor_ai.png" alt="AI Workspace" style="width: 200px; height: 200px;">

## ¿Qué es Cursor AI?

- **Entorno de desarrollo inteligente** basado en IA
- **Editor de código + Terminal + Navegador + Documentos**
- **Contexto persistente**: mantiene historial completo del proyecto
- **Orquestador de proyectos**: más que un simple editor

---

### **Chat tradicional (ChatGPT, Copilot):**

<ul style="list-style: none; padding-left: 0;">
  <li>❌ <strong>Conversaciones aisladas</strong> sin continuidad</li>
  <li>❌ <strong>Sin memoria</strong> entre sesiones</li>
  <li>❌ <strong>Respuestas genéricas</strong> sin contexto específico</li>
</ul>

<h3 style="margin-top: 30px"> Cursor Agent (Orquestador): </h3>

<ul style="list-style: none; padding-left: 0;">
  <li>✅ <strong>Memoria persistente</strong> del proyecto completo</li>
  <li>✅ <strong>Contexto continuo</strong> entre sesiones</li>
  <li>✅ <strong>Acciones ejecutables</strong> (código, comandos, archivos)</li>
  <li>✅ <strong>Orquestación inteligente</strong> de tareas complejas</li>
</ul>

---

<div style="display: flex; align-items: stretch; gap: 40px;">
  <div style="flex: 1 1 0; min-width: 0;">
    <img 
      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
      alt="Contexto persistente" 
      style="
        width: 100%; 
        height: 100%; 
        object-fit: cover; 
        border-radius: 18px; 
        box-shadow: 0 4px 32px rgba(0,0,0,0.12);
        min-height: 300px;
        max-height: 400px;
        display: block;
      "
    >
  </div>
  <div style="flex: 2 1 0; min-width: 0; display: flex; flex-direction: column; justify-content: center;">
    <h3 style="margin-top: 0; text-align: left">Contexto persistente</h3>
    <ul>
      <li><strong>Historial completo</strong> del proyecto siempre disponible</li>
      <li><strong>Documentación viva</strong> que se actualiza automáticamente</li>
      <li><strong>Trazabilidad</strong> de decisiones y cambios</li>
      <li><strong>Colaboración mejorada</strong> entre equipos</li>
      <li><strong>Onboarding rápido</strong> de nuevos miembros</li>
    </ul>
  </div>
</div>

---

### **Comandos útiles:**

- `/` - Acceso rápido a comandos
- `Cmd/Ctrl + K` - Chat contextual
- `Cmd/Ctrl + L` - Chat con archivo actual
- `Cmd/Ctrl + Shift + L` - Chat con selección

<h3 style="margin-top: 30px">Mejores prácticas:</h3>

- **Documenta decisiones** en archivos .md
- **Usa contextos y reglas específicas** por proyecto
- **Mantén historial** de conversaciones importantes
- **Itera incrementalmente** en cambios complejos

---

### Configuración de reglas(user rules)

<img src="images/user_rules_cusor_ai.jpg" />

---

### Configuración de .cursor/rules

<ul>
  <li><strong>¿Qué son las reglas de Cursor?</strong>  
    Permiten definir comportamientos, restricciones y buenas prácticas para tu proyecto o equipo.
  </li>
  <li><strong>Ubicación:</strong>  
    Se guardan en la carpeta raiz <code>.cursor/rules/</code>
  </li>
  <li><strong>Formato .mdc:</strong>  
    <code>.mdc</code> (Markdown con metadatos). Este formato permite combinar texto, listas y bloques de código.
  </li>
  <li><strong>¿Cómo crear una regla?</strong>
    <ol>
      <li>Crear folder en raiz llamado <code>.cursor/rules</code>
      <li>Desde editor, click derecho crear nuevo archivo con extension .mdc, ejemplo: <code>naming-conventions.mdc</code></li>
      <li>Agrega un título, descripción y los puntos clave de la regla usando Markdown.</li>
      <li>Puedes incluir ejemplos de código, advertencias y enlaces útiles.</li>
    </ol>
  </li>

---

  <h3><strong>Ejemplo básico de archivo <code>.mdc</code>:</strong></h3>
    <pre>
---
description: Always verify complex errors via web search before proposing solutions
globs: ["**/*.rb", "Gemfile*"]
priority: high
alwaysApply: true
---
# Convenciones de nombres

- Usa camelCase para variables y funciones.
- Usa PascalCase para clases y componentes.
- No uses guiones bajos al inicio.
</pre>
<ul>
  <li><strong>Tips:</strong>
    <ul>
      <li>Organiza las reglas por tema o equipo.</li>
      <li>Actualiza las reglas conforme evoluciona el proyecto.</li>
      <li>Consulta las reglas desde la barra de comandos de Cursor.</li>
    </ul>
  </li>
</ul>

---

<div style="display: flex; align-items: stretch; gap: 40px;">
  <div style="flex: 1 1 0; min-width: 0;">
    <img 
      src="images/financial.jpg" 
      alt="Planeación financiera" 
      style="
        width: 100%; 
        height: 100%; 
        object-fit: cover; 
        border-radius: 18px; 
        box-shadow: 0 4px 32px rgba(0,0,0,0.12);
        min-height: 340px;
        max-height: 480px;
        display: block;
      "
    >
  </div>
  <div style="flex: 2 1 0; min-width: 0; display: flex; flex-direction: column; justify-content: center;">
    <h2 style="margin-top: 0; text-align: left">Usos generales</h2>
    <ul>
      <li><strong>Planeación financiera</strong> o administrativa</li>
      <li><strong>Seguimiento por fases</strong> con documentación automática</li>
      <li><strong>Generación automática</strong> de reportes y dashboards</li>
      <li><strong>Validación y trazabilidad</strong> por documentos históricos</li>
      <li><strong>Gestión de stakeholders</strong> y comunicación</li>
    </ul>
  </div>
</div>

---

<div style="display: flex; align-items: stretch; gap: 10px;">
  <div style="flex: 1.5 1 0; min-width: 0; display: flex; flex-direction: column; justify-content: center;">
    <h2 style="margin-top: 0; text-align: left">¿Quién puede beneficiarse?</h2>
    <ul>
      <li><strong>Desarrolladores y equipos técnicos</strong></li>
      <li><strong>Contadores y administrativos</strong></li>
      <li><strong>Project Managers y analistas</strong></li>
      <li><strong>Equipos interdisciplinarios</strong></li>
    </ul>
  </div>
  <div style="flex: 1 1 0; min-width: 0;">
    <img 
      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
      alt="Diverse Team" 
      style="
        width: 100%; 
        height: 100%; 
        object-fit: cover; 
        border-radius: 18px; 
        box-shadow: 0 4px 32px rgba(0,0,0,0.12);
        min-height: 340px;
        max-height: 480px;
        display: block;
      "
    >
  </div>
</div>

---

## Caso práctico: Upgrade de Rails 4.2 a 7.1

- Plan inicial generado via Claude UI(markdown files)
- Fases divididas por versiones
- Documentos técnicos por etapa
- Revisión automática del código y dependencias
- Seguimiento progresivo con rollback posible

<img src="images/rails_logo.webp" alt="Code Refactoring" style="width: 300px; height: 150px;">

---

## Upgrade de Rails 4.2 a 7.1

<img src="images/
cursor_rule_validate_soluction.jpg
" alt="cursor rule double check" style="width: 800px;">

---

## Incremental upgrades #1

<img src="images/
rails_upgrade_step_1.jpg
" alt="cursor rule double check" style="width: 100%;">

---

## Incremental upgrades #2

<img src="images/
rails_upgrade_step_2.jpg
" alt="cursor rule double check" style="width: 100%;">

---

## Lecciones aprendidas del upgrade

- Cursor permite iterar cada fase de forma controlada
- Actualización de documentos conforme avanza el código
- Facilita testing, debugging y planificación paralela
- Mejora la documentación interna del proyecto

![Learning Process](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop)

---

## Crear esta misma presentación con Cursor AI

- Temario escrito como documento base
- Segundo documento para las slides
- Comando a Cursor para:
  - Clonar plantilla Reveal.js
  - Insertar contenido de slides
  - Buscar imágenes en Unsplash/Pexels
- **Todo en menos de 15 minutos**

![Presentation Workflow](https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop)

---

## Conclusiones

- **Cursor AI no es solo para programar: es para orquestar**
- Ideal para planear y ejecutar proyectos reales
- Mejora la productividad, la trazabilidad y el enfoque
- Se adapta tanto a equipos técnicos como administrativos

![Success](https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop)

---

## Gracias 🙌

### ¿Preguntas?

![Thank You](images/thanks.gif)
