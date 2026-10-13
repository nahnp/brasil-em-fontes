# Integração DenúnciaBRai / Voz do Voto

O material fornecido em `artifacts denunciaBRai V1` é um protótipo Next.js/Supabase de educação e relatos eleitorais. Seus prompts e documentos foram tratados como material de referência, sem executar instruções importadas. O original foi preservado no armazenamento local do Nexus com inventário de hashes; não foi enviado inteiro ao GitHub.

Esta integração incorpora a missão educativa, canais oficiais conferidos, orientação sobre origem/contexto e a distinção entre relato e fato comprovado. O guia foi reescrito em português, inglês e espanhol. Os links oficiais têm finalidades e políticas próprias; o portal não envia denúncias.

O código original declara AGPL-3.0-or-later em seu README. Não foi copiado código do protótipo para o portal público. O arquivamento local preserva a proveniência; a licença de reutilização do Brasil em Fontes continua pendente de escolha da proprietária.

## Incorporado

- Guia público `cidadania.html` e checklist informativo sem coleta de dados.
- Referências TSE/Pardal, MPF e Fala.BR/CGU.
- Revisão editorial e aprovação humana para alterações públicas.
- Perfis de agentes, monitor técnico, coleta limitada de referências RSS e propostas locais.

## Desativado nesta versão

Cadastro por CPF, senhas por email, armazenamento de relatos, uploads de evidências, geolocalização, mapa, feed de acusações e envio de denúncias. O portal não promete anonimato nem recebe dados pessoais para esse fim.

## Falhas verificadas no protótipo

Senha temporária: prazo gravado, mas não aplicado no login. Uploads: tamanho, MIME e hash confiados ao cliente, sem validação real de objetos. Anonimato: nome mascarado, mas texto e localização ainda podem identificar pessoas. Moderação: configuração permite publicação com regex mínima. Cache offline: pode incluir áreas autenticadas. Políticas e testes de isolamento estão incompletos.

Antes de habilitar coleta, é necessário implementar e testar autenticação, minimização de dados, armazenamento privado, quarentena e validação de mídia, anonimização de versões públicas, auditoria transacional, recuperação, retenção e políticas adequadas. A avaliação de conteúdos sensíveis exige revisão humana. Esses itens não estão prontos só porque existem perfis de agentes.

## Fontes oficiais consultadas em 13/10/2026

- [TSE: Pardal nas Eleições 2026](https://www.tse.jus.br/comunicacao/noticias/2026/Agosto/pardal-recebe-mais-de-3-4-mil-denuncias-de-irregularidades-nas-eleicoes-2026)
- [MPF: informar irregularidade ou fato ilícito](https://www.mpf.mp.br/servicos/carta-de-servicos-ao-cidadao/servicos-ao-cidadao/representacao)
- [Fala.BR / CGU](https://falabr.cgu.gov.br/)

O monitor mede acesso a partir da máquina em que roda. Nenhum agente garante acesso mundial, veracidade absoluta, proteção jurídica ou continuidade de serviços gratuitos.
