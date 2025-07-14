## Caso de uso esta presentacion

1. Definir el temario, con ayuda de prompts independientes en claude/gemini/gpt, una vez que te guste lo que se va a tratar y el contenido generaal, todo arranca con cursor con algo como esto, basado en el temario(outline) creado como documento adicional(temario_inicial.md)

```
Hi Cursor, I’m preparing a 25-minute presentation in Spanish about how to use Cursor AI to plan, manage, and execute both technical and general projects. I want to generate a Reveal.js-based slide deck using temario_inicial.md. Please help me:

1. Clone a Reveal.js starter repo
2. Create a Markdown file with slides in Spanish based on the outline temario_inicial.md
3. Use only free image sources like Unsplash (or other open APIs)
4. Embed relevant images or diagrams where helpful

Please fetch relevant images from Unsplash using keywords based on each slide topic, and embed them automatically.
```

Despues del primer prompt esto lucia asi: <br/>
[Pull 1](https://github.com/heridev/presentacion-cursor-ai-reveal-js/pull/1)

y un documento creado por cursor de lo que se trabajó en el primer paso:  
[Presentation summary](https://github.com/heridev/presentacion-cursor-ai-reveal-js/blob/main/PRESENTATION_SUMMARY.md)

Y la version en markdown
https://github.com/heridev/presentacion-cursor-ai-reveal-js/blob/main/reveal-presentation/cursor-ai-presentacion.md

2. Segundo prompt

```
awesome, let's polish the initial slides to include more and be more specific on them, for instance, let's expand the slides and divide it into 3 slides total, and can you help me put some additional tips with cursor, just to mention a few about the difference between chat and agent spanish all the time, help me also create a base document md for easy context switching into new chats, based on the architecture and services for images we are using and that content should be in spanish probably call it architecture or base_context
```

PR: https://github.com/heridev/presentacion-cursor-ai-reveal-js/pull/2/files
