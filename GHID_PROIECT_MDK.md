# Ghid al proiectului MDK — `crud_demo_3`

> Scop: să înțelegi cum e construită această aplicație **SAP Mobile Development Kit (MDK)** și cum o
> poți modifica în siguranță. Toate căile din ghid sunt reale în proiect și clicabile.

---

## 1. Ce este MDK (pe scurt)

MDK este un framework **metadata-driven**: aplicația nu e scrisă în cod nativ, ci descrisă în fișiere
**JSON** (pagini, acțiuni, servicii) plus **rules** în JavaScript pentru logică. Aceeași bază de
metadata rulează:

- **nativ** pe Android/iOS (client-ul MDK din App Store / Google Play),
- **web** în browser (MDK Web Runtime).

Comportamentul aplicației vine din două tipuri de „cărămizi":

| Tip | Fișier | Natură | Când îl folosești |
|---|---|---|---|
| **Action** | `.action` | Declarativ (JSON) | Operații standard: navigare, CRUD OData, mesaje, validări. Fără cod. |
| **Rule** | `.js` | Imperativ (JavaScript) | Logică custom: condiții, bucle, apeluri REST, manipulare de controale. |

Regula de aur: **încearcă întâi cu un Action; treci la Rule doar când ai nevoie de logică** (ramificări,
`if/else`, apeluri custom). Un Rule poate oricând să lanseze Actions cu `clientAPI.executeAction(...)`.

---

## 2. Harta folderelor

| Folder / fișier | Rol |
|---|---|
| [Application.app](Application.app) | **Manifestul** aplicației (punct de intrare). Leagă MainPage, OnLaunch, Styles, i18n, Version. Fișier binar — se editează din editorul MDK. |
| [Pages/](Pages/) | Ecranele (`.page`, JSON). Câte un subfolder per entitate OData + `Application/` (About, Support, ActivityLog). |
| [Actions/](Actions/) | Acțiunile declarative (`.action`). Generice în rădăcină + `Application/`, `Logging/`, `SampleService/<Entitate>/`. |
| [Rules/](Rules/) | Logica JavaScript (`.js`). `Service/`, `Application/`, `Logging/`, `SampleService/<Entitate>/`. |
| [Services/](Services/) | Definiția serviciului OData (`.service`) + metadata cache (`.SampleService.xml`). |
| [Globals/](Globals/) | Constante globale (`.global`): nume app, versiune, email/telefon suport. |
| [Fragments/](Fragments/) | Bucăți UI reutilizabile. **Gol** în acest proiect. |
| [Styles/](Styles/) | Stilizare LESS ([Styles/Styles.less](Styles/Styles.less)) — momentan doar stub comentat. |
| [i18n/](i18n/) | Texte traduse ([i18n/i18n.properties](i18n/i18n.properties)), referite cu `$(L,cheie)`. |
| [Images/](Images/) | Imagini native (referite `res://`). |
| [Web/](Web/) | Config specific rulării web ([Web/config.json](Web/config.json)) + `App_Resources/`. |
| [Extensions/](Extensions/) | Controale/extensii custom (avansat). |
| [.project.json](.project.json) | Setări de deploy: target CF, `AppId: demo_2`, onboarding. (gitignored) |
| `.build/` | Rezultatul build-ului: `bundle.js` + `uploadBundle.zip` (ce se urcă în Mobile Services). |
| [jsconfig.json](jsconfig.json) + `.typings/` | IntelliSense pentru `clientAPI` în Rules. |
| [.eslintrc](.eslintrc) | Reguli de lint pentru Rules (module ES, `eqeqeq`, etc.). |

**Observație despre naming:** folderele oglindesc entity-set-urile serviciului OData. Pentru `Customers`
ai simultan `Pages/SampleService_Customers/`, `Actions/SampleService/Customers/` și
`Rules/SampleService/Customers/`. Odată ce înțelegi o entitate, le înțelegi pe toate.

---

## 3. Punctul de intrare și fluxul de pornire

Totul pornește din [Application.app](Application.app) (manifest). Câmpurile-cheie:

