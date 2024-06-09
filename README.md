# Starting Project

Complete step one and two in order to start the project. 

## 1. Starting Json server

```
  cd BunDrop
  cd bun-drop
  json-server --watch bun-drop-db.json
```

## 2. Starting React App

```
  cd BunDrop
  cd bun-drop
  npm start
```

# Project Analysis 

Under detta projekt valde jag att arbeta med React. Jag tyckte att det verkade intressant att skapa många komponenter som man kan använda på en sida och renderar baserat på användarens val. Detta val kändes särskilt lockande eftersom man kan återanvända eller modifiera mycket av applikationens funktionalitet, vilket bidrar till en mer dynamisk och flexibel applikation.

Genom att strukturera applikationen på detta sätt kunde jag skapa en React-applikation som inte behöver rendera navigationsfält och liknande element om och om igen varje gång man navigerar till en ny sida. Istället visas bara det nödvändiga en gång, vilket förbättrar användarupplevelsen genom snabbare laddningstider och en smidigare interaktion. En annan fördel med att använda många komponenter är att mängden kod per sida minskas. Detta ökar möjligheten att refaktorera kod där det behövs och separerar även koden baserat på funktion, vilket i sin tur ökar läsbarheten och underlättar underhåll.

En utmaning med att arbeta på detta sätt har dock varit att uppnå det önskade samspelet mellan komponenterna. Ofta måste man gå tillbaka och ändra i andra komponenter för att få dem att fungera tillsammans på ett smidigt sätt. Jag har spenderat mycket tid på att skriva om olika komponenter och att arbeta med props för att överföra data mellan dem. Detta gör det svårt att planera exakt vad de olika komponenterna kommer att behöva rent kodmässigt.

För att planera användarflödet och den nödvändiga koden använde jag verktyg som Figma och andra diagram. Trots detta har det varit en utmaning att planera i detalj, vilket har lett till att jag ofta fått skriva om komponenter. I ett större projekt med flera gruppmedlemmar skulle detta kunna skapa ännu större problem på grund av svårigheterna att koordinera och planera komponenterna och deras behov.

Under projektets gång har jag lärt mig mycket om fördelarna och utmaningarna med att använda React-komponenter på detta sätt. En viktig lärdom är vikten av att planera komponentstrukturen noggrant innan man börjar koda. Även om det är svårt att förutse alla behov, kan en genomtänkt plan hjälpa till att minska mängden omskrivningar och förbättra samarbetet i större projekt.

Som framtida systemutvecklare har detta projekt gett mig en djupare förståelse för hur man kan strukturera en React-applikation för att maximera återanvändbarhet och effektivitet. Jag har också insett vikten av att kunna anpassa sig och vara flexibel i sitt arbetssätt, eftersom behov och krav kan förändras under projektets gång. Sammanfattningsvis har detta projekt varit en värdefull erfarenhet som har gett mig både tekniska färdigheter och insikter i projektplanering och komponentarkitektur.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
