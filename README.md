# Les coding-dojo du B612 : Séance #9 du 25/04/2019

## Thème

A la découverte des mocks en Python (sans lib de mocks)

## Sujet

Pour s'exercer sur les mocks, nous avons collectivement imaginé le cas suivant :
une classe `Processor` qui a une méthode `doit` qui récupère une liste de données
en base de données et les envois (par exemple via le réseau) vers un équipement 
distant.

Architecture :
* Un collaborateur `Dao` qui a une méthode `get_all` et renvoie un tableau de données
* Un collaborateur `Connector` qui a une méthode `send`
* Une classe  `Processor` qui a une méthode `doit`

## Installation et Run Python

Voir session #8.
