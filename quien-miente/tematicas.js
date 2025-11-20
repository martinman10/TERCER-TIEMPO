const famososPorTematica = {
  todos: famosos.map(f => f.nombre),

  Uruguay: [
    "Agustín Canobbio", "Alfonso Espino", "Álvaro Recoba", "Bruno Arady", "Brian Ocampo", "Brian Rodríguez", "Christian Oliva", "Damián Suárez", "Darwin Núñez", "David Terans",
    "Diego Forlán", "Diego Godín", "Diego Lugano", "Eduardo Darias", "Edinson Cavani", "Emanuel Gularte", "Emiliano Velázquez", "Enzo Francescoli", "Facundo Machado", "Facundo Pellistri",
    "Felipe Carballo", "Felipe Carvalho", "Fernando Morena", "Fernando Muslera", "Franco Fagúndez","Gastón Silva", "Gonzalo Carneiro", "Gonzalo Petit", "Héctor Scarone", "Ronald Araújo", "Manuel Ugarte", "Giorgian De Arrascaeta", 
    "Ignacio Lores", "Ignacio Sosa", "Iván Alonso", "Javier Cabrera", "Jeremías Recoba", "Jesús Trindade", "Jonathan Rodríguez", "Leonardo Fernández", "Lucas Torreira", "Luis Suárez",
    "Martín Cáceres", "Matías Arezo", "Matías Viña", "Maximiliano Olivera", "Maximiliano Silvera", "Nico López", "Nicolás de la Cruz", "Nicolás Lodeiro", "Obdulio Varela",
    "Paolo Calione", "Pedro Milans", "Rodrigo Bentancur", "Rubén Sosa", "Sebastián Abreu", "Sebastián Coates", "Sergio Rochet", "Yonatan Rodríguez", "Federico Valverde", "José María Giménez", 
  ],
 
   Argentina: [
  "Diego Maradona", "Lionel Messi", "Alfredo Di Stéfano", "Mario Kempes", "Ricardo Bochini",
  "Omar Sívori", "Daniel Passarella", "Ubaldo Fillol", "Gabriel Batistuta", "Jorge Valdano",
  "Juan Román Riquelme", "Pablo Aimar", "Javier Zanetti", "Hernán Crespo", "Ariel Ortega",
  "Roberto Ayala", "Walter Samuel", "Esteban Cambiasso", "Javier Mascherano", "Carlos Tévez",
  "Sergio Agüero", "Diego Simeone", "Claudio Caniggia", "Gabriel Heinze", "Fernando Redondo",
  "Ángel Di María", "Éver Banega", "Ezequiel Lavezzi", "Gonzalo Higuaín", "Nicolás Otamendi",
  "Marcos Rojo", "Lionel Scaloni", "Leandro Paredes", "Ángel Correa", "Mauro Icardi",
  "Ramiro Funes Mori", "Lucas Biglia", "Maxi Rodríguez", "Papu Gómez", "Erik Lamela",
  "Lautaro Martínez", "Enzo Fernández", "Alexis Mac Allister", "Rodrigo De Paul",
  "Cristian 'Cuti' Romero", "Emiliano 'Dibu' Martínez", "Lisandro Martínez",
  "Alejandro Garnacho", "Thiago Almada", "Enzo Pérez",
  "Franco Mastantuono", "Facundo Buonanotte", "Valentín Barco", "Matías Soulé",
  "Nicolás Paz"
],

   Brasil: [
  "Pelé", "Ronaldo Nazario", "Ronaldinho", "Romário", "Garrincha",
  "Zico", "Rivaldo", "Sócrates", "Carlos Alberto Torres", "Cafu",
  "Roberto Carlos", "Dunga", "Tostão", "Jairzinho", "Rivelino",
  "Kaká", "Adriano", "Juninho Pernambucano", "Lucio", "Gilberto Silva",
  "Aldair", "Dida", "Julio Cesar", "Maicon", "Thiago Silva",
  "David Luiz", "Hernanes", "Denilson", "Bebeto", "Emerson",
  "Neymar Jr.", "Vinícius Jr.", "Rodrygo Goes", "Gabriel Jesus",
  "Gabriel Martinelli", "Raphinha", "Endrick", "Bruno Guimarães",
  "Lucas Paquetá", "Casemiro", "Fabinho", "Douglas Luiz",
  "Marquinhos", "Éder Militão", "Gabriel Magalhães", "Bremer",
  "Alisson Becker", "Ederson", "Richarlison", "Antony",
  "Gerson", "João Gomes", "Fred", "Oscar",
  "Lucas Moura", "Felipe Melo", "Alex Sandro",
  "Renan Lodi", "Dani Alves"
],

España: [
  // LOS QUE YA TENÍAS
  "Andrés Iniesta", "Gerard Piqué", "Sergio Ramos", "Iker Casillas", "Raúl González",
  "Cesc Fàbregas", "David Silva", "Fernando Torres", "Santi Cazorla", "Jordi Alba",
  "Carles Puyol", "David Villa", "Fernando Llorente", "Álvaro Morata", "Pau Torres",
  "Gerard Deulofeu", "Ander Herrera", "Gerard Moreno", "Iago Aspas", "Guti",
  "Lamine Yamal", "Pedri",
  "Xavi Hernández", "Sergio Busquets", "Xabi Alonso", "Juan Mata", "Pepe Reina",
  "Thiago Alcántara", "Isco", "Marco Asensio", "Koke", "Dani Carvajal",
  "Nacho Fernández", "Álvaro Arbeloa", "Joaquín", "Jesús Navas", "Dani Olmo",
  "Ansu Fati",
  "Gaizka Mendieta", "José Antonio Reyes", "Julen Guerrero", "Fernando Hierro",
  "Luis Enrique", "Michel", "Emilio Butragueño",
  "Rubén Baraja", "David de Gea", "Unai Simón", "Mikel Oyarzabal",
  "Iñaki Williams", "Nico Williams", "César Azpilicueta", "Álvaro Negredo",
  "Aritz Aduriz", "Raúl Albiol", "Sergio Canales", "Pablo Sarabia",
  "Rodri Hernández", "Illarramendi", "Saúl Ñíguez", "Borja Iglesias"
],

  Italia: [
  "Gianluigi Buffon", "Francesco Totti", "Alessandro Del Piero", "Andrea Pirlo",
  "Giorgio Chiellini", "Gianluigi Donnarumma", "Federico Chiesa", "Andrea Belotti",
  "Gianluca Scamacca", "Marco Verratti", "Jorginho", "Matteo Darmian",
  "Gianluca Zambrotta", "Daniele De Rossi",
  "Paolo Maldini", "Franco Baresi", "Alessandro Nesta", "Fabio Cannavaro",
  "Gennaro Gattuso", "Roberto Baggio", "Christian Vieri", "Filippo Inzaghi",
  "Pippo Inzaghi", "Luca Toni", "Andrea Barzagli", "Claudio Marchisio",
  "Marco Materazzi", "Angelo Peruzzi", "Walter Zenga", "Dino Zoff",
  "Antonio Cassano", "Mario Balotelli", "Emanuele Giaccherini", "Simone Perrotta",
  "Massimo Ambrosini", "Demetrio Albertini", "Fabio Grosso", "Salvatore Schillaci",
  "Mauro Camoranesi", "Gianluca Vialli", "Roberto Mancini",
  "Sandro Tonali", "Nicolo Barella", "Federico Bernardeschi", "Domenico Berardi",
  "Mattia Zaccagni", "Matteo Politano", "Leonardo Bonucci", "Alessio Romagnoli",
  "Davide Calabria", "Nicolo Zaniolo", "Manuel Locatelli", "Giacomo Raspadori",
  "Alex Meret", "Salvatore Sirigu", "Andrea Consigli",
  "Antonio Di Natale", "Francesco Acerbi"
],

  Portugal: [
  // LOS QUE YA TENÍAS
  "Cristiano Ronaldo", "Diogo Jota", "Rafael Guerreiro", "João Félix",
  "João Cancelo", "Bernardo Silva", "Rúben Neves", "Pepe",
  "Danilo Pereira", "João Moutinho",
  "Bruno Fernandes", 
  "Rúben Dias",
  "Vitinha",
  "Gonçalo Ramos",
  "Nani",
  "Ricardo Quaresma",
  "André Silva",
  "William Carvalho",
  "Paulo Futre",
  "Luis Figo"
],

  Francia: [
  "Kylian Mbappé", "Antoine Griezmann", "Franck Ribéry", "Blaise Matuidi",
  "Eduardo Camavinga", "Aurelien Tchouameni", "Ousmane Dembélé",
  "Kingsley Coman", "N’Golo Kanté", "Raphaël Varane",
  "Zinedine Zidane", "Thierry Henry", "Patrick Vieira", "Didier Deschamps",
  "Claude Makélélé", "Marcel Desailly", "Lilian Thuram", "David Trezeguet",
  "Laurent Blanc", "Eric Cantona",
  "Karim Benzema", "Paul Pogba", "Hugo Lloris", "Samuel Umtiti", "Lucas Hernández",
  "Theo Hernández", "Benjamin Pavard", "Corentin Tolisso", "Anthony Martial",
  "Wissam Ben Yedder"
],

  Alemania: [
  // LOS QUE YA TENÍAS
  "Manuel Neuer", "Toni Kroos", "Mesut Özil", "Ilkay Gündogan", "Timo Werner",
  "Bernd Leno", "Jonathan Tah", "Florian Neuhaus", "Joshua Kimmich",
  "Leon Goretzka", "Kai Havertz", "Mats Hummels", "Marco Reus",
  "Mario Götze", "Philipp Lahm", "Miroslav Klose", "Bastian Schweinsteiger",
  "Mario Gómez",
  "Thomas Müller",
  "Jerome Boateng",
  "Leroy Sané",
  "Antonio Rüdiger",
  "Marc-André ter Stegen",
  "Andre Schürrle",
  "Christoph Kramer",
  "Benedikt Höwedes",
  "Emre Can",
  "Julian Draxler",
  "Niklas Süle",
  "Serge Gnabry"
],

  Inglaterra: [
  "Cole Palmer", "Harry Kane", "Bukayo Saka", "Phil Foden", "Declan Rice",
  "Trent Alexander-Arnold", "Marcus Rashford", "Mason Mount", "Raheem Sterling",
  "Ashley Cole", "James Maddison", "Jack Grealish", "Ben Chilwell",
  "Jordan Henderson", "Kalvin Phillips",
  "David Beckham",
  "Wayne Rooney",
  "Frank Lampard",
  "Steven Gerrard",
  "John Terry",
  "Rio Ferdinand",
  "Joe Cole",
  "Michael Owen",
  "Jude Bellingham",
  "Kyle Walker",
  "Aaron Ramsdale",
  "Luke Shaw",
  "Jadon Sancho",
  "Kieran Trippier",
  "Harry Maguire"],


 Otros_Europa: [
    "Virgil van Dijk",
    "Arjen Robben",
    "Ruud van Nistelrooy",
    "Wesley Sneijder",
    "Rafael van der Vaart",
    "Memphis Depay",
    "Denzel Dumfries",
    "Kevin Strootman",
    "Stefan de Vrij",
    "Nathan Aké",
    "Kevin De Bruyne",
    "Eden Hazard",
    "Thorgan Hazard",
    "Axel Witsel",
    "Youri Tielemans",
    "Yannick Carrasco",
    "Dries Mertens",
    "Toby Alderweireld",
    "Michy Batshuayi",
    "Thibaut Courtois",
    "Luka Modrić",
    "Ivan Rakitić",
    "Joško Gvardiol",
    "Ante Rebić",
    "Andrej Kramarić",
    "Robert Lewandowski",
    "Erling Haaland",
    "David Alaba",
    "Marcel Sabitzer",
    "Konrad Laimer",
    "Marko Arnautović",
    "Granit Xhaka",
    "Xherdan Shaqiri",
    "Breel Embolo",
    "Haris Seferović",
    "Yann Sommer",
    "Christian Eriksen",
    "Kasper Schmeichel",
    "Pierre-Emile Højbjerg",
    "Andreas Christensen",
    "Martin Braithwaite",
    "Joakim Maehle",
    "Luka Jović",
    "Sergej Milinković-Savić",
    "Dušan Vlahović",
    "Nemanja Matić",
    "Khvicha Kvaratskhelia",
    "Henrikh Mkhitaryan",
    "Martin Dúbravka",
    "Marek Hamšík",
    "Eden Višća",
    "Miralem Pjanić",
    "Andy Robertson",
    "Kieran Tierney",
    "Aaron Ramsey",
    "Gareth Bale",
    "Marcelo Brozović",
    // --- Jugadores añadidos ---
    "Johan Cruyff",
    "Marco van Basten",
    "Ruud Gullit",
    "Dennis Bergkamp",
    "Frank Rijkaard",
    "Edwin van der Sar",
    "Patrick Kluivert",
    "Clarence Seedorf",
    "Michael Laudrup",
    "Zlatan Ibrahimović",
    "Henrik Larsson",
    "Gheorghe Hagi",
    "Pavel Nedvěd",
    "Petr Čech",
    "Jan Koller",
    "Davor Šuker",
    "Zvonimir Boban",
    "Mario Mandžukić",
    "Romelu Lukaku",
    "Jan Vertonghen",
    "Gunnar Nordahl",
    "Hristo Stoichkov",
    "Georgi Asparuhov",
    "Ferenc Puskás",
    "József Masopust",
    "Dejan Savićević",
    "Siniša Mihajlović"
],

  Africa: [
    "Mohamed Salah",
    "Didier Drogba",
    "Yaya Touré",
    "Samuel Kuffour",
    "Riyad Bensebaini",
    "Sadio Mané",
    "Kalidou Koulibaly",
    "Hakim Ziyech",
    "Achraf Hakimi",
    "Youssef En-Nesyri",
    "Mohamed Elneny",
    "Mahmoud Trézéguet",
    "Mehdi Benatia",
    "Rachid Ghezzal",
    "Islam Slimani",
    "Azzedine Ounahi",
    "Mohammed Kudus",
    "Odion Ighalo",
    "Victor Osimhen",
    "Wilfred Ndidi",
    "Alex Iwobi",
    "Samuel Eto’o",
    // --- Jugadores añadidos ---
    "George Weah", // Liberia
    "Roger Milla", // Camerún
    "Nwankwo Kanu", // Nigeria
    "Jay-Jay Okocha", // Nigeria
    "Abedi Pelé", // Ghana
    "Michael Essien", // Ghana
    "Mohamed Aboutrika", // Egipto
    "Frédéric Kanouté", // Mali
    "El Hadji Diouf", // Senegal
    "Benni McCarthy", // Sudáfrica
    "Geremi Njitap", // Camerún
    "Rigobert Song", // Camerún
    "Mustapha Hadji", // Marruecos
    "Lauren Etamé Mayer", // Camerún
    "Seydou Keita", // Mali
    "Solomon Kalou", // Costa de Marfil
    "Emmanuel Adebayor", // Togo
    "Obafemi Martins", // Nigeria
    "Pierre-Emerick Aubameyang", // Gabón
    "Rami Bensebaini", // Argelia
    "Ismaël Bennacer", // Argelia
    "Edouard Mendy", // Senegal
    "Thomas Partey", // Ghana
    "Franck Kessié", // Costa de Marfil
    "Sofyan Amrabat", // Marruecos
    "Riyad Mahrez", // Argelia
    "Víctor Moses", // Nigeria
    "Badr El Kaddouri", // Marruecos
    "Kalusha Bwalya", // Zambia
    "Essam El Hadary", // Egipto
    "Tarik Sektioui", // Marruecos
    "Mido (Ahmed Hossam)", // Egipto
    "Vincent Enyeama", // Nigeria
    "Shabani Nonda" // RD Congo
],


  America_Norte_Asia_Oceania: [
    "Ali Al-Habsi",
    "Keylor Navas",
    "Maya Yoshida",
    "Keisuke Honda",
    "Shinji Kagawa",
    "Takefusa Kubo",
    "Takumi Minamino",
    "Hee-chan Hwang",
    "Kim Min-jae",
    "Lee Kang-in",
    "Heung-min Son",
    "Tim Cahill",
    "Harry Souttar",
    "Mathew Ryan",
    "Clint Dempsey",
    "Landon Donovan",
    "Tyler Adams",
    "Weston McKennie",
    "Tim Weah",
    "Christian Pulisic",
    "Alphonso Davies",
    "Jonathan David",
    "Héctor Herrera",
    "Andrés Guardado",
    "Irving Lozano",
    "Raúl Jiménez",
    // --- Jugadores añadidos ---
    "Cuauhtémoc Blanco",
    "Hugo Sánchez",
    "Rafa Márquez",
    "Javier Hernández 'Chicharito'",
    "Giovani dos Santos",
    "Jorge Campos",
    "DaMarcus Beasley",
    "Ali Daei", // Irán
    "Shunsuke Nakamura", // Japón
    "Hidetoshi Nakata", // Japón
    "Mark Schwarzer", // Australia
    "Aaron Mooy", // Australia
    "Winston Reid", // Nueva Zelanda
    "Cho Gue-sung", // Corea del Sur
    "Jae-sung Lee", // Corea del Sur
    "Saeed Al-Owairan", // Arabia Saudí
    "Brad Friedel", // EE.UU.
    "Oswaldo Sánchez" // México
],


  Sudamerica_Otros: [
    // Chile (8)
    "Eduardo Vargas",
    "Arturo Vidal",
    "Gary Medel",
    "Alexis Sánchez",
    "Claudio Bravo",
    "Iván Zamorano",
    "Marcelo Salas",
    "Matías Fernández",

    // Perú (7)
    "Paolo Guerrero",
    "Jefferson Farfán",
    "Christian Cueva",
    "Claudio Pizarro",
    "Teófilo Cubillas",
    "Héctor Chumpitaz",
    "Nolberto Solano",

    // Venezuela (4)
    "Salomón Rondón",
    "Tomás Rincón",
    "Juan Arango",
    "Josef Martínez",

    // Colombia (8)
    "Carlos 'El Pibe' Valderrama",
    "Radamel Falcao García",
    "James Rodríguez",
    "Faustino Asprilla",
    "Juan Guillermo Cuadrado",
    "René Higuita",
    "Luis Díaz",
    "Iván Ramiro Córdoba",

    // Paraguay (6)
    "José Luis Chilavert",
    "Roque Santa Cruz",
    "José Saturnino Cardozo",
    "Miguel Almirón",
    "Gustavo Gómez",
    "Carlos Gamarra",

    // Ecuador (6)
    "Antonio Valencia",
    "Álex Aguinaga",
    "Iván Hurtado",
    "Agustín Delgado",
    "Enner Valencia",
    "Moisés Caicedo",

    // Bolivia (1)
    "Marcelo Martins Moreno"
],

  Leyendas: [
    "Diego Maradona",
    "Pelé",
    "Diego Forlán",
    "Luis Suárez",
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Ronaldinho",
    "Ronaldo Nazario",
    "Obdulio Varela",
    "Fernando Morena",
    "Diego Godín",
    "Enzo Francescoli",
    "Rubén Sosa",
    "Héctor Scarone",
    "Atilio García",
    "Luis Artime",
    "Gabriel Batistuta",
    "Juan Román Riquelme",
    "Javier Zanetti",
    "Hernán Crespo",
    "Esteban Cambiasso",
    "Walter Samuel",
    "Pablo Aimar",
    "David Beckham",
    "Francesco Totti",
    "Gianluigi Buffon",
    "Iker Casillas",
    "Carles Puyol",
    "David Villa",
    "Ruud van Nistelrooy",
    "Wesley Sneijder",
    "Guti",
    "Raúl González",
    "Arjen Robben",
    "Franck Ribéry",
    "Miroslav Klose",
    "Bastian Schweinsteiger",
    "Philipp Lahm",
    "Didier Drogba",
    "Yaya Touré",
    "Samuel Eto’o",
    // --- Leyendas añadidas (19) ---
    "Johan Cruyff",           // Países Bajos (Leyenda histórica)
    "Alfredo Di Stéfano",     // Argentina/España (Leyenda histórica)
    "Franz Beckenbauer",      // Alemania (Leyenda histórica)
    "Zinedine Zidane",        // Francia (Leyenda moderna)
    "George Best",            // Irlanda del Norte (Leyenda histórica)
    "Garrincha",              // Brasil (Leyenda histórica)
    "Marco van Basten",       // Países Bajos (Leyenda histórica)
    "Michel Platini",         // Francia (Leyenda histórica)
    "Bobby Charlton",         // Inglaterra (Leyenda histórica)
    "Zico",                   // Brasil (Leyenda histórica)
    "Lev Yashin",             // URSS/Rusia (Leyenda histórica - Portero)
    "Roberto Baggio",         // Italia (Leyenda moderna)
    "Ricardo Kaká",           // Brasil (Leyenda moderna)
    "Xavi Hernández",         // España (Leyenda moderna)
    "Andrés Iniesta",         // España (Leyenda moderna)
    "Eusébio",                // Portugal (Leyenda histórica)
    "Thierry Henry",          // Francia (Leyenda moderna)
    "Paolo Maldini",          // Italia (Leyenda moderna)
    "Roberto Carlos"          // Brasil (Leyenda moderna)
],


  Entrenadores: [
    "Diego Simeone",
    "José Mourinho",
    "Pep Guardiola",
    "Carlo Ancelotti",
    "Zinedine Zidane",
    "Óscar Washington Tabárez",
    // --- Entrenadores añadidos (9) ---
    "Sir Alex Ferguson",       // Leyenda del Manchester United
    "Arrigo Sacchi",           // Innovador del fútbol italiano
    "Rinus Michels",           // Creador de la 'Naranja Mecánica' y el Fútbol Total
    "Jürgen Klopp",            // Figura del Liverpool y Borussia Dortmund
    "Vicente del Bosque",      // Campeón del Mundo y Europa con España
    "Fabio Capello",           // Multicampeón en Italia y España
    "Marcello Lippi",          // Campeón del Mundo con Italia
    "Louis van Gaal",          // Múltiples títulos con Ajax, Barcelona y Bayern
    "Helenio Herrera"          // Leyenda del catenaccio y el Inter de Milán
]

  
};

window.famososPorTematica = famososPorTematica;

// =========================================================
// INSERCIÓN AL FINAL DE tematicas.js
// Esto permite que el servidor de Node.js pueda importar el objeto de temáticas
// =========================================================
module.exports = { famososPorTematica };
