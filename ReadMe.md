# Teknisk dokumentation for Tema 7 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur

Vi har organiseret vores projekt i forskellige mapper for at holde filer og ressourcer struktureret og nemme at finde.

### Organisering af ressourcer

For at holde vores billeder samlet et sted har vi oprettet en mappe til dem.

- **img/** – indeholder alle billeder, der bruges på hjemmesiden (fx produktbilleder og grafik).

Det gør det nemmere for os at finde rundt i de billeder vi skal bruge til vores hjemmeside.

## Hvor placerer I boilerplate?

_(fx CSS- og JavaScript-filer der bruges på tværs af projektet)_

Vi laver en fælles mappe til styles, som bruges på alle sider i projektet. Denne mappe kalder vi **global CSS**, og her placerer vi vores fælles styling som fx typografi, farver og generelle layoutregler.
udover det har vi også oprettet en **produktliste.css** mappe fordi den havde brug for nogen separate regler.

Derudover lavede vi 3 JavaScript-filer, som håndterer forskellige funktioner på siden:

- **burger.js** – håndterer vores navigation i top baren
- **produktliste.js** – håndterer kategorier
- **produkts.js** – håndterer produktdata

Vi opretter også separate **HTML-filer for hver side**, så strukturen på hjemmesiden er overskuelig og nem at vedligeholde.

---

## Database struktur

Vores data hentes fra API’et DummyJSON, som fungerer som en database med produktinformation.
Dataene er struktureret som objekter, der indeholder forskellige egenskaber (properties). Nogle af disse egenskaber indeholder arrays, fx en liste af anmeldelser. Derudover indeholder dataene også nested objekter (indlejrede objekter), som selv har deres
egne egenskaber. Eksempler på dette er dimensions og reviews.

Anvendte felter
Vi anvender følgende felter fra hvert produktobjekt:
id (number)
thumbnail (string)
title (string)
description (string)
category (string)
price (number)
stock (number)
rating (number)
brand (string)
availabilityStatus (string)
Reviews (nested array)
Fra reviews bruger vi:
rating (number)
comment (string)
date (string)
reviewerName (string)

## Hvor placerer I HTML, CSS og JavaScript til fx detaljevisning og listevisning?

HTML-filer til fx **listevisning** og **detaljevisning** placeres i projektets hovedmappen så siderne er organiseret og nemme at finde.

CSS til disse sider placeres i **Global CSS-mappen**, hvis stylingen bruges flere steder på hjemmesiden. Hvis der er styling, der kun bruges til én specifik side, kan den placeres i en separat CSS-fil til den side.

JavaScript til funktioner som **listevisning** og **detaljevisning** placeres i projektets hovedmappe, På den måde bliver koden mere struktureret og lettere at vedligeholde.

---

## Eksempel på mappestruktur

/project
│ └── global.css
│ ├── produkt.js
│ ├── produktliste.js
│ └── burger.js
│
├── /images
│
├── index.html
├── produkt.html
└── produktliste.html

## Navngivning

For at sikre en ensartet struktur og undgå forvirring i projektet har vi aftalt nogle regler for, hvordan vi navngiver filer og mapper.

### Filnavne

Til navngivning bruger vi en kombination af **camelCase** og **bindestreg (-)**, når vi navngiver elementer og bokse.

### Sammenhæng mellem filer

For at gøre det nemt at se hvilke HTML-, CSS- og JavaScript-filer der hører sammen, bruger vi **samme navn eller prefix**.

Eksempel:

- `produktliste.html`
- `produktliste.js`
- `produktliste.css`

På den måde er det tydeligt hvilke filer der arbejder sammen.

---

## Link til scripts

### Placering af script-referencer

Vores script-referencer placeres i **`<head>`** i vores HTML-sider, hvor vi bruger **`defer` attributten**.  
Det sikrer, at JavaScript først bliver kørt efter HTML'en er indlæst.

---

## Git branches

### Navngivning af branches

For at gøre det tydeligt hvad der arbejdes på i de forskellige branches, navngiver vi dem med **bindestreger (-)** og skriver tydligt i navnet hvad der er bleve gjort eller fikset.

**Format:**

**Eksempler:**

- `menu-forside`
- `produktliste-side`
- `footer-opdatering`

Denne struktur gør det lettere for alle i gruppen at forstå, hvad der arbejdes på i de forskellige branches.

---

## Arbejdsflow

### Fordeling af arbejde

For at undgå at flere arbejder i de samme filer samtidigt, tildeler vi **en side til hver person i gruppen**.  
Den person har ansvar for funktioner og kode, der hører til den pågældende side.

### Commit-beskeder

For at sikre at commit-beskeder er forståelige, bruger vi **bindestreger (-)** og korte beskrivelser af ændringen.

Eksempel:

- `fixet-herobanner`
- `produktliste-gjortdynamo`
- `retReadme`

### Kommunikation om ændringer i main

Når en **feature-branch merges ind i `main`**, kommunikerer vi ændringen i **gruppechatten**, så alle er opmærksomme på opdateringen.

Vi forsøger også så vidt muligt kun at **merge til `main`, når vi er samlet**, så vi kan undgå konflikter og fejl.

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)

vi har brugt begge dele i vores projekt. Vi bruger function keyword til større navngivne funktioner, mens vi bruger arrow funktioner til de kortere funktioner ind i eventlistners og .forEach()

- Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)

i vores projekt har vi ikke haft så strame regler i forhold til selektore, også fordi vi ikke har været så mange i gruppen og projektet har ikke været så stort at det har været uoverskueligt at skulle gå ind og finde selektorene for diverse id'er til javascript og classes til css.

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.

Først henter vi "id" fra URL'en, derefter bruger vi Fetch til at hente Data'en, som vi bruger til at vise produktet på siden. For at vise produkterne dynamisk bruger vi funktionen showProducts og inde i den bruger vi .forEach() til at loope igennem hvert produkt som skal vises, og til visningen bygger vi HTML op med template literals via listContainer .innerHTML, hvor vi viser egenskaber som title, price, thumbnail og eventuelle badges.

- Filtrering af produkter baseret på brugerens valg.

Normalt ville vi have "Hardcode" filterknapperne direkte i HTML, og så ville vi kun kunne have globale filterknapper og ikke noget specifikt for de dynamiske sider. Men vi valgte at bygge dem dynamisk med buildFilterButtons, ...som automatisk opretter én filterknap per unik kategori
der findes blandt de hentede produkter . Det er smart fordi så bliver filter knapperne dynamiske og ændre sig automatisk fra de dynamiske sider således at det hele følges ad.

vores **vis alle** knap og **pris høj til lav** er hardcode

## Stjerne rating funktion

Alternativet til en stjerne rating kunne være bare at bruge tallene som de står i databasen, men i vores funktion visStjerner() bruger vi math.floor til at runde ned til næste fulde tal for at finde ud af mængden af fyldte stjerner, og decimal bruger vi til at finde ud af mængden af halv fyldte stjerner, og til sidst får vi den til at lægge de to sammen, og får den til at vise de resterne stjerne som tomme. Det er smart fordi det gør ratingen tydeligere for brugeren,
og stjerne-rating er en velkendt konvention på shopping sider
som brugeren derfor kender i forvejen.

## Dynamisk banner

Alternativet til at lave et dynamisk banner kunne have været i vores tilfælde bare at have et banner som virker på alle sider, som f.eks sagde "Vores Produkter". Men vores dynamiske banner, kigger i URL på den side den vises på og finder kategorierne der. Inde i vores

const categoryTitles
har vi defineret, hvilken overskrift som følger med diverse kategorier, og det er så den overskrift banneret viser. Det er smart fordi det gør det nemmere for brugeren at vide på hvilken side de er, og hvilke produkter de kan forvente at se.

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

de API endpoints vi har brugt er:

- https://dummyjson.com/products
  → henter alle produkter

- https://dummyjson.com/products/${id}
  → henter ét specifikt produkt med alle dets egenskaber,
  inklusiv title, price, description, reviews osv.

- https://dummyjson.com/products/category/${cat}
  → henter alle produkter inden for en specifik kategori
