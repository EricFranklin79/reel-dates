// Date/title pairs transcribed from Christian Høkaas's own calendar index.
// This is a discovery source, not a claim that each scene was independently checked.
// The creator explains that entries use dates on screen, in dialogue, or in story events.
export const calendarSource = {
  author: "Christian Høkaas",
  index: "https://www.reddit.com/r/movies/comments/18v8p2o/comment/kfqfxc6/",
  methodology:
    "https://www.reddit.com/r/movies/comments/18v8p2o/the_movie_calendar_a_supercut_of_366_movies/",
  compilation: "https://www.youtube.com/watch?v=AXNlLiNHKLc",
  accessed: "2026-10-06",
};

export interface CalendarPick {
  date: string;
  title: string;
}

// Every line represents the next day of the month, including February 29.
// Use explicit year/edition names where the index identifies them.
// Feb 9's source typo "While We're Sleeping" is resolved to While You Were
// Sleeping (1995), checked against the clip and screenplay. Mr. Nobody remains
// a separately supported February 9 match in reviewed-movies.ts.
const months = [
  `Prometheus
Trading Places
The Terminal
Aguirre, the Wrath of God
The Time Machine (1960)
The Hunchback of Notre Dame
Ready Player One
Blade Runner
Kramer vs. Kramer
Holiday (1938)
The Social Network
2001: A Space Odyssey
Sicko
Chicago
Sully
The Public Enemy (1931)
Au revoir les enfants
Midnight Special
The Sixth Sense
The Fugitive
Rain Man
Zulu
I'm Not There
Evil Dead Rise
La La Land
L.A. Confidential
X-Men: Days of Future Past
The Adventures of Tintin
Shaft
2010: The Year We Make Contact
Nomadland`,
  `Scott Pilgrim vs. the World
Groundhog Day
The Good, the Bad and the Ugly
Patty Hearst
Click
Twin Peaks: Fire Walk with Me
Uncertain Glory (1944)
The Prestige
While You Were Sleeping
Gran Torino
The Song of Bernadette
Watchmen
The Darjeeling Limited
Eternal Sunshine of the Spotless Mind
Eyes Without a Face
La Vie en Rose
Samurai Assassin
Inside Llewyn Davis
The Matrix
Murders in the Zoo
Dragnet
Hot Fuzz
The Umbrellas of Cherbourg
Working Girl
Drive My Car
Cure (1997)
The Great White Silence
Scarface
Leap Year`,
  `The French Dispatch
Men in Black
The Miracle Worker
Arsenic and Old Lace
Vertigo
Liar Liar
Uncommon Valor
Deadpool
Good Night, and Good Luck
Changeling (2008)
The Lives of Others
The Cabinet of Dr. Caligari
The Devil Wears Prada
Network
La Dolce Vita
Sleepers
The Boondock Saints
The Fifth Element
Fahrenheit 9/11
Heaven Can Wait
THX 1138
The Man Who Knew Too Much (1934)
Singin' in the Rain
The Breakfast Club
Dumb and Dumber
Dial M for Murder
Planet of the Apes
Captain Phillips
The Net
Everest
Ready to Wear`,
  `April Fool's Day
Saving Mr. Banks
Big Fish
Le Samouraï
Star Trek: First Contact
1917
Apocalypse Now
Empire Records
Life Is Beautiful
I Am Sam
Apollo 13
The Fan
Lean on Me
The Birth of a Nation
Titanic
One Missed Call
Caché
The Accused
Ed Wood
Clerks
Koyaanisqatsi
Minority Report
Face/Off
Notorious
Akira
127 Hours
Cloverfield
Chungking Express
The Godfather
Downfall`,
  `The Wicker Man
The Mitchells vs. the Machines
Horror of Dracula
Juno
The Right Stuff
The Hindenburg
My Girl
The Secret Life of Walter Mitty
Gunga Din
Taxi Driver
Mars Attacks!
The Bridge on the River Kwai
The Adventures of Sherlock Holmes
Trouble in Paradise
BlacKkKlansman
The Incredibles
Memphis Belle
A Few Good Men
She's Gotta Have It
My Fair Lady
Bill & Ted's Excellent Adventure
Z
The Champ
The Time Machine (2002)
Carrie
Suicide Club
Thunderball
Dazed and Confused
Mary, Mary, Bloody Mary
Fallen Angels
Journey to the Center of the Earth`,
  `Shaun the Sheep Movie
Hairspray
Fast Times at Ridgemont High
Basic Instinct
Ferris Bueller's Day Off
The Omen
Ghost World
Office Space
Glory
Cop
M
Aliens
Friday the 13th
The Discreet Charm of the Bourgeoisie
Barry Lyndon
Before Sunrise
All the President's Men
Man of Marble
Lilya 4-ever
Captain Blood
A Town Called Panic
A Mighty Wind
Ratatouille
Midsommar
Iron Man 3
Amistad
Somewhere in Time
Rosemary's Baby
Tenet
Blade Runner 2049`,
  `An Affair to Remember (1957)
Independence Day
The Return of the Living Dead
The Shining
Oldboy
Casino Royale
The Aviator
The Silence of the Lambs
You Only Live Twice
The Green Mile
Spider-Man: Across the Spider-Verse
Nosferatu
Amarcord
Roman Holiday
Looper
Double Indemnity
Whiplash
The Day the Earth Stood Still
The Island
First Man
Indochine
Collateral
Promising Young Woman
When Worlds Collide
Gangs of New York
Che: Part One
High Noon
Bridesmaids
Top Gun
The Caine Mutiny
Harry Potter and the Philosopher's Stone`,
  `The White Ribbon
Point Break
The Spy Who Loved Me
Mamma Mia!
Do the Right Thing
Hiroshima mon amour
Marriage Story
Go, Go Second Time Virgin
Anatomy of a Fall
Hackers
North by Northwest
Harry Potter and the Order of the Phoenix
District 9
Captain America: The Winter Soldier
Who Framed Roger Rabbit
Deep Impact
The Tale
The Texas Chain Saw Massacre
Inception
Indiana Jones and the Dial of Destiny
To Kill a Mockingbird
Dog Day Afternoon
Night of the Living Dead (1990)
Avatar
The Day of the Jackal
The Trial of the Chicago 7
A Man Called Ove
Clueless
Terminator 2: Judgment Day
The Killer
Oslo, August 31st`,
  `All About Lily Chou-Chou
Gone with the Wind
The Red Shoes
Stand by Me
3 Idiots
The Producers
Monsters University
The Great Beauty
Phenomena
Saw
World Trade Center
The Tin Drum
In the Heat of the Night
Rocky
The Square
The Killing of a Sacred Deer
Wallace & Gromit: The Curse of the Were-Rabbit
Happy Death Day
Ringu
Eternity and a Day
Grave of the Fireflies
The Shawshank Redemption
Air Force One
The Battle of Algiers
Demolition Man
James and the Giant Peach
Lorenzo's Oil
Amélie
Chinatown
Cries and Whispers`,
  `Willy Wonka & the Chocolate Factory
Paranormal Activity
Mean Girls
Your Name
The Boston Strangler
Jacob's Ladder
Good Bye, Lenin!
Lawrence of Arabia
Schindler's List
The Shape of Water
The Parent Trap
White Heat
Suspiria
Witness for the Prosecution
The Testament of Dr. Mabuse
Get on the Bus
Avengers: Endgame
Annie
The Wolf of Wall Street
I, Daniel Blake
Back to the Future Part II
Spider-Man
Memories of Murder
The Lord of the Rings: The Fellowship of the Ring
Breakfast at Tiffany's
Death Becomes Her
E.T. the Extra-Terrestrial
Fellini's Roma
Halloween H20: 20 Years Later
Donnie Darko
Halloween`,
  `Paris, Texas
Das Boot
The Thing from Another World
Drifting Clouds
V for Vendetta
Brokeback Mountain
The Talented Mr. Ripley
Marty
Palm Springs
Contact
Batman
Anomalisa
The Amityville Horror
Awakenings
Animal House
Children of Men
Knives Out
Zodiac
Twelve Monkeys
Napoleon Dynamite
Dr. Mabuse, the Gambler
JFK
The Double Life of Véronique
The Blue Angel
Arthur Christmas
Magnolia
Dragon: The Bruce Lee Story
No Country for Old Men
Raising Arizona
Dope`,
  `The Hunt
Casablanca
Pleasantville
Close Encounters of the Third Kind
Vanilla Sky
The Shop Around the Corner
Mudbound
20,000 Leagues Under the Sea
The Fog
A Beautiful Mind
Psycho
Prisoners
The Truman Show
National Lampoon's Christmas Vacation
From Here to Eternity
The Holdovers
The Help
A Tale of Winter
The Karate Kid
4 Months, 3 Weeks and 2 Days
2012
The English Patient
Home Alone
It's a Wonderful Life
Toy Story
The Impossible
Reversal of Fortune
Silver Linings Playbook
The Hudsucker Proxy
Strange Days
When Harry Met Sally...`,
];

