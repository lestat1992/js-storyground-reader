# [Js storyground reader](https://storygroundeditor.com) &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

**Js storyground reader** è una libreria JavaScript per visualizzare le storie di storygroundeditor.com.
Nonostante il nome la libreria non è scritta in vanilla Js, ma è un semplice wrapper che contiene [vue-storyground-reader](https://www.npmjs.com/package/vue-storyground-reader) e ne consente l'inizializzazione all'interno del DOM senza ulteriori dipendenze.

## Installazione

La libreria può anche essere scaricata al seguente indirizzo [vue-storyground-reader](https://storygroundeditor.com/downloads).

Se non sarà fornito alcun parametro all'inizializzazione, verrà visualizzata una storia "segna posto". Per visualizzare la propria storia sarà necessario avere a disposizione l'esportazione di tale storia. L'esportazione contiene un file JSON che a sua volta include la storia e una cartella con i media della storia stessa. Nella cartella è anche presente un file indexMediaObj.json ( maggiori informazioni e l'utilizzo di questo file sono descritti nella sezione successiva ).

Ecco il tuo primo esempio per iniziare:

```js
document.getElementById("app-test").StoryGround({
  gameData: jsonStory,
});
```

Questo esempio è molto utile in una prima fase di **development** in quanto i media saranno presenti direttamente su storygroundeditor.com.

Se si vorranno utilizzare i media direttamente dal proprio dominio, sarà necessario aggiungere i seguenti parametri:

```js
document.getElementById("app-test").StoryGround({
  gameData: jsonStory,
  pathMediaDir: "./media",
  indexMedia: indexMediaObj,
  editorUsage: false,
});
```

**Una lista dei parametri della libreria**

| Name                 | Type      | Default             | Description                                                                                                                                                                                                                                         |
| -------------------- | --------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gameData`           | `Object`  | `defaultStory`      | La storia da visualizzare che si può trovare all'interno del pacchetto d'esportazione in formato JSON                                                                                                                                               |
| `propLang`           | `String`  | `"null-lang"`       | La lingua in cui deve essere visualizzata la storia                                                                                                                                                                                                 |
| `width`              | `String`  | `"100vw"`           | La larghezza del visualizzatore (https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)                                                                                                                               |
| `height`             | `String`  | `"100vh"`           | L'altezza del visualizzatore (https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)                                                                                                                                  |
| `editorUsage`        | `Boolean` | `true`              | Se il valore è `true` verranno utlizzati alcuni dati presenti su storygroundeditor.com in particolare gli indirrizzi assoluti ai media presenti nella storia. In questo caso sarà necessario valorizzare i parametri: `pathMediaDir` e `indexMedia` |
| `pathMediaDir`       | `String`  | `"./media"`         | L'indirizzo assoluto alla cartella in cui sono presenti i media                                                                                                                                                                                     |
| `indexMedia`         | `Object`  | `defaultIndexMedia` | Un'indice dei media presenti nella storia è necessario se il parametro `editorUsage` è `false`                                                                                                                                                      |
| `disableIlustration` | `Boolean` | `false`             | Rimuove dal viewer la possibilità di visualizzare i media                                                                                                                                                                                           |
| `stopLink`           | `Boolean` | `false`             | Impedisce al viewer di navigare in un'altra pagina visualizzando l'url di destinazione tramite messaggio                                                                                                                                            |
| `langEditor`         | `String`  | `"en"`              | La lingua in cui vengono visualizzati i messaggi di log                                                                                                                                                                                             |
| `strings`            | `Object`  | `defaultStrings`    | Definisce le stringhe mostrate dal visualizzatore nei messaggi di log                                                                                                                                                                               |

### License

js storyground reader is [MIT licensed](./LICENSE).
