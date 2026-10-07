import type { Movie } from "../types";
// Only in-film connections belong here. Release years are display-only.
export const originalMovies: Movie[] = [
  {
    id: "groundhog-day",
    title: "Groundhog Day",
    year: 1993,
    genre: "Comedy · Fantasy",
    duration: "1h 41m",
    art: "groundhog",
    motif: "AGAIN.\nAND AGAIN.",
    description:
      "One small town. One very long day. A cynical weatherman gets a second chance, over and over again.",
    connections: [
      {
        date: "02-02",
        type: "Plot",
        label: "The day that never ends",
        explanation:
          "Phil Connors is trapped in a time loop, reliving February 2 while reporting on Groundhog Day in Punxsutawney.",
        source: "https://catalog.afi.com/Film/59539-GROUNDHOG-DAY",
        sourceLabel: "AFI film synopsis",
      },
    ],
  },
  {
    id: "miss-congeniality",
    title: "Miss Congeniality",
    year: 2000,
    genre: "Comedy · Crime",
    duration: "1h 49m",
    art: "congeniality",
    motif: "THE\nPERFECT DATE.",
    description:
      "An FBI agent goes undercover at a beauty pageant, where an innocent question gets an unforgettable answer.",
    connections: [
      {
        date: "04-25",
        type: "Dialogue",
        label: "A perfectly literal answer",
        explanation:
          "Asked to describe her perfect date, Miss Rhode Island names April 25, explaining that its mild weather only calls for a light jacket.",
        source: "https://time.com/4740947/perfect-date-miss-congeniality/",
        sourceLabel: "TIME on the film’s date scene",
      },
    ],
  },
  {
    id: "independence-day",
    title: "Independence Day",
    year: 1996,
    genre: "Sci-fi · Action",
    duration: "2h 25m",
    art: "independence",
    motif: "OUR WORLD.\nOUR LAST CHANCE.",
    description:
      "As alien ships loom over Earth, an unlikely group of survivors prepares to fight for humanity’s future.",
    connections: [
      {
        date: "07-04",
        type: "Plot",
        label: "Humanity’s independence day",
        explanation:
          "The survivors launch their coordinated counterattack against the alien invasion on July 4. The holiday becomes a turning point in the story.",
        source: "https://www.imdb.com/title/tt0116629/plotsummary/",
        sourceLabel: "IMDb plot synopsis",
      },
    ],
  },
  {
    id: "back-to-the-future-2",
    title: "Back to the Future Part II",
    year: 1989,
    genre: "Sci-fi · Adventure",
    duration: "1h 48m",
    art: "future",
    motif: "THE FUTURE\nIS A DATE.",
    description:
      "Marty and Doc take the DeLorean into the future, where fixing one problem starts a whole new timeline.",
    connections: [
      {
        date: "10-21",
        type: "Setting",
        label: "Destination: the future",
        explanation:
          "The DeLorean takes Marty, Doc, and Jennifer to October 21, 2015. That date is the actual destination within the film’s story.",
        storyYear: 2015,
        source:
          "https://en.wikipedia.org/wiki/Marty_McFly#Back_to_the_Future_Part_II",
        sourceLabel: "Marty McFly story summary",
      },
    ],
  },
  {
    id: "halloween",
    title: "Halloween",
    year: 1978,
    genre: "Horror · Thriller",
    duration: "1h 31m",
    art: "halloween",
    motif: "THE NIGHT\nHE CAME HOME.",
    description:
      "A quiet Halloween in Haddonfield turns into a terrifying night for a teenage babysitter and her friends.",
    connections: [
      {
        date: "10-31",
        type: "Setting",
        label: "Halloween in Haddonfield",
        explanation:
          "Michael Myers stalks Laurie Strode and her friends on Halloween night, October 31, 1978. The holiday is the setting for the main story.",
        storyYear: 1978,
        source: "https://www.imdb.com/title/tt0077651/plotsummary/",
        sourceLabel: "IMDb plot synopsis",
      },
    ],
  },
  {
    id: "v-for-vendetta",
    title: "V for Vendetta",
    year: 2005,
    genre: "Thriller · Drama",
    duration: "2h 12m",
    art: "vendetta",
    motif: "REMEMBER\nTHE FIFTH.",
    description:
      "In a totalitarian London, a masked revolutionary and a young woman set a rebellion in motion.",
    connections: [
      {
        date: "11-05",
        type: "Plot",
        label: "Remember the fifth of November",
        explanation:
          "V calls on the people of London to gather on November 5 for his planned uprising. The date anchors his actions and the film’s climax.",
        source: "https://www.imdb.com/title/tt0434409/plotsummary",
        sourceLabel: "IMDb plot synopsis",
      },
    ],
  },
  {
    id: "back-to-the-future",
    title: "Back to the Future",
    year: 1985,
    genre: "Sci-fi · Adventure",
    duration: "1h 56m",
    art: "future",
    motif: "A LITTLE\nBEFORE HIS TIME.",
    description:
      "Marty McFly accidentally travels to the past and has to bring his parents together to save his own future.",
    connections: [
      {
        date: "11-05",
        type: "Setting",
        label: "The day Doc had an idea",
        explanation:
          "Marty arrives on November 5, 1955, the day Doc Brown conceived the flux capacitor. The destination date appears on the time machine’s display.",
        storyYear: 1955,
        source: "https://en.wikipedia.org/wiki/Back_to_the_Future#Plot",
        sourceLabel: "Film plot summary",
      },
    ],
  },
  {
    id: "die-hard",
    title: "Die Hard",
    year: 1988,
    genre: "Action · Thriller",
    duration: "2h 12m",
    art: "diehard",
    motif: "ONE NIGHT.\nONE WAY OUT.",
    description:
      "A holiday reunion becomes a one-man rescue mission when armed thieves take over a Los Angeles skyscraper.",
    connections: [
      {
        date: "12-24",
        type: "Setting",
        label: "Christmas Eve at Nakatomi Plaza",
        explanation:
          "John McClane visits his wife’s office Christmas Eve party on December 24. The takeover and his rescue mission unfold during that party.",
        source: "https://www.imdb.com/title/tt0095016/plotsummary/",
        sourceLabel: "IMDb plot synopsis",
      },
    ],
  },
  {
    id: "home-alone",
    title: "Home Alone",
    year: 1990,
    genre: "Comedy · Family",
    duration: "1h 43m",
    art: "homealone",
    motif: "HOME.\nALL BY HIMSELF.",
    description:
      "Left behind on a family vacation, Kevin McCallister finds a very inventive way to defend his home.",
    connections: [
      {
        date: "12-24",
        type: "Plot",
        label: "Kevin’s Christmas Eve defense",
        explanation:
          "Kevin overhears Harry and Marv planning to rob his house on Christmas Eve, December 24, and prepares his traps for that night.",
        source: "https://en.wikipedia.org/wiki/Home_Alone#Plot",
        sourceLabel: "Film plot summary",
      },
    ],
  },
];

// Detailed entries take precedence over an index-only entry for the same film/day.
// Reference metadata and date evidence are kept separate.
