import type { Movie } from "../types.ts";

// Connections checked against the linked script, clip, or synopsis, separately
// from the calendar index. Unknown display metadata is intentionally omitted.
export const reviewedMovies: Movie[] = [
  {
    id: "mr-nobody",
    title: "Mr. Nobody",
    year: 2009,
    art: "future",
    motif: "ONE LIFE.\nMANY POSSIBILITIES.",
    description:
      "Nemo Nobody recalls different possible lives and the choices that might have led to them.",
    connections: [
      {
        date: "02-09",
        type: "Dialogue",
        label: "Nemo’s stated birthday",
        storyYear: 1975,
        explanation:
          "During his conversation with Dr. Feldheim, Nemo says he was born on February 9, 1975. The date comes from his dialogue, rather than the film’s release information.",
        source:
          "https://www.springfieldspringfield.co.uk/movie_script.php?movie=mr-nobody",
        sourceLabel: "Film dialogue transcript",
      },
    ],
  },
  {
    id: "leap-year",
    title: "Leap Year",
    year: 2010,
    art: "congeniality",
    motif: "ONE EXTRA DAY.\nONE BIG QUESTION.",
    description:
      "Anna heads to Ireland to propose to her boyfriend, but her carefully planned journey takes an unexpected turn.",
    connections: [
      {
        date: "02-29",
        type: "Plot",
        label: "Anna’s leap-day proposal plan",
        explanation:
          "Anna plans to reach Dublin and propose on February 29, invoking a leap-day proposal tradition. That specific date motivates her journey within the story.",
        source: "https://www.imdb.com/title/tt1216492/plotsummary/",
        sourceLabel: "IMDb plot synopsis",
      },
    ],
  },
  {
    id: "the-breakfast-club",
    title: "The Breakfast Club",
    year: 1985,
    art: "groundhog",
    motif: "FIVE STRANGERS.\nONE SATURDAY.",
    description:
      "Five high-school students spend Saturday detention together and discover how much they have in common.",
    connections: [
      {
        date: "03-24",
        type: "Setting",
        label: "Saturday detention at Shermer High",
        storyYear: 1984,
        explanation:
          "The opening narration identifies Saturday, March 24, 1984. The students’ detention and the main story take place on that day.",
        source: "https://catalog.afi.com/Film/55708-THE-BREAKFASTCLUB",
        sourceLabel: "AFI synopsis and opening narration",
      },
    ],
  },
  {
    id: "1917",
    title: "1917",
    year: 2019,
    art: "independence",
    motif: "TIME IS\nTHE ENEMY.",
    description:
      "Two British soldiers cross dangerous territory to deliver a warning that could save a battalion.",
    connections: [
      {
        date: "04-06",
        type: "Setting",
        label: "A wartime mission begins",
        storyYear: 1917,
        explanation:
          "The mission begins on April 6, 1917, when Blake and Schofield are sent to stop an attack against a prepared German defensive position. The date is part of the film’s setting.",
        source: "https://en.wikipedia.org/wiki/1917_(2019_film)#Plot",
        sourceLabel: "Film plot synopsis",
      },
    ],
  },
  {
    id: "before-sunrise",
    title: "Before Sunrise",
    year: 1995,
    art: "congeniality",
    motif: "ONE CITY.\nONE NIGHT.",
    description:
      "Two travelers meet on a train and decide to spend an evening walking and talking through Vienna.",
    connections: [
      {
        date: "06-16",
        type: "Setting",
        label: "Jesse and Céline meet in Vienna",
        storyYear: 1994,
        explanation:
          "Jesse and Céline meet on a European train on June 16, 1994, and spend the evening together in Vienna. Their meeting date belongs to the story itself.",
        source:
          "https://movingimage.org/wp-content/uploads/2023/07/pressrelease-reverse-shot-at-20_20230728.pdf",
        sourceLabel: "Museum of the Moving Image film synopsis",
      },
    ],
  },
  {
    id: "happy-death-day",
    title: "Happy Death Day",
    year: 2017,
    art: "halloween",
    motif: "ONE BIRTHDAY.\nOVER AND OVER.",
    description:
      "A college student relives her birthday while trying to solve her own murder.",
    connections: [
      {
        date: "09-18",
        type: "Plot",
        label: "Tree’s repeating birthday",
        explanation:
          "Tree wakes up on September 18, her birthday, and is repeatedly returned to that day after being killed. The date is the day she must relive in the plot.",
        source:
          "https://www.theyoungfolks.com/review/111296/movie-review-happy-death-day/",
        sourceLabel: "Review describing the story’s date",
      },
    ],
  },
  {
    id: "mean-girls",
    title: "Mean Girls",
    year: 2004,
    art: "congeniality",
    motif: "A QUESTION.\nAN ICONIC DATE.",
    description:
      "A new student navigates her school’s social hierarchy and develops a crush on a classmate.",
    connections: [
      {
        date: "10-03",
        type: "Dialogue",
        label: "Aaron asks Cady the date",
        explanation:
          "Cady’s narration identifies October 3 as the day Aaron asks her what day it is. She answers with that same date in the classroom scene.",
        source: "https://www.dailyscript.com/scripts/mean_girls.pdf",
        sourceLabel: "Screenplay: classroom date scene",
      },
    ],
  },
  {
    id: "jacobs-ladder",
    title: "Jacob's Ladder",
    year: 1990,
    art: "halloween",
    motif: "THE PAST\nWON’T LET GO.",
    description:
      "A Vietnam veteran is haunted by memories and disturbing visions as he tries to make sense of his experiences.",
    connections: [
      {
        date: "10-06",
        type: "Setting",
        label: "Jacob’s remembered battle",
        storyYear: 1971,
        explanation:
          "Jacob remembers a battle in Vietnam’s Mekong Delta on October 6, 1971. That date is attached to the wartime experience depicted in the film.",
        source: "https://catalog.afi.com/Film/58556-JACOBS-LADDER",
        sourceLabel: "AFI film synopsis",
      },
    ],
  },
];
