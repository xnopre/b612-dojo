# Les coding-dojo du B612 : Séance #11 du 06/06/2019

## Thème

Travailler sur du code Legacy : commencer par ajouter des tests
unitaires pour avoir un maximum de couverture de code. 

## Sujet

[Gilded Rose Kata](https://github.com/emilybache/GildedRose-Refactoring-Kata)

## Démarche

* Ajouter des TU au fur et à mesure, en suivant la couverture de 
code, pour l'amener à 100%

* Nous avons observé qu'il y a des `if` sans `else` donc peut-être
que certains cas ne "rentrant" pas dans ces `if` ne sont pas bien
couverts ? Nous avons donc ajouté des `else` avec du code sans 
effet (par exemple `System.out.println("ok");`). Effectivement, 
certains `else` n'étaient pas couverts, nous en avons traité, il 
en reste ("TODO").

## Discussions post-dojo

Nous avons noté que le fait d'avoir mis 1 cas (item) par TU ne valide
pas le `for` qui est dans le code (il pourrait être remplacé par un 
`items[0]` sans casser les tests) ➡︎ il vaudrait mieux créer tous les items
dans un seul TU. 
 
Avec le recul, une meilleure solution pourrait être de générer toutes les 
combinatoires d'items (selons les différents noms, les différents seuils de 
`quality` et les différents seuils de `selIn`), appeler la méthode (1 ou
plusieurs fois) et générer la liste d'items modifiées en JSON dans un fichier
de référence.

A continuer...
