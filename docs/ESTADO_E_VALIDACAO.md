# Estado e validação · Brasil em Fontes

[Início](../README.md) · [Guia](GUIA_DO_PROJETO.md)

Revisão: 2026-11-09. Ambiente da revisão: Windows, estação local da proprietária. Executor: Codex, revisão documental.

Base examinada: `a13b8292413ee9656dcf738b88e5483c3f0f2af1`. O SHA identifica a base anterior à alteração documental, não o commit desta documentação.

| Componente | Estado | Evidência e limite |
| --- | --- | --- |
| Documentação desta revisão | HEALTHY | Índice e referências locais novos verificados antes do envio; resultado detalhado no relatório privado da revisão. |
| Operação completa | DEGRADED | Há código e comandos, mas o funcionamento completo não foi revalidado nesta revisão. |
| Serviços externos | AUTH REQUIRED | Quando aplicáveis, precisam de conta, consentimento e configuração próprios; não se presume acesso pelo repositório. |

## Verificação reproduzível

Execute os comandos abaixo na raiz de um clone deste repositório, com as dependências documentadas já instaladas. Não utilize uma instalação de outro projeto.

```text
node --check app.js
node scripts/check.mjs
```

Os comandos foram conferidos no código, mas a execução completa da aplicação não faz parte desta revisão documental.

Os comandos acima, quando presentes, usam a mesma sintaxe em PowerShell no Windows e em terminal no macOS. Isso não certifica suporte a todos os recursos em ambos os sistemas. Instalação e ativação de ambientes devem seguir as instruções específicas do README.

## Evidências de origem

- [`app.js`](../app.js)
- [`scripts/check.mjs`](../scripts/check.mjs)

## Limites

Mudanças neste repositório público exigem revisão humana/CODEOWNER. Operação privada e anexos ficam fora dele.

Nenhuma credencial, configuração local, extrato ou evidência operacional privada integra esta revisão. HTTP 200 e existência de perfil não comprovam execução ou inferência.
