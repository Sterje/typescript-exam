# World Clock  
## KYHA-FE24, Jesper Eriksson Stenberg  

### Planering
Länk till Figma skiss:  
https://www.figma.com/design/YIAD2SvSypV8G046FoJpF4/Untitled?node-id=0-1&t=7cuGMVj4h5URufxl-1

Jag ville ha en stilren design.  

### Komponenter  
Min applikation består av ett antal olika komponenter.  
- **Navbar**
  - Navbar där länkar och där CitySelect importeras.  

- **SearchCity**  
  - Komponent för att söka efter stad i listan.  

- **CitySelect**  
  - Komponent som är en Select där vi kan välja stad i en dropdown.  

- **CityCard**  
  - Komponent för att presentera information om en enskild stad.  

- **AddCityForm**  
  - Formulär för att lägga till en ny stad.  

  ---

Utöver komponenterna har jag ett antal olika pages där komponenterna importeras.  

- **Home**  
  - SearchCity komponenten importeras här  

- **CityPage**  
  - CityCard komponenten och SearchCity importeras här.  

- **Favorites**  
  - CityCard komponenten importeras här tillsammans med favoritmarkerade från localstorage.  

- **AddCityPage**  
  - AddCityForm importeras här.  

Jag har försökt bryta ut så mycket logik jag kan från komponenterna.

- **cityUtils.ts**  
  - Innehåller en funktion för att hämta alla städer, både städer som finns inlagda i cities.json och de städer som en
    användare själv har lagt till som hamnar i localstorage.  

- **favoriteUtils.ts**
  - Innehåller funktion för att hämta favoriterna från localstorage.
  - Innehåller funktion för att lägga till och ta bort som favorit.  
  - Innehåller funktion för att kolla favoritstatus.  

- **searchUtils.ts**  
  - Innehåller funktion för att söka efter stad. Importerar funktionen från cityUtils för att söka i förinlagda  
    och städer inlagda av användare till localstorage.  

- **timeUtils.ts**  
  - Innehåller en funktion för att hämta tid från Luxon (Bibliotek för att hantera tid och datum).  

**Type och Interface**
  - I types.ts ligger Interface City som återanvänds i alla komponenter. City definerar varje enskild stad. Här finns också Type TimeZone som definerar
    vilka tidszoner som stöds i appen. Hanteras med Luxon.
    Genom att centralisera till en fil får vi många fördelar. Vi kan lätt återanvända, vi får lättare att lägga till ett fält på ett ställe istället för på flera ställen. Vi får en typgaranti då vi inte behöver duplicera struktur över olika ställen i appen.

  **Git**
    - Jag har försökt arbeta med feature brancher. Jag har mergat brancherna till dev efterhand funktioner blivit klara.
    I det stora hela har det gått bra men ibland upptäcker jag att jag står i fel branch när jag jobbar. Men inga stora git problem i detta projekt.

  
