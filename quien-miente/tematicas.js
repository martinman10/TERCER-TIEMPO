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
   "Enzo Fernández", "Lautaro Martínez", "Lionel Messi", "Diego Maradona", "Gabriel Batistuta", "Sergio Agüero", "Carlos Tévez", "Javier Mascherano", "Juan Román Riquelme", "Paulo Dybala", "Ángel Di María", "Mauro Icardi",
    "Gonzalo Bergessio", "Pablo Aimar", "Javier Zanetti", "Hernán Crespo", "Gabriel Heinze", "Esteban Cambiasso", "Walter Samuel", "Éver Banega", "Leandro Paredes", "Rodrigo De Paul",
    "Alejandro Garnacho", "Lisandro Martínez", "Ángel Correa", "Franco Mastantuono", "Emiliano Martínez", "Cristian Romero", "Nicolas Otamendi"
  ],

   Brasil: [
  // LEYENDAS MÁXIMAS
  "Pelé", "Ronaldo Nazario", "Ronaldinho", "Romário", "Garrincha",
  "Zico", "Rivaldo", "Sócrates", "Carlos Alberto Torres", "Cafu",
  "Roberto Carlos", "Dunga", "Tostão", "Jairzinho", "Rivelino",

  // ESTRELLAS DE LOS 90s Y 2000s
  "Kaká", "Adriano", "Juninho Pernambucano", "Lucio", "Gilberto Silva",
  "Aldair", "Dida", "Julio Cesar", "Maicon", "Thiago Silva",
  "David Luiz", "Hernanes", "Denilson", "Bebeto", "Emerson",

  // TOP MUNDIALES ACTUALES
  "Neymar Jr.", "Vinícius Jr.", "Rodrygo Goes", "Gabriel Jesus",
  "Gabriel Martinelli", "Raphinha", "Endrick", "Bruno Guimarães",
  "Lucas Paquetá", "Casemiro", "Fabinho", "Douglas Luiz",
  "Marquinhos", "Éder Militão", "Gabriel Magalhães", "Bremer",

  // MÁS FIGURAS ACTUALES Y RECIENTES
  "Alisson Becker", "Ederson", "Richarlison", "Antony",
  "Gerson", "João Gomes", "Fred", "Oscar",
  "Lucas Moura", "Felipe Melo", "Alex Sandro",
  "Renan Lodi", "Dani Alves" // (leyenda moderna, juega hasta 2023)
]

  España: [
    "Andrés Iniesta", "Gerard Piqué", "Sergio Ramos", "Iker Casillas", "Raúl González", "Cesc Fàbregas", "David Silva", "Fernando Torres", "Santi Cazorla", "Jordi Alba",
    "Carles Puyol", "David Villa", "Fernando Llorente", "Álvaro Morata", "Pau Torres", "Gerard Deulofeu", "Ander Herrera", "Gerard Moreno", "Iago Aspas", "Guti", "Lamine Yamal", "Pedri"
  ],

  Italia: [
    "Gianluigi Buffon", "Francesco Totti", "Alessandro Del Piero", "Andrea Pirlo", "Giorgio Chiellini", "Gianluigi Donnarumma", "Federico Chiesa", "Andrea Belotti", "Gianluca Scamacca",
    "Marco Verratti", "Jorginho", "Matteo Darmian", "Gianluca Zambrotta", "Daniele De Rossi"
  ],

  Portugal: [
    "Cristiano Ronaldo", "Diogo Jota", "Rafael Guerreiro", "João Félix", "João Cancelo", "Bernardo Silva", "Rúben Neves", "Pepe", "Danilo Pereira", "João Moutinho"
  ],

  Francia: [
    "Kylian Mbappé", "Antoine Griezmann", "Franck Ribéry", "Blaise Matuidi", "Eduardo Camavinga", "Aurelien Tchouameni", "Ousmane Dembélé", "Kingsley Coman", "N’Golo Kanté", "Raphaël Varane"
  ],

  Alemania: [
    "Manuel Neuer", "Toni Kroos", "Mesut Özil", "Ilkay Gündogan", "Timo Werner", "Bernd Leno", "Jonathan Tah", "Florian Neuhaus", "Joshua Kimmich", "Leon Goretzka", "Kai Havertz",
    "Mats Hummels", "Marco Reus", "Mario Götze", "Philipp Lahm", "Miroslav Klose", "Bastian Schweinsteiger", "Mario Gómez"
  ],

  Inglaterra: [
    "Cole Palmer", "Harry Kane", "Bukayo Saka", "Phil Foden", "Declan Rice", "Trent Alexander-Arnold", "Marcus Rashford", "Mason Mount", "Raheem Sterling", "Ashley Cole",
    "James Maddison", "Jack Grealish", "Ben Chilwell", "Jordan Henderson", "Kalvin Phillips", 
  ],


  Otros_Europa: [
      "Virgil van Dijk", "Arjen Robben", "Ruud van Nistelrooy", "Wesley Sneijder", "Rafael van der Vaart", "Memphis Depay", "Denzel Dumfries", "Kevin Strootman", "Stefan de Vrij", "Nathan Aké", "Kevin De Bruyne", "Eden Hazard", "Thorgan Hazard", "Axel Witsel", "Youri Tielemans", "Yannick Carrasco", "Dries Mertens", "Toby Alderweireld", "Michy Batshuayi", "Thibaut Courtois", "Luka Modrić", "Ivan Rakitić", "Joško Gvardiol", "Ante Rebić", "Andrej Kramarić", // Croacia
    "Robert Lewandowski", // Polonia
    "Erling Haaland", // Noruega
    "David Alaba", "Marcel Sabitzer", "Konrad Laimer", "Marko Arnautović", // Austria
    "Granit Xhaka", "Xherdan Shaqiri", "Breel Embolo", "Haris Seferović", "Yann Sommer", // Suiza
    "Christian Eriksen", "Kasper Schmeichel", "Pierre-Emile Højbjerg", "Andreas Christensen", "Martin Braithwaite", "Joakim Maehle", // Dinamarca
    "Luka Jović", "Sergej Milinković-Savić", "Dušan Vlahović", "Nemanja Matić", // Serbia
    "Khvicha Kvaratskhelia", // Georgia
    "Henrikh Mkhitaryan", // Armenia
    "Martin Dúbravka", "Marek Hamšík", // Eslovaquia
    "Eden Višća", "Miralem Pjanić", // Bosnia y Herzegovina
    "Andy Robertson", "Kieran Tierney", // Escocia
    "Aaron Ramsey", "Gareth Bale", // Gales
    "Marcelo Brozović", // Croacia
  ],

  Africa: [
    "Mohamed Salah", "Didier Drogba", "Yaya Touré", "Samuel Kuffour", "Riyad Bensebaini", "Sadio Mané", "Kalidou Koulibaly", "Hakim Ziyech", "Achraf Hakimi", "Youssef En-Nesyri",
    "Mohamed Elneny", "Mahmoud Trézéguet",  "Mehdi Benatia", "Rachid Ghezzal", "Islam Slimani", "Azzedine Ounahi", "Mohammed Kudus",
    "Odion Ighalo", "Victor Osimhen", "Wilfred Ndidi", "Alex Iwobi", "Samuel Eto’o"
  ],

  America_Norte_Asia_Oceania: [
    "Ali Al-Habsi","Keylor Navas", // Costa Rica
    "Maya Yoshida", "Keisuke Honda", "Shinji Kagawa", "Takefusa Kubo", "Takumi Minamino", // Japón
    "Hee-chan Hwang", "Kim Min-jae", "Lee Kang-in", "Heung-min Son", // Corea del Sur
    "Tim Cahill", "Harry Souttar", "Mathew Ryan", // Australia
    "Clint Dempsey", "Landon Donovan", "Tyler Adams", "Weston McKennie", "Tim Weah", "Christian Pulisic", // EE.UU.
    "Alphonso Davies", "Jonathan David", // Canadá
    "Héctor Herrera", "Andrés Guardado", "Irving Lozano", "Raúl Jiménez" // México
  ],

  Sudamerica_Otros: [
    "Eduardo Vargas", "Arturo Vidal", "Gary Medel", "Alexis Sánchez", "Claudio Bravo", // Chile
    "Paolo Guerrero", "Jefferson Farfán", "Christian Cueva", // Perú
    "Salomón Rondón", "Tomás Rincón" // Venezuela
  ],

  Leyendas: [
    "Diego Maradona", "Pelé", "Diego Forlán", "Luis Suárez", "Lionel Messi", "Cristiano Ronaldo", "Ronaldinho", "Ronaldo Nazario", "Obdulio Varela",
    "Fernando Morena", "Diego Godín", "Enzo Francescoli", "Rubén Sosa", "Héctor Scarone", "Atilio García", "Luis Artime",
    "Gabriel Batistuta", "Juan Román Riquelme", "Javier Zanetti", "Hernán Crespo", "Esteban Cambiasso", "Walter Samuel", "Pablo Aimar",
    "David Beckham", "Francesco Totti", "Gianluigi Buffon", "Iker Casillas", "Carles Puyol", "David Villa", "Ruud van Nistelrooy", "Wesley Sneijder",
    "Guti", "Raúl González", "Arjen Robben", "Franck Ribéry", "Miroslav Klose", "Bastian Schweinsteiger", "Philipp Lahm", "Didier Drogba", "Yaya Touré", "Samuel Eto’o"
  ],

  Entrenadores: [
    "Diego Simeone", "José Mourinho", "Pep Guardiola", "Carlo Ancelotti", "Zinedine Zidane", "Óscar Washington Tabárez"
  ]
  
};

window.famososPorTematica = famososPorTematica;

// =========================================================
// INSERCIÓN AL FINAL DE tematicas.js
// Esto permite que el servidor de Node.js pueda importar el objeto de temáticas
// =========================================================
module.exports = { famososPorTematica };
