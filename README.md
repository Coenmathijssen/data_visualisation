# Data visualisation eind project - Luchtvervuiling in samenwerking met het KNMI

# Uitleg opdracht
Het KNMI heeft een aantal meetstations door Amsterdam staan. Omdat deze zo aan de prijs zijn, zijn dit er maar een aantal. Met deze meetstations kan onder andere heel precies worden gemeten wat de NO2 concentraties zijn. NO2 (stikstofdioxide) is een goede indicatie voor luchtvervuiling.
Wanneer je weet dat er NO2 in de lucht zit, kun je ook een inschatting maken over de hoeveelheid fijnstof en roet in de lucht. Het KNMI heeft deze data geïnterpoleerd, zodat wij elk uur weten hoeveel NO2 er in de lucht hangt op 43000 verschillende plekken in Amsterdam. 
Dat is dus een miljoen datapunten per dag. Wij werden vrij gelaten om deze data te gebruiken, om zo de Amsterdammer inzicht te geven in de NO2 concentraties om zich heen en de mogelijke gevolgen hiervan.
**Met dank aan de dataset van het KNMI**


## Ons concept
Met ons concept willen wij op een visueel aantrekkelijke manier inzichtelijk maken hoe ongezond de lucht om je heen nou echt is als Amsterdammer. Als gebruiker is het mogelijk om je top 3 locaties in te voeren en met welk vervoersmiddel je tussen deze locaties beweegt. 
Naar aanleiding van deze gegevens, kunnen wij een gepersonaliseerd informatief verhaal vertellen over de gezonheidsrisico's die voor jou toepasbaar zijn. Hierbij krijg je een score voor blootstelling aan luchtvervuiling (relatief aan het gemiddelde van Amsterdam). Als laatste
krijgt de gebruiker een advies om deze score te verbeteren. Met als ultiem doel om de luchtvervuiling in Amsterdam in zijn geheel te reduceren. 

# Gebruikte tools
- [Scrollmagic](https://scrollmagic.io/)
- [Gsap](https://greensock.com/gsap/)
- [Parcel builder](https://parceljs.org/)
- [d3](https://d3js.org/)
- [smoke-effect](https://www.npmjs.com/package/smoke-effect)
- Google geocoding API

# Gerbuikte data
In de dataset van het KNMI is per uur per datapunt (van de 43000) de concAna (CO2) waarde gemeten. Deze dataset heb ik getransformeerd om te laten werken binnen ons concept. Vervolgens worden de ingevoerde adressen omgezet in geocordinaten. 
De bijpassende datapunten worden vervolgens gezocht, om de CO2-concentraties van die plek per dag, week en maand uit te rekenen. Deze wordt aan de gebruiker getoond vs het Amsterdams gemiddelde. Deze dataset is helaas niet open source.

# Installeren
1. Open je terminal op je computer
2. Maak een map aan waar je het project in wil hebben met `mkdir`
3. Clone de repo met 
<br></br>
`https://github.com/Coenmathijssen/data_visualisation.git`
<br></br>
4. Navigeer via je terminal naar de repo met `cd`. Installeer vervolgens de benodigde dependencies met
<br></br>
`npm install`
<br></br>
5. Voor het builden, bundlen en compilen (om te publiceren) van de javascript gebruik
<br></br>
`npm run prod`
<br></br>
6. Om live veranderingen doorgevoerd te zien worden zonder opnieuw handmatig te bundlen, gebruik:
<br></br>
`npm run dev`
Deze commando's zijn aan te passen in de package.json
<br></br>
6. Open de index.html in je browser om de website te bekijken

# Deployment
De website live zetten kan via GitHub Pages. 
1. Maak een repository aan en zet daar de bundle.js, html en css bestanden in. 
2. Ga naar instellingen (rechter tab in je repo).
3. Scroll naar Github Pages en activeer dit.

Hier komt de volgende opgeschoonde array met objecten uit voort:
![Screenshot 2019-11-27 at 23 25 59](https://user-images.githubusercontent.com/43337909/69763412-5bf34b00-116d-11ea-933f-debcc055ddba.png)

## Credits
- Credits naar het KNMI voor het kunnen gebruiken van hun waardevolle dataset en ondersteuning tijdens de opdracht.

## Auteur 
[Coen Mathijssen - GitHub](https://github.com/Coenmathijssen/)

## License
This project is licensed under the MIT License

