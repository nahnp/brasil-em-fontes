# Como contribuir

Todos podem propor melhorias por issues ou pull requests. Envie contribuições pequenas, com contexto e evidências. A conta GitHub é necessária para participar nesse canal; ler o portal não exige conta.

## Sugestões sem programação

Abra uma [issue](https://github.com/nahnp/brasil-em-fontes/issues/new/choose). Inclua o link original, o responsável pela fonte, a data, a categoria e o motivo da sugestão. Para uma correção, mostre o trecho incorreto e a evidência que sustenta a mudança. Não cole artigos completos protegidos por direitos autorais.

## Código e traduções

1. Faça um fork, crie uma branch e trabalhe em uma alteração delimitada.
2. Preserve versões em português, inglês e espanhol quando alterar textos da interface.
3. Ao mudar fontes, atualize tanto o array em `app.js` quanto `fontes.json`.
4. Execute `node --check app.js` e `node scripts/check.mjs`.
5. Confira a interface em celular, navegação por teclado, busca e links.
6. Abra um pull request explicando o problema, a mudança, as fontes e como verificou o resultado.

## Aprovação

`main` exige um pull request com ao menos uma aprovação, revisão de CODEOWNERS, verificações obrigatórias e resolução das conversas. Novos commits invalidam aprovações antigas. Force push e exclusão da branch são bloqueados. A proprietária `@nahnp` é CODEOWNER e decide a inclusão das contribuições. Não são concedidas permissões de escrita automaticamente.

Administradores também ficam sujeitos às regras. O GitHub não permite aprovar o próprio pull request: alterações propostas pela proprietária precisam de outro mantenedor habilitado para revisar. A proprietária administra as permissões e regras do repositório.

Issues e comentários são sugestões públicas e não têm aprovação prévia nem selo de verificação. A aprovação aplica-se à integração no portal. Mudanças aprovadas em `main` chegam ao GitHub Pages; ChatGPT Sites requer publicação separada.

Não publique dados pessoais, credenciais ou detalhes exploráveis de vulnerabilidades. Consulte `SECURITY.md`. Trate os participantes com respeito e leia os critérios editoriais.