```jsonc
{
  "_Name": "crud_demo_3",
  "MainPage":     "/crud_demo_3/Pages/Main.page",
  "OnLaunch":     "/crud_demo_3/Rules/Service/Initialize.js",
  "OnWillUpdate": "/crud_demo_3/Rules/Application/OnWillUpdate.js",
  "OnDidUpdate":  "/crud_demo_3/Rules/Service/Initialize.js",
  "Styles":       "/crud_demo_3/Styles/Styles.less",
  "Localization": "/crud_demo_3/i18n/i18n.properties",
  "Version":      "/crud_demo_3/Globals/Application/AppDefinition_Version.global"
}
```

Fluxul la pornire:

```
Client MDK pornește
   └─► citește Application.app
        └─► OnLaunch: Rules/Service/Initialize.js   (inițializează sursele de date OData)
             └─► la succes: afișează MainPage = Pages/Main.page
                  └─► Styles.less + i18n.properties încărcate global
```

`OnWillUpdate` / `OnDidUpdate` sunt hook-uri de ciclu de viață pentru **update-ul de metadata**
(hot-update al bundle-ului) — nu le atingi pentru modificări obișnuite.

---

## 4. Convenția de referențiere (foarte important)

Fișierele se referă unele la altele prin **căi absolute rootate la numele aplicației**:

```
/crud_demo_3/<Folder>/<subcale>
```

`/crud_demo_3/` este **namespace-ul aplicației** (= `_Name` din manifest), NU o cale de fișier pe disc.
El corespunde rădăcinii proiectului. Direcțiile uzuale:

- **App → Rule/Page**: manifestul pointează spre `OnLaunch` (rule) și `MainPage` (pagină).
- **Page → Action/Rule**: `OnPress` / `OnLoaded` ale controalelor pointează spre `.action` sau `.js`.
- **Action → Page**: `PageToOpen` (navigare).
- **Action → Action**: `OnSuccess` / `OnFailure` (înlănțuire).
- **Action → Service**: `Target.Service` (operații OData).
- **Rule → Action**: `clientAPI.executeAction('/crud_demo_3/Actions/....action')`.
- **Orice → i18n**: texte cu `$(L,cheie)`.

---

## 5. Anatomia unei pagini (`.page`)

O pagină e un JSON cu `_Type: "Page"`, un array `Controls` și, opțional, `ActionBar` + evenimente
(ex. `OnLoaded`).

### a) Pagina de meniu — [Pages/Main.page](Pages/Main.page)
Un `Control.Type.SectionedTable` cu o secțiune `ButtonTable`. Fiecare buton navighează spre o listă:

```jsonc
{ "_Type": "ButtonTable.Type.Button", "_Name": "ButtonTableTypeButton0",
  "Title": "Customers",
  "OnPress": "/crud_demo_3/Actions/SampleService/Customers/NavToCustomers_List.action" }
```

### b) Pagina de listă — [Customers_List.page](Pages/SampleService_Customers/Customers_List.page)
Un `Section.Type.ObjectTable` legat de OData prin `Target`, cu rânduri șablon bindate `{Proprietate}`:

```jsonc
"Target": { "EntitySet": "Customers",
            "Service": "/crud_demo_3/Services/SampleService.service" }
// rând: "Title": "{FirstName}", "Footnote": "{CustomerID}"
```
ActionBar-ul are un item `SystemItem: "Add"` → `NavToCustomers_Create.action`.

### c) Pagina de formular — [Customers_Create.page](Pages/SampleService_Customers/Customers_Create.page)
Un `Section.Type.FormCell` cu câmpuri editabile:

```jsonc
{ "Caption": "Customer ID", "_Name": "CustomerID",
  "_Type": "Control.Type.FormCell.SimpleProperty", "RequiredIndicator": true },
{ "_Name": "DateOfBirth", "Mode": "Date",
  "_Type": "Control.Type.FormCell.DatePicker" },
{ "_Name": "Gender", "Segments": ["Male","Female","Other","None","Unknown"],
  "_Type": "Control.Type.FormCell.SegmentedControl" }
```
ActionBar: `Cancel` → `CloseModalPage_Cancel.action`, `Save` → `..._CheckRequiredFields_Create.action`.

