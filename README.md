# Brasil em Fontes · Brazil at the source

Um portal independente, gratuito para visitantes, que ajuda o mundo a encontrar informações públicas sobre o Brasil e verificar sua origem. Não representa o governo nem garante a veracidade de cada publicação externa.

**[Abrir portal](https://brasil-em-fontes.vocalmoose64.chatgpt.site/) · [Cópia no GitHub Pages](https://nahnp.github.io/brasil-em-fontes/)**

## Chamado aberto: ajude a conectar o Brasil ao mundo

Jornalistas, pesquisadores, tradutores, desenvolvedores, designers, especialistas em acessibilidade e pessoas dispostas a conferir fontes: sua ajuda é bem-vinda. Precisamos de links confiáveis, correções com evidências, traduções, melhorias para celulares e conexões lentas e soluções responsáveis de disponibilidade.

**[Proponha uma contribuição](https://github.com/nahnp/brasil-em-fontes/issues/new/choose)** ou faça um fork e envie um pull request. Não precisa saber programar para sugerir uma fonte ou apontar um erro.

**Toda alteração destinada ao portal passa por revisão e aprovação antes de integrar a branch principal.** A proprietária `@nahnp` é responsável pela revisão. Publicar uma issue ou comentário não significa que seu conteúdo foi verificado ou aprovado. Não envie senhas, documentos privados, dados pessoais de terceiros ou acusações sem evidências. A participação é voluntária, sem promessa de remuneração.

### Help us make Brazil understandable worldwide

We welcome journalists, researchers, translators, developers, designers, accessibility specialists and anyone willing to check sources. Suggest trustworthy links, report evidence-backed corrections, improve translations or submit a pull request. Changes require review and approval before reaching the main branch. Public issues and comments are unverified contributions.

### Ayude a conectar Brasil con el mundo

Buscamos periodistas, investigadores, traductores, desarrolladores, diseñadores y personas que puedan verificar fuentes. Proponga enlaces fiables, correcciones con evidencia o mejoras de accesibilidad. Los cambios requieren revisión y aprobación antes de llegar a la rama principal. Las contribuciones públicas no equivalen a información verificada.

## Contribuição e governança

- [Como contribuir](CONTRIBUTING.md)
- [Critérios editoriais](docs/EDITORIAL.md)
- [Código de conduta](CODE_OF_CONDUCT.md)
- [Comunicar uma vulnerabilidade](SECURITY.md)
- [Solicitações de contribuição](https://github.com/nahnp/brasil-em-fontes/issues)

Este repositório público contém apenas o projeto do portal. O Nexus, credenciais, dados operacionais e backups privados não fazem parte dele. O código publicado e o conteúdo público podem ser lidos e copiados por qualquer pessoa. Ainda não foi escolhida uma licença de reutilização; público não equivale a licença irrestrita.

## Executar e validar

O portal utiliza HTML, CSS e JavaScript, sem dependências de produção, rastreadores ou formulários de coleta de dados.

```sh
node --check app.js
node scripts/check.mjs
```

Para visualizar, sirva a pasta por HTTP com seu servidor estático preferido. Abrir `index.html` diretamente permite leitura local, mas recursos de compartilhamento podem exigir HTTPS ou localhost. `fontes.json` guarda uma referência offline; abrir os sites externos exige internet.

O GitHub Pages publica o conteúdo de `main`. O site em ChatGPT Sites exige publicação separada após aprovação; não há sincronização automática entre as duas hospedagens. O CI usa permissão somente de leitura e não utiliza credenciais em pull requests.

## Limites e próximos passos

Esta versão inclui português, inglês e espanhol no portal e no guia de cidadania, diretório de onze links e compartilhamento. As duas cronologias em português têm treze registros com fontes, datas, versões das partes e lacunas da pesquisa. A revisão ocorreu em 13/10/2026. Não é um inventário de todas as notícias nem um feed público atualizado automaticamente.

Tor/.onion e IPFS ainda não estão publicados. Não há garantia de acesso em todos os países, continuidade de planos gratuitos ou resistência absoluta a bloqueios e ataques.

## Cidadania, vídeos e operação Nexus

- [Guia de cidadania](cidadania.html): canais oficiais e checklist informativo, sem coleta de denúncias.
- [Cronologias](timeline.html): Meta/TSE e reportagem UOL sobre Daniel Vorcaro, em casos separados. Vídeos só carregam após clique.
- [Integração Voz do Voto](docs/INTEGRACAO_VOZ_DO_VOTO.md): recursos aproveitados e bloqueadores de coleta.
- [Metodologia das cronologias](docs/METODOLOGIA_CRONOLOGIAS.md): atribuição, cobertura e datas aproximadas.

A operação, os agendamentos, agentes, filas e relatórios ficam em ambiente privado. Este repositório publica somente o portal, suas fontes e orientações de contribuição.

Validação adicional:

```sh
node --check cidadania.js
node --check timeline.js
```

## Seleção editorial e podcast

As notícias usam apenas UOL e Mídia NINJA. O diretório e o guia preservam canais institucionais oficiais. Reportagens e alegações não recebem selo de confirmação oficial.

[Podcast técnico sobre JavaScript](https://monica.im/ai-podcast/share?id=cd5f4d52-97f2-4b0b-9d6e-f91ac7272f17): criação com Monica AI, em inglês, separada das notícias e acessível também na página de cronologias.

## Canais indicados

[Canais e vídeos](canais.html): quatro canais YouTube, nove vídeos únicos e dois canais de comunicação política no WhatsApp. Os títulos foram consultados via oEmbed; metadados não verificam conteúdo. Titularidade dos canais de WhatsApp não confirmada. A playlist fornecida está pendente. A seleção ampliada não altera as fontes das cronologias.
