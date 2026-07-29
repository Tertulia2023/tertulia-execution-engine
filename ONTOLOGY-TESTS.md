# Ontology Tests

Versão 1.1

---

## Autoridade

Este documento registra critérios e resultados de validação ontológica do Execution Engine.

Ele não possui autoridade superior a:

1. `EXECUTION-FOUNDATIONS.md`;
2. `EXECUTION-ENGINE-ARCHITECTURE.md`;
3. `EXECUTION-ENGINE-ONTOLOGY.md`;
4. `EXECUTION-CONTRACT.md`;
5. `EXECUTION-EVENT-CONTRACT.md`.

Em caso de divergência, os documentos normativos certificados prevalecem e este registro deve ser atualizado.

---

## Objetivo

Verificar se um conceito merece fazer parte da ontologia fundamental do Execution Engine e registrar o resultado dessa análise.

A validação ontológica não depende da tecnologia de implementação e não presume que todo conceito seja um fato físico observável.

---

## Critérios de admissão

Um conceito candidato deve satisfazer, conforme sua natureza, os critérios aplicáveis abaixo:

- possuir responsabilidade semântica distinta;
- não duplicar conceito já existente no Execution Engine ou no Kernel;
- permanecer compreensível independentemente de tecnologia, persistência ou interface;
- ser necessário para representar, reconstruir, relacionar ou avaliar a execução;
- possuir relações e invariantes que possam ser expressos de forma objetiva;
- não representar apenas relatório, visualização ou cálculo derivado;
- não incorporar regra particular de um programa, concedente, organização ou projeto;
- poder ser validado por comportamento, rastreabilidade ou consistência arquitetural.

A produção de `Evidence` não é critério geral de admissão ontológica.

`Evidence` relaciona-se a `Assertion` por vínculo epistêmico explícito, conforme o modelo epistêmico do Kernel.

---

## Classificação dos resultados

Os candidatos podem receber uma das seguintes classificações:

### VALIDATED

Conceito aceito na ontologia fundamental e compatível com os documentos normativos certificados.

### BOUNDARY

Conceito aceito na fronteira entre o Execution Engine e outro componente, com responsabilidade explicitamente delimitada.

### DERIVED

Resultado de avaliação ou cálculo que não constitui fato primário da execução.

### REJECTED

Conceito não aceito como objeto ontológico fundamental.

---

## Resultados

### Execution

Status: `VALIDATED`.

Responsabilidade: delimitar o contexto de execução.

Validação adicional: possui contrato normativo próprio em `EXECUTION-CONTRACT.md`.

### Execution Event

Status: `VALIDATED`.

Responsabilidade: representar uma única ocorrência executiva delimitada e pertencente a uma `Execution`.

Validação adicional: possui contrato canônico próprio em `EXECUTION-EVENT-CONTRACT.md`.

### Estado

Status: `VALIDATED`.

Responsabilidade: representar condição observável da realidade em determinado momento.

### Mudança de Estado

Status: `VALIDATED`.

Responsabilidade: representar transformação objetiva entre condições observáveis quando aplicável.

Observação: nem todo `Execution Event` causa Mudança de Estado.

### Assertion

Status: `BOUNDARY`.

Responsabilidade: representar afirmação verificável sobre Estado, Execution Event ou Mudança de Estado.

Fronteira: o Execution Engine pode registrar ou relacionar Assertions, mas sua qualificação epistêmica pertence ao Kernel.

### Evidence

Status: `BOUNDARY`.

Responsabilidade: representar material verificável relacionado explicitamente a uma Assertion.

Fronteira: tipos de suporte, oposição, limitação, insuficiência, confiança, avaliação e revisão pertencem ao modelo epistêmico do Kernel.

### Obligation

Status: `VALIDATED`.

Responsabilidade: representar condição normativa ou contratual utilizada em avaliação.

Observação: Obligation não constitui fato físico da execução e regras particulares não redefinem a ontologia fundamental.

### Compliance

Status: `DERIVED`.

Responsabilidade: representar conclusão de avaliação.

Compliance não constitui fato primário da execução e não é calculado por `Execution Event`.

### Indicadores

Status: `DERIVED`.

Indicadores representam cálculos ou agregações produzidos a partir de informações da execução.

Não integram a ontologia fundamental como fatos primários nesta baseline.

---

## Decisões consolidadas

1. `Execution Event` é o conceito canônico de ocorrência executiva.
2. O conceito genérico `Event` não deve coexistir como objeto concorrente para a mesma responsabilidade.
3. `Execution Event` pode observar Estado, causar Mudança de Estado ou registrar Assertion.
4. Mudança de Estado não é obrigatória para todo Execution Event.
5. `Execution Event` não produz Evidence como consequência ontológica necessária.
6. Evidence se relaciona a Assertion por vínculo epistêmico explícito.
7. Compliance é derivado.
8. O Execution Engine não duplica o modelo epistêmico do Kernel.
9. Commands permanecem fora do escopo desta baseline ontológica.

---

## Regra de evolução

Novos candidatos somente devem ser promovidos à ontologia fundamental após:

1. demonstração de necessidade arquitetural;
2. comparação com conceitos existentes;
3. verificação das fronteiras com o Kernel;
4. definição de relações e invariantes;
5. validação em mais de um contexto quando a generalização for necessária;
6. atualização coerente dos documentos normativos e dos testes executáveis correspondentes.
