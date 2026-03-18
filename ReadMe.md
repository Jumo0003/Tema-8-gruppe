# Teknisk dokumentation for Tema 7 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur

Vi har organiseret vores projekt i forskellige mapper for at holde filer og ressourcer struktureret og nemme at finde.

### Organisering af ressourcer

For at holde vores billder samlet et sted har vi oprettet en mappe til dem.

- **img/** – indeholder alle billeder, der bruges på hjemmesiden (fx produktbilleder og grafik).

Det gør det nemmere for os at finde rundt i de billder vi skal bruge til vores hjemmeside.

## Hvor placerer I boilerplate?

_(fx CSS- og JavaScript-filer der bruges på tværs af projektet)_

Vi laver en fælles mappe til styles, som bruges på alle sider i projektet. Denne mappe kalder vi **global CSS**, og her placerer vi vores fælles styling som fx typografi, farver og generelle layoutregler.
udover det har vi også oprettet en **produktliste.css** mappe fordi den havde brug for nogen sepate regler

Derudover laver JavaScript-filer, som håndterer forskellige funktioner på siden:

- **.js** – håndterer funktionalitet til produktkort
- **produktliste.js** – håndterer kategorier
- **produkts.js** – håndterer produktdata

Vi opretter også separate **HTML-filer for hver side**, så strukturen på hjemmesiden er overskuelig og nem at vedligeholde.

---

## Hvor placerer I HTML, CSS og JavaScript til fx detaljevisning og listevisning?

HTML-filer til fx **listevisning** og **detaljevisning** placeres i projektets hovedmappe eller i en `pages`-mappe, så siderne er organiseret og nemme at finde.

CSS til disse sider placeres i **Global CSS-mappen**, hvis stylingen bruges flere steder på hjemmesiden. Hvis der er styling, der kun bruges til én specifik side, kan den placeres i en separat CSS-fil til den side.

JavaScript til funktioner som **listevisning** og **detaljevisning** placeres i **JavaScript-mappen**, hvor filerne opdeles efter funktion. På den måde bliver koden mere struktureret og lettere at vedligeholde.

---

## Eksempel på mappestruktur

/project
│
├── /css
│ └── global.css
│
├── /js
│ ├── cards.js
│ ├── categories.js
│ └── products.js
│
├── /images
│
├── index.html
├── products.html
└── product-detail.html

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

For at gøre det tydeligt hvad der arbejdes på i de forskellige branches, navngiver vi dem med **bindestreger (-)**.

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

- `ret-header-navigation`
- `tilføj-produktkort`
- `opdater-footer`

### Kommunikation om ændringer i main

Når en **feature-branch merges ind i `main`**, kommunikerer vi ændringen i **gruppechatten**, så alle er opmærksomme på opdateringen.

Vi forsøger også så vidt muligt kun at **merge til `main`, når vi er samlet**, så vi kan undgå konflikter og fejl.

_\*\*ikke opdateret, herefter _

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
- Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)
- Skal filer have korte forklaringer som kommentarer?

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
- Filtrering af produkter baseret på brugerens valg.
- Dynamisk visning af produkter i HTML.

Brug korte beskrivelser, som i eksemplerne herover

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- (fx. https://dummyjson.com/products)

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:

```javascript
//funktionens kode:
function voresFunktion(sprog) {
  console.log(`${sprog} syntax highlighting`);
}
//hvordan funktionen kaldes:
voresFunktion("JavaScript");
```
