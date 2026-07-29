# Execution Event Contract

Versão 1.1

---

## Autoridade

Este documento define o contrato normativo canônico de `Execution Event`.

Ele é subordinado a:

1. `EXECUTION-FOUNDATIONS.md`;
2. `EXECUTION-ENGINE-ARCHITECTURE.md`;
3. `EXECUTION-ENGINE-ONTOLOGY.md`;
4. `EXECUTION-CONTRACT.md`.

Quando o conceito genérico `Event` representar a mesma ocorrência executiva, `Execution Event` prevalece como conceito canônico.

---

## Finalidade

`Execution Event` representa uma única ocorrência executiva observável e delimitada no contexto de uma `Execution`.

O contrato registra a ocorrência sem presumir verdade epistêmica, conformidade ou mudança de estado.

---

## Contrato mínimo

Um `Execution Event` válido deve possuir:

### id

Identificador estável e não vazio da ocorrência.

### execution

Referência não nula à `Execution` à qual o evento pertence.

### occurredAt

Referência temporal da ocorrência.

A precisão temporal pode variar conforme a fonte, mas a ocorrência deve permanecer temporalmente situável.

### assertions

Coleção, possivelmente vazia, de `Assertion` registradas em relação à ocorrência.

A existência de uma `Assertion` não significa que ela seja verdadeira ou confirmada.

---

## Relações permitidas

Um `Execution Event` pode:

- observar um Estado;
- causar uma Mudança de Estado;
- registrar uma ou mais Assertions.

Essas relações são independentes entre si.

Um evento pode apenas observar um Estado sem causar Mudança de Estado.

---

## Fronteira com Evidence

`Execution Event` não produz `Evidence` como consequência ontológica necessária.

Documentos, fotografias, listas, medições, registros ou outros materiais podem atuar como `Evidence` quando relacionados explicitamente a uma `Assertion` no contexto epistêmico apropriado.

A existência de Evidence não confirma automaticamente uma Assertion.

Os tipos e regras dessa relação epistêmica pertencem ao Kernel.

---

## Fronteira com Compliance

`Execution Event` não calcula, determina ou armazena `Compliance` como fato primário.

Compliance é conclusão derivada de avaliação realizada a partir de critérios aplicáveis e informações rastreáveis.

---

## Invariantes

### EE1. Pertencimento

Todo Execution Event pertence a exatamente uma Execution no contexto representado.

### EE2. Unidade da ocorrência

Todo Execution Event representa uma única ocorrência executiva delimitada.

### EE3. Identidade estável

O `id` do Execution Event não deve mudar durante sua existência lógica.

### EE4. Temporalidade

Todo Execution Event deve possuir referência temporal suficiente para situar a ocorrência.

### EE5. Mudança de Estado não obrigatória

Nem todo Execution Event causa Mudança de Estado.

### EE6. Assertion não é verdade automática

Execution Event pode registrar Assertions, mas não confirma sua veracidade.

### EE7. Evidence não é saída automática

Execution Event não produz Evidence diretamente como consequência necessária.

### EE8. Compliance é derivado

Execution Event não calcula Compliance.

### EE9. Independência de domínio

Execution Event não conhece regras particulares de concedentes, programas, organizações ou projetos.

### EE10. Sem semântica de Command

Este contrato não define Commands, autorização, mutação de aplicação ou fluxo operacional.

---

## Contrato executável mínimo

A implementação futura deste contrato deve demonstrar por testes que:

1. um Execution Event válido possui `id`, `execution` e `occurredAt`;
2. `id` vazio é rejeitado;
3. ausência de `execution` é rejeitada;
4. ausência de referência temporal é rejeitada;
5. um Execution Event pode existir sem Assertions;
6. um Execution Event pode registrar múltiplas Assertions;
7. um Execution Event pode existir sem Mudança de Estado;
8. Evidence não é requisito para a existência do Execution Event;
9. Compliance não é requisito nem atributo factual primário do Execution Event.

Esses testes devem ser implementados somente quando o código de domínio for alinhado a este contrato.

---

## Fora do escopo

Este contrato não define:

- tipos epistêmicos de suporte;
- confiança;
- revisão epistêmica;
- algoritmo de Compliance;
- Commands;
- persistência;
- APIs;
- autenticação;
- autorização;
- regras específicas de domínio;
- formato de documentos ou relatórios.

---

## Regra de evolução

Qualquer ampliação de `Execution Event` deve preservar:

- pertencimento a Execution;
- unidade da ocorrência;
- temporalidade;
- separação entre Event, Assertion e Evidence;
- caráter derivado de Compliance;
- fronteira epistêmica do Kernel;
- independência de regras específicas de domínio.
