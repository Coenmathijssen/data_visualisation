# Data visualisation eind project - Luchtvervuiling in samenwerking met het KNMI

# Uitleg opdracht
Het KNMI heeft een aantal meetstations door Amsterdam staan. Omdat deze zo aan de prijs zijn, zijn dit er maar een aantal. Met deze meetstations kan onder andere heel precies worden gemeten wat de NO2 (stikstofdioxide) concentraties zijn. NO2 is een goede indicatie voor luchtvervuiling.
Wanneer je weet dat er NO2 in de lucht zit, kun je ook een inschatting maken over de hoeveelheid fijnstof en roet in de lucht. Het KNMI heeft deze data geïnterpoleerd, zodat wij elk uur weten hoeveel NO2 er in de lucht hangt op 43000 verschillende plekken in Amsterdam. 
Dat is dus een miljoen datapunten per dag. Wij werden vrij gelaten om deze data te gebruiken, om zo de Amsterdammer inzicht te geven in de NO2 concentraties om zich heen en de mogelijke gevolgen hiervan.
**Met dank aan de dataset van het KNMI**

# Demo
[Bekijk de demo hier](https://luchtvervuiling-knmi.netlify.com/)


## Ons concept
Met ons concept willen wij op een visueel aantrekkelijke manier inzichtelijk maken hoe ongezond de lucht om je heen nou echt is als Amsterdammer. Als gebruiker is het mogelijk om je top 3 locaties in te voeren en met welk vervoersmiddel je tussen deze locaties beweegt. 
Naar aanleiding van deze gegevens, kunnen wij een gepersonaliseerd informatief verhaal vertellen over de gezonheidsrisico's die voor jou toepasbaar zijn. Hierbij krijg je een score voor blootstelling aan luchtvervuiling (relatief aan het gemiddelde van Amsterdam). Als laatste
krijgt de gebruiker een advies om deze score te verbeteren. Met als ultiem doel om de luchtvervuiling in Amsterdam in zijn geheel te reduceren. 

# Gebruikte tools en features
- [Parcel builder](https://parceljs.org/)
- [Scrollmagic](https://scrollmagic.io/)
- [Gsap](https://greensock.com/gsap/)
- [d3](https://d3js.org/)
- [smoke-effect](https://www.npmjs.com/package/smoke-effect)
- Google geocoding API
- Google Maps API

# Gerbruikte data
## Orginele dataset:
Elke dag is een apart bestand en bevat 24 uurlijkse velden. Elke bestandsnaam bevat de
datum dd - mm - yyyy als amsterdam_NO2_ yyyymmdd .nc
Het is opgeslagen in het binaire netCDF formaat. Dit is te lezen in Python met de netCDF
module, zie https://unidata.github.io/netcdf4-python/netCDF4/index.html
Elk bestand bevat de volgende variabelen:
time (time, dateStrLen)
Tijd in UTC. Wintertijd is UTC+1, zomertijd is UTC+2
conc_ana (time, nGrid)
NO 2 concentraties in eenheden ug/m 3
In enkele gevallen zijn de veldwaarden 0. Dit betekend dat er iets mis gegaan is in de
analyse. Deze uren kunnen niet gebruikt worden.
lat (nGrid), lon (nGrid)
Definitie road-following grid in latitude en longitude (graden), zie hieronder.
nObs (time)
Aantal observaties van GGD netwerk dat meegenomen is in de analyse.
temperature (time)
Temperatuur in graden Celcius
uWind (time), vWind (time)
windvector (snelheid en richting) in m/s. U-component is wind van west naar oost,
V-component is wind van zuid naar noord.

In de dataset van het KNMI is per uur per datapunt (van de 43000) de concAna (CO2) waarde gemeten. Deze datapunten zijn geïnterpoleerd, naar aanleiding van een road-following grid en bovenstaande factoren. Dichtbij de straten, waar je
grotere concentratieschommelingen verwacht, zijn er meer meetpunten.
![road-following-grid](https://user-images.githubusercontent.com/43337909/72983161-fe802100-3de0-11ea-92d7-cb245c0446ea.jpg)

## Transformatie
Eerst heb ik de data moeten omvormen. De omgevormde data is een array, met daarbinnen een object van een dag aan data. Hierin zit weer een array van elk uur van de dag. Waarin de NO2-waardes van 43000 datapunten zijn gemeten. 

# Ingevoerde straatnamen koppelen aan dataset
De gebruiker kan in het formulier invoeren wat zijn top 3 locaties zijn en hoe hij daar naartoe reist. Met behulp van de Google geolocation API zet ik deze ingevoerde straatnamen om naar geocoördinaten. Vervolgens zoek ik de bijpassende geocoördinaten van de dataset. Hiermee reken ik de gemiddelde NO2 waarde per locatie uit voor een dag, week en maand. Naar aanleiding hiervan krijg je een gezondheidscijfer, gebasseerd op richtlijnen van de WHO. De locaties leg ik tegenover het algehele gemiddelde van Amsterdam met behulp van D3. Ook gebruik ik de Google Maps API om een alternatieve route te berekenen met zo min mogelijk NO2.
Wanneer je deze alternatieve route neemt, verandert je gezondheidscijfer ten positieve.

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
1. Doe `npm run prod` in je commandline om een dist folder te creëeren. 
2. Zet deze prod folder op een platform als Netlify.

## Credits
Credits naar het KNMI voor het kunnen gebruiken van hun waardevolle dataset en ondersteuning tijdens de opdracht.

## Auteur 
[Coen Mathijssen - GitHub](https://github.com/Coenmathijssen/)

## License
This project is licensed under the MIT License

