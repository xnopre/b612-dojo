# b612-dojo

> Coding-dojo au B612

# Séance du 14/12/2018

## Objectif

Travailler le TDD.

## Sujet 

### 10/12/2018

Gérer un compte en banque, pouvoir consulter son solde,
pouvoir faire des dépôts et des retraits.

Evolution en cours de session : le solde ne peut pas être négatif

### 14/12/2018

Poursuite du sujet avec :
* Erreur si dépôt ou retrait d'un montant négatif
* Object `Bank` pour :
  * Créer un compte avec une valeur initiale
  * Gérer le virement d'un compte à l'autre
  * Gérer un rollbak de ce virement si problème