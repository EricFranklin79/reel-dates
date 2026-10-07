import type { MovieConnection } from "../types.ts";

// Checked in-film dates and written story sources; captions alone do not verify a connection.
// Clip timestamps refer to the public compilation, not a full-film edition.
export type ConnectionReview = MovieConnection & { title: string };
export const connectionReviews: ConnectionReview[] = [
  {
    title: "Prometheus",
    date: "01-01",
    type: "Dialogue",
    label: "Shaw’s New Year’s Day message",
    explanation:
      "Elizabeth Shaw’s closing recorded message identifies the day as New Year’s Day in 2094, giving the film an explicit January 1 reference.",
    storyYear: 2094,
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=prometheus",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Trading Places",
    date: "01-02",
    type: "Dialogue",
    label: "An inconvenient engagement-party date",
    explanation:
      "Penelope proposes January 2 for their engagement party. Winthorpe objects because the crop reports make it a busy day at the commodities exchange.",
    evidence: "scene-source",
    source: "https://catalog.afi.com/Film/67293-TRADING-PLACES",
    sourceLabel: "AFI film synopsis",
    clipTimestamp: 4,
  },
  {
    title: "The Terminal",
    date: "01-03",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The airport staff’s betting pool includes January 3 as a prediction for when Viktor will leave the terminal.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=terminal-the",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 5,
  },
  {
    title: "Aguirre, the Wrath of God",
    date: "01-04",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows January 4 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=7s",
    sourceLabel: "Film excerpt at 0:07",
    clipTimestamp: 7,
  },
  {
    title: "The Time Machine (1960)",
    date: "01-05",
    type: "Setting",
    label: "George’s return to dinner",
    explanation:
      "George returns to his London home, exhausted from his journey through time, for the dinner arranged for January 5, 1900.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/The_Time_Machine_(1960_film)#Plot",
    sourceLabel: "Film plot synopsis",
    storyYear: 1900,
  },
  {
    title: "The Hunchback of Notre Dame",
    date: "01-06",
    type: "Dialogue",
    label: "The Feast of Fools",
    explanation:
      "Clopin’s Topsy Turvy song names January 6 as the date of the Feast of Fools. Lyricist Stephen Schwartz discusses this date-bearing lyric on his own website.",
    evidence: "scene-source",
    source:
      "https://stephenschwartz.com/wp-content/uploads/2017/05/DisneyHunchbackMovie.pdf",
    sourceLabel: "Film lyricist’s discussion",
  },
  {
    title: "Ready Player One",
    date: "01-07",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Halliday’s death on January 7, 2040 is announced in the story before the virtual-world inheritance contest begins.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=ready-player-one",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 20,
  },
  {
    title: "Blade Runner",
    date: "01-08",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows January 8 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=23s",
    sourceLabel: "Film excerpt at 0:23",
    clipTimestamp: 23,
  },
  {
    title: "Kramer vs. Kramer",
    date: "01-09",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Ted learns that the custody hearing has been scheduled for January 9.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=kramer-vs-kramer",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 24,
  },
  {
    title: "Holiday (1938)",
    date: "01-10",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The proposed wedding date is January 10, discussed during the family’s engagement negotiations.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=holiday-1938",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 27,
  },
  {
    title: "The Social Network",
    date: "01-11",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The deposition dialogue identifies January 11, 2004 as the date Mark registered the Facebook domain.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=social-network-the",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 29,
  },
  {
    title: "2001: A Space Odyssey",
    date: "01-12",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "HAL says that he became operational in Urbana, Illinois on January 12, 1992.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=2001-a-space-odyssey",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 39,
  },
  {
    title: "Sicko",
    date: "01-13",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "An interviewee identifies January 13 as her birthday while recalling her husband’s final illness.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=sicko",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 45,
  },
  {
    title: "Chicago",
    date: "01-14",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "During Roxie’s trial, the questioning asks her to recall the events of the night of January 14.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=chicago",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Sully",
    date: "01-15",
    type: "Plot",
    label: "Flight 1549’s emergency landing",
    explanation:
      "The film reenacts the January 15, 2009 flight on which Sully and Jeff Skiles land their disabled airliner on the Hudson River.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/Sully_(film)#Plot",
    sourceLabel: "Film plot synopsis",
    clipTimestamp: 51,
    storyYear: 2009,
  },
  {
    title: "Argo",
    date: "01-16",
    type: "Dialogue",
    label: "The hostage-crisis broadcast",
    explanation:
      "A television report inside the film announces Wednesday, January 16, 1980 as the 74th day of the Iran hostage crisis.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=argo",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Au revoir les enfants",
    date: "01-17",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows January 17 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=62s",
    sourceLabel: "Film excerpt at 1:02",
    clipTimestamp: 62,
  },
  {
    title: "Midnight Special",
    date: "01-18",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Investigators identify a sermon reading dated January 18, 2010 while questioning its coded information.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=midnight-special",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 66,
  },
  {
    title: "The Sixth Sense",
    date: "01-19",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "Malcolm’s case notes for ten-year-old Vincent Grey date the initial consultation January 19. The connection comes from the handwritten patient record.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=69s",
    sourceLabel: "Film excerpt at 1:09",
    clipTimestamp: 69,
  },
  {
    title: "The Fugitive",
    date: "01-20",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The prosecution identifies January 20 as the night of Helen Kimble’s murder.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=fugitive-the",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 74,
  },
  {
    title: "Rain Man",
    date: "01-21",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Raymond remembers leaving the family home on January 21, 1965.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=rain-man",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 76,
  },
  {
    title: "Zulu",
    date: "01-22",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The closing narration dates the defense of Rorke’s Drift to January 22–23, 1879.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=zulu",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 83,
  },
  {
    title: "Kramer vs. Kramer",
    date: "01-23",
    type: "Dialogue",
    label: "The custody order",
    explanation:
      "The custody order takes effect Monday, January 23, and specifies Ted’s support payments and visitation rights.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=kramer-vs-kramer",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Evil Dead Rise",
    date: "01-24",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The recorded priest identifies the day of his reading as January 24, 1923.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=evil-dead-rise",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 89,
  },
  {
    title: "La La Land",
    date: "01-25",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "Mia’s phone shows a January 25 reminder labelled “Audition!” while she is at the café.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=95s",
    sourceLabel: "Film excerpt at 1:35",
    clipTimestamp: 95,
  },
  {
    title: "L.A. Confidential",
    date: "01-26",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The Los Angeles Times prop reporting the Nite Owl shootout is dated January 26, 1953.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=97s",
    sourceLabel: "Film excerpt at 1:37",
    clipTimestamp: 97,
  },
  {
    title: "Kidnapping Inc.",
    date: "01-27",
    type: "Dialogue",
    label: "The ransom video",
    explanation:
      "The kidnappers’ ransom video explicitly gives January 27, 2017 as the date of their demand for Benjamin’s release.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=kidnapping-inc",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The Adventures of Tintin",
    date: "01-28",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The newspaper reporting Tintin’s exposure of a gang carries a January 28 date under its masthead.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=106s",
    sourceLabel: "Film excerpt at 1:46",
    clipTimestamp: 106,
  },
  {
    title: "Shaft",
    date: "01-29",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The police-station desk calendar reads January 29 while Shaft talks to the detectives.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=110s",
    sourceLabel: "Film excerpt at 1:50",
    clipTimestamp: 110,
  },
  {
    title: "2010: The Year We Make Contact",
    date: "01-30",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The secret directive connected to HAL’s instructions is dated January 30, 2001 in the dialogue.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=2010-the-year-we-make-contact",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 111,
  },
  {
    title: "Nomadland",
    date: "01-31",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows January 31 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=113s",
    sourceLabel: "Film excerpt at 1:53",
    clipTimestamp: 113,
  },
  {
    title: "Scott Pilgrim vs. the World",
    date: "02-01",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The vegan police accuse Todd of eating gelato on February 1, violating the rules behind his powers.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=scott-pilgrim-vs-the-world",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 128,
  },
  {
    title: "The Good, the Bad and the Ugly",
    date: "02-03",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows February 3 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=144s",
    sourceLabel: "Film excerpt at 2:24",
    clipTimestamp: 144,
  },
  {
    title: "The Social Network",
    date: "02-04",
    type: "In-film date",
    label: "Facebook’s launch inside the story",
    explanation:
      "The film labels the scene in which Mark adds relationship status to Facebook and launches the site February 4, 2004.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=social-network-the",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Click",
    date: "02-05",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "A radio bulletin announces February 5, 2017 after Michael has skipped forward in his life.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=click",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Twin Peaks: Fire Walk with Me",
    date: "02-06",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "Laura’s diary page is headed February 6. The date refers to the written entry seen in the film, rather than to the whole week of its story.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=160s",
    sourceLabel: "Film excerpt at 2:40",
    clipTimestamp: 160,
  },
  {
    title: "Uncertain Glory (1944)",
    date: "02-07",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Inspector Bonet’s interrogation begins with Picard’s movements on February 7.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=uncertain-glory",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 163,
  },
  {
    title: "The Prestige",
    date: "02-08",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Angier’s diary entry for February 8, 1899 describes Tesla agreeing to see him.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=the-prestige",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 166,
  },
  {
    title: "While You Were Sleeping",
    date: "02-09",
    type: "Dialogue",
    label: "Saul remembers his wife",
    explanation:
      "Saul tells Lucy that his wife of 51 years died two years earlier on February 9. The connection is a date spoken by a character.",
    evidence: "scene-source",
    source:
      "https://assets.scriptslug.com/live/pdf/scripts/while-you-were-sleeping-1995.pdf",
    sourceLabel: "Screenplay: Saul’s conversation with Lucy",
    clipTimestamp: 174,
  },
  {
    title: "Gran Torino",
    date: "02-10",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "Walt Kowalski’s hospital admittance form lists his birthday as 02-10-30, an in-film February 10 reference.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=177s",
    sourceLabel: "Film excerpt at 2:57",
    clipTimestamp: 177,
  },
  {
    title: "The Song of Bernadette",
    date: "02-11",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Bernadette’s testimony places the firewood expedition associated with her vision on February 11, 1858.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=the-song-of-bernadette",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 180,
  },
  {
    title: "Watchmen",
    date: "02-12",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Doctor Manhattan’s narration identifies February 12, 1981 as the date Wally Weaver dies of cancer.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=watchmen",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The Darjeeling Limited",
    date: "02-13",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "Francis’s printed travel itinerary for the brothers’ train journey is dated 2-13-07: February 13, 2007.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=193s",
    sourceLabel: "Film excerpt at 3:13",
    clipTimestamp: 193,
  },
  {
    title: "Demolition Man",
    date: "02-14",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "A computerized medical announcement gives a deceased person’s birth date as February 14, 1967. This is dialogue inside the film, not the actor’s birthday.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=demolition-man",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Eyes Without a Face",
    date: "02-15",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows February 15 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=212s",
    sourceLabel: "Film excerpt at 3:32",
    clipTimestamp: 212,
  },
  {
    title: "La Vie en Rose",
    date: "02-16",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "An on-screen caption locates the performance in New York on February 16, 1959.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=216s",
    sourceLabel: "Film excerpt at 3:36",
    clipTimestamp: 216,
    storyYear: 1959,
  },
  {
    title: "Samurai Assassin",
    date: "02-17",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows February 17 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=220s",
    sourceLabel: "Film excerpt at 3:40",
    clipTimestamp: 220,
  },
  {
    title: "Inside Llewyn Davis",
    date: "02-18",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows February 18 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=225s",
    sourceLabel: "Film excerpt at 3:45",
    clipTimestamp: 225,
  },
  {
    title: "The Matrix",
    date: "02-19",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "A computer display dates the received call trace February 19, 1998.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=232s",
    sourceLabel: "Film excerpt at 3:52",
    clipTimestamp: 232,
    storyYear: 1998,
  },
  {
    title: "Murders in the Zoo",
    date: "02-20",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows February 20 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=238s",
    sourceLabel: "Film excerpt at 3:58",
    clipTimestamp: 238,
  },
  {
    title: "Dragnet",
    date: "02-21",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The closing account dates Jonathan Whirley’s trial to February 21.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=dragnet",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 245,
  },
  {
    title: "Hot Fuzz",
    date: "02-22",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "When an officer checks his age, a pub patron gives February 22 as his birthday.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=hot-fuzz",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 247,
  },
  {
    title: "The Umbrellas of Cherbourg",
    date: "02-23",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The letter being written to Monsieur Cassard is headed Cherbourg, February 23, 1958.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=253s",
    sourceLabel: "Film excerpt at 4:13",
    clipTimestamp: 253,
  },
  {
    title: "Working Girl",
    date: "02-24",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "A New York Post newspaper shown in the film is dated Wednesday, February 24.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=264s",
    sourceLabel: "Film excerpt at 4:24",
    clipTimestamp: 264,
  },
  {
    title: "Drive My Car",
    date: "02-25",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows February 25 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=266s",
    sourceLabel: "Film excerpt at 4:26",
    clipTimestamp: 266,
  },
  {
    title: "Cure (1997)",
    date: "02-26",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Mamiya asks the date at the beach and is told that it is February 26.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=cure",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The Great White Silence",
    date: "02-27",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows February 27 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=292s",
    sourceLabel: "Film excerpt at 4:52",
    clipTimestamp: 292,
  },
  {
    title: "Scarface",
    date: "02-28",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The surveillance video shown within the film carries a February 28, 1983 date stamp.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=302s",
    sourceLabel: "Film excerpt at 5:02",
    clipTimestamp: 302,
    storyYear: 1983,
  },
  {
    title: "Leap Year",
    date: "02-29",
    type: "In-film date",
    label: "Spoken date identified in captions",
    explanation:
      "The compilation’s automatic captions identify a spoken reference to February 29 in this film’s excerpt. This is a dialogue lead awaiting confirmation; automatic captions can contain errors.",
    evidence: "clip-caption",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=312s",
    sourceLabel: "Automatic captions near 5:12",
    clipTimestamp: 312,
  },
  {
    title: "The French Dispatch",
    date: "03-01",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The account of the student uprising dates the breakdown of negotiations to March 1.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=the-french-dispatch",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 316,
  },
  {
    title: "Men in Black",
    date: "03-02",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Kay explains that extraterrestrials made their first contact near New York on March 2, 1961.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=men-in-black",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 320,
  },
  {
    title: "Samurai Assassin",
    date: "03-03",
    type: "Dialogue",
    label: "The assassination mission",
    explanation:
      "The conspirators schedule their mission for March 3, 1860, during the Peach Observance at Edo Castle.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=samurai-assassin",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Arsenic and Old Lace",
    date: "03-04",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Teddy, who believes he is President Roosevelt, asks whether it is March 4 when told his term is over.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=arsenic-and-old-lace",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 333,
  },
  {
    title: "Chicago",
    date: "03-05",
    type: "Dialogue",
    label: "Velma’s trial date",
    explanation:
      "Mama Morton tells Velma that Billy Flynn has scheduled her trial for March 5.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=chicago",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Liar Liar",
    date: "03-06",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Court testimony dates surveillance of Mrs. Cole from March 6 through June 12.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=liar-liar",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 342,
  },
  {
    title: "Uncommon Valor",
    date: "03-07",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The televised account of prisoners returning from Vietnam identifies the day as March 7, 1973.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=uncommon-valor",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 347,
  },
  {
    title: "Deadpool",
    date: "03-08",
    type: "Dialogue",
    label: "International Women’s Day",
    explanation:
      "Wade and Vanessa’s holiday montage explicitly names International Women’s Day, the annual March 8 observance.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=deadpool",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Good Night, and Good Luck",
    date: "03-09",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Murrow refers to his March 9 report while responding to Senator McCarthy’s televised rebuttal.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=good-night-and-good-luck",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 359,
  },
  {
    title: "Changeling (2008)",
    date: "03-10",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows March 10 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=362s",
    sourceLabel: "Film excerpt at 6:02",
    clipTimestamp: 362,
  },
  {
    title: "The Lives of Others",
    date: "03-11",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows March 11 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=365s",
    sourceLabel: "Film excerpt at 6:05",
    clipTimestamp: 365,
  },
  {
    title: "The Cabinet of Dr. Caligari",
    date: "03-12",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The German diary intertitle names March 12, introducing the entry about the sleepwalker.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=372s",
    sourceLabel: "Film excerpt at 6:12",
    clipTimestamp: 372,
  },
  {
    title: "The Devil Wears Prada",
    date: "03-13",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The desk planner visible in the scene has March 13, Monday, at the top of its left-hand page.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=383s",
    sourceLabel: "Film excerpt at 6:23",
    clipTimestamp: 383,
  },
  {
    title: "Network",
    date: "03-14",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The narration dates the first broadcast of The Mao Tse-Tung Hour to March 14.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=network",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 388,
  },
  {
    title: "La Dolce Vita",
    date: "03-15",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows March 15 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=394s",
    sourceLabel: "Film excerpt at 6:34",
    clipTimestamp: 394,
  },
  {
    title: "Sleepers",
    date: "03-16",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The closing narration reports that John Reilly’s body was found on March 16, 1984.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=sleepers",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 397,
  },
  {
    title: "The Boondock Saints",
    date: "03-17",
    type: "Setting",
    label: "The Saint Patrick’s Day confrontation",
    explanation:
      "The brothers’ confrontation with Russian mobsters begins while they are celebrating Saint Patrick’s Day, March 17, in a Boston pub.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/The_Boondock_Saints#Plot",
    sourceLabel: "Film plot synopsis",
  },
  {
    title: "The Fifth Element",
    date: "03-18",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "Korben’s electronic display identifies the current date as March 18, 2263.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=410s",
    sourceLabel: "Film excerpt at 6:50",
    clipTimestamp: 410,
  },
  {
    title: "Fahrenheit 9/11",
    date: "03-19",
    type: "Dialogue",
    label: "The invasion of Iraq",
    explanation:
      "The documentary’s narration explicitly dates the United States invasion of Iraq March 19, 2003.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=fahrenheit-911",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Heaven Can Wait",
    date: "03-20",
    type: "Dialogue",
    label: "Joe’s scheduled death",
    explanation:
      "Mr. Jordan explains that Joe was taken to heaven prematurely: his scheduled death was March 20, 2025, at 10:17 a.m.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/Heaven_Can_Wait_(1978_film)#Plot",
    sourceLabel: "Film plot synopsis",
    clipTimestamp: 421,
    storyYear: 2025,
  },
  {
    title: "THX 1138",
    date: "03-21",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The electronic record for LUH 3417 displays the numeric date 3/21/75.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=426s",
    sourceLabel: "Film excerpt at 7:06",
    clipTimestamp: 426,
  },
  {
    title: "The Man Who Knew Too Much (1934)",
    date: "03-22",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows March 22 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=430s",
    sourceLabel: "Film excerpt at 7:10",
    clipTimestamp: 430,
  },
  {
    title: "Singin' in the Rain",
    date: "03-23",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Don calls March 23 his lucky day before learning that their late-night work has run into March 24.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=singin-in-the-rain",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 433,
  },
  {
    title: "The Breakfast Club",
    date: "03-24",
    type: "In-film date",
    label: "Spoken date identified in captions",
    explanation:
      "The compilation’s automatic captions identify a spoken reference to March 24 in this film’s excerpt. This is a dialogue lead awaiting confirmation; automatic captions can contain errors.",
    evidence: "clip-caption",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=437s",
    sourceLabel: "Automatic captions near 7:17",
    clipTimestamp: 437,
  },
  {
    title: "Dumb and Dumber",
    date: "03-25",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows March 25 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=438s",
    sourceLabel: "Film excerpt at 7:18",
    clipTimestamp: 438,
  },
  {
    title: "Dial M for Murder",
    date: "03-26",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "A check is identified as having been written on March 26, the day before the crime under investigation.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=dial-m-for-murder",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Dial M for Murder",
    date: "03-27",
    type: "Dialogue",
    label: "The stolen money",
    explanation:
      "The inspector says Tony has been living on the stolen money since March 27.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=dial-m-for-murder",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Captain Phillips",
    date: "03-28",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows March 28 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=459s",
    sourceLabel: "Film excerpt at 7:39",
    clipTimestamp: 459,
  },
  {
    title: "The Net",
    date: "03-29",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows March 29 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=465s",
    sourceLabel: "Film excerpt at 7:45",
    clipTimestamp: 465,
  },
  {
    title: "Everest",
    date: "03-30",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows March 30 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=471s",
    sourceLabel: "Film excerpt at 7:51",
    clipTimestamp: 471,
  },
  {
    title: "Ready to Wear",
    date: "03-31",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "A conversation identifies March 31 as the end of the Vogue contract.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=ready-to-wear",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 472,
  },
  {
    title: "April Fool's Day",
    date: "04-01",
    type: "Plot",
    label: "The island’s elaborate prank",
    explanation:
      "The friends’ island gathering and the mystery surrounding it are tied to April Fools’ Day and its tradition of pranks, providing an in-story April 1 connection.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/April_Fool%27s_Day_(1986_film)#Plot",
    sourceLabel: "Film plot synopsis",
  },
  {
    title: "Saving Mr. Banks",
    date: "04-02",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows April 2 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=480s",
    sourceLabel: "Film excerpt at 8:00",
    clipTimestamp: 480,
  },
  {
    title: "Big Fish",
    date: "04-03",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "Edward Bloom’s deposit ticket is dated 4-3, connecting this bank document within the story to April 3.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=482s",
    sourceLabel: "Film excerpt at 8:02",
    clipTimestamp: 482,
  },
  {
    title: "Le Samouraï",
    date: "04-04",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The opening intertitle gives the time as 6 p.m. on Saturday, April 4.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=488s",
    sourceLabel: "Film excerpt at 8:08",
    clipTimestamp: 488,
  },
  {
    title: "Star Trek: First Contact",
    date: "04-05",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Picard’s log dates the Phoenix’s successful warp flight and the impending first contact to April 5, 2063.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=star-trek-first-contact",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 493,
  },
  {
    title: "1917",
    date: "04-06",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows April 6 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=500s",
    sourceLabel: "Film excerpt at 8:20",
    clipTimestamp: 500,
  },
  {
    title: "Apocalypse Now",
    date: "04-07",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows April 7 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=507s",
    sourceLabel: "Film excerpt at 8:27",
    clipTimestamp: 507,
  },
  {
    title: "Empire Records",
    date: "04-08",
    type: "In-film date",
    label: "Rex Manning Day",
    explanation:
      "The in-store flyer dates Rex Manning’s appearance April 8. Cast member Ethan Embry discusses the date’s origin with the film’s writer in this interview; the date is on the flyer rather than spoken aloud.",
    evidence: "scene-source",
    source:
      "https://www.thewrap.com/empire-records-ethan-embry-rex-manning-day-grace-frankie/",
    sourceLabel: "Interview with cast member Ethan Embry",
    clipTimestamp: 514,
  },
  {
    title: "Life Is Beautiful",
    date: "04-09",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows April 9 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=516s",
    sourceLabel: "Film excerpt at 8:36",
    clipTimestamp: 516,
  },
  {
    title: "I Am Sam",
    date: "04-10",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Sam refers to April 10, 1970 as the Beatles’ breakup date during his testimony.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=i-am-sam",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 522,
  },
  {
    title: "Apollo 13",
    date: "04-11",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows April 11 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=525s",
    sourceLabel: "Film excerpt at 8:45",
    clipTimestamp: 525,
  },
  {
    title: "Hidden Figures",
    date: "04-12",
    type: "In-film date",
    label: "Gagarin’s spaceflight",
    explanation:
      "The film’s April 12, 1961 date card accompanies the television announcement of Yuri Gagarin’s spaceflight.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=hidden-figures",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Lean on Me",
    date: "04-13",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Principal Clark announces that the basic-skills examination will take place on April 13.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=lean-on-me",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 533,
  },
  {
    title: "Titanic",
    date: "04-14",
    type: "Dialogue",
    label: "The date on Rose’s portrait",
    explanation:
      "The drawing recovered from the wreck bears April 14, 1912, connecting Rose’s portrait and the diamond to the night of the sinking.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=titanic",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Titanic",
    date: "04-15",
    type: "Dialogue",
    label: "The sinking described by the expedition",
    explanation:
      "The expedition’s narration describes the wreck reaching the seabed in the early morning of April 15, 1912. The date is spoken within the film.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=titanic",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "One Missed Call",
    date: "04-16",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The Japanese date caption reads April 16 at 21:44 before the hospital scene.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=549s",
    sourceLabel: "Film excerpt at 9:09",
    clipTimestamp: 549,
  },
  {
    title: "Caché",
    date: "04-17",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows April 17 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=551s",
    sourceLabel: "Film excerpt at 9:11",
    clipTimestamp: 551,
  },
  {
    title: "The Accused",
    date: "04-18",
    type: "Plot",
    label: "The assault that starts the case",
    explanation:
      "The assault on Sarah Tobias that leads to the film’s criminal case takes place on April 18, 1987.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/The_Accused_(1988_film)#Plot",
    sourceLabel: "Film plot synopsis",
    clipTimestamp: 557,
    storyYear: 1987,
  },
  {
    title: "Ed Wood",
    date: "04-19",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Criswell predicts in his television broadcast that humans will have colonized Mars by April 19, 1970.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=ed-wood",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The Fog",
    date: "04-20",
    type: "Dialogue",
    label: "The conspiracy’s diary",
    explanation:
      "The priest reads an April 20 diary entry describing the conspirators’ plan to kill Blake and his companions.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=the-fog",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Amarcord",
    date: "04-21",
    type: "Dialogue",
    label: "The Rome celebration",
    explanation:
      "A speaker explicitly announces April 21 as the day of the celebration of Rome’s founding.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=amarcord",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Minority Report",
    date: "04-22",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "An in-world advertisement urges voters to approve the National Precrime Initiative on April 22.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=minority-report",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Face/Off",
    date: "04-23",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows April 23 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=584s",
    sourceLabel: "Film excerpt at 9:44",
    clipTimestamp: 584,
  },
  {
    title: "Notorious",
    date: "04-24",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows April 24 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=587s",
    sourceLabel: "Film excerpt at 9:47",
    clipTimestamp: 587,
  },
  {
    title: "Akira",
    date: "04-25",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "Kaneda’s record contains the numeric date 2017-4-25 in its list of entries. This visible document supplies the April 25 connection.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=595s",
    sourceLabel: "Film excerpt at 9:55",
    clipTimestamp: 595,
  },
  {
    title: "127 Hours",
    date: "04-26",
    type: "Plot",
    label: "Aron’s canyon hike",
    explanation:
      "Aron Ralston begins the Utah hike that leaves him trapped beneath a boulder on April 26, 2003.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/127_Hours#Plot",
    sourceLabel: "Film plot synopsis",
    storyYear: 2003,
  },
  {
    title: "Cloverfield",
    date: "04-27",
    type: "Setting",
    label: "Rob and Beth’s earlier recording",
    explanation:
      "The earlier footage preserved on the camcorder shows Rob and Beth together on April 27, 2008, before the monster attack.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/Cloverfield#Plot",
    sourceLabel: "Film plot synopsis",
    clipTimestamp: 611,
    storyYear: 2008,
  },
  {
    title: "Chungking Express",
    date: "04-28",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The clock in the scene displays Friday, April 28, alongside the time 8:59.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=622s",
    sourceLabel: "Film excerpt at 10:22",
    clipTimestamp: 622,
  },
  {
    title: "Hot Fuzz",
    date: "04-29",
    type: "Dialogue",
    label: "A murder in Angel’s investigation",
    explanation:
      "Angel’s arrest statement identifies April 29 as the date of George Merchant’s murder.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=hot-fuzz",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Chungking Express",
    date: "04-30",
    type: "Dialogue",
    label: "The pineapple expiration dates",
    explanation:
      "A supermarket clerk tells the officer it is April 30 while they argue about pineapple cans expiring on May 1.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=chungking-express",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The Wicker Man",
    date: "05-01",
    type: "Plot",
    label: "May Day on Summerisle",
    explanation:
      "The islanders’ May Day rituals and celebration are part of the events Howie investigates. May Day is May 1.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/The_Wicker_Man_(1973_film)#Plot",
    sourceLabel: "Film plot synopsis",
  },
  {
    title: "The Mitchells vs. the Machines",
    date: "05-02",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows May 2 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=640s",
    sourceLabel: "Film excerpt at 10:40",
    clipTimestamp: 640,
  },
  {
    title: "Horror of Dracula",
    date: "05-03",
    type: "Dialogue",
    label: "Jonathan Harker’s diary",
    explanation:
      "Jonathan Harker’s diary narration dates his arrival at Dracula’s castle May 3, 1885.",
    evidence: "scene-source",
    source: "https://www.stockq.org/moviescript/D/dracula-1958.php",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Juno",
    date: "05-04",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Juno tells the prospective adoptive parents that her baby is due on May 4.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=juno",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The Right Stuff",
    date: "05-05",
    type: "Plot",
    label: "Alan Shepard’s spaceflight",
    explanation:
      "The film depicts Alan Shepard’s Mercury-Redstone 3 mission on May 5, 1961, the first American flight into space.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/The_Right_Stuff_(film)#Plot",
    sourceLabel: "Film plot synopsis",
    clipTimestamp: 661,
    storyYear: 1961,
  },
  {
    title: "The Hindenburg",
    date: "05-06",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "A news account says that the Hindenburg is expected to arrive on the morning of May 6.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=the-hindenburg",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "My Girl",
    date: "05-07",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The funeral tribute gives Thomas J.’s birthday as May 7, 1961.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=my-girl",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 678,
  },
  {
    title: "The Secret Life of Walter Mitty",
    date: "05-08",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows May 8 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=683s",
    sourceLabel: "Film excerpt at 11:23",
    clipTimestamp: 683,
  },
  {
    title: "Gunga Din",
    date: "05-09",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Ballantine identifies the current day as May 9 while agreeing to accompany his fellow soldiers.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=gunga-din",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 685,
  },
  {
    title: "Taxi Driver",
    date: "05-10",
    type: "Dialogue",
    label: "A date named in the film",
    explanation: "Travis’s diary narration begins an entry dated May 10.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=taxi-driver",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 687,
  },
  {
    title: "Mars Attacks!",
    date: "05-11",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows May 11 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=690s",
    sourceLabel: "Film excerpt at 11:30",
    clipTimestamp: 690,
  },
  {
    title: "The Bridge on the River Kwai",
    date: "05-12",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Colonel Saito says his orders require the bridge to be completed by May 12.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=bridge-on-the-river-kwai-the",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The Adventures of Sherlock Holmes",
    date: "05-13",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The threatening drawing delivered to the woman is marked May 13, which Holmes identifies as the following day.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=adventures-of-sherlock-holmes-the",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Trouble in Paradise",
    date: "05-14",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The characters identify the current date as May 14 while discussing their plans.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=trouble-in-paradise",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 703,
  },
  {
    title: "BlacKkKlansman",
    date: "05-15",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "A witness recalls the lynching of Jesse Washington in Waco on May 15, 1916.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=blackkklansman",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 707,
  },
  {
    title: "The Incredibles",
    date: "05-16",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The Metroville Tribune newspaper Bob reads is dated Monday, May 16, 1962.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=712s",
    sourceLabel: "Film excerpt at 11:52",
    clipTimestamp: 712,
  },
  {
    title: "Memphis Belle",
    date: "05-17",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows May 17 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=714s",
    sourceLabel: "Film excerpt at 11:54",
    clipTimestamp: 714,
  },
  {
    title: "A Few Good Men",
    date: "05-18",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Santiago’s letter describes an incident during a training run on May 18.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=a-few-good-men",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 720,
  },
  {
    title: "She's Gotta Have It",
    date: "05-19",
    type: "Dialogue",
    label: "Nola’s birthday",
    explanation:
      "Nola tells Mars that her birthday is May 19 and that she shares it with Malcolm X. NPR’s interview with Spike Lee includes this dialogue from the original 1986 film.",
    evidence: "scene-source",
    source: "https://www.capradio.org/news/npr/story?storyid=g-s1-20044",
    sourceLabel: "NPR interview with excerpt of the film",
  },
  {
    title: "My Fair Lady",
    date: "05-20",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Eliza imagines the king proclaiming May 20 as a holiday in her honor during a song.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=my-fair-lady",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 732,
  },
  {
    title: "Bill & Ted's Excellent Adventure",
    date: "05-21",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The prom banner outside the school advertises May 21 in its right-hand heart.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=737s",
    sourceLabel: "Film excerpt at 12:17",
    clipTimestamp: 737,
  },
  {
    title: "Z",
    date: "05-22",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows May 22 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=743s",
    sourceLabel: "Film excerpt at 12:23",
    clipTimestamp: 743,
  },
  {
    title: "The Champ",
    date: "05-23",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The ringside doctor asks Billy the date, and Billy answers Thursday, May 23.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=the-champ",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 752,
  },
  {
    title: "The Time Machine (2002)",
    date: "05-24",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The time machine’s mechanical date display shows May 24 as it advances through the future.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=755s",
    sourceLabel: "Film excerpt at 12:35",
    clipTimestamp: 755,
  },
  {
    title: "Carrie",
    date: "05-25",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The senior-prom poster reflected in the school mirror announces May 25 as the prom date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=759s",
    sourceLabel: "Film excerpt at 12:39",
    clipTimestamp: 759,
  },
  {
    title: "Suicide Club",
    date: "05-26",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The Japanese date card reads May 26 before the railway-platform sequence.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=770s",
    sourceLabel: "Film excerpt at 12:50",
    clipTimestamp: 770,
  },
  {
    title: "V for Vendetta",
    date: "05-27",
    type: "Dialogue",
    label: "The laboratory diary",
    explanation:
      "Delia’s diary entry for May 27 describes Commander Prothero visiting the laboratory with Father Lilliman.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=v-for-vendetta",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Dazed and Confused",
    date: "05-28",
    type: "Setting",
    label: "The last day of school",
    explanation:
      "The students’ last school day, hazing rituals, and evening celebrations begin on May 28, 1976.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/Dazed_and_Confused_(film)#Plot",
    sourceLabel: "Film plot synopsis",
    clipTimestamp: 781,
    storyYear: 1976,
  },
  {
    title: "Suicide Club",
    date: "05-29",
    type: "In-film date",
    label: "The investigation’s dated chronology",
    explanation:
      "The film’s May 29 date card introduces the sequence in which Mitsuko is struck by her boyfriend as he jumps from a rooftop.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=suicide-club-2001",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Fallen Angels",
    date: "05-30",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows May 30 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=790s",
    sourceLabel: "Film excerpt at 13:10",
    clipTimestamp: 790,
  },
  {
    title: "Suicide Club",
    date: "05-31",
    type: "In-film date",
    label: "A dated news report",
    explanation:
      "A May 31 date card precedes a news report about the Suicide Club and its arrests.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=suicide-club-2001",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Shaun the Sheep Movie",
    date: "06-01",
    type: "In-film date",
    label: "A date visible in the film",
    explanation: "The farmer’s tear-off wall calendar shows Monday, June 1.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=800s",
    sourceLabel: "Film excerpt at 13:20",
    clipTimestamp: 800,
  },
  {
    title: "Hairspray",
    date: "06-02",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The television announcement schedules the Miss Teenage Hairspray event for Saturday, June 2.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=hairspray",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Fast Times at Ridgemont High",
    date: "06-03",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "Mr. Hand writes June 3 on the classroom blackboard beneath the final-exam announcement.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=804s",
    sourceLabel: "Film excerpt at 13:24",
    clipTimestamp: 804,
  },
  {
    title: "Logan Lucky",
    date: "06-04",
    type: "Dialogue",
    label: "The initial heist plan",
    explanation:
      "Jimmy names June 4 as the initial target date for the racetrack robbery, citing the small turnout and minimal security expected for an auto show. The plan later changes.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=logan-lucky",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Brokeback Mountain",
    date: "06-05",
    type: "Dialogue",
    label: "Alma Jr.’s wedding",
    explanation:
      "Alma Jr. tells Ennis that her wedding to Kurt will be June 5 at the Methodist church.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=brokeback-mountain",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The Omen",
    date: "06-06",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The grave markers investigated by Robert Thorn identify June 6 as the date associated with the infants and mother.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=omen-the",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Ghost World",
    date: "06-07",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "A personal advertisement describes an encounter on an airport shuttle on June 7.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=ghost-world",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Singin' in the Rain",
    date: "06-08",
    type: "Dialogue",
    label: "Lina’s contract",
    explanation:
      "Lina cites her contract dated June 8, 1925 while asserting control over the studio’s publicity for her career.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=singin-in-the-rain",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Glory",
    date: "06-09",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows June 9 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=848s",
    sourceLabel: "Film excerpt at 14:08",
    clipTimestamp: 848,
  },
  {
    title: "Cop",
    date: "06-10",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Hopkins points out that four suspicious deaths occurred on June 10 in different years.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=cop",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 857,
  },
  {
    title: "M",
    date: "06-11",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The German newspaper notice refers to a child reported missing on June 11.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=870s",
    sourceLabel: "Film excerpt at 14:30",
    clipTimestamp: 870,
  },
  {
    title: "Aliens",
    date: "06-12",
    type: "Dialogue",
    label: "The colony directive",
    explanation:
      "Burke cites the colony-law directive dated 6/12/79 while disputing Ripley’s proposed destruction of the facility. The spoken numeric date supplies June 12.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=aliens",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Friday the 13th",
    date: "06-13",
    type: "Setting",
    label: "The camp’s fatal reopening",
    explanation:
      "The present-day Camp Crystal Lake story is introduced by a title card specifying Friday, June 13. The film title alone is not the evidence.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/Friday_the_13th_(1980_film)#Plot",
    sourceLabel: "Film plot synopsis",
    clipTimestamp: 896,
  },
  {
    title: "The Discreet Charm of the Bourgeoisie",
    date: "06-14",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows June 14 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=900s",
    sourceLabel: "Film excerpt at 15:00",
    clipTimestamp: 900,
  },
  {
    title: "Barry Lyndon",
    date: "06-15",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The narrator dates Barry’s marriage to the Countess of Lyndon to June 15, 1773.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=barry-lyndon",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 905,
  },
  {
    title: "Before Sunrise",
    date: "06-16",
    type: "In-film date",
    label: "Spoken date identified in captions",
    explanation:
      "The compilation’s automatic captions identify a spoken reference to June 16 in this film’s excerpt. This is a dialogue lead awaiting confirmation; automatic captions can contain errors.",
    evidence: "clip-caption",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=922s",
    sourceLabel: "Automatic captions near 15:22",
    clipTimestamp: 922,
  },
  {
    title: "All the President's Men",
    date: "06-17",
    type: "Plot",
    label: "The Watergate break-in",
    explanation:
      "The Watergate burglary and arrests on June 17, 1972 set the journalists’ investigation in motion within the film.",
    evidence: "scene-source",
    source:
      "https://en.wikipedia.org/wiki/All_the_President%27s_Men_(film)#Plot",
    sourceLabel: "Film plot synopsis",
    clipTimestamp: 927,
    storyYear: 1972,
  },
  {
    title: "Man of Marble",
    date: "06-18",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows June 18 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=933s",
    sourceLabel: "Film excerpt at 15:33",
    clipTimestamp: 933,
  },
  {
    title: "Lilya 4-ever",
    date: "06-19",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows June 19 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=939s",
    sourceLabel: "Film excerpt at 15:39",
    clipTimestamp: 939,
  },
  {
    title: "Captain Blood",
    date: "06-20",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The pirate crew’s articles of agreement are formally dated June 20, 1687 in the spoken reading.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=captain-blood",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "A Town Called Panic",
    date: "06-21",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "A character confirms that his birthday falls on June 21, as shown in the film’s English subtitles.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=951s",
    sourceLabel: "Film excerpt at 15:51",
    clipTimestamp: 951,
  },
  {
    title: "A Mighty Wind",
    date: "06-22",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The deputy mayor declares Saturday, June 22 to be Folk Music Day in New York.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=a-mighty-wind",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 958,
  },
  {
    title: "Ratatouille",
    date: "06-23",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "Gusteau’s last will and testament has a June 23 date beneath the words Made in Paris.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=963s",
    sourceLabel: "Film excerpt at 16:03",
    clipTimestamp: 963,
  },
  {
    title: "Beyond the Law",
    date: "06-24",
    type: "Dialogue",
    label: "Dan Saxon’s identity",
    explanation:
      "Conroy Price identifies Dan Saxon’s original name and gives his birth date as June 24, 1966.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=beyond-the-law",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Iron Man 3",
    date: "06-25",
    type: "In-film date",
    label: "Date visible in the film",
    explanation: "An AIM computer record shown in the film is dated 06/25/09.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=975s",
    sourceLabel: "Film excerpt at 16:15",
    clipTimestamp: 975,
    storyYear: 2009,
  },
  {
    title: "Amistad",
    date: "06-26",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "A lawyer cites a purchase receipt dated June 26, 1839 during the court proceedings.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=amistad",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 981,
  },
  {
    title: "Somewhere in Time",
    date: "06-27",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Richard repeats June 27, 1912 while trying to place himself in the past through self-suggestion.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=somewhere-in-time",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 982,
  },
  {
    title: "Rosemary's Baby",
    date: "06-28",
    type: "Dialogue",
    label: "Rosemary’s due date",
    explanation:
      "Dr. Hill gives Rosemary June 28 as her baby’s expected delivery date. Rosemary repeats the due date in later conversations.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=rosemarys-baby",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Tenet",
    date: "06-29",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "A conversation identifies the party at which the characters supposedly met as June 29.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=tenet",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 986,
  },
  {
    title: "Blade Runner 2049",
    date: "06-30",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The baseline-test room displays June 30, 2049 beside Officer KD6-3.7’s identification.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=989s",
    sourceLabel: "Film excerpt at 16:29",
    clipTimestamp: 989,
  },
  {
    title: "An Affair to Remember (1957)",
    date: "07-01",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The lovers agree to meet at the Empire State Building on July 1 at five o’clock.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=an-affair-to-remember",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 992,
  },
  {
    title: "Independence Day",
    date: "07-02",
    type: "Setting",
    label: "The arrival of the alien ships",
    explanation:
      "The story begins on July 2, 1996 as the extraterrestrial mothership reaches Earth and deploys ships above major cities.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/Independence_Day_(1996_film)#Plot",
    sourceLabel: "Film plot synopsis",
    storyYear: 1996,
  },
  {
    title: "The Return of the Living Dead",
    date: "07-03",
    type: "Setting",
    label: "The warehouse accident",
    explanation:
      "The warehouse story opens on July 3, 1984, when Frank accidentally releases the gas that reanimates the dead.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/The_Return_of_the_Living_Dead#Plot",
    sourceLabel: "Film plot synopsis",
    clipTimestamp: 998,
    storyYear: 1984,
  },
  {
    title: "The Shining",
    date: "07-04",
    type: "In-film date",
    label: "The Overlook’s final photograph",
    explanation:
      "The photograph revealed at the end of the film is labeled as the Overlook Hotel’s July 4 ball in 1921.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/The_Shining_(film)#Plot",
    sourceLabel: "Film plot synopsis",
    storyYear: 1921,
  },
  {
    title: "Oldboy",
    date: "07-05",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows July 5 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1020s",
    sourceLabel: "Film excerpt at 17:00",
    clipTimestamp: 1020,
  },
  {
    title: "Casino Royale",
    date: "07-06",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows July 6 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1024s",
    sourceLabel: "Film excerpt at 17:04",
    clipTimestamp: 1024,
  },
  {
    title: "The Aviator",
    date: "07-07",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows July 7 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1027s",
    sourceLabel: "Film excerpt at 17:07",
    clipTimestamp: 1027,
  },
  {
    title: "The Silence of the Lambs",
    date: "07-08",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Dr. Chilton describes Lecter’s attack on a nurse while undergoing a medical examination on July 8, 1981.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=silence-of-the-lambs-the",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1033,
  },
  {
    title: "Double Indemnity",
    date: "07-09",
    type: "Dialogue",
    label: "The insurance investigation",
    explanation:
      "An insurance investigation report says Nino Zachetti visited Mrs. Dietrichson on July 9 and the following nights.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=double-indemnity",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The Green Mile",
    date: "07-10",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The death warrant shown on screen specifies July 10 as the execution date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1044s",
    sourceLabel: "Film excerpt at 17:24",
    clipTimestamp: 1044,
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    date: "07-11",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The surveillance-camera images carry a 2023/07/11 date stamp, providing an explicit July 11 reference.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1051s",
    sourceLabel: "Film excerpt at 17:31",
    clipTimestamp: 1051,
  },
  {
    title: "Nosferatu",
    date: "07-12",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows July 12 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1055s",
    sourceLabel: "Film excerpt at 17:35",
    clipTimestamp: 1055,
  },
  {
    title: "Amarcord",
    date: "07-13",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows July 13 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1059s",
    sourceLabel: "Film excerpt at 17:39",
    clipTimestamp: 1059,
  },
  {
    title: "The Day of the Jackal",
    date: "07-14",
    type: "Dialogue",
    label: "The assassin’s false passport",
    explanation:
      "Special Branch reports that the passport application using Paul Oliver Duggan’s identity was submitted July 14.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=day-of-the-jackal-the",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Looper",
    date: "07-15",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The numeric date in the message tattooed on the character’s arm begins 07/15.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1068s",
    sourceLabel: "Film excerpt at 17:48",
    clipTimestamp: 1068,
  },
  {
    title: "Double Indemnity",
    date: "07-16",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Walter’s recorded confession begins with an office memorandum dated July 16, 1938.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=double-indemnity",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1073,
  },
  {
    title: "Whiplash",
    date: "07-17",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Andrew identifies the jazz recording playing during his date as a July 17, 1938 performance.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=whiplash",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1077,
  },
  {
    title: "The Day the Earth Stood Still",
    date: "07-18",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The hospital paperwork visible in the scene is dated 7-18, an in-film July 18 reference.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1081s",
    sourceLabel: "Film excerpt at 18:01",
    clipTimestamp: 1081,
  },
  {
    title: "The Island",
    date: "07-19",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The facility’s announcement identifies the current day as July 19, 2019.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=island-the",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1084,
  },
  {
    title: "Apollo 13",
    date: "07-20",
    type: "Dialogue",
    label: "The Moon landing broadcast",
    explanation:
      "The opening television broadcast announces Neil Armstrong standing on the Moon on July 20, 1969, as Jim Lovell and friends watch.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=apollo-13",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Indochine",
    date: "07-21",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows July 21 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1109s",
    sourceLabel: "Film excerpt at 18:29",
    clipTimestamp: 1109,
  },
  {
    title: "Collateral",
    date: "07-22",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Daniel recalls Miles Davis entering the club on July 22, 1964.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=collateral",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1117,
  },
  {
    title: "Promising Young Woman",
    date: "07-23",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows July 23 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1123s",
    sourceLabel: "Film excerpt at 18:43",
    clipTimestamp: 1123,
  },
  {
    title: "When Worlds Collide",
    date: "07-24",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The scientist predicts that the passing celestial body will affect Earth on the afternoon of July 24.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=when-worlds-collide",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1127,
  },
  {
    title: "Gangs of New York",
    date: "07-25",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Bill says that his father was killed fighting the British on July 25, 1814.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=gangs-of-new-york",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1131,
  },
  {
    title: "Che: Part One",
    date: "07-26",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows July 26 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1138s",
    sourceLabel: "Film excerpt at 18:58",
    clipTimestamp: 1138,
  },
  {
    title: "K-PAX",
    date: "07-27",
    type: "Dialogue",
    label: "Prot’s planned departure",
    explanation:
      "Prot says he will return to K-PAX on July 27; his psychiatrist discusses the approaching date and the danger it might pose.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=k-pax",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Bridesmaids",
    date: "07-28",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The jeweller’s check payable to Annie Walker is dated 07-28-2011, giving an explicit July 28 connection.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1143s",
    sourceLabel: "Film excerpt at 19:03",
    clipTimestamp: 1143,
  },
  {
    title: "Top Gun",
    date: "07-29",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The inquiry identifies July 29 as the date of Maverick’s aircraft accident.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=top-gun",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1146,
  },
  {
    title: "The Caine Mutiny",
    date: "07-30",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The account of the ship’s events includes a July 30, 1944 entry about receiving frozen strawberries.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=the-caine-mutiny",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1150,
  },
  {
    title: "The Caine Mutiny",
    date: "07-31",
    type: "Dialogue",
    label: "The mutiny charge",
    explanation:
      "The court-martial charge dates Maryk’s relief of Captain Queeg July 31, 1944, and witnesses discuss that day.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=the-caine-mutiny",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The White Ribbon",
    date: "08-01",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows August 1 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1162s",
    sourceLabel: "Film excerpt at 19:22",
    clipTimestamp: 1162,
  },
  {
    title: "Point Break",
    date: "08-02",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The investigators question whether suspects could have committed the August 2 bank robbery while away in Florida.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=point-break",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1171,
  },
  {
    title: "The Spy Who Loved Me",
    date: "08-03",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The diary entry for the Mujaba Club meeting is headed Wednesday, August 3.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1175s",
    sourceLabel: "Film excerpt at 19:35",
    clipTimestamp: 1175,
  },
  {
    title: "Mamma Mia!",
    date: "08-04",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Donna’s diary contains an August 4 entry describing her outing with Bill.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=mamma-mia",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1179,
  },
  {
    title: "The Omega Man",
    date: "08-05",
    type: "Dialogue",
    label: "Neville’s journal",
    explanation:
      "Neville’s journal recording 958 is dated August 5, 1977 and describes finding another member of Matthias’s group dead of plague.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=omega-man-the",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Godzilla (2014)",
    date: "08-06",
    type: "Dialogue",
    label: "Serizawa’s inherited watch",
    explanation:
      "Dr. Serizawa explains that his father’s watch stopped at 8:15 on August 6, 1945 in Hiroshima.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=godzilla-2014",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Marriage Story",
    date: "08-07",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Charlie is told that Nicole consulted the lawyer on August 7, preventing him from representing Charlie.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=marriage-story",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1205,
  },
  {
    title: "Go, Go Second Time Virgin",
    date: "08-08",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows August 8 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1208s",
    sourceLabel: "Film excerpt at 20:08",
    clipTimestamp: 1208,
  },
  {
    title: "Anatomy of a Fall",
    date: "08-09",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The court discusses an email dated August 9, 2017 about Samuel’s writing.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=anatomy-of-a-fall",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Hackers",
    date: "08-10",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Dade’s earlier hacking attack is said to have appeared in the newspaper on August 10, 1988.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=hackers",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1223,
  },
  {
    title: "North by Northwest",
    date: "08-11",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "A list of George Kaplan’s hotel stays includes a Boston stay on August 11.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=north-by-northwest",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1225,
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    date: "08-12",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Harry’s disciplinary hearing is formally dated August 12 in the proceedings.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=harry-potter-and-the-order-of-the-phoenix",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1228,
  },
  {
    title: "District 9",
    date: "08-13",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The surveillance footage is stamped 2010/13/08: August 13, using year/day/month order.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1232s",
    sourceLabel: "Film excerpt at 20:32",
    clipTimestamp: 1232,
    storyYear: 2010,
  },
  {
    title: "The Day of the Jackal",
    date: "08-14",
    type: "Dialogue",
    label: "The assassination-threat report",
    explanation:
      "The top-secret report about the assassination threat is dated August 14, 1963 at 08:00 and addressed to the Minister of the Interior.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=day-of-the-jackal-the",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "3 Idiots",
    date: "08-15",
    type: "Dialogue",
    label: "A date in Rancho’s conversation",
    explanation:
      "During the conversation about Pia’s late mother’s watch, Rancho invokes August 15 as Independence Day. The line explicitly names the date; it does not date the entire story.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=3-idiots",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Deep Impact",
    date: "08-16",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The president’s announcement identifies August 16 as the projected date of the comet’s possible impact.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=deep-impact",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The Tale",
    date: "08-17",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The Orange Sun Tribune newspaper shown to Jennifer is dated August 17 beneath its masthead.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1251s",
    sourceLabel: "Film excerpt at 20:51",
    clipTimestamp: 1251,
  },
  {
    title: "The Texas Chain Saw Massacre",
    date: "08-18",
    type: "Setting",
    label: "The opening date card",
    explanation:
      "The film dates its grave desecration and the young travelers’ ordeal to August 18, 1973.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/The_Texas_Chain_Saw_Massacre#Plot",
    sourceLabel: "Film plot synopsis",
    clipTimestamp: 1256,
    storyYear: 1973,
  },
  {
    title: "Inception",
    date: "08-19",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The dossier’s newspaper article about Maurice and Robert Fischer is dated Sunday, August 19, 2007.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1258s",
    sourceLabel: "Film excerpt at 20:58",
    clipTimestamp: 1258,
  },
  {
    title: "Indiana Jones and the Dial of Destiny",
    date: "08-20",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The letter connected to the Dial repeatedly names August 20, 1969 and the same date in 1939.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=indiana-jones-and-the-dial-of-destiny",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1261,
  },
  {
    title: "To Kill a Mockingbird",
    date: "08-21",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "At Tom Robinson’s trial, Bob Ewell is asked to describe what happened on August 21.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=to-kill-a-mockingbird",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Dog Day Afternoon",
    date: "08-22",
    type: "Plot",
    label: "The bank robbery",
    explanation:
      "Sonny, Sal, and Stevie begin their attempted Brooklyn bank robbery on August 22, 1972.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/Dog_Day_Afternoon#Plot",
    sourceLabel: "Film plot synopsis",
    storyYear: 1972,
  },
  {
    title: "Night of the Living Dead (1990)",
    date: "08-23",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows August 23 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1276s",
    sourceLabel: "Film excerpt at 21:16",
    clipTimestamp: 1276,
  },
  {
    title: "Avatar",
    date: "08-24",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "Jake Sully’s recorded log displays DATE: 08/24/2154 on its computer interface.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1287s",
    sourceLabel: "Film excerpt at 21:27",
    clipTimestamp: 1287,
  },
  {
    title: "The Day of the Jackal",
    date: "08-25",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The officials realize that August 25, Liberation Day, provides an opportunity for the planned assassination.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=day-of-the-jackal-the",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1291,
  },
  {
    title: "The Trial of the Chicago 7",
    date: "08-26",
    type: "Dialogue",
    label: "A demonstration-permit meeting",
    explanation:
      "Questioning about August meetings identifies David Dellinger’s August 26 meeting to request a demonstration permit. The attorney says the dates are recorded in the City Hall log.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=trial-of-the-chicago-7-the",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "A Man Called Ove",
    date: "08-27",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows August 27 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1302s",
    sourceLabel: "Film excerpt at 21:42",
    clipTimestamp: 1302,
  },
  {
    title: "Clueless",
    date: "08-28",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Cher’s father asks about missing files identified by the date August 28.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=clueless",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1305,
  },
  {
    title: "Terminator 2: Judgment Day",
    date: "08-29",
    type: "Dialogue",
    label: "The predicted Judgment Day",
    explanation:
      "Sarah and the Terminator identify August 29, 1997 as the date of the nuclear catastrophe they are trying to prevent.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/Terminator_2:_Judgment_Day#Plot",
    sourceLabel: "Film plot synopsis",
    clipTimestamp: 1312,
    storyYear: 1997,
  },
  {
    title: "The Killer",
    date: "08-30",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "An identification document shown in the film lists the birth date 08/30/1977.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1318s",
    sourceLabel: "Film excerpt at 21:58",
    clipTimestamp: 1318,
    storyYear: 1977,
  },
  {
    title: "Oslo, August 31st",
    date: "08-31",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows August 31 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1321s",
    sourceLabel: "Film excerpt at 22:01",
    clipTimestamp: 1321,
  },
  {
    title: "All About Lily Chou-Chou",
    date: "09-01",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows September 1 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1326s",
    sourceLabel: "Film excerpt at 22:06",
    clipTimestamp: 1326,
  },
  {
    title: "A Few Good Men",
    date: "09-02",
    type: "Dialogue",
    label: "The guard-post log",
    explanation:
      "Cross-examination refers to the switch log for the week of September 2 and Downey’s recorded guard-post assignment.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=a-few-good-men",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The Red Shoes",
    date: "09-03",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The French caption identifies Thursday, September 3, at 8 p.m.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1337s",
    sourceLabel: "Film excerpt at 22:17",
    clipTimestamp: 1337,
  },
  {
    title: "Watchmen",
    date: "09-04",
    type: "Dialogue",
    label: "Dr. Manhattan’s recollection",
    explanation:
      "Dr. Manhattan’s narration places a costumed gathering and his attraction to Laurie on September 4, 1970.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=watchmen",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "3 Idiots",
    date: "09-05",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows September 5 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1348s",
    sourceLabel: "Film excerpt at 22:28",
    clipTimestamp: 1348,
  },
  {
    title: "The Producers",
    date: "09-06",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The Variety newspaper shown in the film is dated Wednesday, September 6, 1967.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1353s",
    sourceLabel: "Film excerpt at 22:33",
    clipTimestamp: 1353,
  },
  {
    title: "Monsters University",
    date: "09-07",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "Mike crosses off days on a September wall calendar; the marked dates include September 7.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1358s",
    sourceLabel: "Film excerpt at 22:38",
    clipTimestamp: 1358,
  },
  {
    title: "The Great Beauty",
    date: "09-08",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows September 8 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1362s",
    sourceLabel: "Film excerpt at 22:42",
    clipTimestamp: 1362,
  },
  {
    title: "Phenomena",
    date: "09-09",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The investigators identify September 9 as the disappearance date of the first missing girl.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=phenomena",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1366,
  },
  {
    title: "The Trial of the Chicago 7",
    date: "09-10",
    type: "Dialogue",
    label: "A presidential phone call",
    explanation:
      "Ramsey Clark is asked about a September 10 phone call from President Johnson during his testimony.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=the-trial-of-the-chicago-7",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "World Trade Center",
    date: "09-11",
    type: "Setting",
    label: "The officers’ rescue mission",
    explanation:
      "The story follows Port Authority officers responding to the attacks and becoming trapped at the World Trade Center on September 11, 2001.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/World_Trade_Center_(film)#Plot",
    sourceLabel: "Film plot synopsis",
    storyYear: 2001,
  },
  {
    title: "The Tin Drum",
    date: "09-12",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The child writes 12.9.27 on the doorframe: September 12, 1927, in day/month/year order.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1384s",
    sourceLabel: "Film excerpt at 23:04",
    clipTimestamp: 1384,
  },
  {
    title: "Ringu",
    date: "09-13",
    type: "In-film date",
    label: "The videotape investigation",
    explanation:
      "An on-screen date marks Monday, September 13 during Reiko’s investigation of the cursed videotape at Izu Pacific Land.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=ringu",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Rocky",
    date: "09-14",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Mickey recalls a boxing bout on September 14, 1923 while talking to Rocky.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=rocky",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1395,
  },
  {
    title: "The Square",
    date: "09-15",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows September 15 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1399s",
    sourceLabel: "Film excerpt at 23:19",
    clipTimestamp: 1399,
  },
  {
    title: "The Killing of a Sacred Deer",
    date: "09-16",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The conference speech dates the first coronary angioplasty to September 16, 1977.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=the-killing-of-a-sacred-deer",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1404,
  },
  {
    title: "Wallace & Gromit: The Curse of the Were-Rabbit",
    date: "09-17",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The September calendar for the giant vegetable competition at Tottington Hall has the 17th circled.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1407s",
    sourceLabel: "Film excerpt at 23:27",
    clipTimestamp: 1407,
  },
  {
    title: "Ringu",
    date: "09-19",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows September 19 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1415s",
    sourceLabel: "Film excerpt at 23:35",
    clipTimestamp: 1415,
  },
  {
    title: "Eternity and a Day",
    date: "09-20",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows September 20 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1420s",
    sourceLabel: "Film excerpt at 23:40",
    clipTimestamp: 1420,
  },
  {
    title: "Grave of the Fireflies",
    date: "09-21",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows September 21 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1426s",
    sourceLabel: "Film excerpt at 23:46",
    clipTimestamp: 1426,
  },
  {
    title: "Network",
    date: "09-22",
    type: "Dialogue",
    label: "Howard Beale’s firing",
    explanation:
      "The opening narration dates Howard Beale’s firing September 22, 1975, effective two weeks later.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=network",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Air Force One",
    date: "09-23",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The signed document invoking presidential incapacity carries a handwritten September 23 date beside the officials’ signatures.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1441s",
    sourceLabel: "Film excerpt at 24:01",
    clipTimestamp: 1441,
  },
  {
    title: "The Battle of Algiers",
    date: "09-24",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows September 24 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1447s",
    sourceLabel: "Film excerpt at 24:07",
    clipTimestamp: 1447,
  },
  {
    title: "Demolition Man",
    date: "09-25",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "A police computer reports that the last recorded murder occurred on September 25, 2010.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=demolition-man",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1450,
  },
  {
    title: "James and the Giant Peach",
    date: "09-26",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The Mercury City newspaper prop announcing the centipede’s mayoral campaign is dated September 26, 1949.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1454s",
    sourceLabel: "Film excerpt at 24:14",
    clipTimestamp: 1454,
  },
  {
    title: "Lorenzo's Oil",
    date: "09-27",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows September 27 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1458s",
    sourceLabel: "Film excerpt at 24:18",
    clipTimestamp: 1458,
  },
  {
    title: "Amélie",
    date: "09-28",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows September 28 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1460s",
    sourceLabel: "Film excerpt at 24:20",
    clipTimestamp: 1460,
  },
  {
    title: "Chinatown",
    date: "09-29",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The newspaper reporting the death of the water-department chief is dated Wednesday, September 29, 1937.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1471s",
    sourceLabel: "Film excerpt at 24:31",
    clipTimestamp: 1471,
  },
  {
    title: "Cries and Whispers",
    date: "09-30",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows September 30 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1481s",
    sourceLabel: "Film excerpt at 24:41",
    clipTimestamp: 1481,
  },
  {
    title: "Willy Wonka & the Chocolate Factory",
    date: "10-01",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Wonka’s golden ticket instructs its finder to arrive at the factory on October 1 at ten o’clock.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=willy-wonka-the-chocolate-factory",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Paranormal Activity",
    date: "10-02",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows October 2 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1489s",
    sourceLabel: "Film excerpt at 24:49",
    clipTimestamp: 1489,
  },
  {
    title: "Mean Girls",
    date: "10-03",
    type: "In-film date",
    label: "Spoken date identified in captions",
    explanation:
      "The compilation’s automatic captions identify a spoken reference to October 3 in this film’s excerpt. This is a dialogue lead awaiting confirmation; automatic captions can contain errors.",
    evidence: "clip-caption",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1493s",
    sourceLabel: "Automatic captions near 24:53",
    clipTimestamp: 1493,
  },
  {
    title: "Your Name",
    date: "10-04",
    type: "In-film date",
    label: "Date visible in the film",
    explanation: "The phone’s Japanese calendar display shows October 4, 2013.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1495s",
    sourceLabel: "Film excerpt at 24:55",
    clipTimestamp: 1495,
    storyYear: 2013,
  },
  {
    title: "The Boston Strangler",
    date: "10-05",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The investigators compare the October 5 murder with DeSalvo’s work records for that afternoon.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=boston-strangler-the",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Jacob's Ladder",
    date: "10-06",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows October 6 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1499s",
    sourceLabel: "Film excerpt at 24:59",
    clipTimestamp: 1499,
  },
  {
    title: "Good Bye, Lenin!",
    date: "10-07",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The narration dates the East Berlin demonstration to the evening of October 7, 1989.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=good-bye-lenin",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Lawrence of Arabia",
    date: "10-08",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The Chicago Daily Courier prop carrying a Lawrence of Arabia article is dated Tuesday, October 8, 1918.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1511s",
    sourceLabel: "Film excerpt at 25:11",
    clipTimestamp: 1511,
  },
  {
    title: "Schindler's List",
    date: "10-09",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The headstone shown in the film gives Oskar Schindler’s death date as October 9, 1974.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1517s",
    sourceLabel: "Film excerpt at 25:17",
    clipTimestamp: 1517,
    storyYear: 1974,
  },
  {
    title: "The Shape of Water",
    date: "10-10",
    type: "In-film date",
    label: "The creature’s release date",
    explanation:
      "Elisa’s calendar marks October 10, 1962 as the planned date for releasing the creature into the river. The linked film analysis identifies this calendar entry.",
    evidence: "scene-source",
    source:
      "https://journals.oregondigital.org/peripherica/article/download/5762/pdf/10489",
    sourceLabel: "Research article analyzing the film’s calendar",
    clipTimestamp: 1523,
  },
  {
    title: "The Parent Trap",
    date: "10-11",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Hallie and Annie discover that they share an October 11 birthday.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=the-parent-trap",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1529,
  },
  {
    title: "White Heat",
    date: "10-12",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The judge dates Cody Jarrett’s hotel robbery to October 12 while pronouncing sentence.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=white-heat",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1541,
  },
  {
    title: "Suspiria",
    date: "10-13",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "Klemperer’s German handwritten note is dated 13.10., or October 13, before the passage about Patricia’s worsening delusions.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1544s",
    sourceLabel: "Film excerpt at 25:44",
    clipTimestamp: 1544,
  },
  {
    title: "Witness for the Prosecution",
    date: "10-14",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The prosecution says that Emily French was murdered on the night of October 14.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=witness-for-the-prosecution",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The Testament of Dr. Mabuse",
    date: "10-15",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The chemical-plant plan shown in the film is annotated October 15; the English subtitle also identifies that date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1552s",
    sourceLabel: "Film excerpt at 25:52",
    clipTimestamp: 1552,
  },
  {
    title: "Get on the Bus",
    date: "10-16",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows October 16 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1562s",
    sourceLabel: "Film excerpt at 26:02",
    clipTimestamp: 1562,
  },
  {
    title: "Scanners III: The Takeover",
    date: "10-17",
    type: "Dialogue",
    label: "The laboratory recording",
    explanation:
      "Dr. Elton’s recorded laboratory report is dated October 17, 1990 and discusses the experimental EPH-3 drug.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=scanners-iii-the-takeover",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Annie",
    date: "10-18",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The claimed birth certificate for Annie gives October 18, 1922 as her birthday.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=annie-1982",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The Wolf of Wall Street",
    date: "10-19",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows October 19 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1578s",
    sourceLabel: "Film excerpt at 26:18",
    clipTimestamp: 1578,
  },
  {
    title: "I, Daniel Blake",
    date: "10-20",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The radio shipping forecast identifies the broadcast day as Tuesday, October 20.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=i-daniel-blake",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1582,
  },
  {
    title: "Back to the Future Part II",
    date: "10-21",
    type: "In-film date",
    label: "Spoken date identified in captions",
    explanation:
      "The compilation’s automatic captions identify a spoken reference to October 21 in this film’s excerpt. This is a dialogue lead awaiting confirmation; automatic captions can contain errors.",
    evidence: "clip-caption",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1590s",
    sourceLabel: "Automatic captions near 26:30",
    clipTimestamp: 1590,
  },
  {
    title: "Frequency",
    date: "10-22",
    type: "Dialogue",
    label: "The changed timeline",
    explanation:
      "John tells his father that Julia was murdered on October 22, 1969 in the changed timeline, making that date central to their effort to save her.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=frequency",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Memories of Murder",
    date: "10-23",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The Korean on-screen date card reads October 23, 1986, locating this part of the investigation.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1600s",
    sourceLabel: "Film excerpt at 26:40",
    clipTimestamp: 1600,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    date: "10-24",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Gandalf tells Frodo that he is in Elrond’s house at ten in the morning on October 24.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=lord-of-the-rings-the-fellowship-of-the-ring-the",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1604,
  },
  {
    title: "Breakfast at Tiffany's",
    date: "10-25",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows October 25 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1609s",
    sourceLabel: "Film excerpt at 26:49",
    clipTimestamp: 1609,
  },
  {
    title: "Death Becomes Her",
    date: "10-26",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Helen says that she took the rejuvenating potion on October 26, 1985.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=death-becomes-her",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1613,
  },
  {
    title: "Back to the Future Part III",
    date: "10-27",
    type: "Dialogue",
    label: "The return destination",
    explanation:
      "Doc instructs Marty to set the DeLorean’s destination to October 27, 1985 at 11:00 a.m. before the train-powered time jump.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=back-to-the-future-part-iii",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Fellini's Roma",
    date: "10-28",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows October 28 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1622s",
    sourceLabel: "Film excerpt at 27:02",
    clipTimestamp: 1622,
  },
  {
    title: "Halloween H20: 20 Years Later",
    date: "10-29",
    type: "Setting",
    label: "The opening attack",
    explanation:
      "The opening sequence follows Michael Myers’s attack on Marion and her neighbors on October 29, 1998.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/Halloween_H20:_20_Years_Later#Plot",
    sourceLabel: "Film plot synopsis",
    clipTimestamp: 1629,
    storyYear: 1998,
  },
  {
    title: "Donnie Darko",
    date: "10-30",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows October 30 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1633s",
    sourceLabel: "Film excerpt at 27:13",
    clipTimestamp: 1633,
  },
  {
    title: "Paris, Texas",
    date: "11-01",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "When asked for the current date, a character answers November 1.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=paris-texas",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1647,
  },
  {
    title: "Das Boot",
    date: "11-02",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The handwritten logbook entry in the film is dated November 2.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1652s",
    sourceLabel: "Film excerpt at 27:32",
    clipTimestamp: 1652,
  },
  {
    title: "The Thing from Another World",
    date: "11-03",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The reporter’s closing dispatch from the North Pole is dated November 3.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=thing-from-another-world-the",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1657,
  },
  {
    title: "Drifting Clouds",
    date: "11-04",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The Finnish document shown on screen reads Saturday, 4.11.1995: November 4, 1995.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1663s",
    sourceLabel: "Film excerpt at 27:43",
    clipTimestamp: 1663,
    storyYear: 1995,
  },
  {
    title: "Back to the Future",
    date: "11-05",
    type: "In-film date",
    label: "Spoken date identified in captions",
    explanation:
      "The compilation’s automatic captions identify a spoken reference to November 5 in this film’s excerpt. This is a dialogue lead awaiting confirmation; automatic captions can contain errors.",
    evidence: "clip-caption",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1670s",
    sourceLabel: "Automatic captions near 27:50",
    clipTimestamp: 1670,
  },
  {
    title: "Brokeback Mountain",
    date: "11-06",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The judge grants Ennis Del Mar’s divorce on November 6, 1975.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=brokeback-mountain",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The Talented Mr. Ripley",
    date: "11-07",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The investigator places Tom and Dickie’s San Remo trip on November 7 during his questioning.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=talented-mr-ripley-the",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1680,
  },
  {
    title: "Marty",
    date: "11-08",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Marty says that he will turn 35 on November 8 while reflecting on the passing years.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=marty",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1685,
  },
  {
    title: "Palm Springs",
    date: "11-09",
    type: "Plot",
    label: "The repeating wedding day",
    explanation:
      "Nyles and Sarah become trapped in a time loop that repeatedly resets to the wedding day, November 9.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/Palm_Springs_(2020_film)#Plot",
    sourceLabel: "Film plot synopsis",
    clipTimestamp: 1689,
  },
  {
    title: "Contact",
    date: "11-10",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Ellie’s biographical account gives November 10, 1974 as the date her father died.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=contact",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1693,
  },
  {
    title: "Suspiria",
    date: "11-11",
    type: "Dialogue",
    label: "The account of Anka’s death",
    explanation:
      "The account of Anka’s fate dates the camp’s deadly outdoor census November 11, 1943.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=suspiria-2018",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Anomalisa",
    date: "11-12",
    type: "Dialogue",
    label: "A date named in the film",
    explanation: "The letter Michael reads is dated November 12, 1995.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=anomalisa",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1710,
  },
  {
    title: "The Amityville Horror",
    date: "11-13",
    type: "Setting",
    label: "The murders before the haunting",
    explanation:
      "The opening depicts the DeFeo family murders at the Amityville house on November 13, 1974, before the Lutz family moves in.",
    evidence: "scene-source",
    source:
      "https://en.wikipedia.org/wiki/The_Amityville_Horror_(1979_film)#Plot",
    sourceLabel: "Film plot synopsis",
    clipTimestamp: 1713,
    storyYear: 1974,
  },
  {
    title: "Awakenings",
    date: "11-14",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Leonard’s mother recalls taking him to Bainbridge on November 14, 1939, when he was twenty.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=awakenings",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Animal House",
    date: "11-15",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The disciplinary charges against Delta House are formally dated November 15, 1962.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=animal-house",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1726,
  },
  {
    title: "Children of Men",
    date: "11-16",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows November 16 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1731s",
    sourceLabel: "Film excerpt at 28:51",
    clipTimestamp: 1731,
  },
  {
    title: "Knives Out",
    date: "11-17",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The toxicology report delivered to Marta is stamped 11-17-18. The date belongs to the report within the mystery.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1736s",
    sourceLabel: "Film excerpt at 28:56",
    clipTimestamp: 1736,
  },
  {
    title: "Zodiac",
    date: "11-18",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows November 18 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1742s",
    sourceLabel: "Film excerpt at 29:02",
    clipTimestamp: 1742,
  },
  {
    title: "Twelve Monkeys",
    date: "11-19",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The handwritten note visible in the scene names November 19 and 8 p.m.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1749s",
    sourceLabel: "Film excerpt at 29:09",
    clipTimestamp: 1749,
  },
  {
    title: "Napoleon Dynamite",
    date: "11-20",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows November 20 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1756s",
    sourceLabel: "Film excerpt at 29:16",
    clipTimestamp: 1756,
  },
  {
    title: "Dr. Mabuse, the Gambler",
    date: "11-21",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows November 21 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1770s",
    sourceLabel: "Film excerpt at 29:30",
    clipTimestamp: 1770,
  },
  {
    title: "JFK",
    date: "11-22",
    type: "Plot",
    label: "The assassination being investigated",
    explanation:
      "The film depicts President Kennedy’s assassination on November 22, 1963 and follows Jim Garrison’s investigation into it.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/JFK_(film)#Plot",
    sourceLabel: "Film plot synopsis",
    clipTimestamp: 1778,
    storyYear: 1963,
  },
  {
    title: "The Double Life of Véronique",
    date: "11-23",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows November 23 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1782s",
    sourceLabel: "Film excerpt at 29:42",
    clipTimestamp: 1782,
  },
  {
    title: "Drive My Car",
    date: "11-24",
    type: "Dialogue",
    label: "The police questioning",
    explanation:
      "Police question Takatsuki about the fight in Shintenchi Park on Sunday, November 24, after the victim dies.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=drive-my-car",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Arthur Christmas",
    date: "11-25",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows November 25 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1797s",
    sourceLabel: "Film excerpt at 29:57",
    clipTimestamp: 1797,
  },
  {
    title: "Magnolia",
    date: "11-26",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows November 26 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1801s",
    sourceLabel: "Film excerpt at 30:01",
    clipTimestamp: 1801,
  },
  {
    title: "Dragon: The Bruce Lee Story",
    date: "11-27",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Bruce’s father recalls that Bruce was born on November 27 during a visit to San Francisco.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=dragon-the-bruce-lee-story",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1809,
  },
  {
    title: "No Country for Old Men",
    date: "11-28",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Carson Wells says that he last saw Anton Chigurh on November 28 of the previous year.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=no-country-for-old-men",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1815,
  },
  {
    title: "Raising Arizona",
    date: "11-29",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows November 29 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1821s",
    sourceLabel: "Film excerpt at 30:21",
    clipTimestamp: 1821,
  },
  {
    title: "Dope",
    date: "11-30",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows November 30 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1830s",
    sourceLabel: "Film excerpt at 30:30",
    clipTimestamp: 1830,
  },
  {
    title: "The Social Network",
    date: "12-01",
    type: "Dialogue",
    label: "The dated email",
    explanation:
      "An email displayed in the deposition sequence is dated December 1, 2003 and explains why Mark missed the Winklevosses’ calls.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=social-network-the",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Casablanca",
    date: "12-02",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The French bank document shown in the film is dated December 2.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1859s",
    sourceLabel: "Film excerpt at 30:59",
    clipTimestamp: 1859,
  },
  {
    title: "Pleasantville",
    date: "12-03",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Bill says that he paints the shop’s Christmas window decorations each December 3.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=pleasantville",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1874,
  },
  {
    title: "Close Encounters of the Third Kind",
    date: "12-04",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Roy Neary gives December 4, 1944 as his birth date during the medical questioning.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=close-encounters-of-the-third-kind",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1878,
  },
  {
    title: "Vanilla Sky",
    date: "12-05",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "David’s narration dates a stage of his return to business to December 5.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=vanilla-sky",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1879,
  },
  {
    title: "The Shop Around the Corner",
    date: "12-06",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The investigator’s report on Mrs. Matuschek begins with her movements on December 6.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=the-shop-around-the-corner",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1880,
  },
  {
    title: "Mudbound",
    date: "12-07",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "A radio broadcast within the film names December 7, 1941 while reporting the attack on Pearl Harbor.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=mudbound",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1884,
  },
  {
    title: "Crawlspace",
    date: "12-08",
    type: "Dialogue",
    label: "The landlord’s diary",
    explanation:
      "Karl Gunther’s diary narration includes a December 8, 1973 entry describing his history of killing patients.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=crawlspace-1986",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The Fog",
    date: "12-09",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Father Malone reads a December 9 diary entry about meeting Blake.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=the-fog",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "The Social Network",
    date: "12-10",
    type: "Dialogue",
    label: "The postponed meeting",
    explanation:
      "The deposition sequence presents Mark’s December 10, 2003 email postponing a meeting because of classes and work.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=social-network-the",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Psycho",
    date: "12-11",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows December 11 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1902s",
    sourceLabel: "Film excerpt at 31:42",
    clipTimestamp: 1902,
  },
  {
    title: "Prisoners",
    date: "12-12",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The Daily Review newspaper about the investigation is dated December 12, 2013, beneath its flag image.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1909s",
    sourceLabel: "Film excerpt at 31:49",
    clipTimestamp: 1909,
  },
  {
    title: "The Truman Show",
    date: "12-13",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The newspaper Truman reads carries Friday, December 13 beneath its masthead.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1911s",
    sourceLabel: "Film excerpt at 31:51",
    clipTimestamp: 1911,
  },
  {
    title: "National Lampoon's Christmas Vacation",
    date: "12-14",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows December 14 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1923s",
    sourceLabel: "Film excerpt at 32:03",
    clipTimestamp: 1923,
  },
  {
    title: "From Here to Eternity",
    date: "12-15",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The boxing finals are described as taking place on December 15.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=from-here-to-eternity",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1924,
  },
  {
    title: "The Holdovers",
    date: "12-16",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "William’s Ancient Civilizations examination book has the handwritten date 12-16-70, or December 16, 1970.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1927s",
    sourceLabel: "Film excerpt at 32:07",
    clipTimestamp: 1927,
  },
  {
    title: "The Help",
    date: "12-17",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The editor sets December 17 as the deadline for submitting the manuscript before the last editorial meeting.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=help-the",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1932,
  },
  {
    title: "A Tale of Winter",
    date: "12-18",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows December 18 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1938s",
    sourceLabel: "Film excerpt at 32:18",
    clipTimestamp: 1938,
  },
  {
    title: "The Karate Kid",
    date: "12-19",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows December 19 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1944s",
    sourceLabel: "Film excerpt at 32:24",
    clipTimestamp: 1944,
  },
  {
    title: "Reversal of Fortune",
    date: "12-20",
    type: "Dialogue",
    label: "The second coma",
    explanation:
      "Claus dates Sunny’s second coma December 20, 1980 while recounting their argument that afternoon.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=reversal-of-fortune",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "2012",
    date: "12-21",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "A news broadcast within the film discusses a prediction of catastrophe on December 21.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=2012",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 1963,
  },
  {
    title: "The English Patient",
    date: "12-22",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "A character reads a December 22 diary entry reflecting on betrayal and new lovers.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=english-patient-the",
    sourceLabel: "Film dialogue transcript",
  },
  {
    title: "Home Alone 2: Lost in New York",
    date: "12-23",
    type: "In-film date",
    label: "Kevin’s hotel arrival",
    explanation:
      "Kevin’s Plaza Hotel bill lists his arrival as 12/23/92, or December 23, 1992. This prop belongs to the sequel set in New York.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=1974s",
    sourceLabel: "Film excerpt at 32:54",
    clipTimestamp: 1974,
  },
  {
    title: "It's a Wonderful Life",
    date: "12-24",
    type: "Setting",
    label: "George’s Christmas Eve crisis",
    explanation:
      "George Bailey’s crisis and Clarence’s intervention take place on Christmas Eve, December 24, 1945.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/It%27s_a_Wonderful_Life#Plot",
    sourceLabel: "Film plot synopsis",
  },
  {
    title: "Toy Story",
    date: "12-25",
    type: "Setting",
    label: "Christmas in the new house",
    explanation:
      "The closing scene shows the toys listening as Andy opens his Christmas presents in the family’s new home. Christmas Day supplies the December 25 connection.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/Toy_Story#Plot",
    sourceLabel: "Film plot synopsis",
  },
  {
    title: "The Impossible",
    date: "12-26",
    type: "In-film date",
    label: "Date visible in the film",
    explanation:
      "The film excerpt shows December 26 in its on-screen text or subtitles. The match is based on that visible in-film reference; it does not imply that the entire story takes place on this date.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=2006s",
    sourceLabel: "Film excerpt at 33:26",
    clipTimestamp: 2006,
  },
  {
    title: "Reversal of Fortune",
    date: "12-27",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "Sunny’s narration dates her first disputed collapse to December 27, 1979.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=reversal-of-fortune",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 2015,
  },
  {
    title: "Silver Linings Playbook",
    date: "12-28",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The characters identify December 28 as both the football game day and the dance competition day.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=silver-linings-playbook",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 2021,
  },
  {
    title: "The Hudsucker Proxy",
    date: "12-29",
    type: "In-film date",
    label: "A date visible in the film",
    explanation:
      "The newspaper announcing Hudsucker’s board appointment is dated Monday, December 29, 1958.",
    evidence: "scene-source",
    source: "https://www.youtube.com/watch?v=AXNlLiNHKLc&t=2026s",
    sourceLabel: "Film excerpt at 33:46",
    clipTimestamp: 2026,
  },
  {
    title: "Strange Days",
    date: "12-30",
    type: "Dialogue",
    label: "A date named in the film",
    explanation:
      "The radio announces that it is shortly after two in the morning on December 30, 1999.",
    evidence: "scene-source",
    source:
      "https://www.springfieldspringfield.co.uk/movie_script.php?movie=strange-days",
    sourceLabel: "Film dialogue transcript",
    clipTimestamp: 2032,
  },
  {
    title: "When Harry Met Sally...",
    date: "12-31",
    type: "Plot",
    label: "A New Year’s Eve reunion",
    explanation:
      "Harry and Sally’s relationship reaches its resolution at a New Year’s Eve party, connecting the climax to December 31.",
    evidence: "scene-source",
    source: "https://en.wikipedia.org/wiki/When_Harry_Met_Sally...#Plot",
    sourceLabel: "Film plot synopsis",
  },
];
