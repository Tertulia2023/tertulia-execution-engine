# Execution Contract

Versão 1.1

---

## Autoridade

Este documento define o contrato normativo mínimo de `Execution`.

Ele é subordinado a:

1. `EXECUTION-FOUNDATIONS.md`;
2. `EXECUTION-ENGINE-ARCHITECTURE.md`;
3. `EXECUTION-ENGINE-ONTOLOGY.md`.

Nenhuma implementação de `Execution` pode contrariar esses documentos.

---

## Finalidade

`Execution` delimita um contexto de execução no qual ocorrências executivas podem ser registradas, relacionadas, reconstruídas e consultadas.

`Execution` não representa um evento isolado, uma evidência, uma obrigação ou uma conclusão de conformidade.

---

## Contrato mínimo

Uma `Execution` válida deve possuir:

### id

Identificador estável e não vazio da execução.

O identificador deve distinguir a execução das demais execuções no mesmo contexto do sistema.

### title

Título não vazio e legível que identifica a execução para uso humano.

### events

Coleção, possivelmente vazia, de `Execution Event` pertencentes à execução.

A ausência de eventos é válida para uma execução recém-representada.

---

## Invariantes

### E1. Identidade estável

O `id` de uma Execution não deve mudar durante sua existência lógica.

### E2. Título obrigatório

`title` não pode ser nulo, vazio ou composto apenas por espaços.

### E3. Pertencimento dos eventos

Todo `Execution Event` exposto por uma Execution deve pertencer àquela Execution.

### E4. Evento canônico

A coleção `events` contém `Execution Event`.

O conceito genérico `Event` não constitui contrato concorrente para a mesma responsabilidade.

### E5. Sem Evidence direta

`Execution` não utiliza Evidence como substituto de Execution Event.

Evidence se relaciona a Assertions por vínculo epistêmico explícito.

### E6. Sem Compliance primária

Compliance não é atributo factual primário de Execution.

Qualquer conclusão de Compliance é derivada de avaliação.

### E7. Sem regra específica de domínio

O contrato de Execution não incorpora regras particulares de programas, concedentes, organizações ou projetos.

### E8. Sem semântica de Command

Este contrato não define Commands, operações de mutação, autorização ou fluxo de aplicação.

---

## Relação com Execution Event

`Execution` agrega zero ou mais `Execution Event`.

O contrato detalhado de `Execution Event` é definido separadamente em `EXECUTION-EVENT-CONTRACT.md`.

A consolidação desse contrato deve preservar as seguintes regras:

- cada Execution Event pertence a uma Execution;
- nem todo Execution Event causa Mudança de Estado;
- Execution Event pode observar Estado;
- Execution Event pode registrar Assertion;
- Execution Event não confirma Assertion por si mesmo;
- Execution Event não produz Evidence como consequência ontológica necessária.

---

## Fronteira epistêmica

`Execution` e `Execution Event` pertencem ao modelo de representação da realidade executiva.

Assertions e suas relações com Evidences devem permanecer compatíveis com o modelo epistêmico do Kernel.

Este contrato não recria tipos de suporte, confiança, avaliação, revisão ou validação epistêmica.

---

## Fronteira tecnológica

Este contrato é independente de:

- mecanismo de persistência;
- banco de dados;
- protocolo HTTP;
- formato JSON;
- interface de usuário;
- framework;
- transporte;
- mecanismo de mensageria;
- ferramenta de relatório.

Implementações tecnológicas podem acrescentar adaptações externas, mas não alterar os invariantes do domínio.

---

## Contrato executável mínimo

A implementação corrente deve ser capaz de demonstrar por testes que:

1. uma Execution válida pode ser criada com `id`, `title` e coleção de eventos;
2. `id` vazio é rejeitado;
3. `title` vazio é rejeitado;
4. uma Execution sem eventos é válida;
5. eventos expostos pertencem à Execution correspondente;
6. a representação não depende de Evidence ou Compliance para existir.

Esses testes constituem a validação mínima do contrato de Execution e não substituem testes posteriores de integração com Execution Event.

---

## Fora do escopo

Este contrato não define:

- Commands;
- casos de uso de aplicação;
- persistência;
- APIs;
- autenticação;
- autorização;
- regras específicas da Ação 210V ou de qualquer outro domínio;
- algoritmo de Compliance;
- modelo epistêmico;
- transformação de linguagem natural em operações.

---

## Regra de evolução

Qualquer ampliação do contrato deve demonstrar necessidade arquitetural e preservar compatibilidade com a Fundação, Arquitetura e Ontologia certificadas.
