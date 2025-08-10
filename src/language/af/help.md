# Rhythmic

Bevredigende tipografie maklik gemaak

Die skep van druktipe vertikale ritme vir die web was nog altyd 'n massiewe pyn, met ure van aanpassings en hare trek. Rhythmic probeer om hier die probleem op te los, en maak dit heelwat makliker om letters, en ander elemente, met jou basislynrooster op te lyn.

## Inhoud
1. [Terminologie](#terminologie)
2. [Toerusting](#tools) > [Pas Rooster Aan](#adjust-grid)
3. [Toerusting](#tools) > [Beheer Lettertipes](#manage-fonts)
4. [Toerusting](#tools) > [Beheer Keurders](#manage-selectors)
5. [Toerusting](#tools) > [Pas CSS Aan](#adjust-css)

## Terminologie {#terminology}

### Basislynrooster
Die primêre horisontale rooster, verdeel in gelyke segmente gebaseer op 'n gebruiker-gedefinieerde waarde. Alle elemente lê ideaal op hierdie rooster vir 'n konsekwente vertikale ritme.

### Subrooster
'n Fynere horisontale rooster wat elke basislynsegment in kleiner eenhede verdeel. Hierdie rooster maak meer presiese belyning moontlik wanneer die basislynroosterpasie te grof is.

### Voorbeeldbasislyn
Die onsigbare lyn waarop jou voorbeeldteks "sit" in die voorskouarea. Gebruik dit as 'n verwysingspunt wanneer jy teks met die basislyn of subrooster belyn.
## Toerusting {#tools}
### Pas Rooster Aan

Pas jou basislynrooster en lettertipe-skaal aan om by jou ontwerp te pas. Vir 'n meer aangename vertikale ritme, oorweeg dit om 'n tipografiese skaal te gebruik. Jy kan meer lees oor tipografiese skale by [More Meaningful Typography](https://alistapart.com/article/more-meaningful-typography/).

Jou tipografiese skaal bepaal met watter persentasie elke opskrif in grootte sal toeneem.

Bv. as `h4` = `1rem` dan `h3` = `1.5rem`, `h2` = `2.25rem`, `h1` = `3.375rem`

'n Goeie hulpbron vir die ondersoek van meer komplekse tipografiese skale is [Modular Scale](https://www.modularscale.com/).

| Gereedskap            | Beskrywing                                                            |
| :-------------------- | :-------------------------------------------------------------------- |
| **Asblik**            | Stel toepassing terug na verstek                                      |
| **Druppel**           | Laai voorbeeldkonfigurasie                                            |
| **Goue**              | Gerieflike goue verhouding tipografiese skaal voorafinstelling        |
| **Minor Derde**       | Gerieflike klein derde verhouding tipografiese skaal voorafinstelling |
| **Gepasmaakte skaal** | Pas die skaal aan om by jou ontwerp te pas                            |
| **Stel REM px**       | Stel jou wortellettertipegrootte in pixels                            |
| **Opskrif by Wortel**    | Stel watter opskrif 'n lettergrootte sal deel met jou p-tag           |
| **Genereer**          | Genereer 'n tipografiese skaal gebaseer op jou instellings            |
| **Basislyn**          | Stel die pixelwaarde van jou basislyn                                 |
| **Subrooster**        | Stel die aantal subroosterrye                                         |

### Beheer Lettertipes {#manage-fonts}

Laai jou lettertipes vanaf 'n gehoste diens soos Google Fonts of CDN Fonts, of gebruik jou eie gehoste URL.

| Gereedskap                    | Beskrywing                                                                                                                                |
| :---------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **Familie**                   | Stel die lettertipefamilie, bv. `Open Sans` of `Bachelor`                                                                                |
| **Skakel**                    | Stel die lettertipe skakel bv.  `https://fonts.googleapis.com/css?family=Open+Sans` of `https://fonts.cdnfonts.com/css/bachelor-2`        |
| **Geselekteerde Lettertipes** | 'n Lys van gekose lettertipes met aksies<br /> - stel die standaard lettertipefamilie, aangedui deur ✢<br /> - verwyder lettertipefamilie |

### Beheer Keurders {#manage-selectors}

Voeg CSS-selektors by en werk dit op vir jou projek. Begin met jou kern tipografiese elemente (soos h1, p, ul, ens.), maar jy kan enige CSS-selektor byvoeg wat jy benodig.

| Gereedskap           | Beskrywing                               |
| :------------------- | :--------------------------------------- |
| **Voeg Keurder By**  | Voeg 'n nuwe CSS-keurder by              |
| **Verwyder Keurder** | Kies die CSS-keurder wat jy wil stileer |

### Pas CSS aan {#adjust-css}

'n Bietjie toorkuns. Ons pas ons voorbeeldteks soos volg aan:

- Die lynhoogte is visueel aangenaam.
- Al die lyne lê op ons basislyn of subrooster.
- Die boonste marge word tot die minimum beperk.
- En die volgende element se boonste kantlyn steek mooi tot by die basislyn van ons laaste teksreël.

| Gereedskap        | Beskrywing                                                                                                                   |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| **Voorbeeldteks** | 'n Voorbeeld van die teks wat jy stileer.                                                                                    |
| **font-family**   | Kies die lettertipefamilie wat jy vir hierdie keurder wil gebruik, wat ooreenstem met een van jou voorafgelaaide lettertipes |
| **font-size**     | Stel die lettergrootte in rem                                                                                                |
| **Eenheid**       | Skakel tussen rem en px, uitset is in rem                                                                                    |
| **Toorkuns**      |                                                                                                                              |
| **line-height**   | Verstel die element se lynhoogte                                                                                             |
| **top**           | Verstel die relatiewe bokant van die element                                                                                 |
| **padding-top**   | Verstel die element se boonste vulling                                                                                       |
| **margin-bottom** | Pas die element se onderste kantlyn aan                                                                                      |


### Teksvoorbeeld

- Die aanpassing van meerlynteks sal meer bruikbare resultate genereer.
- Tik "Lorem" om outomaties 'n voorbeeldteks te genereer.
- Ondersteun html tags, sodat jy bv. `li`s vir jou `ol` of `ul` keurders kan verskaf.

#### Lyn Hoogte

- **Verstel tot**
 - Jou voorbeeldbasislyn parallel aan die basislynrooster is
 - Elke reël teks ewe ver van die basislyn of subrooster is, wat ook al by jou bedoeling pas
 - Vir gemaklike lees, oorweeg iewers tussen 120% -180% van die lettergrootte
 - Op hierdie stadium hoef jou voorbeeldbasislyn nie op die basislynrooster te wees nie, maar dit moet parallel daarmee wees

#### Bo 

  - Pas die boonste verstelling (nie marge nie) aan totdat die voorbeeldbasislyn op die basislynrooster is
  - Dit sal meer dikwels as nie 'n negatiewe waarde wees
#### Boonste vulling

  - Stel die boonste vulling in pixels
  - Pas die boonste vulling aan sodat die voorbeeldbasislyn op die naaste subroosterlyn aan die bokant is, sonder om die wit spasie te verlaat

#### Onderste Marge

  - Stel die onderste marge in pixels
  - Pas die onderste marge aan totdat die voorbeeldbasislyn op die rooi blokkie is