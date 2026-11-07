/* UFAKARIU – database parole.
   Ogni riga è una coppia "parola dei civili|parola dell'impostore".
   Per tema: 100 coppie = 100 parole per i civili + 100 parole per l'impostore. */
const TEMI = {
cibo: { nome: "Cibo", colore: "--t-cibo", coppie: `
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
`},
ambienti: { nome: "Ambienti", colore: "--t-ambienti", coppie: `
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
`},
citta: { nome: "Città", colore: "--t-citta", coppie: `
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
`},
automobili: { nome: "Automobili", colore: "--t-auto", coppie: `
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
`},
sport: { nome: "Sport", colore: "--t-sport", coppie: `
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
`},
attori: { nome: "Attori", colore: "--t-attori", coppie: `
Roberto Benigni|Massimo Troisi
Totò|Peppino De Filippo
Alberto Sordi|Nino Manfredi
Sophia Loren|Gina Lollobrigida
Marcello Mastroianni|Vittorio Gassman
Monica Bellucci|Claudia Cardinale
Pierfrancesco Favino|Elio Germano
Checco Zalone|Ficarra e Picone
Carlo Verdone|Enrico Brignano
Paola Cortellesi|Virginia Raffaele
Toni Servillo|Silvio Orlando
Luca Argentero|Raoul Bova
Claudio Bisio|Fabio De Luigi
Christian De Sica|Massimo Boldi
Aldo Giovanni e Giacomo|Lopez Marchesini e Solenghi
Leonardo DiCaprio|Matt Damon
Brad Pitt|George Clooney
Angelina Jolie|Megan Fox
Johnny Depp|Orlando Bloom
Tom Cruise|Jason Statham
Tom Hanks|Robin Williams
Julia Roberts|Sandra Bullock
Meryl Streep|Glenn Close
Robert De Niro|Al Pacino
Jim Carrey|Adam Sandler
Will Smith|Eddie Murphy
Morgan Freeman|Denzel Washington
Scarlett Johansson|Natalie Portman
Jennifer Lawrence|Emma Stone
Margot Robbie|Cameron Diaz
Keanu Reeves|Nicolas Cage
Sylvester Stallone|Arnold Schwarzenegger
Bruce Willis|Harrison Ford
Nicole Kidman|Cate Blanchett
Zendaya|Millie Bobby Brown
Ryan Gosling|Ryan Reynolds
Robert Downey Jr.|Chris Hemsworth
Charlie Chaplin|Buster Keaton
Marilyn Monroe|Audrey Hepburn
Jackie Chan|Bruce Lee
Dwayne Johnson|Vin Diesel
Emma Watson|Daniel Radcliffe
Hugh Grant|Colin Firth
Jack Nicholson|Anthony Hopkins
Clint Eastwood|John Wayne
Bud Spencer|Terence Hill
Paolo Villaggio|Lino Banfi
Diego Abatantuono|Renato Pozzetto
Adriano Celentano|Ornella Muti
Anna Magnani|Monica Vitti
Sabrina Ferilli|Valeria Golino
Kim Rossi Stuart|Riccardo Scamarcio
Stefano Accorsi|Alessandro Gassmann
Ezio Greggio|Enzo Iacchetti
Antonio Albanese|Teresa Mannino
Alessandro Siani|Vincenzo Salemme
Margherita Buy|Isabella Ferrari
Giancarlo Giannini|Michele Placido
Leonardo Pieraccioni|Giorgio Panariello
Pio e Amedeo|Ale e Franz
Timothée Chalamet|Tom Holland
Pedro Pascal|Oscar Isaac
Keira Knightley|Anne Hathaway
Jennifer Aniston|Courteney Cox
Matthew McConaughey|Woody Harrelson
Christian Bale|Joaquin Phoenix
Heath Ledger|Jared Leto
Samuel L. Jackson|Laurence Fishburne
Tom Hardy|Cillian Murphy
Benedict Cumberbatch|Martin Freeman
Kate Winslet|Emma Thompson
Liam Neeson|Gerard Butler
Mel Gibson|Russell Crowe
Kevin Costner|Patrick Swayze
John Travolta|Richard Gere
Uma Thurman|Charlize Theron
Penélope Cruz|Salma Hayek
Antonio Banderas|Javier Bardem
Jean Reno|Gérard Depardieu
Sean Connery|Roger Moore
Daniel Craig|Pierce Brosnan
Henry Cavill|Chris Evans
Gal Gadot|Emily Blunt
Ben Stiller|Owen Wilson
Steve Carell|Will Ferrell
Jack Black|Seth Rogen
Jason Momoa|Chris Pratt
Florence Pugh|Anya Taylor-Joy
Rowan Atkinson|Leslie Nielsen
Chris Rock|Kevin Hart
Danny DeVito|Joe Pesci
Michael J. Fox|Matthew Broderick
Elizabeth Taylor|Grace Kelly
Humphrey Bogart|Cary Grant
James Dean|Marlon Brando
Jean-Claude Van Damme|Chuck Norris
Steven Seagal|Dolph Lundgren
Helen Mirren|Judi Dench
Tilda Swinton|Maggie Smith
Edoardo Leo|Marco Giallini
`},
oggetti: { nome: "Oggetti", colore: "--t-oggetti", coppie: `
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
`},
corpo: { nome: "Parti del corpo", colore: "--t-corpo", coppie: `
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
Doppio mento|Pancetta
Girovita|Circonferenza cranica
Papille gustative|Mucosa
Orecchie a sventola|Naso aquilino
Cromosoma|Gene
Orecchio interno|Staffa
`}
};

// Converte le righe in coppie {c: civile, i: impostore}
for (const k in TEMI) {
  TEMI[k].coppie = TEMI[k].coppie.trim().split("\n").map(r => { const [c, i] = r.split("|"); return { c: c.trim(), i: i.trim() }; });
}
if (typeof module !== "undefined") module.exports = TEMI;