**Tipuri de controale FormCell folosite în proiect:** `SimpleProperty`, `ListPicker`, `DatePicker`,
`Switch`, `SegmentedControl`, `Attachment`, `Button`, `Note`.
**Tipuri de secțiuni:** `FormCell`, `ObjectTable`, `KeyValue`, `ObjectHeader`, `ButtonTable`,
`ContactCell`, `SimplePropertyCollection`.

### d) Pagină cu eveniment + rule — [Pages/User_Info.page](Pages/User_Info.page)
Exemplul nostru: `"OnLoaded": "/crud_demo_3/Rules/GetUserInfo.js"`, un buton care re-rulează același
rule, iar rezultatul apare într-un `Control.Type.FormCell.Note`.

---

## 6. Anatomia unui action (`.action`)

Categoriile prezente în proiect (număr aproximativ):

| Categorie | `_Type` |
|---|---|
| Navigare (~51) | `Action.Type.Navigation` |
| Validare (24) | `Action.Type.CheckRequiredFields` |
| CRUD OData (10+10+10+7) | `ODataService.CreateEntity` / `UpdateEntity` / `DeleteEntity` / `CreateRelatedEntity` |
| Mesaje | `BannerMessage`, `ToastMessage`, `Message` (dialog) |
| Meniu / închidere | `PopoverMenu`, `ClosePage` |

**Navigare** ([NavToCustomers_Detail.action](Actions/SampleService/Customers/NavToCustomers_Detail.action)):
```jsonc
{ "_Type": "Action.Type.Navigation",
  "PageToOpen": "/crud_demo_3/Pages/SampleService_Customers/Customers_Detail.page" }
```
Varianta modală adaugă `"ModalPage": true`.

**Create OData** ([Customers_CreateEntity.action](Actions/SampleService/Customers/Customers_CreateEntity.action)):
```jsonc
{ "_Type": "Action.Type.ODataService.CreateEntity",
  "Target": { "EntitySet": "Customers", "Service": "/crud_demo_3/Services/SampleService.service" },
  "Properties": { "CustomerID": "#Page:Customers_Create/#Control:CustomerID/#Value" },
  "OnSuccess": "/crud_demo_3/Actions/CreateEntitySuccessMessage.action",
  "OnFailure": "/crud_demo_3/Actions/CreateEntityFailureMessage.action" }
```
Reține sintaxa de binding **`#Page:<pagină>/#Control:<control>/#Value`** — așa iei valoarea dintr-un
câmp de formular. Și înlănțuirea `OnSuccess`/`OnFailure` spre alte acțiuni.

**Validare înainte de create** ([Customers_CheckRequiredFields_Create.action](Actions/SampleService/Customers/Customers_CheckRequiredFields_Create.action)):
```jsonc
{ "_Type": "Action.Type.CheckRequiredFields",
  "RequiredFields": ["CustomerID", "DateOfBirth"],
  "OnSuccess": "/crud_demo_3/Actions/SampleService/Customers/Customers_CreateEntity.action",
  "OnFailure": "/crud_demo_3/Actions/RequiredFieldsFailureMessage.action" }
```
Acesta e lanțul tipic: **Save → validează → creează → mesaj de succes/eroare.**

---

## 7. Anatomia unui rule (`.js`)

Fiecare rule e un modul ES: `export default function(clientAPI)` (sau `context`). Primește un obiect
prin care interacționezi cu aplicația.

**Rule de inițializare** ([Rules/Service/Initialize.js](Rules/Service/Initialize.js)):
```js
export default function Initialize(context) {
    let _SampleService = context.executeAction(
        '/crud_demo_3/Actions/SampleService/Service/InitializeOnline.action');
    return Promise.all([_SampleService]);
}
```

**Confirmare + CRUD** ([Customers_DeleteConfirmation.js](Rules/SampleService/Customers/Customers_DeleteConfirmation.js)) —
exemplu de logică ce nu se poate face doar cu un action:
```js
export default function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/crud_demo_3/Actions/DeleteConfirmation.action').then((result) => {
    if (result.data) {   // utilizatorul a confirmat
      return clientAPI.executeAction('/crud_demo_3/Actions/SampleService/Customers/Customers_DeleteEntity.action');
    }
    return Promise.reject('User Deferred');
  });
}
```

