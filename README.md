# Les coding-dojo du B612 : Séance #8 du 11/04/2019

## Thème

A la découverte de Python... en TDD bien sûr (avec le Kata du calcul de prix)

## Remerciements

Merci à Maxime Janvier pour l'animation de cette session et pour 
avoir fournit un [squelette de projet](https://github.com/mjanv/python-kata).

## Sujet

> Calcul de prix

Voir le [descriptif de la session #1](https://github.com/xnopre/b612-dojo/tree/2019-01-10-price).

## Installation

Le mieux est d'installer un `virtualenv`.

Il faut avoir au moins une version de Python/Python3 installée. 
```
pip3 install -r requirements.txt
virtualenv py3
source py3/bin/activate
pip install -r requirements.txt
```

## Run

Pour lancer les tests unitaires (méthode classique) :
```
pytest
```
Pour lancer en mode watch :
```
ptw
```
Pour générer le coverage :
```
pytest kata --cov-report xml:cov.xml --cov kata
```
et avec le coverage et le mode watch :
```
ptw -- kata --cov-report xml:cov.xml --cov kata # Watch mode + Coverage support
```

## VSCode extensions
* [Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters)
* [Python Test Explorer](https://marketplace.visualstudio.com/items?itemName=LittleFoxTeam.vscode-python-test-adapter)