# Välkommen till mitt React-projekt!

Detta projekt är en React-applikation som inkluderar Redux för state management, React Router för navigation, och ett mörkt läge som kan växlas. Applikationen hämtar också information från GitHub API för att visa projekt som användaren arbetat med.

## Hur man kör projektet

För att starta projektet, följ dessa steg:

1. Se till att du har `node` och `npm` installerat på din dator.
2. Klona detta repository till din lokala maskin.
3. Öppna terminalen och navigera till projektets rotkatalog.
4. Kör kommandot `npm install` för att installera alla beroenden.
5. Starta utvecklingsservern genom att köra `npm start`.
6. Öppna din webbläsare och navigera till `http://localhost:3000` för att se applikationen.

## Installation av beroenden

Innan du kör applikationen, installera följande beroenden genom att köra dessa kommandon i terminalen:

bash
npm install react-dom react-router-dom @reduxjs/toolkit redux classnames framer-motion

## Översikt av funktioner

### Dynamisk Navigation

Applikationen använder `BrowserRouter` från `react-router-dom` för att hantera routing. Det finns tre huvudsakliga sidor:

- **Om Mig:** En introduktionssida som berättar mer om användaren.
- **Projekt:** En sida som visar upp till fem GitHub-projekt som användaren har deltagit i.
- **Kontakt:** En sida med ett formulär för att skicka ett meddelande till användaren.

### Mörkt Läge

Användare kan växla mellan ljust och mörkt läge via en toggle-knapp. Denna funktionalitet drivs av Redux och påverkar komponenternas färger genom hela applikationen.

### API-anrop till GitHub

Applikationen hämtar data från GitHub API för att visa användarens projekt. Detta kräver en GitHub access token. Funktionen hanterar fel och visar felmeddelanden vid behov.

### Formulärhantering

Kontaktsidan inkluderar ett formulär där användare kan skicka meddelanden. Formuläret validerar att alla fält är ifyllda innan det tillåter användaren att skicka meddelandet.

### Anpassad Stil

CSS-moduler används för att ge en unik stil till varje komponent, och sidans layout är responsiv för att stödja olika enheter.

### Extra, 2 använda bibliotek

## Använda `framer-motion` och `classnames` i projektet

### `framer-motion`

`framer-motion` är ett populärt bibliotek för att hantera animeringar i React-applikationer. Det erbjuder en kraftfull uppsättning verktyg för att skapa smidiga och interaktiva användargränssnitt. Genom att använda deklarativ syntax kan utvecklare enkelt animera komponenter med naturliga rörelser och övergångar. I detta projekt används `framer-motion` för att tillhandahålla övergångseffekter på sidorna, vilket ger en mer engagerande och visuellt tilltalande användarupplevelse.

### `classnames`

`classnames` är ett litet, men mycket användbart bibliotek som förenklar arbetet med CSS-klassnamn i React. Det gör det möjligt att dynamiskt hantera klassnamn baserat på komponentens state eller props. Detta är särskilt användbart i detta projekt där vi använder ett mörkt läge. `classnames` hjälper till att växla CSS-klasser baserat på om det mörka läget är aktivt eller inte, vilket förenklar hanteringen av olika teman och förbättrar kodens läsbarhet och underhåll.

### OBS!! props har använts i Form.jsx till ConfirmModal.jsx

---