**Apel REST + acces la controale** ([Rules/GetUserInfo.js](Rules/GetUserInfo.js)) — chiar exemplul scris
de noi. Idei de reținut:
- `clientAPI.getMobileServiceAppId()` — App ID-ul (`demo_2`).
- `clientAPI.sendRequest(path, { method, header })` — apel autentificat spre Mobile Services;
  **`path` este relativ**, nu URL absolut, iar tokenul de sesiune (IAS) e atașat automat.
- `clientAPI.getPageProxy().getControl("SectionedTable0").getSection("SectionFormCell0").getControl("UserInfoNote").setValue(text)` —
  citire/scriere pe un control (urmată de `.redraw()`).

---

## 8. Servicii și date

[Services/SampleService.service](Services/SampleService.service):
```jsonc
{ "DestinationName": "SampleService", "OfflineEnabled": false, "SourceType": "Mobile" }
```
- **DestinationName** = destinația din Mobile Services (nu un URL brut).
- **OfflineEnabled: false** = online (datele se citesc live).
- Metadata OData e cache-uită în `Services/.SampleService.xml` (**OData v4**, model **ESPM** —
  Enterprise Sales & Procurement Model, serviciul demo standard SAP).

**Cele 10 entity sets:** `Customers`, `Suppliers`, `Products`, `ProductCategories`, `ProductTexts`,
`PurchaseOrderHeaders`, `PurchaseOrderItems`, `SalesOrderHeaders`, `SalesOrderItems`, `Stock`.

---

## 9. i18n, Globals, Styles

- **i18n** — [i18n/i18n.properties](i18n/i18n.properties): perechi `cheie=valoare`. Referite peste tot
  cu `$(L,cheie)`, ex. `"Caption": "$(L,Create_Customer_Detail)"`. **Aici schimbi textele afișate.**
- **Globals** — [Globals/Application/](Globals/Application/): `.global` de tip String
  (`ApplicationName` = "MDK App", `AppDefinition_Version` = "1.0.0", `SupportEmail`, `SupportPhone`).
- **Styles** — [Styles/Styles.less](Styles/Styles.less): trei mecanisme (By-Type `Page {}`,
  By-Name `#Nume {}`, By-Class `.Clasa {}`). Momentan doar stub comentat — poți activa stiluri aici.

---

## 10. Build & deploy

```
Metadata (.page/.action/.js/.service/Application.app)
   └─► Build (MDK): transpune Rules + împachetează totul
        └─► .build/bundle.js  →  .build/uploadBundle.zip
             └─► Upload în SAP Mobile Services  (AppId: demo_2, din .project.json)
                  └─► Clientul (mobil/web) descarcă bundle-ul și îl rulează
```

- [.project.json](.project.json) ține target-ul CF (`us10-003`), `AppId: demo_2`, destinațiile și
  URL-ul de onboarding (`sapmobilesvcs://...` cu endpoint-urile OAuth). E gitignored.
- În Business Application Studio faci **Deploy** din interfața MDK (upload bundle), apoi
  **reload/re-onboard** clientul ca să preia noua versiune.

---

## 11. Tutoriale „cum modific X"

### T1 — Schimb un text afișat
1. Deschide [i18n/i18n.properties](i18n/i18n.properties).
2. Găsește cheia (ex. `Customers=Customers`) și schimbă valoarea (ex. `Customers=Clienți`).
3. Nu schimba cheia, doar valoarea din dreapta lui `=`.
4. **Test:** redeploy + reload → titlul apare tradus. (Textele care folosesc `$(L,Customers)` se
   actualizează automat peste tot.)

### T2 — Adaug un câmp nou pe un formular
Scop: să apară și să se salveze un câmp în plus la crearea unui Customer.
1. În [Customers_Create.page](Pages/SampleService_Customers/Customers_Create.page), în array-ul
   `Controls` al secțiunii FormCell, adaugă un control (folosește o proprietate reală din entitate):
   ```jsonc
   { "Caption": "Email Address", "_Name": "EmailAddress",
     "_Type": "Control.Type.FormCell.SimpleProperty" }
   ```
