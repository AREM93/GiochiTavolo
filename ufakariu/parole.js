/* UFAKARIU – database parole.
   Ogni riga è una coppia "parola dei civili|parola dell'impostore".
   Temi classici: due livelli da 150 coppie ciascuno (300 coppie = 600 parole per tema).
   Personaggi famosi, Cosmetici, Brand e Cartoni: 50 parole per i civili, ognuna con un'associata facile e una difficile.
   - difficile: la parola dell'impostore è molto simile a quella dei civili (difficile sgamarlo)
   - facile: la parola dell'impostore è lontana da quella dei civili (facile sgamarlo) */
const TEMI = {
cibo: { nome: "Cibo", colore: "--t-cibo",
difficile: `
Pizza|Focaccia
Lasagna|Cannelloni
Carbonara|Amatriciana
Risotto|Paella
Tiramisù|Zuppa inglese
Gelato|Granita
Cornetto|Brioche
Panettone|Pandoro
Arancino|Supplì
Cannolo|Sfogliatella
Parmigiano|Pecorino
Mozzarella|Burrata
Prosciutto crudo|Speck
Salame|Salsiccia
Mortadella|Prosciutto cotto
Gnocchi|Orecchiette
Ravioli|Tortellini
Polenta|Purè
Piadina|Tortilla
Bruschetta|Crostino
Minestrone|Vellutata
Hamburger|Hot dog
Sushi|Sashimi
Kebab|Gyros
Patatine fritte|Crocchette
Tacos|Burrito
Cioccolato|Caramella
Nutella|Marmellata
Pancake|Waffle
Croissant|Muffin
Frittata|Uovo sodo
Insalata|Rucola
Banana|Ananas
Anguria|Melone
Fragola|Lampone
Melanzana|Zucchina
Peperone|Peperoncino
Avocado|Mango
Popcorn|Noccioline
Biscotto|Wafer
Ciambella|Krapfen
Ketchup|Senape
Maionese|Salsa rosa
Cotoletta|Bistecca
Spiedino|Arrosticini
Pollo arrosto|Tacchino
Spaghetti|Bucatini
Penne|Rigatoni
Fusilli|Farfalle
Pesto|Ragù
Mela|Pera
Arancia|Mandarino
Limone|Lime
Ciliegia|Prugna
Uva|Mirtillo
Pesca|Albicocca
Kiwi|Fico
Cocco|Dattero
Pomodoro|Ravanello
Carota|Zucca
Patata|Cipolla
Aglio|Scalogno
Cetriolo|Sedano
Broccolo|Cavolfiore
Spinaci|Bietole
Lenticchie|Ceci
Fagioli|Piselli
Mais|Riso
Pane|Grissini
Toast|Tramezzino
Panino|Pita
Yogurt|Budino
Latte|Panna
Burro|Margarina
Miele|Sciroppo d'acero
Zucchero|Sale
Caffè|Tè
Cappuccino|Latte macchiato
Cioccolata calda|Camomilla
Spremuta|Succo di frutta
Coca-Cola|Aranciata
Birra|Vino
Prosecco|Champagne
Spritz|Mojito
Tonno|Salmone
Gamberi|Aragosta
Cozze|Vongole
Polpo|Calamari
Baccalà|Merluzzo
Sardine|Acciughe
Hummus|Guacamole
Falafel|Polpette
Cheesecake|Crostata
Torta al cioccolato|Brownie
Profiterole|Bignè
Panna cotta|Crème caramel
Cantucci|Amaretti
Pastiera|Colomba
Ramen|Pho
Fonduta|Raclette
Tagliatelle|Pappardelle
Linguine|Trenette
Maccheroni|Paccheri
Cavatelli|Strozzapreti
Tortelloni|Agnolotti
Cappelletti|Anolini
Bresaola|Carpaccio
Coppa|Pancetta
Lardo|Guanciale
Wurstel|Cotechino
Zampone|Porchetta
Fontina|Emmental
Taleggio|Asiago
Scamorza|Provola
Mascarpone|Formaggio spalmabile
Feta|Caprino
Grana Padano|Groviera
Taralli|Crackers
Fette biscottate|Gallette di riso
Cereali|Muesli
Plumcake|Ciambellone
Babà|Savarin
Cassata|Semifreddo
Torrone|Croccante
Meringa|Pavlova
Zabaione|Crema pasticcera
Bombolone|Graffa
Frappe|Castagnole
Struffoli|Cicerchiata
Macedonia|Frullato
Smoothie|Milkshake
Sorbetto|Ghiacciolo
Pistacchio|Nocciola
Mandorla|Noce
Castagna|Pinolo
Pompelmo|Arancia rossa
Papaya|Frutto della passione
Melagrana|Litchi
Cachi|Ribes
Mora|Gelso
Fiori di zucca|Carciofi
Asparagi|Fagiolini
Funghi porcini|Champignon
Tartufo|Finferli
Cavolo|Verza
Radicchio|Indivia
Lattuga|Valeriana
Porro|Erba cipollina
Basilico|Prezzemolo
Rosmarino|Salvia
`,
facile: `
Pasta e fagioli|Banana split
Ribollita|Churros
Pappa al pomodoro|Cupcake
Cacio e pepe|Macarons
Gricia|Strudel
Pasta alla Norma|Poke
Spaghetti alle vongole|Torta di mele
Pizza fritta|Mousse al cioccolato
Calzone|Ceviche
Panzerotto|Affogato al caffè
Sfincione|Tempura
Puccia|Zucchero filato
Friselle|Gyoza
Olive ascolane|Torta Sacher
Mozzarella in carrozza|Pad thai
Frittelle di mele|Ostriche
Parmigiana|Liquirizia
Peperonata|Marshmallow
Caponata|Lecca-lecca
Ratatouille|Gianduiotto
Vitello tonnato|Mentine
Ossobuco|Confetti
Saltimbocca|Pralina
Involtini|Uovo di Pasqua
Brasato|Ferrero Rocher
Bollito misto|Éclair
Spezzatino|Millefoglie
Gulasch|Cannoncini
Polpettone|Pasticciotto
Club sandwich|Seadas
Bagel|Torta della nonna
Ciabatta|Crumble
Baguette|Tarte tatin
Pane carasau|Baklava
Tigella|Kefir
Gnocco fritto|Tè freddo
Uova strapazzate|Limonata
Uova alla coque|Gazzosa
Bacon|Chinotto
Salmone affumicato|Energy drink
Caviale|Sidro
Granchio|Grappa
Scampi|Limoncello
Seppie|Amaro
Orata|Sambuca
Branzino|Whisky
Trota|Vodka
Pesce spada|Rum
Sgombro|Gin tonic
Onigiri|Negroni
Wonton|Martini
Pollo alle mandorle|Margarita
Riso cantonese|Sangria
Anatra laccata|Bellini
Shawarma|Cuba libre
Moussaka|Piña colada
Tzatziki|Caffè corretto
Souvlaki|Espresso
Quesadilla|Ginseng
Enchiladas|Caffè d'orzo
Fajitas|Tisana
Chili con carne|Latte di mandorla
Mac and cheese|Mela cotogna
Pollo fritto|Clementina
Nuggets|Bergamotto
Onion rings|Cedro
Corn dog|Carambola
Pretzel|Durian
Pizzette|Pitaya
Salatini|Physalis
Olive|Uvetta
Capperi|Prugne secche
Sottaceti|Fico d'India
Cetriolini|Pesca noce
Giardiniera|Nespola
Funghi sott'olio|Sciroppo di menta
Pomodori secchi|Orzata
Patata dolce|Torta Margherita
Topinambur|Crostatina
Rapa|Granola
Barbabietola|Cornflakes
Cavolini di Bruxelles|Pan di Spagna
Cavolo nero|Savoiardi
Cime di rapa|Biscotti al burro
Friarielli|Gelato alla stracciatella
Cicoria|Zucchero a velo
Finocchio|Pasta frolla
Edamame|Pasta sfoglia
Tofu|Panna montata
Seitan|Glassa
Tempeh|Caramello
Gazpacho|Torta di compleanno
Zuppa di cipolle|Biscotti della fortuna
Miso|Pancarré
Salsa barbecue|Cono gelato
Wasabi|Pain au chocolat
Salsa di soia|Fiocchi d'avena
Tabasco|Latte condensato
Aceto balsamico|Crema catalana
Olio d'oliva|Frutta candita
Strutto|Marron glacé
Farina|Fish burger
Lievito|Pizza al taglio
Semola|Bistecca alla fiorentina
Pangrattato|Arrosto di maiale
Couscous|Biscotti allo zenzero
Curry|Frutta secca
Dim sum|Pan di zenzero
Quinoa|Cioccolato bianco
Omelette|Biscotti Oreo
Crêpe|Bastoncini di pesce
Gorgonzola|Gelatina di frutta
Brie|Gomma da masticare
Ricotta|Hamburger vegano
Stracchino|Hot pot
Riso basmati|Torta al limone
Riso venere|Biscotti di Natale
Pasta al forno|Cubetti di ghiaccio
Pizza bianca|Frutti di bosco
Pizza capricciosa|Gelato al gusto puffo
Pizza diavola|Torta salata
Insalata di riso|Brodo di pollo
Insalata caprese|Pasta in bianco
Insalata russa|Pastina in brodo
Patate al forno|Crema di nocciole
Tagliata|Biscotti integrali
Costine|Cioccolatini
Pollo al curry|Crostata di frutta
Coniglio alla cacciatora|Gelato al caffè
Agnello|Torta di carote
Cinghiale|Mela caramellata
Trippa|Zucchero di canna
Lampredotto|Barretta di cereali
Pizza margherita|Torta paradiso
Pesto alla genovese|Torta tenerina
Polenta e funghi|Sorbetto al mango
Risotto ai funghi|Torta mimosa
Gnocchi alla sorrentina|Cassatina
Lasagne alla bolognese|Tartufo al cioccolato
Pasta al tonno|Torta Pasqualina
Pane e olio|Krapfen alla crema
Frittata di maccheroni|Zeppole di San Giuseppe
Melanzane ripiene|Chiacchiere al miele
Peperoni ripieni|Bocconotto
Spigola al forno|Brutti ma buoni
Pesce al cartoccio|Baci di dama
Frittura mista|Ricciarelli
Calamari fritti|Panforte
Polpo con patate|Mostaccioli
Insalata di mare|Cartellate
`},
ambienti: { nome: "Ambienti", colore: "--t-ambienti",
difficile: `
Spiaggia|Piscina
Montagna|Collina
Deserto|Savana
Foresta|Bosco
Giungla|Palude
Ghiacciaio|Polo Nord
Vulcano|Geyser
Lago|Fiume
Cascata|Fontana
Grotta|Miniera
Isola|Penisola
Scogliera|Banchina
Prateria|Campo di grano
Cucina|Sala da pranzo
Bagno|Sauna
Camera da letto|Camera d'albergo
Soggiorno|Studio
Cantina|Ripostiglio
Soffitta|Fienile
Garage|Officina
Giardino|Orto
Ospedale|Clinica veterinaria
Scuola|Università
Biblioteca|Libreria
Museo|Galleria d'arte
Cinema|Teatro
Discoteca|Pub
Supermercato|Mercato
Aeroporto|Stazione
Palestra|Spogliatoio
Stadio|Palazzetto
Chiesa|Monastero
Castello|Reggia
Prigione|Caserma
Ufficio|Banca
Ristorante|Pizzeria
Bar|Gelateria
Farmacia|Erboristeria
Zoo|Acquario
Luna park|Circo
Campeggio|Baita
Nave da crociera|Traghetto
Sottomarino|Faro
Astronave|Stazione spaziale
Fattoria|Stalla
Ascensore|Scala mobile
Metropolitana|Autobus
Treno|Tram
Aereo|Elicottero
Centro commerciale|Outlet
Parrucchiere|Centro estetico
Panetteria|Pasticceria
Macelleria|Pescheria
Edicola|Tabaccheria
Ufficio postale|Municipio
Tribunale|Questura
Caserma dei pompieri|Pronto soccorso
Laboratorio|Osservatorio
Parco giochi|Cortile
Parco|Giardino botanico
Piazza|Mercatino
Autostrada|Autogrill
Parcheggio|Autolavaggio
Benzinaio|Gommista
Hotel|Ostello
Spa|Terme
Sala giochi|Sala slot
Casinò|Sala bingo
Cimitero|Catacombe
Piramide|Tempio
Colosseo|Arena
Tunnel|Ponte
Diga|Molo
Rifugio alpino|Funivia
Pista da sci|Pista di pattinaggio
Campo da calcio|Campo da tennis
Sala d'attesa|Reception
Aula|Mensa
Studio televisivo|Studio di registrazione
Redazione|Tipografia
Fabbrica|Magazzino
Cantiere|Discarica
Serra|Vivaio
Vigneto|Uliveto
Frutteto|Pollaio
Canile|Gattile
Igloo|Tenda
Capanna|Palafitta
Grattacielo|Torre
Attico|Loft
Balcone|Terrazzo
Corridoio|Ingresso
Lavanderia|Stireria
Barca a vela|Gommone
Isola deserta|Atollo
Oceano|Mare
Laguna|Stagno
Duna|Oasi
Canyon|Valle
Tundra|Steppa
Monolocale|Bilocale
Villa|Villetta a schiera
Condominio|Palazzina
Cascina|Agriturismo
Masseria|Trullo
Chalet|Bungalow
Roulotte|Casa mobile
Bed and breakfast|Pensione
Motel|Locanda
Resort|Villaggio turistico
Sala conferenze|Sala riunioni
Open space|Coworking
Call center|Sportello
Ambulatorio|Studio dentistico
Sala operatoria|Terapia intensiva
Reparto maternità|Pediatria
Asilo nido|Ludoteca
Ring|Ottagono
Piscina comunale|Parco acquatico
Lido|Spiaggia libera
Pineta|Castagneto
Risaia|Piantagione
Alpeggio|Pascolo
Ruscello|Torrente
Delta|Estuario
Golfo|Baia
Fiordo|Insenatura
Vetta|Cresta
Altopiano|Pianura
Pozzo|Cisterna
Fogna|Condotto
Bunker|Rifugio antiaereo
Cripta|Sotterraneo
Campanile|Minareto
Cattedrale|Basilica
Sinagoga|Moschea
Convento|Abbazia
Santuario|Eremo
Anfiteatro|Teatro greco
Pinacoteca|Archivio
Planetario|Museo della scienza
Concessionaria|Showroom
Ferramenta|Negozio di fai da te
Negozio di giocattoli|Cartoleria
Gioielleria|Orologeria
Ottico|Sanitaria
Tintoria|Sartoria
Barbiere|Studio di tatuaggi
Enoteca|Birreria
Trattoria|Osteria
`,
facile: `
Barriera corallina|Lavanderia a gettoni
Foresta pluviale|Sala da ballo
Iceberg|Cabina armadio
Prato fiorito|Sala server
Campo di girasoli|Sala macchine
Mangrovie|Biglietteria
Scogli|Sala d'imbarco
Sentiero|Dogana
Radura|Cella frigorifera
Sorgente|Camerino
Cratere|Cucina industriale
Nevaio|Ufficio anagrafe
Bosco incantato|Deposito degli autobus
Giardino zen|Sala di controllo
Labirinto di siepi|Studio notarile
Castello di sabbia|Agenzia delle entrate
Faraglioni|Sala da biliardo
Pista ciclabile|Sala lettura
Ponte tibetano|Atelier di moda
Mulino a vento|Studio fotografico
Frantoio|Scuola di danza
Distilleria|Autoscuola
Caseificio|Agenzia di viaggi
Salumificio|Agenzia immobiliare
Birrificio|Ufficio di collocamento
Torrefazione|Fioraio
Mattatoio|Profumeria
Acciaieria|Merceria
Raffineria|Negozio di dischi
Centrale elettrica|Bottega artigiana
Centrale nucleare|Negozio di animali
Parco eolico|Negozio di scarpe
Cava di marmo|Boutique
Pozzo petrolifero|Ristorante stellato
Piattaforma petrolifera|Mensa aziendale
Porto turistico|Cioccolateria
Cantiere navale|Creperia
Hangar|Sushi bar
Torre di controllo|Wine bar
Pista di atterraggio|Teatro dei burattini
Base militare|Cinema all'aperto
Trincea|Sala karaoke
Fortezza|Pista di go-kart
Torre di guardia|Parco avventura
Mura della città|Fattoria didattica
Fossato|Piscina per bambini
Ponte levatoio|Cameretta
Segrete|Box auto
Sala del trono|Lavatoio
Salone delle feste|Terrazza panoramica
Tomba|Pista da ballo
Mausoleo|Ufficio stampa
Arco di trionfo|Sala prove
Acquedotto|Sala d'armi
Bagni pubblici|Camera oscura
Foro romano|Sala yoga
Saloon|Studio di architettura
Ranch|Centro benessere
Miniera d'oro|Biblioteca universitaria
Villaggio indiano|Sala insegnanti
Nave pirata|Aula magna
Isola tropicale|Salotto
Batiscafo|Mansarda
Fondale marino|Sottoscala
Relitto|Cabina telefonica
Stazione polare|Fermata dell'autobus
Base lunare|Cassa del supermercato
Superficie di Marte|Casello autostradale
Shuttle|Panchina del parco
Laboratorio segreto|Chiosco
Covo dei ladri|Bancarella
Casa infestata|Sala operativa
Casa sull'albero|Ufficio del preside
Tepee|Aula di informatica
Yurta|Piazzola di sosta
Vagone letto|Cortile della scuola
Cabina di pilotaggio|Parrocchia
Ponte di comando|Oratorio
Stiva|Sacrestia
Scialuppa|Canonica
Funicolare|Battistero
Seggiovia|Cappella
Skilift|Confessionale
Ascensore panoramico|Navata
Sottopassaggio|Torre dell'orologio
Cavalcavia|Mulino ad acqua
Rotonda|Sala d'udienza
Incrocio|Vicolo
Strada sterrata|Sala parto
Bosco di bambù|Negozio di elettronica
Foresta di sequoie|Negozio dell'usato
Lago ghiacciato|Banco dei pegni
Sorgente termale|Videoteca
Palude di mangrovie|Internet point
Prato all'inglese|Edicola della stazione
Collina toscana|Sala d'aspetto del medico
Campo di lavanda|Sala del consiglio
Uliveto secolare|Ufficio delle poste centrali
Spiaggia di sassi|Sala da pranzo dell'hotel
Scogliera bianca|Corridoio dell'ospedale
Laguna blu|Archivio comunale
Dolomiti|Sala d'attesa del treno
Ghiacciaio perenne|Spogliatoio della piscina
Vulcano attivo|Spogliatoio della palestra
Isola vulcanica|Camera mortuaria
Grotta di ghiaccio|Sala macchinette
Cascata gelata|Ripostiglio delle scope
Foce del fiume|Cantina dei vini
Ansa del fiume|Sala da tè inglese
Riva del lago|Ufficio postale di paese
Pontile|Studio del commercialista
Spiaggia tropicale|Sala d'aspetto del dentista
Collina di vigneti|Bagno dell'autogrill
Prato alpino|Bagno chimico
Bosco di querce|Sala del cinema multisala
Sottobosco|Aula di scienze
Cima innevata|Palestra della scuola
Rifugio di caccia|Sala server aziendale
Malga|Ufficio open space
Stagno delle rane|Sala da tè giapponese
Canneto|Sala d'aspetto dell'aeroporto
Tana del lupo|Negozio di cornici
Nido d'aquila|Sala d'asta
Formicaio|Galleria commerciale
Alveare|Grande magazzino
Termitaio|Sala slot del casinò
Barriera di ghiaccio|Sala di lettura della biblioteca
Penisola artica|Sala da giochi dell'oratorio
Oasi nel deserto|Ufficio contabilità
Miraggio|Spaccio aziendale
Carovana nel deserto|Negozio di souvenir
Bazar|Pista di pattinaggio sul ghiaccio
Suk|Stazione sciistica
Mercato galleggiante|Rifugio di montagna
Villaggio di pescatori|Villaggio olimpico
Borgo medievale|Parco tecnologico
Città fantasma|Stazione di servizio
Paese di montagna|Porto container
Città sommersa|Ufficio brevetti
Atlantide|Sala del tribunale
Castello delle fiabe|Centro di smistamento
Casa di marzapane|Centro meteorologico
Paese dei balocchi|Centro di ricerca
Polo Sud|Sala da ballo liscio
Antartide|Pizzeria al taglio
Siberia|Stabilimento termale
Sahara|Pista di pattinaggio a rotelle
Amazzonia|Cineteca
Vulcano spento|Ufficio oggetti smarriti
Savana africana|Sala d'aspetto della questura
`},
citta: { nome: "Città", colore: "--t-citta",
difficile: `
Roma|Atene
Milano|Torino
Napoli|Palermo
Firenze|Siena
Venezia|Amsterdam
Bologna|Modena
Genova|La Spezia
Bari|Lecce
Verona|Vicenza
Catania|Siracusa
Cagliari|Sassari
Trieste|Udine
Perugia|Assisi
Pisa|Lucca
Matera|Alberobello
Como|Bellagio
Parigi|Bruxelles
Londra|Dublino
Madrid|Lisbona
Barcellona|Valencia
Berlino|Monaco di Baviera
Vienna|Salisburgo
Praga|Budapest
Istanbul|Gerusalemme
Mosca|San Pietroburgo
New York|Chicago
Los Angeles|San Francisco
Las Vegas|Monte Carlo
Miami|Cancún
Rio de Janeiro|San Paolo
Buenos Aires|Montevideo
Città del Messico|Bogotà
Tokyo|Osaka
Pechino|Shanghai
Hong Kong|Singapore
Dubai|Abu Dhabi
Marrakech|Tunisi
Il Cairo|Casablanca
Sydney|Melbourne
Bangkok|Hanoi
Toronto|Montréal
Vancouver|Seattle
Boston|Filadelfia
Washington|Ottawa
Honolulu|Malibù
Oslo|Stoccolma
Copenaghen|Helsinki
Reykjavik|Edimburgo
Varsavia|Cracovia
Zurigo|Ginevra
Lione|Marsiglia
Nizza|Cannes
Siviglia|Granada
Porto|Bilbao
Bergamo|Brescia
Padova|Treviso
Trento|Bolzano
Rimini|Riccione
Sanremo|Portofino
Amalfi|Positano
Sorrento|Taormina
Reggio Calabria|Messina
Pescara|Ancona
L'Aquila|Campobasso
Potenza|Cosenza
Parma|Piacenza
Ravenna|Ferrara
Mantova|Cremona
Livorno|Viareggio
Aosta|Courmayeur
Cortina d'Ampezzo|Madonna di Campiglio
Pompei|Ercolano
Betlemme|Nazareth
La Mecca|Medina
Mumbai|Nuova Delhi
Seul|Pyongyang
Kyoto|Hiroshima
Taipei|Manila
Giacarta|Kuala Lumpur
Città del Capo|Johannesburg
Nairobi|Lagos
Lima|Santiago del Cile
Cuzco|La Paz
L'Avana|Santo Domingo
New Orleans|Nashville
Hollywood|Beverly Hills
Dallas|Houston
Detroit|Cleveland
Orlando|Tampa
Belgrado|Zagabria
Bucarest|Sofia
Kiev|Minsk
Dubrovnik|Spalato
Tirana|Sarajevo
Salonicco|Smirne
Liverpool|Manchester
Oxford|Cambridge
Lussemburgo|Andorra
Città del Vaticano|San Marino
Anversa|Bruges
Amburgo|Brema
Francoforte|Stoccarda
Colonia|Düsseldorf
Bordeaux|Tolosa
Strasburgo|Basilea
Berna|Losanna
Lugano|Locarno
Innsbruck|Graz
Bratislava|Lubiana
Tallinn|Riga
Vilnius|Danzica
Glasgow|Belfast
Birmingham|Leeds
Brighton|Bristol
Rotterdam|L'Aia
Utrecht|Eindhoven
Gand|Liegi
Malaga|Marbella
Palma di Maiorca|Ibiza
Las Palmas|Santa Cruz de Tenerife
Coimbra|Braga
Atlanta|Charlotte
Denver|Salt Lake City
Phoenix|Albuquerque
San Diego|Sacramento
Austin|San Antonio
Minneapolis|Milwaukee
Saint Louis|Kansas City
Baltimora|Pittsburgh
Québec|Winnipeg
Brisbane|Perth
Auckland|Wellington
Yokohama|Nagoya
Busan|Incheon
Ho Chi Minh|Phnom Penh
Calcutta|Chennai
Karachi|Lahore
Teheran|Baghdad
Doha|Riad
Beirut|Damasco
Tel Aviv|Haifa
Amman|Petra
Tangeri|Fez
Algeri|Orano
Dakar|Accra
Kinshasa|Luanda
Zanzibar|Mombasa
Caracas|Quito
Medellín|Cartagena
Brasilia|Belo Horizonte
`,
facile: `
Agrigento|Anchorage
Trapani|Kathmandu
Ragusa|Ulan Bator
Enna|Lhasa
Caltanissetta|Timbuctù
Nuoro|Asunción
Oristano|La Valletta
Olbia|Islamabad
Alghero|Tashkent
Crotone|Samarcanda
Catanzaro|Baku
Vibo Valentia|Tbilisi
Taranto|Erevan
Brindisi|Astana
Foggia|Novosibirsk
Barletta|Vladivostok
Andria|Murmansk
Benevento|Kazan
Avellino|Odessa
Caserta|Leopoli
Salerno|Bergen
Latina|Göteborg
Frosinone|Malmö
Viterbo|Aarhus
Rieti|Uppsala
Terni|Rovaniemi
Arezzo|Nuuk
Grosseto|Cork
Prato|Galway
Pistoia|Cardiff
Massa|Aberdeen
Carrara|Inverness
Imperia|Nantes
Savona|Rennes
Alessandria|Lille
Asti|Digione
Cuneo|Avignone
Novara|Montpellier
Biella|Grenoble
Varese|Ajaccio
Lecco|Saint-Tropez
Sondrio|Biarritz
Lodi|San Sebastián
Pavia|Saragozza
Monza|Toledo
Rovigo|Salamanca
Belluno|Cordova
Pordenone|Alicante
Gorizia|Santiago di Compostela
Rovereto|Pamplona
Merano|Funchal
Reggio Emilia|Reims
Forlì|Calais
Cesena|Agadir
Pesaro|Essaouira
Urbino|Luxor
Macerata|Assuan
Ascoli Piceno|Sharm el-Sheikh
Teramo|Hurghada
Chieti|Djerba
Isernia|Kampala
Termoli|Kigali
Gallipoli|Windhoek
Otranto|Antananarivo
Polignano a Mare|Port Louis
Ostuni|Malé
Tropea|Colombo
Cefalù|Goa
Lampedusa|Jaipur
Pantelleria|Agra
Lipari|Varanasi
Gubbio|Dacca
Spoleto|Thimphu
Orvieto|Chiang Mai
Montepulciano|Phuket
San Gimignano|Luang Prabang
Volterra|Siem Reap
Cortona|Yangon
Camogli|Macao
Rapallo|Sapporo
Alassio|Okinawa
Bordighera|Fukuoka
Livigno|Kobe
Bormio|Shenzhen
Pievepelago|Canton
Ortisei|Chengdu
Bressanone|Xi'an
Brunico|Harbin
Vipiteno|Daegu
Chioggia|Darwin
Jesolo|Adelaide
Caorle|Hobart
Lignano|Cairns
Grado|Christchurch
Bibione|Queenstown
Riva del Garda|Suva
Sirmione|Papeete
Desenzano|Nouméa
Stresa|Fairbanks
Varenna|Juneau
Cervinia|Yellowknife
Sestriere|Whitehorse
Bardonecchia|Halifax
Limone sul Garda|Edmonton
Peschiera del Garda|Saskatoon
Mondello|Acapulco
Giardini Naxos|Tijuana
Maiori|Guadalajara
Ravello|Monterrey
Procida|Puebla
Ischia|Oaxaca
Capri|Mérida
Ponza|Tulum
Ventotene|Playa del Carmen
Portoferraio|Città del Guatemala
Porto Cervo|Tegucigalpa
Stintino|Managua
Villasimius|San Salvador
Castelsardo|Kingston
Bosa|Port-au-Prince
Iglesias|Nassau
Carbonia|Bridgetown
Noto|Paramaribo
Modica|Georgetown
Erice|Cayenne
Scicli|Belém
Marsala|Manaus
Mazara del Vallo|Fortaleza
Sciacca|Porto Alegre
Gela|Curitiba
Acireale|Florianópolis
Milazzo|Natal
Bagheria|Rosario
Monreale|Córdoba
Corleone|Bariloche
Tivoli|Ushuaia
Frascati|Punta Arenas
Anzio|Arequipa
Gaeta|Trujillo
Sperlonga|Cali
Terracina|Barranquilla
Fiumicino|Maracaibo
Civitavecchia|Guayaquil
Ostia|Santa Cruz de la Sierra
Fano|Sucre
Senigallia|Cochabamba
Jesi|Antofagasta
Fermo|Iquique
Loreto|Temuco
Recanati|Concepción
`},
automobili: { nome: "Automobili", colore: "--t-auto",
difficile: `
Fiat 500|Mini Cooper
Fiat Panda|Fiat Uno
Fiat Punto|Opel Corsa
Fiat Multipla|Renault Espace
Lancia Ypsilon|Toyota Yaris
Lancia Delta|Lancia Stratos
Alfa Romeo Giulia|BMW Serie 3
Alfa Romeo Giulietta|Audi A3
Ferrari|Lamborghini
Maserati|Aston Martin
Bugatti|Koenigsegg
Porsche 911|Chevrolet Corvette
Volkswagen Golf|Ford Focus
Maggiolino|Citroën 2CV
Volkswagen Polo|Seat Ibiza
Audi A4|Mercedes Classe C
Smart|Renault Twizy
Tesla Model 3|Nissan Leaf
Toyota Prius|Honda Civic
Renault Clio|Peugeot 208
Citroën C3|Hyundai i10
Dacia Duster|Dacia Sandero
Jeep Wrangler|Land Rover Defender
Range Rover|Porsche Cayenne
Volvo XC90|Audi Q7
Ford Fiesta|Ford Ka
Ford Mustang|Chevrolet Camaro
Dodge Challenger|Pontiac Firebird
Nissan Qashqai|Kia Sportage
Suzuki Swift|Mazda 2
Skoda Octavia|Volkswagen Passat
Mazda MX-5|Fiat 124 Spider
Jaguar F-Type|BMW Z4
Rolls-Royce|Bentley
McLaren|Pagani
Ape Piaggio|Fiat Topolino
Hummer|Toyota Land Cruiser
Mercedes Classe G|Suzuki Jimny
Mercedes Classe S|BMW Serie 7
Lamborghini Urus|Ferrari Purosangue
Ferrari Testarossa|Lamborghini Countach
DeLorean|Batmobile
Fiat 600|Fiat 127
Fiat Ritmo|Fiat Tipo
Fiat Doblò|Citroën Berlingo
Lancia Thema|Lancia Fulvia
Alfa Romeo Stelvio|Alfa Romeo Tonale
Pulmino Volkswagen|Camper
Taxi|Limousine
Ambulanza|Auto della polizia
Camion dei pompieri|Carro attrezzi
Golf car|Quad
Kart|Auto da Formula 1
Monster truck|Dune buggy
Auto elettrica|Auto ibrida
Cabriolet|Coupé
Station wagon|Monovolume
Pick-up|Furgone
SUV|Crossover
Utilitaria|Berlina
Auto d'epoca|Auto da rally
Toyota Corolla|Nissan Micra
Toyota RAV4|Honda CR-V
Hyundai Tucson|Mitsubishi Pajero
Subaru Impreza|Mitsubishi Lancer
Citroën DS|Citroën Visa
Peugeot 3008|Renault Captur
Renault 4|Renault 5
Opel Astra|Opel Mokka
Seat Leon|Cupra Formentor
BMW X5|Mercedes GLE
BMW i3|Renault Zoe
Mini Countryman|Fiat 500X
Audi TT|Volkswagen Scirocco
Audi R8|Mercedes AMG GT
Tesla Cybertruck|Ford F-150
Tesla Model S|Porsche Taycan
Cadillac|Lincoln
Chevrolet Impala|Buick
Volkswagen Up!|Toyota Aygo
Lada Niva|Trabant
Abarth 595|Peugeot 205 GTI
Lancia Musa|Fiat Idea
Daewoo Matiz|Chevrolet Spark
Fiat Seicento|Fiat Cinquecento
Maserati Ghibli|Maserati Quattroporte
Lotus Elise|Alpine A110
Jaguar XJ|Lexus LS
Volvo V40|Saab 900
Dacia Spring|Citroën Ami
Fiat Croma|Lancia Kappa
Range Rover Evoque|Volvo XC40
Mercedes Sprinter|Ford Transit
Iveco Daily|Fiat Fiorino
Autobus a due piani|Pullman
Trattore|Ruspa
Betoniera|Camion
Spazzaneve|Spazzatrice
Fiat 850|Autobianchi A112
Golf GTI|Clio Williams
Fiat Bravo|Fiat Stilo
Fiat Grande Punto|Fiat Punto Evo
Fiat Freemont|Dodge Journey
Fiat Sedici|Suzuki SX4
Fiat Barchetta|Fiat Coupé
Lancia Lybra|Lancia Dedra
Lancia Voyager|Chrysler Voyager
Alfa Romeo 147|Alfa Romeo 156
Alfa Romeo MiTo|Alfa Romeo Junior
Alfa Romeo 33|Alfa Romeo 75
Ferrari F40|Ferrari Enzo
Ferrari Roma|Ferrari Portofino
Lamborghini Huracán|Lamborghini Aventador
Lamborghini Diablo|Lamborghini Murciélago
Maserati MC20|Maserati Levante
Porsche Boxster|Porsche Cayman
Porsche Macan|Porsche Panamera
Volkswagen Tiguan|Volkswagen Touareg
Volkswagen T-Roc|Volkswagen T-Cross
Volkswagen ID.3|Volkswagen ID.4
Audi A1|Audi A6
Audi Q3|Audi Q5
BMW Serie 1|BMW Serie 5
BMW X1|BMW X3
Mercedes Classe B|Mercedes Classe E
Mercedes GLA|Mercedes GLC
Toyota C-HR|Toyota Yaris Cross
Toyota GT86|Subaru BRZ
Toyota Supra|Nissan GT-R
Nissan Juke|Ford Puma
Nissan 370Z|Mazda RX-8
Honda Jazz|Suzuki Ignis
Honda NSX|Lexus LFA
Hyundai Kona|Kia Stonic
Hyundai Ioniq 5|Kia EV6
Kia Ceed|Hyundai i30
Kia Rio|Hyundai i20
Renault Mégane|Renault Scénic
Renault Twingo|Peugeot 108
Peugeot 2008|Citroën C3 Aircross
Peugeot 308|Citroën C4
Citroën C1|Peugeot 107
Opel Zafira|Opel Meriva
Opel Insignia|Ford Mondeo
Ford Kuga|Ford EcoSport
Ford Focus RS|Volkswagen Golf R
Skoda Fabia|Skoda Kamiq
Skoda Superb|Skoda Kodiaq
Seat Arona|Seat Ateca
Tesla Model X|Tesla Model Y
`,
facile: `
Bugatti Chiron|Fiat Duna
Pagani Zonda|Fiat Regata
Ferrari LaFerrari|Fiat 126
Lamborghini Miura|Renault Kangoo
Ferrari Dino|Fiat Qubo
Ferrari 458|Dacia Logan
Ferrari 812|Citroën Méhari
Aston Martin DB5|Fiat Strada
McLaren F1|Nissan Navara
Porsche 959|Mitsubishi L200
Bentley Continental|Suzuki Vitara
Rolls-Royce Phantom|Daihatsu Terios
Maybach|Fiat Ulysse
Cadillac Escalade|Piaggio Porter
Lincoln Continental|Ligier
Chevrolet Bel Air|Aixam
Ford Model T|Tesla Roadster
Ford GT40|Renault Trafic
Shelby GT500|Fiat Talento
Plymouth Fury|Toyota Hilux
Pontiac Trans Am|Isuzu D-Max
Oldsmobile|Smart Forfour
Volkswagen Karmann Ghia|Volvo 240
Citroën CX|Nissan Patrol
Lancia Aurelia|Subaru Forester
Lancia Flaminia|Subaru Outback
Alfa Romeo Montreal|Honda HR-V
Alfa Romeo Duetto|Kia Soul
Alfa Romeo 8C|SsangYong Tivoli
Fiat Dino|Mahindra
Innocenti Mini|Mercedes Classe V
Autobianchi Bianchina|BMW X7
Isetta|Audi Q8
Messerschmitt KR200|Volkswagen Touran
Fiat Campagnola|Peugeot RCZ
Willys Jeep|Audi A5
Lamborghini LM002|Toyota iQ
Ferrari F50|Renault Modus
Mercedes SLS|Opel Agila
Mercedes 190|Lamborghini Gallardo
BMW M3|Citroën Xsara Picasso
BMW M5|Fiat Marea
Audi Quattro|Fiat Palio
Audi RS6|Lancia Phedra
Porsche 356|Peugeot 806
Porsche Carrera GT|Ford Galaxy
Lotus Esprit|Volkswagen Sharan
Alpine A310|Seat Alhambra
Jaguar XK|Chrysler PT Cruiser
Jaguar E-Type|Fiat Scudo
Aston Martin Vantage|Opel Vivaro
Aston Martin Valkyrie|Volkswagen Caddy
Bugatti Type 35|Dacia Lodgy
Rimac Nevera|Fiat Panda Cross
Lucid Air|Lada Samara
Polestar 2|Fiat Tempra
BYD Seal|Lancia Prisma
MG ZS|Ferrari 308
Tata Nano|Ferrari 599
Mazda CX-5|Ferrari California
Mazda 3|Lamborghini Jalpa
Mitsubishi Space Star|Maserati Biturbo
Mitsubishi Outlander|Maserati GranTurismo
Mitsubishi Colt|Bentley Bentayga
Nissan Terrano|Rolls-Royce Cullinan
Nissan Note|Lamborghini Revuelto
Honda Accord|Ferrari Mondial
Honda e|Hummer EV
Suzuki Samurai|Lexus RX
Suzuki Celerio|Mercedes CLS
Daihatsu Cuore|Audi e-tron
Hyundai Atos|BMW i8
Hyundai Santa Fe|Fiat 500e
Kia Niro|Ferrari 250 GTO
Kia Stinger|Citroën Saxo
Seat Marbella|Lamborghini Espada
Skoda Felicia|Aston Martin DB11
Skoda Yeti|Ferrari 488
Volvo 850|Ferrari F8
Saab 9-3|Ferrari 296
Lancia Beta|Bugatti Bolide
Fiat X1/9|Toyota Previa
Fiat 131|Kia Carnival
Fiat 128|Toyota Hiace
Fiat 1100|Ford Ranger
Rolls-Royce Ghost|Fiat Panda 4x4
Bentley Mulsanne|Suzuki Alto
Maserati Bora|Renault Express
Ferrari 348|Citroën Jumpy
Lamborghini Urraco|Peugeot Partner
McLaren 720S|Dacia Dokker
McLaren P1|Opel Combo
Porsche 918|Fiat Fullback
Koenigsegg Jesko|Lada Vesta
Aston Martin DBS|Toyota Proace
Mercedes SL|Nissan Pixo
BMW Z8|Suzuki Splash
Jaguar F-Pace|Fiat 500L
Maserati Grecale|Citroën C5 Aircross
Alfa Romeo 4C|Volkswagen Fox
Alfa Romeo Brera|Fiat Croma Station Wagon
Alfa Romeo GT|Renault Laguna
Alfa Romeo 166|Citroën C-Zero
Lancia Stratos Zero|Opel Frontera
Ferrari 365 GTB/4 Daytona|Kia Venga
Ford Thunderbird|Fiat Panda Hybrid
Chevrolet Suburban|Mini Moke
Chevrolet Silverado|Smart Roadster
GMC Hummer|Fiat 500 Topolino
Ram 1500|Microlino
Dodge Charger|Renault Avantime
Dodge Ram|Peugeot iOn
Chrysler 300C|Citroën C4 Cactus
Jeep Gladiator|Nissan Cube
Ford Bronco|Toyota Mirai
Lexus LX|Fiat Uno Turbo
Infiniti QX80|Peugeot 205 Cabrio
Land Rover Range Rover Velar|Renault 21
Volvo XC70|Lancia Y10
Volvo P1800|Ford Transit Connect
Saab 9-5|Ferrari SF90
Opel GT|Mercedes Vito
Opel Manta|Fiat Ducato
Opel Kadett|Renault Master
Ford Escort|Ferrari 12Cilindri
Ford Capri|Iveco Massif
Ford Sierra|Ferrari Monza
Ford Granada|Lamborghini Temerario
Citroën 2CV Charleston|Bugatti Tourbillon
Citroën SM|Fiat Panda 30
Peugeot 404|Mercedes Classe X
Peugeot 504|Toyota Tundra
Renault Alpine A110|Ford Explorer
Renault Clio V6|Chevrolet Tahoe
Renault Espace F1|Daewoo Lanos
Volkswagen Corrado|Ford Expedition
Volkswagen Phaeton|Mitsubishi Pajero Pinin
Volkswagen New Beetle|Ferrari Testarossa Spider
Ferrari 275|Renault Kadjar
Lamborghini Islero|Opel Crossland
Maserati Khamsin|Dacia Jogger
Bugatti EB110|Toyota Corolla Cross
Porsche 928|Kia Picanto
De Tomaso Pantera|Hyundai Bayon
Iso Rivolta|Nissan Almera
Cizeta V16T|Ford B-Max
Vector W8|Suzuki Wagon R
Hennessey Venom|Daihatsu Sirion
SSC Tuatara|Chevrolet Matiz
Zenvo ST1|Fiat Punto Cabrio
`},
sport: { nome: "Sport", colore: "--t-sport",
difficile: `
Calcio|Calcio a 5
Basket|Pallamano
Pallavolo|Beach volley
Tennis|Padel
Ping pong|Badminton
Golf|Minigolf
Rugby|Football americano
Baseball|Cricket
Hockey su ghiaccio|Hockey su prato
Nuoto|Nuoto sincronizzato
Pallanuoto|Tuffi
Surf|Windsurf
Vela|Kitesurf
Canottaggio|Canoa
Sci|Sci di fondo
Snowboard|Skateboard
Pattinaggio artistico|Danza sul ghiaccio
Curling|Bocce
Ciclismo|Mountain bike
Formula 1|MotoGP
Rally|Motocross
Atletica|Decathlon
Maratona|Corsa campestre
Salto in alto|Salto con l'asta
Lancio del peso|Lancio del martello
Boxe|Kickboxing
Judo|Karate
Scherma|Tiro a segno
Lotta greco-romana|Sumo
Ginnastica artistica|Ginnastica ritmica
Equitazione|Polo
Arrampicata|Alpinismo
Paracadutismo|Parapendio
Bowling|Biliardo
Freccette|Tiro con l'arco
Scacchi|Dama
Triathlon|Pentathlon moderno
Pesca sportiva|Caccia subacquea
Crossfit|Sollevamento pesi
Yoga|Pilates
Taekwondo|Kung fu
MMA|Wrestling
Bob|Slittino
Salto con gli sci|Biathlon
Sci nautico|Wakeboard
Immersione|Apnea
Rafting|Kayak
BMX|Trial
Corsa a ostacoli|Staffetta
Salto in lungo|Salto triplo
Lancio del giavellotto|Lancio del disco
Marcia|Trail running
Spinning|Aerobica
Zumba|Danza sportiva
Breakdance|Parkour
Cheerleading|Trampolino elastico
Squash|Pelota basca
Softball|Lacrosse
Ultimate frisbee|Palla prigioniera
Calcio balilla|Air hockey
Bodybuilding|Powerlifting
Corsa dei cavalli|Trotto
Rodeo|Corrida
Karting|NASCAR
Sci alpinismo|Ciaspolate
Pattinaggio a rotelle|Hockey in-line
Nuoto pinnato|Nuoto in acque libere
Beach soccer|Footvolley
Tiro al piattello|Caccia
Orienteering|Trekking
Nordic walking|Escursionismo
Ciclismo su pista|Ciclocross
Croquet|Petanque
Capoeira|Tai chi
Aikido|Jujitsu
Kendo|Muay thai
Motonautica|Moto d'acqua
Aliante|Deltaplano
Base jumping|Bungee jumping
Speleologia|Canyoning
Salto ostacoli|Dressage
Esports|Poker
Bridge|Burraco
Snooker|Biliardo americano
SUP|Pedalò
Tiro alla fune|Corsa nei sacchi
Skeleton|Slittino su strada
Hockey subacqueo|Rugby subacqueo
Mezza maratona|Ultramaratona
Sprint 100 metri|400 metri
Sci di velocità|Slalom gigante
Wingsuit|Skydiving indoor
Racchettoni|Speedminton
Fitness|Calisthenics
Danza classica|Danza moderna
Corsa in montagna|Skyrunning
Freestyle motocross|Enduro
Pattinaggio di velocità|Short track
Tamburello|Pallapugno
Sitting volley|Basket in carrozzina
Calcio a 7|Calcio a 8
Basket 3x3|Streetball
Pickleball|Beach tennis
Footgolf|Disc golf
Rugby a 7|Rugby a 13
Sci d'erba|Sci indoor
Freeride|Freestyle
Slalom speciale|Discesa libera
Super G|Combinata alpina
Snowboard cross|Ski cross
Halfpipe|Big air
Hockey su pista|Ringette
Combinata nordica|Skiroll
Corsa su strada|Corsa su pista
800 metri|1500 metri
110 ostacoli|400 ostacoli
5000 metri|10000 metri
Sciabola|Fioretto
Spada|Scherma storica
Grappling|Lotta libera
Brazilian jiu-jitsu|Sambo
Krav maga|Difesa personale
Savate|Full contact
Ginnastica acrobatica|Ginnastica aerobica
Parallele|Sbarra
Anelli|Cavallo con maniglie
Trave|Corpo libero
Volteggio|Tumbling
Tuffi dalla piattaforma|Tuffi dal trampolino
Cliff diving|High diving
Stile libero|Dorso
Rana|Delfino
Canoa slalom|Discesa fluviale
Dragon boat|Canottaggio costiero
Optimist|Laser
America's Cup|Vendée Globe
Bodyboard|Skimboard
Wakesurf|Wing foil
Supermotard|Speedway
Superbike|Supersport
Formula E|Formula 2
24 Ore di Le Mans|Rally Dakar
Drifting|Drag racing
Gran fondo|Ciclismo su strada
Prova a cronometro|Cronoscalata
Keirin|Omnium
Dirt jump|Pump track
Downhill|Cross country
Endurance equestre|Concorso completo
Galoppo|Steeplechase
`,
facile: `
Kayak|Karting
Croquet|Pilates
Corsa dei cavalli|Kitesurf
Pattinaggio di velocità|Bungee jumping
Orienteering|Breakdance
Ultramaratona|Powerlifting
Danza classica|Tiro con l'arco
Paracadutismo|Biliardo
Karate|Calcio
Trekking|Nuoto
Canoa|Lotta greco-romana
Vela|Bocce
Pallavolo|Tiro con l'arco
NASCAR|Skeleton
Decathlon|Taekwondo
Freestyle motocross|Salto in alto
Salto triplo|Pilates
Rodeo|Calcio a 5
24 Ore di Le Mans|Tuffi
Bridge|Moto d'acqua
Corsa dei cavalli|Trampolino elastico
Motocross|Rugby
Burraco|Skyrunning
Surf|Corsa campestre
Alpinismo|Danza moderna
Tiro al piattello|Rafting
Skyrunning|Petanque
Decathlon|Bodybuilding
MMA|Ultramaratona
Calisthenics|Snooker
Rugby|Trampolino elastico
Pattinaggio di velocità|Sci nautico
Badminton|Sollevamento pesi
Parkour|Kitesurf
Orienteering|Mezza maratona
Air hockey|Moto d'acqua
Minigolf|Boxe
Immersione|Nordic walking
Ginnastica ritmica|Taekwondo
Cheerleading|Corsa campestre
Parkour|Rally
Sci alpinismo|Krav maga
Capoeira|Pallavolo
Pallamano|SUP
Bridge|Sollevamento pesi
Sci alpinismo|MMA
Yoga|Tiro al piattello
Dama|Breakdance
BMX|Pallamano
Sambo|Karting
Snooker|Hockey su prato
Dressage|Capoeira
Windsurf|Salto con gli sci
400 metri|Pedalò
Bocce|Tennis
Surf|Calcio
Ginnastica ritmica|Pallanuoto
Canyoning|Ciaspolate
Sumo|Kayak
Escursionismo|Football americano
Salto in alto|Bodyboard
Basket|NASCAR
Paracadutismo|Sci nautico
Bungee jumping|Petanque
Sambo|Pallanuoto
Sci|Wakeboard
Marcia|SUP
Salto triplo|Tennis
Canottaggio|Marcia
Esports|Formula E
Formula E|Immersione
Powerlifting|Escursionismo
Pattinaggio artistico|Bodyboard
Short track|Dama
Kickboxing|Pallapugno
Biathlon|Minigolf
Slalom gigante|Crossfit
Nuoto sincronizzato|Sci di fondo
BMX|Slittino
Corsa a ostacoli|Nuoto
Lancio del disco|Rally
Slittino|Rally Dakar
Curling|Wrestling
Corsa a ostacoli|Lotta greco-romana
Calcio balilla|Hockey su ghiaccio
Bodybuilding|Jujitsu
Windsurf|Discesa libera
Kickboxing|Basket
Sci|Maratona
Aerobica|Slalom gigante
Fitness|Discesa libera
Fitness|Krav maga
Canottaggio|Softball
Kung fu|Hockey su prato
Ping pong|Motocross
Poker|Speleologia
Trekking|Beach volley
Deltaplano|Burraco
Salto in lungo|Croquet
Alpinismo|Ping pong
Ginnastica artistica|24 Ore di Le Mans
Ciaspolate|Cheerleading
Lacrosse|Canoa
Beach volley|Apnea
Ciclismo|MotoGP
Arrampicata|Apnea
Ginnastica artistica|Baseball
Kung fu|Pedalò
Padel|Jujitsu
Tuffi|Hockey su ghiaccio
Nordic walking|Scherma
Air hockey|Lacrosse
Danza sul ghiaccio|Yoga
Esports|Arrampicata
Rodeo|Curling
Wrestling|Nuoto sincronizzato
Vela|Padel
Enduro|Danza classica
Cricket|Parapendio
Biathlon|Pesca sportiva
Aerobica|Pattinaggio artistico
Crossfit|Baseball
Tamburello|Lancio del giavellotto
Superbike|Mountain bike
Tiro a segno|Trail running
Danza sul ghiaccio|Freestyle motocross
Parapendio|Lancio del giavellotto
Sprint 100 metri|Motonautica
Drifting|Softball
Squash|400 metri
Spinning|Formula 1
Motonautica|Salto con l'asta
Bob|Calcio a 5
Karate|Skeleton
Dressage|Staffetta
Short track|Polo
Aikido|Maratona
Tamburello|Base jumping
Calcio balilla|Scherma
Snowboard|Zumba
Rafting|Freccette
Tiro a segno|Squash
Judo|Snowboard
MotoGP|Deltaplano
Canyoning|Zumba
Pallapugno|Lancio del disco
Bowling|Formula 1
Rally Dakar|Equitazione
Judo|Superbike
Danza moderna|Golf
`},
famosi: { nome: "Personaggi famosi", colore: "--t-attori",
difficile: `
Leonardo DiCaprio|Johnny Depp
Brad Pitt|George Clooney
Tom Cruise|Keanu Reeves
Angelina Jolie|Jennifer Aniston
Julia Roberts|Sandra Bullock
Will Smith|Denzel Washington
Robert De Niro|Al Pacino
Jim Carrey|Adam Sandler
Sylvester Stallone|Arnold Schwarzenegger
Tom Hanks|Robin Williams
Scarlett Johansson|Natalie Portman
Margot Robbie|Cameron Diaz
Zendaya|Selena Gomez
Jackie Chan|Bruce Lee
Dwayne Johnson|Vin Diesel
Morgan Freeman|Samuel L. Jackson
Harrison Ford|Bruce Willis
Meryl Streep|Nicole Kidman
Robert Downey Jr.|Chris Hemsworth
Emma Watson|Daniel Radcliffe
Charlie Chaplin|Stanlio e Ollio
Marilyn Monroe|Audrey Hepburn
Beyoncé|Rihanna
Madonna|Lady Gaga
Michael Jackson|Elvis Presley
Taylor Swift|Ariana Grande
Roberto Benigni|Massimo Troisi
Totò|Alberto Sordi
Monica Bellucci|Sabrina Ferilli
Pierfrancesco Favino|Alessandro Gassmann
Carlo Verdone|Enrico Brignano
Paola Cortellesi|Virginia Raffaele
Luca Argentero|Raoul Bova
Claudio Bisio|Fabio De Luigi
Aldo Giovanni e Giacomo|Ficarra e Picone
Bud Spencer|Terence Hill
Adriano Celentano|Al Bano
Eros Ramazzotti|Tiziano Ferro
Andrea Bocelli|Luciano Pavarotti
Måneskin|Pinguini Tattici Nucleari
Amadeus|Alessandro Cattelan
Gerry Scotti|Enrico Papi
Maria De Filippi|Simona Ventura
Alessandro Siani|Vincenzo Salemme
Diego Abatantuono|Renato Pozzetto
Paolo Villaggio|Gigi Proietti
Marcello Mastroianni|Vittorio Gassman
Anna Magnani|Monica Vitti
Jennifer Lawrence|Emma Stone
Ryan Reynolds|Chris Evans
`,
facile: `
Leonardo DiCaprio|Barbara D'Urso
Brad Pitt|Checco Zalone
Tom Cruise|Mara Venier
Angelina Jolie|Fiorello
Julia Roberts|Lino Banfi
Will Smith|Raffaella Carrà
Robert De Niro|Laura Pausini
Jim Carrey|Sophia Loren
Sylvester Stallone|Carlo Conti
Tom Hanks|Belén Rodríguez
Scarlett Johansson|Paolo Bonolis
Margot Robbie|Christian De Sica
Zendaya|Pippo Baudo
Jackie Chan|Antonella Clerici
Dwayne Johnson|Michelle Hunziker
Morgan Freeman|Chiara Ferragni
Harrison Ford|Ilary Blasi
Meryl Streep|Fedez
Robert Downey Jr.|Elodie
Emma Watson|Vasco Rossi
Charlie Chaplin|Ultimo
Marilyn Monroe|Fabio Fazio
Beyoncé|Massimo Boldi
Madonna|Gianni Morandi
Michael Jackson|Mina
Taylor Swift|Renato Zero
Roberto Benigni|Kim Kardashian
Totò|Shakira
Monica Bellucci|Mr. Bean
Pierfrancesco Favino|Paris Hilton
Carlo Verdone|Jennifer Lopez
Paola Cortellesi|Eminem
Luca Argentero|Ed Sheeran
Claudio Bisio|Dua Lipa
Aldo Giovanni e Giacomo|Harry Styles
Bud Spencer|Miley Cyrus
Adriano Celentano|Tom Holland
Eros Ramazzotti|Hugh Grant
Andrea Bocelli|Jason Momoa
Måneskin|Penélope Cruz
Amadeus|Timothée Chalamet
Gerry Scotti|Henry Cavill
Maria De Filippi|Ryan Gosling
Alessandro Siani|Anne Hathaway
Diego Abatantuono|Kate Winslet
Paolo Villaggio|Cher
Marcello Mastroianni|Britney Spears
Anna Magnani|Justin Bieber
Jennifer Lawrence|Giorgio Panariello
Ryan Reynolds|Leonardo Pieraccioni
`},
oggetti: { nome: "Oggetti", colore: "--t-oggetti",
difficile: `
Ombrello|Impermeabile
Forbici|Taglierino
Martello|Tenaglia
Cacciavite|Chiave inglese
Chiave|Lucchetto
Orologio|Sveglia
Occhiali|Binocolo
Portafoglio|Borsetta
Zaino|Valigia
Specchio|Finestra
Spazzolino|Filo interdentale
Pettine|Spazzola
Phon|Piastra per capelli
Lampadina|Torcia
Candela|Lanterna
Accendino|Fiammiferi
Cuscino|Materasso
Coperta|Lenzuolo
Sedia|Sgabello
Divano|Poltrona
Tavolo|Scrivania
Frigorifero|Congelatore
Lavatrice|Lavastoviglie
Forno|Microonde
Frullatore|Sbattitore
Moka|Teiera
Padella|Pentola
Forchetta|Cucchiaio
Bicchiere|Tazza
Telecomando|Joystick
Televisore|Proiettore
Smartphone|Tablet
Computer|Macchina da scrivere
Cuffie|Auricolari
Macchina fotografica|Videocamera
Chitarra|Violino
Pianoforte|Fisarmonica
Pallone|Frisbee
Bicicletta|Monopattino
Matita|Pastello
Penna|Pennarello
Quaderno|Agenda
Calcolatrice|Abaco
Scopa|Mocio
Aspirapolvere|Lucidatrice
Ventilatore|Condizionatore
Termosifone|Stufa
Lampada|Lampadario
Persiana|Tapparella
Tappeto|Zerbino
Asciugamano|Accappatoio
Saponetta|Bagnoschiuma
Shampoo|Balsamo
Rasoio|Pinzetta
Profumo|Deodorante
Rossetto|Smalto
Anello|Bracciale
Collana|Orecchini
Cappello|Berretto
Sciarpa|Cravatta
Guanti|Calzini
Scarpe|Ciabatte
Stivali|Sandali
Cintura|Bretelle
Bottone|Cerniera
Ago|Spilla da balia
Gomitolo|Uncinetto
Libro|Rivista
Giornale|Volantino
Busta|Francobollo
Scatola|Barattolo
Bottiglia|Borraccia
Lattina|Tappo
Cavatappi|Apribottiglie
Grattugia|Pelapatate
Mattarello|Tagliere
Coltello|Mannaia
Colapasta|Setaccio
Piatto|Vassoio
Tovaglia|Tovagliolo
Mestolo|Spatola
Ferro da stiro|Asse da stiro
Stendibiancheria|Molletta
Secchio|Annaffiatoio
Pala|Rastrello
Scala|Carriola
Corda|Catena
Nastro adesivo|Colla
Pinzatrice|Graffetta
Righello|Squadra
Gomma|Temperino
Astuccio|Cartellina
Lavagna|Gessetto
Mappamondo|Bussola
Telescopio|Microscopio
Termometro|Barometro
Bilancia|Metro a nastro
Pila|Caricabatterie
Mouse|Tastiera
Puzzle|Cubo di Rubik
Tazzina|Mug
Caraffa|Brocca
Vaso|Anfora
Cornice|Quadro
Gruccia|Appendiabiti
Armadio|Cassettiera
Comodino|Mensola
Scaffale|Vetrinetta
Letto a castello|Divano letto
Culla|Lettino
Amaca|Sdraio
Ombrellone|Gazebo
Barbecue|Griglia
Tostapane|Bistecchiera
Bollitore|Macchinetta del caffè
Spremiagrumi|Centrifuga
Robot da cucina|Impastatrice
Friggitrice|Friggitrice ad aria
Pentola a pressione|Casseruola
Wok|Tegame
Teglia|Pirofila
Schiumarola|Pinza da cucina
Frusta|Cucchiaio di legno
Apriscatole|Spremiaglio
Bilancia da cucina|Misurino
Timer da cucina|Clessidra
Portachiavi|Moschettone
Borsa|Marsupio
Trolley|Borsone
Ventiquattrore|Cartella
Stilografica|Biro
Evidenziatore|Correttore
Puntina|Chiodo
Vite|Bullone
Trapano|Avvitatore
Sega|Seghetto
Pinza|Tronchese
Livella|Filo a piombo
Pennello|Rullo
Spugna|Strofinaccio
Paletta|Spazzolone
Cestino|Bidone della spazzatura
Sacchetto|Shopper
Orologio da polso|Cronometro
Occhiali da sole|Maschera da sci
Ventaglio|Ventilatore portatile
E-reader|Lettore MP3
Radio|Giradischi
Cassa bluetooth|Stereo
Microfono|Megafono
`,
facile: `
Ferro di cavallo|Chiavetta USB
Bacchetta magica|Cassetta degli attrezzi
Boomerang|Cerotto
Peluche|Estintore
Trottola|Stetoscopio
Yo-yo|Motosega
Palloncino|Piccone
Aquilone|Siringa
Biglie|Tosaerba
Costruzioni|Saldatore
Dado|Tubo da giardino
Carte da gioco|Semaforo
Scacchiera|Pinne
Domino|Sedia a rotelle
Tombola|Casco
Salvadanaio|Remo
Cassaforte|Coriandoli
Campanello|Ancora
Citofono|Parrucca
Serratura|Salvagente
Maniglia|Corona
Paravento|Boccaglio
Carrozzina|Scettro
Passeggino|Armatura
Ciuccio|Idrante
Biberon|Zappa
Bavaglino|Walkie-talkie
Pannolino|Sciabola giocattolo
Seggiolone|Fax
Sacco a pelo|Metronomo
Torcia frontale|Carillon
Mappa|Gong
Cannocchiale|Cuccia
Zattera|Fischietto
Maschera subacquea|Calendario
Muta da sub|Lampada a lava
Tavola da surf|Stampella
Racchetta|Cartolina
Mazza da baseball|Fiocco
Guantone|Leggio
Ginocchiere|Antenna
Pattini|Mascherina
Pallina da tennis|Falce
Birillo|Webcam
Freccia|Biglietto d'auguri
Scudo|Lettiera
Elmo|Carta da regalo
Trono|Xilofono
Mantello|Router
Bastone|Diario
Lente d'ingrandimento|Forcone
Monocolo|Guinzaglio
Naso rosso|Flessibile
Maschera di carnevale|Prolunga
Stelle filanti|Scalpello
Candelina|Gabbia
Album fotografico|Tiragraffi
Palla di neve|Telefono fisso
Orologio a cucù|Pillola
Plettro|Cassetta della posta
Arpa|Rilevatore di fumo
Triangolo|Decespugliatore
Campana|Raspa
Trombetta|Ciotola
Parabola|Benda
Telecamera|Arco
Interruttore|Slitta
Fusibile|Sella
Lampione|Nano da giardino
Cartello stradale|Pendolo
Panchina|Collare
Allarme|Vanga
Banco da lavoro|Casetta per uccelli
Morsa|Fioriera
Carta vetrata|Osso di gomma
Irrigatore|Briglie
Rubinetto|Narghilè
Scolapiatti|Smartwatch
Detersivo|Volante
Ammorbidente|Accetta
Candeggina|Papillon
Guanti di gomma|Autoradio
Portaombrelli|Mascara
Portacenere|Pompa per bici
Sottobicchiere|Cric
Centrotavola|Tergicristallo
Candeliere|Powerbank
Abat-jour|Catene da neve
Comò|Fornelletto da campeggio
Specchiera|Coltellino svizzero
Pouf|Pipa
Panca|Navigatore
Sedia a dondolo|Seggiolino auto
Chaise longue|Gavetta
Futon|Ruota di scorta
Zanzariera|Sigaro
Plaid|Specchietto retrovisore
Trapunta|Tagliaunghie
Piumone|Schiuma da barba
Federa|Dopobarba
Materassino|Cotton fioc
Borsa dell'acqua calda|Portapacchi
Attizzatoio|Fondotinta
Deumidificatore|Forcina
Termostato|Cerchietto
Caldaia|Bandana
Lavello|Passamontagna
Macchina da cucire|Crema solare
Ditale|Paraorecchie
Metro da sarto|Lima per unghie
Manichino|Piegaciglia
Rocchetto|Elastico per capelli
Spilli|Grembiule
Velcro|Vestaglia
Fazzoletto|Contatore
Pochette|Boiler
Calzamaglia|Purificatore d'aria
Collant|Umidificatore
Cuffia|Legna
Fascia per capelli|Tritarifiuti
Dischetti di cotone|Pattumiera
Accendigas|Bandiera
Flauto|Lavastoviglie portatile
Clarinetto|Piastrella
Tromba|Mattone
Sassofono|Tegola
Armonica|Cemento
Ocarina|Secchiello
Tamburo|Termometro da forno
Bongo|Rasoio elettrico
Drone|Cavatappi elettrico
Aeroplanino telecomandato|Spazzola per capelli
Console|Cucitrice
Lettore DVD|Mollette per capelli
Fotocamera istantanea|Tappetino del mouse
Rullino|Attaccapanni da parete
Giradischi portatile|Pentolino
Penna USB|Portafoto
Mappamondo luminoso|Portagioie
Scatola di fiammiferi|Portapane
Tappo di sughero|Portatovaglioli
Barattolo di vetro|Portaspezie
Bottiglia di vetro|Portasapone
Lattina di bibita|Porta CD
Cassetta di frutta|Porta bici
Pallet|Porta riviste
Scatolone|Portamonete
Nastro isolante|Porta passaporto
Fascetta|Porta badge
Gancio|Porta occhiali
`},
corpo: { nome: "Parti del corpo", colore: "--t-corpo",
difficile: `
Testa|Cranio
Capelli|Barba
Fronte|Tempia
Sopracciglio|Ciglia
Occhio|Palpebra
Naso|Narice
Orecchio|Lobo
Bocca|Labbra
Lingua|Palato
Dente|Gengiva
Mento|Mascella
Guancia|Zigomo
Collo|Nuca
Spalla|Clavicola
Braccio|Avambraccio
Gomito|Ginocchio
Polso|Caviglia
Mano|Piede
Dito|Alluce
Pollice|Indice
Medio|Anulare
Mignolo|Falange
Unghia|Cuticola
Petto|Seno
Pancia|Fianco
Ombelico|Capezzolo
Schiena|Colonna vertebrale
Sedere|Coscia
Gamba|Polpaccio
Tallone|Pianta del piede
Cuore|Polmone
Stomaco|Intestino
Fegato|Pancreas
Cervello|Cervelletto
Rene|Vescica
Scheletro|Muscolo
Pelle|Neo
Vena|Arteria
Costola|Sterno
Ascella|Inguine
Bacino|Anca
Femore|Tibia
Omero|Ulna
Rotula|Menisco
Tendine|Legamento
Bicipite|Tricipite
Pettorali|Addominali
Glutei|Quadricipiti
Trachea|Esofago
Laringe|Faringe
Tonsille|Ugola
Milza|Cistifellea
Appendice|Colon
Sangue|Saliva
Lacrime|Sudore
Pupilla|Iride
Retina|Cornea
Timpano|Padiglione auricolare
Fossette|Lentiggini
Baffi|Basette
Riccioli|Ciuffo
Nocche|Palmo
Dorso della mano|Polpastrello
Vertebra|Midollo spinale
Coccige|Osso sacro
Scapola|Deltoide
Diaframma|Torace
Tronco|Busto
Midollo osseo|Cartilagine
Nervo|Neurone
Globuli rossi|Globuli bianchi
Piastrine|Plasma
Tiroide|Ipofisi
Pomo d'Adamo|Corde vocali
Occhiaie|Rughe
Calli|Vesciche
Cicatrice|Tatuaggio
Brufolo|Punto nero
Capelli bianchi|Calvizie
Collo del piede|Arco plantare
DNA|Cellula
Denti del giudizio|Canini
Incisivi|Molari
Cuoio capelluto|Forfora
Peli|Pelle d'oca
Seni nasali|Setto nasale
Stinco|Malleolo
Perone|Calcagno
Metatarso|Carpo
Aorta|Capillari
Ventricolo|Atrio
Bronchi|Alveoli
Mandibola|Fontanella
Impronta digitale|Linee della mano
Doppio mento|Maniglie dell'amore
Girovita|Circonferenza cranica
Papille gustative|Mucosa
Orecchie a sventola|Naso aquilino
Cromosoma|Gene
Orecchio interno|Staffa
Glottide|Epiglottide
Intestino tenue|Intestino crasso
Uretra|Uretere
Surreni|Timo
Linfonodi|Adenoidi
Meningi|Ipotalamo
Talamo|Ippocampo
Lobo frontale|Lobo temporale
Emisfero destro|Emisfero sinistro
Sinapsi|Assone
Dendriti|Mielina
Cristallino|Sclera
Congiuntiva|Dotto lacrimale
Nervo ottico|Nervo sciatico
Incudine|Coclea
Tromba di Eustachio|Vestibolo
Turbinati|Seni frontali
Frenulo|Palato molle
Smalto dei denti|Dentina
Polpa dentale|Radice del dente
Premolari|Denti da latte
Arcata sopraccigliare|Orbita
Occipite|Parietale
Osso temporale|Osso frontale
Atlante|Epistrofeo
Vertebre cervicali|Vertebre lombari
Ischio|Pube
Acetabolo|Collo del femore
Trocantere|Astragalo
Metacarpo|Scafoide
Osso radio|Olecrano
Acromion|Cuffia dei rotatori
Trapezio|Gran dorsale
Romboidi|Dentato
Psoas|Sartorio
Gemelli|Soleo
Femorali|Adduttori
Intercostali|Obliqui
Pleura|Peritoneo
Pericardio|Valvola mitrale
Vena cava|Giugulare
Carotide|Arteria femorale
Safena|Coronarie
Linfa|Bile
Insulina|Adrenalina
Emoglobina|Melanina
Collagene|Cheratina
Sebo|Pori
Follicolo|Bulbo pilifero
Epidermide|Derma
`,
facile: `
Quadricipiti|Medio
Arco plantare|Sterno
Pollice|Saliva
Nervo|Palato
Vena|Braccio
Palpebra|Saliva
Neurone|Baffi
Cuore|Palato
Sopracciglio|Colon
Medio|Arteria
Gengiva|Collo
Colonna vertebrale|Vena
Nuca|Cuore
Indice|Fronte
Mano|Pianta del piede
Torace|Lacrime
Ugola|Schiena
Cervello|Tempia
Pelle|Lobo
Girovita|Femore
Arteria|Glutei
Costola|Medio
Scheletro|Bacino
Lingua|Bacino
Brufolo|Caviglia
Pelle|Torace
Impronta digitale|Saliva
Nocche|Stomaco
Glutei|Girovita
Glutei|Lentiggini
Colonna vertebrale|Testa
Ascella|Calcagno
Femore|Tonsille
Calcagno|Tiroide
Vescica|Nuca
Intestino|Sangue
Rughe|Rotula
Occhio|Stomaco
Bacino|Globuli rossi
Fronte|Fegato
Tallone|Ciglia
Occhiaie|Tendine d'Achille
Sangue|Torace
Pancreas|Piede
Collo|Testa
Tricipite|Pancia
Fianco|Anulare
Sopracciglio|Cervello
Cicatrice|Ugola
Ciglia|Caviglia
Spalla|Nuca
Scheletro|Fianco
Appendice|Dente
Polso|Sudore
Bocca|Polpaccio
Sudore|Bicipite
Ciglia|Muscolo
Diaframma|Polpastrello
Esofago|Sopracciglio
Gengiva|Cicatrice
Sudore|Dito
Testa|Polpaccio
Pupilla|Spalla
Sangue|Clavicola
Sedere|Peli
Tibia|Palmo
Tallone|Labbra
Ugola|Clavicola
Nervo|Pancreas
Tempia|Fegato
Trachea|Tempia
Fronte|Cervello
Cranio|Gamba
Ombelico|Clavicola
Quadricipiti|Collo
Cranio|Alluce
Schiena|Peli
Cuore|Polso
Forfora|Appendice
Fegato|Bicipite
Palpebra|Gomito
Arco plantare|Schiena
Gamba|DNA
Lingua|Pianta del piede
Pollice|Diaframma
Cicatrice|Trachea
Pianta del piede|Tonsille
Zigomo|Globuli rossi
Piede|Braccio
Caviglia|Lacrime
Cranio|Scapola
Labbra|Anca
Scapola|Labbra
Femore|Pupilla
Pelle|Stinco
Ombelico|Mento
Stomaco|Capillari
Baffi|Quadricipiti
Tiroide|Narice
Mento|Cellula
Dito|DNA
Tiroide|Forfora
Girovita|Forfora
Pettorali|Vena
Coscia|Petto
Mignolo|Trachea
Alluce|Anulare
Scapola|Mascella
Rene|Pancia
Tendine d'Achille|Mascella
Avambraccio|Narice
Brufolo|Anulare
Mento|Gamba
Peli|Calcagno
Gengiva|Appendice
Braccio|Colonna vertebrale
Sedere|Occhio
Ginocchio|Indice
Coscia|Brufolo
Diaframma|Esofago
Ombelico|Dente
Intestino|Rughe
Pupilla|Scheletro
Cistifellea|Addominali
Capillari|Palato
Neurone|Mignolo
Ascella|Pelle d'oca
Baffi|Spalla
Anca|Barba
Fianco|Tendine d'Achille
Nocche|Vescica
Bocca|Mignolo
Occhio|Gomito
Unghia|Bocca
Tallone|Gomito
Guancia|Milza
Piede|Tonsille
Costola|Mano
Cellula|Polso
Nervo|Esofago
Arco plantare|Cistifellea
Tibia|Lingua
Zigomo|DNA
Indice|Sedere
Colon|Naso
Polmone|Palmo
Petto|Polpaccio
Vescica|Tricipite
Zigomo|Palmo
Orecchio|Ginocchio
`},
cosmetici: { nome: "Cosmetici e trucchi", colore: "--t-cosmetici",
difficile: `
Lucidalabbra|Burrocacao
Matita occhi|Eyeliner
Ombretto|Glitter per occhi
Blush|Terra abbronzante
Primer|Fissatore trucco
Cipria|Polvere illuminante
Ciglia finte|Extension ciglia
Unghie finte|Unghie in gel
Struccante|Acqua micellare
Crema idratante|Siero viso
Maschera viso|Patch occhi
Tonico|Lozione astringente
Illuminante|Contouring
Tinta labbra|Matita labbra
BB cream|CC cream
Acqua di colonia|Eau de parfum
Latte detergente|Mousse detergente
Olio abbronzante|Doposole
Crema depilatoria|Strisce depilatorie
Smalto semipermanente|Top coat
Solvente per unghie|Acetone
Beauty blender|Pennello kabuki
Crema contorno occhi|Siero occhi
Crema corpo|Olio corpo
Sali da bagno|Bomba da bagno
Sapone liquido|Gel doccia
Maschera per capelli|Impacco per capelli
Henné|Mèches
Correttore per occhiaie|Primer occhi
Crema antiacne|Patch antibrufoli
Cera per capelli|Pasta modellante
Spray termoprotettore|Siero per punte
Olio struccante|Balsamo struccante
Antitraspirante|Talco
Crema da barba|Gel da barba
Body mist|Acqua profumata
Crema notte|Crema giorno
Pennello da barba|Lametta
Regolabarba|Rifinitore
Maschera all'argilla|Maschera peel-off
Base per unghie|Indurente per unghie
Crema anticellulite|Crema rassodante
Peeling|Esfoliante viso
Acido ialuronico|Retinolo
Crema viso SPF|Fluido protettivo
Decolorante|Tonalizzante
Tatuaggi temporanei|Glitter corpo
Correttore verde|Correttore lilla
Spray fissante|Polvere opacizzante
Gommage|Scrub viso
`,
facile: `
Lucidalabbra|Lacca per capelli
Matita occhi|Crema mani
Ombretto|Dentifricio
Blush|Collutorio
Primer|Olio per capelli
Cipria|Gel per capelli
Ciglia finte|Crema antirughe
Unghie finte|Scrub corpo
Struccante|Autoabbronzante
Crema idratante|Kajal
Maschera viso|Matita sopracciglia
Tonico|Pennello da trucco
Illuminante|Crema piedi
Tinta labbra|Schiuma per capelli
BB cream|Spazzola lisciante
Acqua di colonia|Bigodini
Latte detergente|Ceretta
Olio abbronzante|Rasoio da donna
Crema depilatoria|Lima di vetro
Smalto semipermanente|Shampoo antiforfora
Solvente per unghie|Spugnetta trucco
Beauty blender|Tinta per capelli
Crema contorno occhi|Ferro arricciacapelli
Crema corpo|Sopracciglia tatuate
Sali da bagno|Ciglia magnetiche
Sapone liquido|Fard
Maschera per capelli|Palette ombretti
Henné|Burro di karitè
Correttore per occhiaie|Balsamo per barba
Crema antiacne|Smalto glitter
Cera per capelli|Ombretto metallico
Spray termoprotettore|Tinta per sopracciglia
Olio struccante|Spazzola per barba
Antitraspirante|Matita bianca
Crema da barba|Ombretto liquido
Body mist|Fissatore per sopracciglia
Crema notte|Spray volumizzante
Pennello da barba|Gloss
Regolabarba|Bronzer
Maschera all'argilla|Olio per cuticole
Base per unghie|Polvere fissante
Crema anticellulite|Matita khol
Peeling|Ombretto in crema
Acido ialuronico|Eyeliner a penna
Crema viso SPF|Brillantini
Decolorante|Tinta guance
Tatuaggi temporanei|Crema antimacchie
Correttore verde|Olio di argan
Spray fissante|Crema per tatuaggi
Gommage|Ombretto glitter
`},
brand: { nome: "Brand di cibo e bevande", colore: "--t-brand",
difficile: `
Pepsi|Coca-Cola Zero
Fanta|Oransoda
Sprite|Lemonsoda
Schweppes|San Pellegrino
Ferrarelle|Levissima
Sant'Anna|Lete
Estathé|Lipton
Red Bull|Monster
Gatorade|Powerade
Peroni|Birra Moretti
Heineken|Birra Corona
Campari|Aperol
Averna|Ramazzotti
Lavazza|Illy
Nescafé|Kimbo
Nespresso|Dolce Gusto
Crodino|Sanbittèr
Skipper|Santàl
Barilla|Divella
De Cecco|Rummo
Mutti|Cirio
Star|Maggi
Simmenthal|Montana
Granarolo|Mukki
Müller|Yomo
Activia|Actimel
Pan di Stelle|Gocciole
Ritz|Tuc
Fonzies|San Carlo
Amica Chips|Pata
Loacker|Balocco
Kit Kat|Twix
Mars|Snickers
Bounty|Raffaello
M&M's|Smarties
Duplo|Kinder Maxi
Magnum|Solero
Calippo|Sammontana
Buondì|Brioss
Fiesta|Tegolino
Lindt|Milka
Toblerone|Novi
Baci Perugina|Lindor
Big Babol|Brooklyn
Vigorsol|Daygum
Golia|Morositas
Sperlari|Galatine
Kinder Sorpresa|Kinder Joy
Togo|Abbracci
Grisbì|Gentilini
`,
facile: `
Pepsi|Mulino Bianco
Fanta|Parmalat
Sprite|Galbani
Schweppes|Rio Mare
Ferrarelle|Pringles
Sant'Anna|Kinder Bueno
Estathé|Buitoni
Red Bull|Findus
Gatorade|Algida
Peroni|Danone
Heineken|Plasmon
Campari|Kellogg's
Averna|Saiwa
Lavazza|Pavesi
Nescafé|Bonduelle
Nespresso|Knorr
Crodino|Philadelphia
Skipper|Pocket Coffee
Barilla|Bacardi
De Cecco|Jägermeister
Mutti|Haribo
Star|Ringo
Simmenthal|Tic Tac
Granarolo|Mentos
Müller|Chupa Chups
Activia|Vecchia Romagna
Pan di Stelle|Fernet-Branca
Ritz|Montenegro
Fonzies|Amaro Lucano
Amica Chips|Disaronno
Loacker|Berlucchi
Kit Kat|Bertolli
Mars|Monini
Bounty|Valfrutta
M&M's|Zuegg
Duplo|Del Monte
Magnum|Bauli
Calippo|Fiorucci
Buondì|Rovagnati
Fiesta|Beretta
Lindt|Cedrata Tassoni
Toblerone|Aia
Baci Perugina|Amadori
Big Babol|Sofficini
Vigorsol|Quattro Salti in Padella
Golia|Vitasnella
Sperlari|Giovanni Rana
Kinder Sorpresa|Pomì
Togo|Bel Paese
Grisbì|Amarena Fabbri
`},
cartoni: { nome: "Cartoni Disney e DreamWorks", colore: "--t-cartoni",
difficile: `
Il Re Leone|Il libro della giungla
La Sirenetta|Oceania
Frozen|Rapunzel
Aladdin|Il principe d'Egitto
Cenerentola|La bella addormentata nel bosco
Biancaneve e i sette nani|La bella e la bestia
Toy Story|Monsters & Co.
Alla ricerca di Nemo|Alla ricerca di Dory
Cars|Planes
Up|Wall-E
Bambi|Red e Toby nemiciamici
Dumbo|Lilli e il vagabondo
Peter Pan|Pinocchio
Mulan|Pocahontas
Hercules|Atlantis
Tarzan|Koda fratello orso
La carica dei 101|Oliver & Company
Gli Aristogatti|Bolt
Zootropolis|Robin Hood
Encanto|Coco
Lilo & Stitch|Il pianeta del tesoro
La principessa e il ranocchio|Ribelle
Inside Out|Soul
Gli Incredibili|Big Hero 6
Ralph Spaccatutto|Lightyear
Topolino|Minnie
Paperino|Paperina
Pippo|Pluto
Zio Paperone|Gastone
Cip e Ciop|Qui Quo Qua
Winnie the Pooh|Tigro
Olaf|Sven
Elsa|Anna
Simba|Nala
Timon e Pumbaa|Rafiki
Genio|Jafar
Ursula|Malefica
Crudelia De Mon|Madame Medusa
Capitan Uncino|Ade
Trilli|Fata Smemorina
Woody|Jessie
Buzz Lightyear|Zurg
Saetta McQueen|Cricchetto
Nemo|Marlin
Sulley|Mike Wazowski
Stitch|Angel
Jasmine|Belle
Ariel|Vaiana
Mowgli|Baloo
Quasimodo|La Bestia
`,
facile: `
Il Re Leone|Shrek
La Sirenetta|Kung Fu Panda
Frozen|Madagascar
Aladdin|Dragon Trainer
Cenerentola|Baby Boss
Biancaneve e i sette nani|Il gatto con gli stivali
Toy Story|Trolls
Alla ricerca di Nemo|Megamind
Cars|Spirit
Up|Shark Tale
Bambi|Galline in fuga
Dumbo|Z la formica
Peter Pan|Bee Movie
Mulan|Il piccolo yeti
Hercules|I Croods
Tarzan|Mostri contro alieni
La carica dei 101|Turbo
Gli Aristogatti|Home
Zootropolis|Le 5 leggende
Encanto|Sinbad
Lilo & Stitch|Troppo cattivi
La principessa e il ranocchio|La strada per El Dorado
Inside Out|Il robot selvaggio
Gli Incredibili|Capitan Mutanda
Ralph Spaccatutto|Mr. Peabody e Sherman
Topolino|Fiona
Paperino|Ciuchino
Pippo|Po
Zio Paperone|Sdentato
Cip e Ciop|Re Julien
Winnie the Pooh|Alex il leone
Olaf|Pinguini di Madagascar
Elsa|Lord Farquaad
Simba|Marty la zebra
Timon e Pumbaa|Tigre
Genio|Maestro Shifu
Ursula|Gloria l'ippopotamo
Crudelia De Mon|Melman la giraffa
Capitan Uncino|Hiccup
Trilli|Astrid
Woody|Branch
Buzz Lightyear|Poppy
Saetta McQueen|Mr. Wolf
Nemo|Wallace e Gromit
Sulley|Ginger
Stitch|Ruby Gillman
Jasmine|Mr. Snake
Ariel|Roz
Mowgli|Jack Frost
Quasimodo|Maestro Oogway
`}
};

// Converte le righe in coppie {c: civile, i: impostore}
const LIVELLI = ["facile", "difficile"];
for (const k in TEMI) for (const lv of LIVELLI) {
  TEMI[k][lv] = TEMI[k][lv].trim().split("\n").map(r => { const [c, i] = r.split("|"); return { c: c.trim(), i: i.trim() }; });
}
if (typeof module !== "undefined") module.exports = TEMI;
