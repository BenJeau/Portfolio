---
name: SEG2505-Android
link: https://github.com/BenJeau/SEG2505-Android
readmeLink: https://raw.githubusercontent.com/BenJeau/SEG2505-Android/master/README.md
description: Android application project for the SEG 2505 course
year: 2018
languages: ["Java"]
---

# SEG2505-Android

[![CircleCI](https://circleci.com/gh/BenJeau/SEG2505-Android.svg?style=svg&circle-token=5d6026229402bbfaade8145e4f45d25d28f44e64)](https://circleci.com/gh/BenJeau/SEG2505-Android)

## Sommaire
Cette application Android est pour le cours SEG2505 et vise à être utile pour les fournisseurs de services pour qu'ils puissent être facilement accessibles de nos téléphones mobiles. Ce répertoire contient le code nécessaire pour l'ouvrir dans Android Studio. Nous utilisons la version 3.2.1 de Android Studio.

## UML
Nous utilisons UmpleOnline pour notre UML du code. Voici le lien pour notre livrable, il est mis à jour pour chaque livrable: http://cruise.eecs.uottawa.ca/umpleonline/umple.php?model=181109551413
Faire sûr de peser le M pour voir les méthodes sur Umple après avoir clické le lien SVP. Vous pouvez aussi visionner le diagramme UML dans le fichier pdf nommé SEG2505_Android_UML.

## Notes
keyID: Une clès spécifiques attacher à chaque instance d'un objet pour faciliter le transfert de data entre Firebase et l'application.

Pour accéder à notre répertoire [github](https://github.com/BenJeau/SEG2505-Android), utiliser le lien donner.

Le fichier APK peut se retrouver à la racine de ce répertoire dans le fichier nommé *Droids_debug.apk*. Il y a un bug dans le fichier APK, il n'est pas capable de prendre le role de l'utilisateur de firebase, mais ce problème n'est pas présent lorsque tu installe l'application directement par Android Studio.

## Contraintes Services
Pour les inscriptions de fournisseurs de services, il faut que: 
  1. Street number doit être un integer.
  2. Street name doit contenir UNIQUEMENT des lettres, espaces, nombres et traits d'union.
  3. Le code postal doit être du format X1X1X1, donc LettreChiffreLettreChiffreLettreChiffre, avec aucun espace et les lettres sont toutes des lettres majuscules.
  4. City name, province/state name et country namme peuvent UNIQUEMENT contenir des lettres, traits d'union et la première lettre doit être une lettre majuscule.
  5. Company name doit contenir seulement des lettres, traits d'union, espaces et AUCUN numéro.
  6. Description se limite a 300 charactères. 
  7. Le numéro de téléphone est de ce format 6131234567, avec aucun espace et 10 numéros avec l'indicatif régional. 
  8. Seule la description peut être vide. 
  
## Provider Credentials
Veuillez noter que si le Provider a déjà entré son information, l'activity pour entrer son information ne sera pas montré.
1. __Username__ aymen6 - __Password__ Asd4
2. __Username__ Test - __Password__ Test1

## Membres de l'équipe

|Github Username | Nom  | Numéro Étudiant |
| --- | --- | --- |
|BenJeau              | Benoit Jeaurond        | 300015520|
|amous123           | Alexander Moussa      | 300018112|
|dngen049           | diedrick ngendahayo | 300008344|
|vergenieh            |Vergenie Howayek    |300008321|
|amprodz          | Aymen Mhamdi          |300034572|

## Nous avons connecté circleci à notre projet
![CircleCI](circleCiConnected.png)
