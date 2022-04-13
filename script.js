let names = [
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
  "mundo",
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

let six = [];
let five = [];
let seven = [];
let four = [];
let fiveName = [ 'rakan',
'yasuo',
'janna',
'ziggs',
'teemo',
'elise',
'ziggs',
'leona',
'amumu',
'shaco',
'fiora',
'senna',
'poppy',
'annie',
'sivir',
'shaco',
'jayce',
'vayne',
'senna',
'vayne',
'karma',
'viego',
'talon',
'brand',
'riven',
'shaco',
'annie',
'talon',
'xayah',
'viego',
'yuumi',
'taric',
'galio',
'annie',
'yuumi',
'xayah',
'ivern',
'rakan',
'varus',
'sivir',
'viego',
'quinn',
'quinn',
'brand',
'talon',
'akali',
'sivir',
'braum',
'fiora',
'nasus',
'amumu',
'janna',
'xayah',
'xayah',
'taric',
'kayle',
'mundo',
'swain',
'janna',
'taric',
'ivern',
'nasus',
'nasus',
'akali',
'jayce',
'riven',
'varus',
'rakan',
'diana',
'talon',
'quinn',
'quinn',
'neeko',
'janna',
'rakan',
'neeko',
'elise',
'riven',
'poppy',
'galio',
'talon',
'ivern',
'akali',
'senna',
'galio',
'swain',
'senna',
'sylas',
'shaco',
'neeko',
'karma',
'fiora',
'sivir',
'sivir',
'kaisa',
'talon',
'poppy',
'vayne',
'neeko',
'kaisa',
'kayle',
'akali',
'braum',
'talon',
'sylas',
'nasus',
'mundo',
'kayle',
'elise',
'neeko',
'corki',
'teemo',
'urgot',
'jayce',
'shaco',
'varus',
'janna',
'garen',
'taric',
'varus',
'teemo',
'teemo',
'corki',
'taric',
'akali',
'nasus',
'karma',
'brand',
'varus',
'quinn',
'vayne',
'senna',
'yasuo',
'galio',
'fiora',
'quinn',
'elise',
'ziggs',
'rakan',
'corki',
'ziggs',
'galio',
'jayce',
'leona',
'brand',
'vayne',
'taric',
'varus',
'riven',
'janna',
'viego',
'kaisa',
'jayce',
'diana',
'leona',
'swain',
'kayle',
'jayce',
'urgot',
'braum',
'vayne',
'yasuo',
'ziggs',
'akali',
'rakan',
'kaisa',
'annie',
'nasus',
'corki',
'yuumi',
'yasuo',
'vayne',
'nasus',
'braum',
'annie',
'kayle',
'teemo',
'viego',
'karma',
'yasuo',
'teemo',
'leona',
'fiora',
'xayah',
'mundo',
'viego',
'swain',
'xayah',
'nasus',
'fiora',
'senna',
'jayce',
'kaisa',
'yuumi',
'mundo',
'senna',
'yuumi',
'corki',
'leona',
'yuumi',
'yasuo',
'vayne',
'ziggs',
'viego',
'braum',
'ivern',
'galio',
'galio',
'sylas',
'kaisa',
'urgot',
'yuumi',
'quinn',
'sylas',
'urgot',
'akali',
'garen',
'amumu',
'akali',
'ivern',
'vayne',
'ziggs',
'elise',
'kaisa',
'galio',
'poppy',
'leona',
'neeko',
'garen',
'ziggs',
'karma',
'garen',
'kaisa',
'poppy',
'poppy',
'janna',
'corki',
'varus',
'braum',
'sylas',
'mundo',
'diana',
'shaco',
'quinn',
'riven',
'shaco',
'diana',
'sivir',
'quinn',
'neeko',
'annie',
'brand',
'viego',
'swain',
'corki',
'sylas',
'rakan',
'mundo',
'shaco',
'diana',
'swain',
'quinn',
'sylas',
'neeko',
'leona',
'poppy',
'garen',
'yuumi',
'varus',
'diana',
'mundo',
'sivir',
'amumu',
'urgot',
'janna',
'amumu',
'amumu',
'sylas',
'rakan',
'viego',
'riven',
'diana',
'xayah',
'swain',
'brand',
'amumu',
'kayle',
'braum',
'shaco',
'shaco',
'quinn',
'urgot',
'varus',
'amumu',
'mundo',
'fiora',
'viego',
'brand',
'braum',
'teemo',
'ivern',
'leona',
'karma',
'fiora',
'yasuo',
'fiora',
'sylas',
'ziggs',
'urgot',
'jayce',
'diana',
'brand',
'poppy',
'teemo',
'brand',
'nasus',
'karma',
'fiora',
'sivir',
'corki',
'mundo',
'diana',
'elise',
'annie',
'yasuo',
'corki',
'braum',
'rakan',
'garen',
'urgot',
'yuumi',
'yuumi',
'taric',
'viego',
'talon',
'braum',
'annie',
'rakan',
'varus',
'sivir',
'annie',
'karma',
'elise',
'kaisa',
'talon',
'riven',
'xayah',
'amumu',
'teemo',
'yuumi',
'leona',
'riven',
'riven',
'akali',
'brand',
'garen',
'poppy',
'janna',
'karma',
'akali',
'taric',
'senna',
'teemo',
'amumu',
'varus',
'urgot',
'fiora',
'elise',
'elise',
'yasuo',
'yasuo',
'sivir',
'galio',
'garen',
'galio',
'neeko',
'vayne',
'akali',
'kayle',
'senna',
'brand',
'sylas',
'ivern',
'diana',
'leona',
'corki',
'sylas',
'corki',
'mundo',
'vayne',
'riven',
'talon',
'amumu',
'kayle',
'elise',
'nasus',
'viego',
'leona',
'amumu',
'garen',
'kayle',
'karma',
'annie',
'poppy',
'vayne',
'talon',
'yasuo',
'shaco',
'elise',
'swain',
'xayah',
'ivern',
'garen',
'xayah',
'ziggs',
'teemo',
'jayce',
'swain',
'poppy',
'kayle',
'fiora',
'urgot',
'talon',
'ziggs',
'ivern',
'janna',
'diana',
'galio',
'urgot',
'nasus',
'garen',
'swain',
'karma',
'teemo',
'kaisa',
'ziggs',
'quinn',
'xayah',
'ivern',
'rakan',
'taric',
'xayah',
'karma',
'akali',
'urgot',
'kaisa',
'swain',
'jayce',
'diana',
'sivir',
'swain',
'mundo',
'sivir',
'janna',
'taric',
'taric',
'kaisa',
'rakan',
'galio',
'braum',
'braum',
'sylas',
'kayle',
'poppy',
'jayce',
'yasuo',
'corki',
'neeko',
'senna',
'riven',
'leona',
'senna',
'senna',
'elise',
'yuumi',
'neeko',
'ivern',
'annie',
'kayle',
'janna',
'nasus',
'garen',
'annie',
'neeko',
'varus',
'riven',
'ivern',
'shaco',
'mundo',
'jayce',
'brand',
'taric' ];

for (let i = 0; i < names.length; i++) {
  switch (names[i].length) {
    case 6:
      six.push(names[i]);
      break;
    case 5:
      five.push(names[i]);
      break;
    case 7:
      seven.push(names[i]);
      break;
    case 4:
      four.push(names[i]);
      break;
  }
}

const targetWords = [...fiveName]
const dictionary = [...five];
const WORD_LENGTH = 5;
const offsetFromDate = new Date(2022, 3, 13);
const msOffset = Date.now() - offsetFromDate;
const dayOffset = msOffset /1000 / 60 / 60 / 24;
const FLIP_ANIMATION_DURATION = 500;
const DANCE_ANIMATION_DURATION = 500;
const targetWord = targetWords[Math.floor(dayOffset)];
const keyboard = document.querySelector("[data-keyboard]");
let guessGrid = document.querySelector("[data-guess-grid]");
let alertContainer = document.querySelector("[data-alert-container]");

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
    showAlert("You Win", 5000);
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

startInteraction();