// Independently checked replacements for dates whose original pick could not be confirmed.
// The original index above remains intact for provenance; see research/verification-status.json.
export const calendarReplacements: Record<string, string> = {
  "01-16": "Argo",
  "01-23": "Kramer vs. Kramer",
  "01-27": "Kidnapping Inc.",
  "02-04": "The Social Network",
  "02-14": "Demolition Man",
  "03-03": "Samurai Assassin",
  "03-05": "Chicago",
  "03-27": "Dial M for Murder",
  "04-12": "Hidden Figures",
  "04-14": "Titanic",
  "04-20": "The Fog",
  "04-21": "Amarcord",
  "04-29": "Hot Fuzz",
  "04-30": "Chungking Express",
  "05-27": "V for Vendetta",
  "05-29": "Suicide Club",
  "05-31": "Suicide Club",
  "06-04": "Logan Lucky",
  "06-05": "Brokeback Mountain",
  "06-08": "Singin' in the Rain",
  "06-24": "Beyond the Law",
  "07-09": "Double Indemnity",
  "07-14": "The Day of the Jackal",
  "07-20": "Apollo 13",
  "07-27": "K-PAX",
  "07-31": "The Caine Mutiny",
  "08-05": "The Omega Man",
  "08-06": "Godzilla (2014)",
  "08-14": "The Day of the Jackal",
  "08-15": "3 Idiots",
  "09-02": "A Few Good Men",
  "09-04": "Watchmen",
  "09-10": "The Trial of the Chicago 7",
  "09-13": "Ringu",
  "09-22": "Network",
  "10-17": "Scanners III: The Takeover",
  "10-22": "Frequency",
  "10-27": "Back to the Future Part III",
  "11-11": "Suspiria",
  "11-24": "Drive My Car",
  "12-01": "The Social Network",
  "12-08": "Crawlspace",
  "12-10": "The Social Network",
  "12-20": "Reversal of Fortune",
  "12-23": "Home Alone 2: Lost in New York",
};

export const calendarPicks: CalendarPick[] = months.flatMap((month, index) =>
  month.split("\n").map((originalTitle, day) => {
    const date = `${String(index + 1).padStart(2, "0")}-${String(day + 1).padStart(2, "0")}`;
    return { date, title: calendarReplacements[date] ?? originalTitle };
  }),
);
