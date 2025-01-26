<div style='text-align:center;justify-content:center;align-items:center;'><img alt='logo' src='https://mikequez12.github.io/san-benito/beta/icon.ico'></div>

# <center>San Benito ikastolako agenda digitalaren dokumentazioa</center>

## Materiala

### Nola ipini
1. Hasteko, [datu basea](https://docs.google.com/spreadsheets/d/10XrDFPdMcVkcHkHtotobIjpS2o586hGTzw1L--wPY60/edit?gid=0#gid=0) ireki.
2. Gero, zure horrira joan.

	_Adb._ **Materiala > DBH 2.**
3. Zutabeetan ikasgaia ateratzen da, eta beran testua edo komandoa ipini beharko duzu.

	_Adb._

		!LINK["Google","https://www.google.com"]

### Sintaxia
#### Link
`!LINK[<text>,<link>]`

**Adibidea:**

	!LINK["Google","https://www.google.com"]
#### Title
`!TITLE[<text>]`

**Adibidea:**

	!TITLE["1 UNITATEA"]
#### Sub
`!SUB[<text>]`

**Adibidea:**

	!SUB["1 ZATIA"]
#### Text
`!TEXT[<text>]`

**Adibidea:**

	!TEXT["!LINK['Google','https://www.google.com'] testua ipintzeko, !TEXT[''] erabili."]
#### Saioka
`!SAIOKA[<name>,<url variables>]`

**Adibidea:**

	!SAIOKA["11 Jarduera","id=1639&section=11&unidad=1"]
#### Classroom
`!CLASSROOM[<details>,<code>]`

**Adibidea:**

	!CLASSROOM["IZK","NzEyODAyNDEyNDg4"]
#### Exercise
`!EXERCISE[<icon>,<name>,<details>,<link>]`

**Adibidea:**

	!EXERCISE["Canva","https://i.pinimg.com/originals/c9/35/61/c93561ce889c03839424e455d98579c3.png","Bideoak editatu","https://www.canva.com/"]
#### Eval
`!EVAL[<html>]`

**Adibidea:**

	!EVAL['<iframe style="border-radius:5px;width:calc(100% - 10px);box-shadow:var(--shadow);" src="https://www.youtube.com/embed/g-ekeqzo5NM"></iframe>']
#### Bestela
`<text>`

	Hau testu arrunt bat da, ez du behar komandorik.

## Hezkidetza

### Taldekatze data bat gehitu
1. Ahasteko, [datu basea](https://docs.google.com/spreadsheets/d/10XrDFPdMcVkcHkHtotobIjpS2o586hGTzw1L--wPY60/edit?gid=1844186177#gid=1844186177) ireki, hezkidetza orrian.
2. Gero _taldekatze datak_ zutabean, beste bilera bat ezarri.
3. Gogoratu formatua ez duela garrantzitsu. Kalkulu horri komando bat izan daiteke, testu bat, zenbaki edo data bat...

### Ekitaldi bat gehitu
1. Lehen bezala, [datu basea](https://docs.google.com/spreadsheets/d/10XrDFPdMcVkcHkHtotobIjpS2o586hGTzw1L--wPY60/edit?gid=1844186177#gid=1844186177) ireki.
2. Gero _ekitaldiak_ zutabean beste datu bat jarri eta bukatu duzu.

## Ordutegiak

### Sintaxia
#### Ikasgai arruntak
Testu arrunta jarri. Adibidez

	Gizarte
#### Hautazkoak
`~` batekin hasi. Adibidez:

	~Frantsesa (B)
	Digitalizazioa (B)
	Fiski (A)
	Bio geo (A)

#### Atsedena
`Atsedena` idatzi.

	Atsedena

#### Bazkaria
`Bazkaria` idatzi.

	Bazkaria

#### Ezer ez
`!empty` idatzi.

	!empty

#### Bi orduko ikasgaiak
`%` batekin hasi. Adibidez:

	%Tekno

### Zer egiten dut nire ikasleek ez baldin badute ordutegirik?
Orri berri bat sortu hurrengo izenarekin: `Ordutegiak - <maila><taldea>`. Adibidez:

	Ordutegiak - DBH3D

Ahal duzu beste ordutegi bat erabili txantxilo bezala, eta [sintaxia](#sintaxia-1) erabiliz, sortu.

## Nola dago programatuta?
Web orri hau hurrengo programatzeko hizuntzak erabiltzen ditu. Ordena: `gehien erabilenatik gutxien erabiltzen dena arte`:
|Top|Hizkuntza|Luzapena|Dokumentazioa|
|-|-|-|-|
|1.|JS (Javascript)|.js|[devdocs.io](devdocs.io/javascript)|
|2.|CSS|.css|[devdocs.io](devdocs.io/css)|
|3.|HTML|.html|[whatwg.org](html.spec.whatwg.org)|
|4.|SVG|.svg|[w3.org](w3.org/TR/SVG2)|
|5.|Markdown|.md|[markdownguide.org](markdownguide.org)|

## Informazio gehiago

[Baliabide](https://mikequez12.github.io/san-benito/alpha/baliabideak/) orrian, informazio gehiago aurkitu dezakezu:

`Web orria` > `README-ak` > `README.md - <Bertsioa>`;

**Github**-en begiratu dezakezu ere:

	https://github.com/Mikequez12/san-benito/blob/main/<bertsioa>/README.md
