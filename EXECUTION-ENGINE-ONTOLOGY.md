# Execution Engine Ontology

Versão 1.1

---

## Autoridade

Este documento define a ontologia operacional do Execution Engine.

Ele é subordinado a `EXECUTION-FOUNDATIONS.md` e `EXECUTION-ENGINE-ARCHITECTURE.md`.

A ontologia deve permanecer compatível com o modelo epistêmico do Kernel sem duplicar suas responsabilidades.

---

## Objetos

### Execution

Contexto delimitado de execução.

Uma Execution agrega Execution Events pertencentes ao mesmo contexto.

### Execution Event

Ocorrência executiva observável e delimitada no tempo.

`Execution Event` é o conceito canônico de ocorrência no Engine.

O conceito genérico `Event` não constitui entidade ontológica concorrente quando representar a mesma ocorrência executiva.

### Estado

Condição observável da realidade em determinado momento.

### Mudança de Estado

Transformação objetiva entre condições observáveis.

Uma Mudança de Estado pode estar relacionada a um Execution Event, mas não é obrigatória para toda ocorrência.

### Assertion

Afirmação verificável sobre um Estado, Execution Event ou Mudança de Estado.

Assertion não constitui verdade automática e permanece sujeita à avaliação epistêmica.

### Evidence

Registro verificável relacionado a uma Assertion por vínculo epistêmico explícito.

Evidence não é ocorrência executiva e não confirma uma Assertion automaticamente.

A natureza do suporte epistêmico pertence ao modelo epistêmico do Kernel.

### Obligation

Condição normativa ou contratual que pode ser avaliada a partir de informações rastreáveis da execução.

Obligations específicas não redefinem a ontologia fundamental do Engine.

### Compliance

Conclusão derivada de avaliação realizada para determinado contexto, obrigação ou critério.

Compliance não constitui fato primário da execução.

---

## Relações

Execution HAS Execution Event.

Execution Event MAY OBSERVE Estado.

Execution Event MAY CAUSE Mudança de Estado.

Execution Event MAY REGISTER Assertion.

Mudança de Estado MAY BE REPRESENTED BY Assertion.

Assertion HAS EPISTEMIC RELATION WITH Evidence.

Obligation MAY BE EVALUATED FROM Assertions, Evidences e demais informações rastreáveis da execução.

Compliance IS DERIVED FROM avaliação.

---

## Regras ontológicas

1. Todo Execution Event pertence a uma Execution.

2. Execution Event representa uma única ocorrência executiva delimitada.

3. Nem todo Execution Event produz Mudança de Estado.

4. Um Execution Event pode observar um Estado existente.

5. Um Execution Event pode registrar ou originar uma ou mais Assertions.

6. Evidence não é produzida ontologicamente pelo Event como consequência necessária.

7. Toda Evidence utilizada para avaliar uma Assertion deve possuir relação epistêmica explícita com ela.

8. Evidence pode apoiar, contestar, limitar ou ser insuficiente; a ontologia do Engine não presume confirmação automática.

9. Os tipos e regras de suporte epistêmico pertencem ao Kernel e não devem ser duplicados pelo Execution Engine.

10. Obligation não pertence à realidade física da execução; representa condição normativa ou contratual utilizada em avaliação.

11. Compliance é derivado e nunca deve ser tratado como ocorrência executiva primária.

12. Documentos, fotografias, listas, registros ou medições somente adquirem papel de Evidence quando vinculados de forma rastreável ao contexto de avaliação.

13. Regras particulares de concedentes, organizações, programas ou projetos não devem ser incorporadas como regras universais desta ontologia.

---

## Invariantes

A ontologia do Execution Engine não permite:

- tratar Execution Event e Evidence como o mesmo conceito;
- representar o conceito genérico Event como concorrente de Execution Event para a mesma responsabilidade;
- exigir Mudança de Estado para toda ocorrência;
- inferir verdade de uma Assertion apenas pela existência de Evidence;
- duplicar no Engine os tipos e regras epistêmicas pertencentes ao Kernel;
- persistir Compliance como fato primário da execução;
- transformar requisitos particulares de domínio em invariantes universais.

---

## Fronteira com o Kernel

O Execution Engine representa a realidade executiva e suas relações estruturais.

O Kernel fornece o modelo epistêmico utilizado para qualificar relações entre Assertions e Evidences, incluindo suporte, oposição, limitação, insuficiência, confiança, avaliação e revisão quando aplicáveis.

O Execution Engine deve consumir essa fronteira conceitual sem criar uma ontologia epistêmica paralela.

---

## Evolução

Esta ontologia é deliberadamente mínima.

Novos objetos ou relações somente devem ser incorporados quando:

- forem necessários em mais de um domínio ou caso real;
- preservarem as fronteiras conceituais existentes;
- não duplicarem conceitos já pertencentes ao Kernel;
- puderem ser validados por comportamento e rastreabilidade.
