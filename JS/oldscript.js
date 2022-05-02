const CHAMPIONS_LIST = [
  "aatrox",
  "ahri",
  "akali",
  "amumu",
  "akshan",
  "alistar",
  "anivia",
  "annie",
  "aphelios",
  "ashe",
  "aurelionsol",
  "azir",
  "bard",
  "blitzcrank",
  "brand",
  "braum",
  "caitlyn",
  "camille",
  "cassiopeia",
  "chogath",
  "corki",
  "darius",
  "diana",
  "draven",
  "drmundo",
  "ekko",
  "elise",
  "evelynn",
  "ezreal",
  "fiddlesticks",
  "fiora",
  "fizz",
  "galio",
  "gangplank",
  "garen",
  "gnar",
  "gragas",
  "graves",
  "gwen",
  "hecarim",
  "heimerdinger",
  "illaoi",
  "irelia",
  "ivern",
  "janna",
  "jarvaniv",
  "jax",
  "jayce",
  "jhin",
  "jinx",
  "kaisa",
  "kalista",
  "karma",
  "karthus",
  "kassadin",
  "katarina",
  "kayle",
  "kayn",
  "kennen",
  "khazix",
  "kindred",
  "kled",
  "kogmaw",
  "leblanc",
  "leesin",
  "leona",
  "lillia",
  "lissandra",
  "lucian",
  "lulu",
  "lux",
  "masteryi",
  "malphite",
  "malzahar",
  "maokai",
  "missfortune",
  "mordekaiser",
  "morgana",
  "nami",
  "nasus",
  "nautilus",
  "neeko",
  "nidalee",
  "nocturne",
  "nunuandwillump",
  "olaf",
  "orianna",
  "ornn",
  "pantheon",
  "poppy",
  "pyke",
  "qiyana",
  "quinn",
  "rakan",
  "rammus",
  "reksai",
  "rell",
  "renata",
  "renekton",
  "rengar",
  "riven",
  "rumble",
  "ryze",
  "samira",
  "sejuani",
  "senna",
  "seraphine",
  "sett",
  "shaco",
  "shen",
  "shyvana",
  "singed",
  "sion",
  "sivir",
  "skarner",
  "sona",
  "soraka",
  "swain",
  "sylas",
  "syndra",
  "tahmkench",
  "taliyah",
  "talon",
  "taric",
  "teemo",
  "thresh",
  "tristana",
  "trundle",
  "tryndamere",
  "twistedfate",
  "twitch",
  "udyr",
  "urgot",
  "varus",
  "vayne",
  "veigar",
  "velkoz",
  "vex",
  "vi",
  "viego",
  "viktor",
  "vladimir",
  "volibear",
  "warwick",
  "wukong",
  "xayah",
  "xerath",
  "xinzhao",
  "yasuo",
  "yone",
  "yorick",
  "yuumi",
  "zac",
  "zed",
  "zeri",
  "ziggs",
  "zilean",
  "zoe",
  "zyra",
];
let championsInGame = [];

for (let i = 0; i < CHAMPIONS_LIST.length; i++) {
  if (
    CHAMPIONS_LIST[i].length === 4 ||
    CHAMPIONS_LIST[i].length === 5 ||
    CHAMPIONS_LIST[i].length === 6 ||
    CHAMPIONS_LIST[i].length === 7
  )
    championsInGame.push(CHAMPIONS_LIST[i]);
}
let shuffledChampions = [];

const targetWords = [...shuffledChampions];
const dictionary = [...CHAMPIONS_LIST];
const NUMBER_OF_GUESSES = 6;
const offsetFromDate = new Date(2022, 3, 13);
const msOffset = Date.now() - offsetFromDate;
const dayOffset = msOffset / 1000 / 60 / 60 / 24;
const targetWord = targetWords[Math.floor(dayOffset)];
const WORD_LENGTH = targetWord.length;
const FLIP_ANIMATION_DURATION = 500;
const DANCE_ANIMATION_DURATION = 500;
const keyboard = document.querySelector("[data-keyboard]");
let guessGrid = document.querySelector("[data-guess-grid]");
let alertContainer = document.querySelector("[data-alert-container]");
let numberRows = document.body.style; // define a variable that will be reused in the css
numberRows.setProperty("--number-rows", WORD_LENGTH);

let initialize = () => {
  let guessGrid = document.getElementById("guess-grid");

  for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
    for (let j = 0; j < WORD_LENGTH; j++) {
      let newTile = document.createElement("div");
      newTile.classList.add("tile");
      guessGrid.appendChild(newTile);
    }
  }
};