2. În [Customers_CreateEntity.action](Actions/SampleService/Customers/Customers_CreateEntity.action),
   adaugă în `Properties` maparea către valoarea controlului:
   ```jsonc
   "EmailAddress": "#Page:Customers_Create/#Control:EmailAddress/#Value"
   ```
3. (Opțional) dacă e obligatoriu, adaugă-l în `RequiredFields` din
   [Customers_CheckRequiredFields_Create.action](Actions/SampleService/Customers/Customers_CheckRequiredFields_Create.action).
4. **Test:** deschide Create Customer, completează, Save → verifică în lista Customers.

### T3 — Adaug un buton nou pe Main + o pagină nouă
Model: exact ca „User Info Page" existent.
1. **Creează pagina** `Pages/MyPage.page` (cel mai simplu: din editorul MDK, „New MDK Page").
2. **Creează acțiunea de navigare** `Actions/NavToMyPage.action`:
   ```jsonc
   { "_Type": "Action.Type.Navigation", "PageToOpen": "/crud_demo_3/Pages/MyPage.page" }
   ```
3. **Adaugă butonul** în [Pages/Main.page](Pages/Main.page), în `Buttons`:
   ```jsonc
   { "_Type": "ButtonTable.Type.Button", "_Name": "ButtonMyPage",
     "Title": "My Page", "ButtonType": "Text", "Semantic": "Tint",
     "OnPress": "/crud_demo_3/Actions/NavToMyPage.action" }
   ```
4. **Test:** redeploy → butonul apare pe ecranul principal și deschide pagina.

### T4 — Adaug logică custom cu un Rule
Model: [Rules/GetUserInfo.js](Rules/GetUserInfo.js).
1. Creează `Rules/MyRule.js`:
   ```js
   export default function MyRule(clientAPI) {
       clientAPI.getLogger().log("Hello din MyRule", "Info");
       return clientAPI.executeAction('/crud_demo_3/Actions/GenericToastMessage.action');
   }
   ```
2. Leagă-l de un eveniment: fie `OnPress`-ul unui buton, fie `OnLoaded`-ul unei pagini:
   ```jsonc
   "OnPress": "/crud_demo_3/Rules/MyRule.js"
   ```
3. **Test:** apasă butonul → vezi toast-ul; verifică logul în pagina Activity Log
   ([Pages/Application/UserActivityLog.page](Pages/Application/UserActivityLog.page)).

---

## 12. Unelte & sfaturi

- **Editorul vizual MDK** din Business Application Studio: deschide `.page`/`.action` cu el — validează
  schema și te ferește de JSON invalid. Editarea manuală de JSON e ok, dar verifică apoi în editor.
- **IntelliSense pentru `clientAPI`**: activat prin [jsconfig.json](jsconfig.json) + `.typings/IClientAPI.d.ts`.
  Scrii `clientAPI.` și vezi metodele disponibile.
- **MDK Mentor app** (în client): documentație interactivă cu exemple de controale și rules.
- **Documentație:**
  - [MDK — SAP Developers (tutoriale)](https://developers.sap.com/topics/mobile-development-kit..html)
  - [ClientAPI — MDK References](https://help.sap.com/doc/3642933ef2e1478fb1578ef2acba4ae9/Latest/en-US/reference/apidoc/classes/clientapi.html)
  - [Mobile Services — MDK Docs](https://help.sap.com/doc/f53c64b93e5140918d676b927a3cd65b/Cloud/en-US/docs-en/guides/getting-started/mdk/overview.html)

---

### Rezumat mental
> **Application.app** pornește totul → **Pages** sunt ecrane → butoanele/evenimentele lor cheamă
> **Actions** (declarativ) sau **Rules** (JS) → Actions vorbesc cu **Services** (OData) → textele vin
> din **i18n**. Modifici comportamentul editând aceste fișiere JSON/JS și făcând redeploy în Mobile Services.
