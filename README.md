# b612-dojo

> Coding-dojo au B612

# Séance du 19/11/2018

## Objectif

Etudier les mocks avec Jest.

## Sujet 

Une classe `Script` avec une méthode `deploy("host1")` qui doit faire :
* Un appel `scp("host1", "config.json")` 
* Si c'est OK ==> un appel `ssh("host1", "reboot")`
* Sinon ==> un appel `ssh("host1", "shutdown")`

## TODO (fin de séance)

* Chercher comment s'assurer qu'on mock des méthodes existantes 
(ex : on mock `scpapy` alors que la méthode est `scp`) et avoir 
un message d'erreur de Jest (genre "tu mockes une méthode qui n'existe pas")
* Lister les différentes façons de faire des mocks avec Jest 
(à implémenter la prochaine fois ?)