\# Execution Event Contract



Versão 1.0



\---



\## Missão



Representar uma ocorrência da realidade capaz de produzir mudanças observáveis.



\---



\## Required



\- id



\- execution



\- type



\- title



\---



\## Optional



\- occurredAt



\- actor



\- location



\- description



\---



\## Produz



Assertions



\---



\## Não produz diretamente



\- relatórios



\- indicadores



\- conformidade



\---



\## Regras



1\. Todo Execution Event pertence a uma Execution.



2\. Todo Execution Event representa apenas uma ocorrência.



3\. Um Execution Event pode produzir múltiplas Assertions.



4\. Um Execution Event nunca referencia documentos.



Documentos são Evidences.



5\. Um Execution Event nunca calcula Compliance.



6\. Um Execution Event nunca conhece o concedente.



\---



\## Exemplo



Execution Event



↓



"Realização da Oficina 03"



↓



produz



↓



Assertion



↓



"A oficina iniciou."



↓



Evidence



↓



Fotografia



Ata



Lista