initialize();

let startInteraction = () => {
  document.addEventListener("click", handleMouseClick);
  document.addEventListener("keydown", handleKeyPress);
};

let stopInteraction = () => {
  document.removeEventListener("click", handleMouseClick);
  document.removeEventListener("keydown", handleKeyPress);
};

let handleMouseClick = (e) => {
  if (e.target.matches("[data-key]")) {
    pressKey(e.target.dataset.key);
    return;
  }
  if (e.target.matches("[data-enter]")) {
    submitGuess();
    return;
  }
  if (e.target.matches("[data-delete]")) {
    deleteKey();
    return;
  }
};

let handleKeyPress = (e) => {
  if (e.key === "Enter") {
    submitGuess();
    return;
  }
  if (e.key === "Backspace" || e.key === "Delete") {
    deleteKey();
    return;
  }
  if (e.key.match(/^[a-z]$/)) {
    pressKey(e.key);
    return;
  }
};

let pressKey = (key) => {
  const activeTiles = getActiveTiles();
  if (activeTiles.length >= WORD_LENGTH) return;

  const nextTile = guessGrid.querySelector(":not([data-letter])");
  nextTile.dataset.letter = key.toLowerCase();
  nextTile.textContent = key;
  nextTile.dataset.state = "active";
};

let deleteKey = () => {
  let activeTiles = getActiveTiles();
  let lastTile = activeTiles[activeTiles.length - 1];
  if (lastTile === null) return;
  lastTile.textContent = "";
  delete lastTile.dataset.state;
  delete lastTile.dataset.letter;
};

startInteraction();

let submitGuess = () => {
  const activeTiles = [...getActiveTiles()];
  if (activeTiles.length !== WORD_LENGTH) {
    showAlert(`Please enter a ${WORD_LENGTH} letter word.`);
    shakeTiles(activeTiles);
    return;
  }
  const guess = activeTiles.reduce((word, tile) => {
    return word + tile.dataset.letter;
  }, "");
  if (!dictionary.includes(guess)) {
    showAlert("Enter a champion name");
    shakeTiles(activeTiles);
    return;
  }
  stopInteraction();
  activeTiles.forEach((...params) => flipTile(...params, guess));
};

let flipTile = (tile, index, array, guess) => {
  const letter = tile.dataset.letter;
  const key = keyboard.querySelector(`[data-key="${letter}"i]`);
  setTimeout(() => {
    tile.classList.add("flip");
  }, (index * FLIP_ANIMATION_DURATION) / 2);

  tile.addEventListener(
    "transitionend",
    () => {
      tile.classList.remove("flip");
      if (targetWord[index] === letter) {
        tile.dataset.state = "correct";
        key.classList.add("correct");
      } else if (targetWord.includes(letter)) {
        tile.dataset.state = "wrong-location";
        key.classList.add("wrong-location");
      } else {
        tile.dataset.state = "wrong";
        key.classList.add("wrong");
      }
      if (index === array.length - 1) {
        tile.addEventListener(
          "transitionend",
          () => {
            startInteraction();
            checkWinLose(guess, array);
          },
          { once: true }
        );
      }
    },
    { once: true }
  );
};
let getActiveTiles = () => guessGrid.querySelectorAll("[data-state='active']");

let showAlert = (message, duration = 1000) => {
  const alert = document.createElement("div");
  alert.textContent = message;
  alert.classList.add("alert");
  alertContainer.prepend(alert);
  if (duration === null) return;
  setTimeout(() => {
    alert.classList.add("hide");
    alert.addEventListener("transitionend", () => alert.remove());
  }, duration);
};

let shakeTiles = (tiles) => {
  tiles.forEach((tile) => {
    tile.classList.add("shake");
    tile.addEventListener(
      "animationend",
      () => {
        tile.classList.remove("shake");
      },
      { once: true }
    );
  });
};

let checkWinLose = (guess, tiles) => {
  if (guess === targetWord) {
    showAlert("You Found The Right Champion", 5000);
    danceTiles(tiles);
    stopInteraction();
    return;
  }
  const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])");
  if (remainingTiles.length === 0) {
    showAlert(targetWord.toLocaleUpperCase(), null);
    stopInteraction();
  }
};

let danceTiles = (tiles) => {
  tiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add("dance");
      tile.addEventListener(
        "animationend",
        () => {
          tile.classList.remove("dance");
        },
        { once: true }
      );
    }, (index * DANCE_ANIMATION_DURATION) / 5);
  });
};
