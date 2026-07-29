# Execution Engine Architecture

Versão 1.1

---

## Autoridade

Este documento define a arquitetura do Execution Engine e é subordinado a `EXECUTION-FOUNDATIONS.md`.

Nenhuma decisão arquitetural pode contradizer a fundação conceitual normativa.

---

## Missão

Representar acontecimentos da execução de forma estruturada, rastreável e independente de documentos, relatórios, domínio específico ou tecnologia de implementação.

O Execution Engine mantém a representação necessária para reconstrução, consulta e avaliação posterior da execução.

---

## Responsabilidade central

O Engine representa:

Execution

↓

Execution Event

A partir de um Execution Event, o Engine pode representar:

- Estado observado;
- Mudança de Estado;
- Assertion relacionada ao acontecimento ou estado observado.

Assertions podem ser avaliadas por Evidences relacionadas por vínculos epistêmicos explícitos.

Compliance permanece derivado de avaliação.

---

## Escopo

Compete ao Execution Engine:

- representar contextos de Execution;
- registrar e relacionar Execution Events;
- representar Estados observados quando relevantes;
- representar Mudanças de Estado associadas à execução;
- registrar ou relacionar Assertions sobre acontecimentos, estados ou mudanças;
- preservar proveniência e rastreabilidade;
- permitir que Evidences sejam relacionadas a Assertions sem duplicar o modelo epistêmico do Kernel;
- permitir associação de Obligations quando necessária à avaliação;
- disponibilizar representação estruturada para consultas e avaliações posteriores.

---

## Fora do escopo

O Execution Engine não é responsável por:

- interpretar linguagem natural;
- definir Commands;
- autenticar usuários;
- publicar conteúdo;
- editar documentos;
- produzir páginas ou portais;
- gerenciar projetos;
- realizar gestão financeira;
- substituir sistemas contábeis;
- produzir relatórios como fonte primária de conhecimento;
- incorporar regras particulares de concedentes à ontologia fundamental;
- tratar Evidence como confirmação automática de uma Assertion;
- transformar Compliance em fato primário da execução;
- duplicar o modelo epistêmico do Kernel.

---

## Entrada conceitual

A entrada conceitual do Engine é uma representação válida de uma ocorrência executiva pertencente a uma Execution conhecida.

Essa ocorrência pode:

- observar um Estado;
- causar uma Mudança de Estado;
- registrar ou originar uma Assertion.

O Engine não depende da forma pela qual essa informação chegou ao sistema.

Transporte, interface, integração ou mecanismo de entrada permanecem externos à arquitetura fundamental.

---

## Representação interna

### Execution

Delimita o contexto da execução.

### Execution Event

Representa a ocorrência executiva canônica.

O conceito genérico `Event` não deve coexistir como entidade concorrente quando representar a mesma ocorrência.

### Estado

Representa condição observável da realidade em determinado momento.

### Mudança de Estado

Representa transformação objetiva relacionada, quando aplicável, a um Execution Event.

### Assertion

Representa afirmação verificável sobre Estado, Execution Event ou Mudança de Estado.

Assertion não é verdade automática.

### Evidence

Representa material verificável relacionado a uma Assertion por vínculo epistêmico explícito.

As categorias e regras epistêmicas pertencem ao Kernel.

### Obligation

Representa condição normativa ou contratual que pode ser avaliada utilizando informações rastreáveis da execução.

### Compliance

Representa conclusão derivada de avaliação.

Compliance não constitui registro primário da realidade executiva.

---

## Relações fundamentais

Execution HAS Execution Event.

Execution Event MAY OBSERVE Estado.

Execution Event MAY CAUSE Mudança de Estado.

Execution Event MAY REGISTER Assertion.

Assertion HAS EPISTEMIC RELATION WITH Evidence.

Obligation MAY BE EVALUATED FROM informações rastreáveis da execução.

Compliance IS DERIVED FROM avaliação.

---

## Saídas

O Engine disponibiliza uma representação estruturada da execução.

Essa representação pode ser utilizada posteriormente para:

- reconstrução da execução;
- consultas;
- indicadores;
- auditoria;
- avaliação de Assertions;
- avaliação de Obligations;
- análise de Compliance;
- geração de relatórios;
- prestação de contas;
- publicação controlada.

Esses usos são derivados e não alteram a natureza dos fatos primários registrados.

---

## Princípios arquiteturais

### A1. A realidade precede o documento

Documentos podem atuar como Evidences, mas não constituem a execução em si.

### A2. Execution Event é a ocorrência canônica

O conceito normativo de ocorrência do Engine é `Execution Event`.

### A3. Event não produz Evidence diretamente

Execution Event pode registrar Assertions.

Evidences se relacionam a Assertions por vínculos epistêmicos explícitos.

### A4. Assertion não substitui a realidade

Assertion é representação verificável sobre a realidade executiva.

### A5. Nem todo Event produz Mudança de Estado

Execution Event pode apenas observar ou registrar uma condição existente.

### A6. Compliance é derivado

Compliance depende de avaliação e dos critérios aplicáveis.

### A7. Proveniência é obrigatória

Informações utilizadas para reconstrução, avaliação ou demonstração da execução devem possuir origem rastreável.

### A8. Regras específicas permanecem externas ao núcleo

Requisitos particulares de órgãos, programas, contratos ou concedentes podem utilizar o Engine, mas não redefinem sua ontologia fundamental.

### A9. Tecnologia é substituível

Persistência, transporte, interfaces e mecanismos de integração não definem os conceitos do Execution Engine.

### A10. O Engine não interpreta intenção humana

Interpretação de mensagens, linguagem natural ou intenção pertence a componentes externos.

### A11. O modelo epistêmico pertence ao Kernel

O Execution Engine deve ser compatível com o modelo epistêmico do Kernel e não deve recriá-lo de forma concorrente.

### A12. A arquitetura precede a ampliação funcional

Novas capacidades somente devem ser incorporadas quando preservarem as fronteiras estabelecidas pela fundação e por esta arquitetura.

---

## Invariantes arquiteturais

Nenhuma implementação do Execution Engine deve permitir que:

- Execution Event e Evidence sejam tratados como o mesmo conceito;
- Evidence seja utilizada como confirmação automática de uma Assertion;
- Compliance seja persistido como fato primário da execução;
- relatórios sejam tratados como origem ontológica dos acontecimentos;
- regras particulares de uma organização sejam transformadas em regras universais sem justificativa arquitetural;
- o modelo epistêmico do Kernel seja duplicado no Engine;
- uma Mudança de Estado seja artificialmente exigida para todo Execution Event.

---

## Relação com os demais documentos

`EXECUTION-FOUNDATIONS.md` possui autoridade conceitual superior.

`EXECUTION-ENGINE-ONTOLOGY.md`, `EXECUTION-CONTRACT.md` e `EXECUTION-EVENT-CONTRACT.md` devem ser compatíveis com esta arquitetura.

Em caso de divergência, a fundação e a arquitetura devem ser reconciliadas antes da implementação.
