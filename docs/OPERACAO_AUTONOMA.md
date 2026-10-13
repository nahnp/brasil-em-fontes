# Operação centralizada no Nexus

O executor deste projeto roda dentro do Nexus. Perfis de IA não são processos separados nem garantem disponibilidade; `scripts/operations.mjs` executa as rotinas comprováveis e gera evidências privadas.

## Rotinas

| Trabalho | Frequência | Execução e limite |
|---|---|---|
| Disponibilidade | A cada 60 segundos | Testa os dois endereços públicos, timeout e conteúdo esperado. Mede somente a perspectiva desta máquina. |
| Referências de notícias | A cada hora | RSS oficial Agência Brasil; títulos, links e datas em fila local de revisão. Não republica notícias automaticamente. |
| Backup | Diário | Somente arquivos públicos selecionados, gravados localmente. Não exporta credenciais nem materiais importados. |
| Revisão de IA | Diário, após 09h em America/Sao_Paulo | Modelo local `qwen3:0.6b`, seis funções consultivas, propostas locais sem ferramentas externas. |
| Comandos do projeto | A cada ciclo | Lista permitida, status e resultado persistidos. Ações sensíveis aguardam aprovação. |

Um ciclo pode demorar além de 60 segundos se houver falhas de rede ou comandos em andamento. Não existe garantia de frequência exata ou funcionamento com o computador desligado. O runner não reinicia hospedagens externas, altera DNS ou remove proteções do GitHub.

## Agentes

`agents/catalog.json` define nove funções: disponibilidade, referências, backup, editorial, segurança, idiomas/acessibilidade, governança Git, comunidade e coordenação. As três primeiras são executores determinísticos; as seis restantes fazem inferência local consultiva. Os perfis estão cadastrados no Nexus com escopo exclusivo `brasil-em-fontes` e `LOCAL_ONLY`. Relatórios não comprovam a verdade do conteúdo externo.

## Executar

```sh
node scripts/operations.mjs --state-dir <pasta-operacional-privada>
node scripts/operations.mjs --loop --state-dir <pasta-operacional-privada>
node scripts/operations.mjs --daily --state-dir <pasta-operacional-privada>
node scripts/nexus-command.mjs monitor_now --state-dir <pasta-operacional-privada>
```

O Nexus local usa `S:/2Broke-AI-Nexus/projects/brasil-em-fontes/runtime`. O estado fica em `state.json`, os relatórios em `reports/`, a revisão diária em `daily.json`, os eventos em `events.json` e as propostas de notícias em `news-candidates.json`. A pasta fica fora do Git público.

A fila aceita `monitor_now`, `collect_sources` e `backup_now`. Pedidos `publish`, `merge`, `send_report` e `enable_personal_reports` recebem `AWAITING_APPROVAL` e não são executados automaticamente. Não aceita shell arbitrário, destinatários externos ou instruções importadas como comandos.

O controle de sobreposição usa lock com PID; locks de processos encerrados são preservados como registros antes de reiniciar. Retentativas não descartam a última coleção válida. Alertas são eventos locais após duas falhas consecutivas; não há email, Telegram ou SMS configurado.

## Inicialização e recuperação

O launcher local do Nexus inicia o monitor em janela oculta na sessão Windows. A inicialização automática depende de logon e de máquina ligada. O Ollama já instalado é necessário para a revisão de IA; se indisponível, as funções consultivas registram falha. O monitor técnico continua sem IA.

O heartbeat do Codex criado anteriormente foi substituído pela rotina diária do Nexus, para evitar dupla execução. A automação do projeto em Codex fica pausada, preservada para consulta. Outros projetos e automações de contas não são alterados por esta integração.

## Segurança e revisão

Não há recepção de CPF, denúncia, imagem ou vídeo nesta versão. Nenhum agente envia denúncia, publica acusação ou declara anonimato, conformidade jurídica, riqueza ou invulnerabilidade. O portal segue as regras de PR, testes e CODEOWNERS. Publicação exige aprovação e conector validado; propostas locais não são conteúdo publicado.
