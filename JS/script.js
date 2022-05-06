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
let shuffledChampions = [
  "ornn",
  "leona",
  "wukong",
  "garen",
  "kalista",
  "irelia",
  "pyke",
  "darius",
  "galio",
  "swain",
  "kayle",
  "morgana",
  "warwick",
  "leona",
  "nidalee",
  "bard",
  "nami",
  "pyke",
  "jhin",
  "udyr",
  "zyra",
  "yorick",
  "rumble",
  "teemo",
  "shyvana",
  "ryze",
  "viego",
  "samira",
  "soraka",
  "evelynn",
  "morgana",
  "wukong",
  "jinx",
  "khazix",
  "olaf",
  "janna",
  "gnar",
  "sona",
  "evelynn",
  "shyvana",
  "amumu",
  "yuumi",
  "camille",
  "rell",
  "udyr",
  "rumble",
  "thresh",
  "illaoi",
  "taliyah",
  "rengar",
  "lulu",
  "elise",
  "trundle",
  "soraka",
  "karthus",
  "viktor",
  "graves",
  "trundle",
  "kalista",
  "yuumi",
  "swain",
  "qiyana",
  "orianna",
  "ivern",
  "azir",
  "veigar",
  "skarner",
  "rakan",
  "leblanc",
  "braum",
  "teemo",
  "ashe",
  "wukong",
  "senna",
  "sett",
  "nasus",
  "neeko",
  "yone",
  "akshan",
  "shen",
  "xinzhao",
  "neeko",
  "udyr",
  "nasus",
  "qiyana",
  "orianna",
  "nasus",
  "ziggs",
  "shen",
  "xayah",
  "fizz",
  "reksai",
  "jayce",
  "singed",
  "zeri",
  "ekko",
  "ziggs",
  "urgot",
  "teemo",
  "trundle",
  "leona",
  "kalista",
  "ryze",
  "gnar",
  "braum",
  "singed",
  "chogath",
  "rammus",
  "brand",
  "morgana",
  "olaf",
  "yuumi",
  "kayle",
  "annie",
  "trundle",
  "thresh",
  "ashe",
  "zyra",
  "veigar",
  "aatrox",
  "teemo",
  "rammus",
  "xerath",
  "veigar",
  "sivir",
  "annie",
  "rengar",
  "yone",
  "sona",
  "graves",
  "fiora",
  "taric",
  "jhin",
  "reksai",
  "amumu",
  "lulu",
  "hecarim",
  "amumu",
  "nidalee",
  "amumu",
  "sivir",
  "ashe",
  "darius",
  "braum",
  "nami",
  "darius",
  "ziggs",
  "orianna",
  "leblanc",
  "jinx",
  "ryze",
  "kindred",
  "ezreal",
  "riven",
  "kaisa",
  "xinzhao",
  "zyra",
  "zeri",
  "vayne",
  "sejuani",
  "draven",
  "lucian",
  "akshan",
  "khazix",
  "thresh",
  "ivern",
  "kogmaw",
  "evelynn",
  "aatrox",
  "xerath",
  "gragas",
  "viktor",
  "karma",
  "taric",
  "shen",
  "kalista",
  "kindred",
  "sivir",
  "qiyana",
  "quinn",
  "diana",
  "skarner",
  "yorick",
  "sion",
  "velkoz",
  "fiora",
  "gnar",
  "senna",
  "zilean",
  "viktor",
  "kogmaw",
  "nasus",
  "darius",
  "viego",
  "ahri",
  "twitch",
  "maokai",
  "olaf",
  "elise",
  "lillia",
  "velkoz",
  "renata",
  "galio",
  "swain",
  "galio",
  "caitlyn",
  "twitch",
  "kennen",
  "nami",
  "syndra",
  "sett",
  "morgana",
  "xerath",
  "zeri",
  "galio",
  "trundle",
  "ryze",
  "diana",
  "xayah",
  "lucian",
  "illaoi",
  "zilean",
  "nami",
  "orianna",
  "corki",
  "brand",
  "yorick",
  "brand",
  "karthus",
  "akali",
  "chogath",
  "khazix",
  "rumble",
  "camille",
  "chogath",
  "irelia",
  "quinn",
  "wukong",
  "shaco",
  "skarner",
  "syndra",
  "garen",
  "darius",
  "jayce",
  "yasuo",
  "olaf",
  "brand",
  "akali",
  "yasuo",
  "kled",
  "shyvana",
  "leesin",
  "leona",
  "varus",
  "akali",
  "varus",
  "darius",
  "amumu",
  "morgana",
  "sejuani",
  "akshan",
  "illaoi",
  "senna",
  "galio",
  "garen",
  "taric",
  "galio",
  "janna",
  "aatrox",
  "sona",
  "alistar",
  "graves",
  "jinx",
  "taliyah",
  "karma",
  "viego",
  "camille",
  "annie",
  "brand",
  "wukong",
  "syndra",
  "janna",
  "veigar",
  "senna",
  "amumu",
  "kennen",
  "ahri",
  "camille",
  "singed",
  "pyke",
  "corki",
  "swain",
  "ekko",
  "nasus",
  "bard",
  "rakan",
  "shyvana",
  "nasus",
  "brand",
  "fizz",
  "leesin",
  "soraka",
  "jinx",
  "veigar",
  "ornn",
  "kayle",
  "ezreal",
  "shyvana",
  "senna",
  "shaco",
  "gwen",
  "senna",
  "udyr",
  "wukong",
  "fizz",
  "ashe",
  "brand",
  "ryze",
  "yone",
  "samira",
  "hecarim",
  "kogmaw",
  "chogath",
  "pyke",
  "riven",
  "janna",
  "alistar",
  "reksai",
  "zeri",
  "karthus",
  "irelia",
  "ekko",
  "garen",
  "gwen",
  "lillia",
  "rakan",
  "kogmaw",
  "qiyana",
  "jhin",
  "corki",
  "kayn",
  "kalista",
  "kindred",
  "thresh",
  "ekko",
  "vayne",
  "sejuani",
  "sivir",
  "kennen",
  "ezreal",
  "ahri",
  "camille",
  "lillia",
  "nidalee",
  "kalista",
  "gragas",
  "karma",
  "soraka",
  "xayah",
  "swain",
  "braum",
  "pyke",
  "yuumi",
  "amumu",
  "ashe",
  "taric",
  "fiora",
  "shyvana",
  "karthus",
  "kayn",
  "kayle",
  "akshan",
  "azir",
  "gwen",
  "camille",
  "zilean",
  "rakan",
  "morgana",
  "rumble",
  "kaisa",
  "vayne",
  "shen",
  "qiyana",
  "sion",
  "viktor",
  "teemo",
  "drmundo",
  "skarner",
  "nami",
  "pyke",
  "samira",
  "samira",
  "shen",
  "akshan",
  "azir",
  "qiyana",
  "rengar",
  "renata",
  "gragas",
  "xerath",
  "jinx",
  "karthus",
  "garen",
  "zyra",
  "nidalee",
  "jhin",
  "ornn",
  "jhin",
  "reksai",
  "ezreal",
  "kayn",
  "gragas",
  "yuumi",
  "jayce",
  "swain",
  "yorick",
  "orianna",
  "talon",
  "kaisa",
  "irelia",
  "karma",
  "maokai",
  "riven",
  "akali",
  "urgot",
  "sejuani",
  "ahri",
  "zyra",
  "rammus",
  "ryze",
  "singed",
  "lulu",
  "ekko",
  "xayah",
  "olaf",
  "kalista",
  "kennen",
  "ezreal",
  "leesin",
  "zilean",
  "ziggs",
  "yasuo",
  "lucian",
  "janna",
  "gragas",
  "zyra",
  "brand",
  "sett",
  "rumble",
  "wukong",
  "jinx",
  "skarner",
  "swain",
  "skarner",
  "azir",
  "anivia",
  "taliyah",
  "urgot",
  "twitch",
  "aatrox",
  "sona",
  "rakan",
  "elise",
  "xinzhao",
  "karma",
  "kogmaw",
  "xayah",
  "evelynn",
  "ornn",
  "gragas",
  "illaoi",
  "bard",
  "brand",
  "rell",
  "gnar",
  "yasuo",
  "khazix",
  "poppy",
  "yuumi",
  "aatrox",
  "kayle",
  "nami",
  "chogath",
  "jinx",
  "draven",
  "draven",
  "velkoz",
  "akshan",
  "brand",
  "akali",
  "lulu",
  "gwen",
  "kayle",
  "xinzhao",
  "draven",
  "rammus",
  "shen",
  "yone",
  "gragas",
  "poppy",
  "bard",
  "trundle",
  "xayah",
  "draven",
  "twitch",
  "singed",
  "galio",
  "rakan",
  "rakan",
  "shaco",
  "corki",
  "gnar",
  "jayce",
  "ahri",
  "quinn",
  "gragas",
  "yuumi",
  "amumu",
  "janna",
  "zeri",
  "thresh",
  "jhin",
  "lucian",
  "zilean",
  "azir",
  "kaisa",
  "anivia",
  "twitch",
  "ornn",
  "udyr",
  "samira",
  "anivia",
  "sion",
  "riven",
  "annie",
  "warwick",
  "thresh",
  "veigar",
  "twitch",
  "rengar",
  "swain",
  "warwick",
  "jinx",
  "poppy",
  "yone",
  "udyr",
  "ryze",
  "leesin",
  "karma",
  "akali",
  "syndra",
  "quinn",
  "camille",
  "syndra",
  "pyke",
  "senna",
  "akali",
  "drmundo",
  "ziggs",
  "garen",
  "urgot",
  "qiyana",
  "kayn",
  "kennen",
  "orianna",
  "drmundo",
  "annie",
  "veigar",
  "maokai",
  "leona",
  "azir",
  "amumu",
  "morgana",
  "taliyah",
  "sion",
  "velkoz",
  "corki",
  "ryze",
  "talon",
  "yasuo",
  "udyr",
  "renata",
  "morgana",
  "ekko",
  "elise",
  "bard",
  "shaco",
  "ivern",
  "annie",
  "shaco",
  "renata",
  "warwick",
  "kalista",
  "morgana",
  "rell",
  "nidalee",
  "rell",
  "aatrox",
  "bard",
  "twitch",
  "talon",
  "karthus",
  "braum",
  "kindred",
  "lillia",
  "sion",
  "varus",
  "elise",
  "yone",
  "caitlyn",
  "gnar",
  "kled",
  "xerath",
  "rakan",
  "viego",
  "fiora",
  "alistar",
  "zilean",
  "kogmaw",
  "skarner",
  "xinzhao",
  "ziggs",
  "ezreal",
  "sejuani",
  "ziggs",
  "riven",
  "morgana",
  "anivia",
  "maokai",
  "anivia",
  "khazix",
  "sivir",
  "poppy",
  "yorick",
  "yasuo",
  "draven",
  "amumu",
  "pyke",
  "illaoi",
  "amumu",
  "zeri",
  "kennen",
  "ziggs",
  "sejuani",
  "hecarim",
  "janna",
  "ryze",
  "zeri",
  "evelynn",
  "orianna",
  "brand",
  "ornn",
  "azir",
  "rengar",
  "shaco",
  "rengar",
  "akshan",
  "velkoz",
  "illaoi",
  "graves",
  "yone",
  "hecarim",
  "wukong",
  "kogmaw",
  "ivern",
  "renata",
  "jayce",
  "sivir",
  "rumble",
  "illaoi",
  "ornn",
  "lucian",
  "graves",
  "brand",
  "illaoi",
  "yasuo",
  "rakan",
  "udyr",
  "kindred",
  "viktor",
  "caitlyn",
  "leona",
  "syndra",
  "sivir",
  "kindred",
  "neeko",
  "sona",
  "swain",
  "pyke",
  "evelynn",
  "kled",
  "veigar",
  "jayce",
  "yasuo",
  "hecarim",
  "soraka",
  "leblanc",
  "kogmaw",
  "corki",
  "lulu",
  "alistar",
  "karthus",
  "shen",
  "yone",
  "udyr",
  "veigar",
  "corki",
  "sylas",
  "xinzhao",
  "taliyah",
  "gnar",
  "vayne",
  "rakan",
  "shyvana",
  "taric",
  "ziggs",
  "fiora",
  "maokai",
  "yone",
  "varus",
  "rakan",
  "renata",
  "karthus",
  "talon",
  "jayce",
  "chogath",
  "kled",
  "leona",
  "varus",
  "gwen",
  "thresh",
  "aatrox",
  "zilean",
  "singed",
  "soraka",
  "ashe",
  "ezreal",
  "neeko",
  "drmundo",
  "karma",
  "senna",
  "poppy",
  "swain",
  "ivern",
  "darius",
  "taric",
  "ezreal",
  "twitch",
  "sejuani",
  "teemo",
  "galio",
  "morgana",
  "alistar",
  "draven",
  "zyra",
  "darius",
  "vayne",
  "camille",
  "rammus",
  "gnar",
  "hecarim",
  "alistar",
  "rumble",
  "rengar",
  "zyra",
  "akshan",
  "senna",
  "ekko",
  "sylas",
  "xinzhao",
  "singed",
  "garen",
  "rengar",
  "rakan",
  "kayle",
  "trundle",
  "lillia",
  "ashe",
  "alistar",
  "varus",
  "olaf",
  "lillia",
  "xerath",
  "sivir",
  "neeko",
  "chogath",
  "maokai",
  "orianna",
  "lillia",
  "riven",
  "shyvana",
  "reksai",
  "rumble",
  "akshan",
  "evelynn",
  "gragas",
  "annie",
  "lulu",
  "lucian",
  "rell",
  "sivir",
  "veigar",
  "neeko",
  "lillia",
  "shen",
  "leona",
  "ziggs",
  "skarner",
  "thresh",
  "talon",
  "rengar",
  "graves",
  "kayle",
  "zyra",
  "fiora",
  "varus",
  "kogmaw",
  "garen",
  "kaisa",
  "sona",
  "neeko",
  "kaisa",
  "ziggs",
  "bard",
  "taric",
  "soraka",
  "nasus",
  "galio",
  "xerath",
  "graves",
  "chogath",
  "ornn",
  "fiora",
  "olaf",
  "rammus",
  "velkoz",
  "irelia",
  "nami",
  "talon",
  "gnar",
  "ryze",
  "graves",
  "sett",
  "kindred",
  "lulu",
  "ahri",
  "nidalee",
  "vayne",
  "fiora",
  "kaisa",
  "samira",
  "maokai",
  "orianna",
  "alistar",
  "xayah",
  "poppy",
  "kennen",
  "bard",
  "shen",
  "chogath",
  "samira",
  "sejuani",
  "yasuo",
  "yorick",
  "illaoi",
  "irelia",
  "fiora",
  "xerath",
  "sett",
  "kled",
  "azir",
  "shaco",
  "rell",
  "jhin",
  "garen",
  "braum",
  "gragas",
  "ivern",
  "illaoi",
  "irelia",
  "gragas",
  "caitlyn",
  "galio",
  "lillia",
  "sona",
  "sylas",
  "velkoz",
  "kled",
  "akali",
  "velkoz",
  "olaf",
  "ivern",
  "shaco",
  "ahri",
  "urgot",
  "lillia",
  "orianna",
  "rell",
  "garen",
  "sett",
  "kayn",
  "skarner",
  "nasus",
  "maokai",
  "udyr",
  "jayce",
  "wukong",
  "riven",
  "anivia",
  "bard",
  "evelynn",
  "taliyah",
  "warwick",
  "pyke",
  "ahri",
  "sett",
  "nasus",
  "yorick",
  "rammus",
  "drmundo",
  "lulu",
  "viego",
  "kayle",
  "warwick",
  "corki",
  "alistar",
  "kayn",
  "khazix",
  "olaf",
  "teemo",
  "talon",
  "taliyah",
  "viktor",
  "nidalee",
  "leesin",
  "taliyah",
  "vayne",
  "viego",
  "reksai",
  "fizz",
  "corki",
  "leona",
  "sylas",
  "senna",
  "fizz",
  "udyr",
  "caitlyn",
  "shyvana",
  "leesin",
  "nami",
  "yone",
  "thresh",
  "sion",
  "leona",
  "olaf",
  "chogath",
  "renata",
  "leesin",
  "talon",
  "reksai",
  "akali",
  "rengar",
  "kayle",
  "quinn",
  "zilean",
  "azir",
  "darius",
  "chogath",
  "olaf",
  "varus",
  "zeri",
  "corki",
  "karma",
  "irelia",
  "lucian",
  "galio",
  "karma",
  "thresh",
  "ivern",
  "poppy",
  "viego",
  "xinzhao",
  "velkoz",
  "drmundo",
  "diana",
  "ryze",
  "vayne",
  "lulu",
  "taric",
  "annie",
  "ashe",
  "neeko",
  "wukong",
  "jhin",
  "gwen",
  "udyr",
  "veigar",
  "zyra",
  "kennen",
  "nasus",
  "morgana",
  "jinx",
  "xerath",
  "akali",
  "skarner",
  "ekko",
  "varus",
  "quinn",
  "kogmaw",
  "kalista",
  "singed",
  "kled",
  "qiyana",
  "maokai",
  "syndra",
  "kaisa",
  "soraka",
  "draven",
  "kaisa",
  "caitlyn",
  "lulu",
  "corki",
  "vayne",
  "ezreal",
  "kennen",
  "leblanc",
  "ashe",
  "amumu",
  "kaisa",
  "lulu",
  "vayne",
  "trundle",
  "sejuani",
  "samira",
  "taliyah",
  "kindred",
  "diana",
  "lulu",
  "yone",
  "warwick",
  "ashe",
  "braum",
  "leesin",
  "swain",
  "sylas",
  "sejuani",
  "bard",
  "lucian",
  "reksai",
  "shen",
  "ahri",
  "gwen",
  "nasus",
  "jhin",
  "renata",
  "leona",
  "taliyah",
  "gwen",
  "warwick",
  "lucian",
  "shaco",
  "lucian",
  "xinzhao",
  "zilean",
  "xayah",
  "lillia",
  "shyvana",
  "viego",
  "urgot",
  "neeko",
  "aatrox",
  "soraka",
  "warwick",
  "maokai",
  "wukong",
  "zilean",
  "neeko",
  "gnar",
  "kled",
  "gnar",
  "rakan",
  "diana",
  "zilean",
  "syndra",
  "poppy",
  "jhin",
  "leona",
  "talon",
  "rumble",
  "kayn",
  "leesin",
  "ezreal",
  "talon",
  "soraka",
  "rell",
  "draven",
  "lulu",
  "kindred",
  "rumble",
  "rell",
  "maokai",
  "taliyah",
  "taric",
  "drmundo",
  "fiora",
  "graves",
  "camille",
  "thresh",
  "galio",
  "sion",
  "zyra",
  "braum",
  "twitch",
  "kled",
  "rammus",
  "gwen",
  "rammus",
  "irelia",
  "akali",
  "ahri",
  "ezreal",
  "teemo",
  "velkoz",
  "taliyah",
  "annie",
  "kennen",
  "xayah",
  "riven",
  "anivia",
  "wukong",
  "teemo",
  "draven",
  "renata",
  "kaisa",
  "aatrox",
  "draven",
  "garen",
  "xayah",
  "bard",
  "rell",
  "singed",
  "shen",
  "nasus",
  "rengar",
  "soraka",
  "evelynn",
  "nidalee",
  "sett",
  "thresh",
  "viktor",
  "kalista",
  "lillia",
  "sylas",
  "janna",
  "lucian",
  "sejuani",
  "urgot",
  "quinn",
  "taric",
  "neeko",
  "karma",
  "urgot",
  "ornn",
  "thresh",
  "braum",
  "gragas",
  "brand",
  "leblanc",
  "viego",
  "leona",
  "karma",
  "leesin",
  "kayle",
  "ekko",
  "akali",
  "leesin",
  "karma",
  "renata",
  "yasuo",
  "maokai",
  "senna",
  "qiyana",
  "warwick",
  "jayce",
  "caitlyn",
  "evelynn",
  "elise",
  "syndra",
  "lillia",
  "caitlyn",
  "samira",
  "olaf",
  "jhin",
  "kaisa",
  "bard",
  "lulu",
  "graves",
  "rumble",
  "nasus",
  "leblanc",
  "graves",
  "rell",
  "singed",
  "draven",
  "reksai",
  "irelia",
  "elise",
  "viktor",
  "rammus",
  "riven",
  "viktor",
  "vayne",
  "varus",
  "elise",
  "annie",
  "quinn",
  "leesin",
  "yuumi",
  "talon",
  "drmundo",
  "pyke",
  "ekko",
  "shen",
  "diana",
  "kled",
  "kayle",
  "rengar",
  "teemo",
  "samira",
  "jhin",
  "renata",
  "viktor",
  "diana",
  "jinx",
  "nami",
  "trundle",
  "elise",
  "hecarim",
  "zilean",
  "drmundo",
  "reksai",
  "velkoz",
  "quinn",
  "xerath",
  "draven",
  "udyr",
  "janna",
  "karthus",
  "zyra",
  "ivern",
  "fizz",
  "kled",
  "soraka",
  "sylas",
  "hecarim",
  "ornn",
  "samira",
  "xinzhao",
  "yorick",
  "talon",
  "sett",
  "ahri",
  "kled",
  "kled",
  "sion",
  "anivia",
  "kled",
  "gwen",
  "camille",
  "neeko",
  "riven",
  "zeri",
  "trundle",
  "renata",
  "fiora",
  "drmundo",
  "fizz",
  "fizz",
  "karthus",
  "leblanc",
  "zyra",
  "taric",
  "jayce",
  "shaco",
  "skarner",
  "lucian",
  "fiora",
  "olaf",
  "taric",
  "gnar",
  "poppy",
  "reksai",
  "warwick",
  "sivir",
  "leblanc",
  "annie",
  "urgot",
  "camille",
  "anivia",
  "akali",
  "azir",
  "kalista",
  "hecarim",
  "nami",
  "pyke",
  "diana",
  "kindred",
  "anivia",
  "galio",
  "camille",
  "teemo",
  "akshan",
  "kayn",
  "xayah",
  "yuumi",
  "orianna",
  "akshan",
  "swain",
  "kindred",
  "drmundo",
  "khazix",
  "sylas",
  "gwen",
  "leesin",
  "hecarim",
  "anivia",
  "velkoz",
  "karthus",
  "akshan",
  "shaco",
  "qiyana",
  "ashe",
  "hecarim",
  "gwen",
  "fiora",
  "gwen",
  "ryze",
  "reksai",
  "karthus",
  "gragas",
  "caitlyn",
  "olaf",
  "talon",
  "morgana",
  "shyvana",
  "aatrox",
  "urgot",
  "pyke",
  "sylas",
  "illaoi",
  "udyr",
  "twitch",
  "skarner",
  "karma",
  "sylas",
  "trundle",
  "velkoz",
  "twitch",
  "xinzhao",
  "veigar",
  "shyvana",
  "quinn",
  "teemo",
  "poppy",
  "yorick",
  "thresh",
  "skarner",
  "xayah",
  "azir",
  "kennen",
  "caitlyn",
  "chogath",
  "viego",
  "veigar",
  "swain",
  "skarner",
  "hecarim",
  "shyvana",
  "maokai",
  "nasus",
  "warwick",
  "qiyana",
  "sylas",
  "yorick",
  "taric",
  "viktor",
  "garen",
  "akshan",
  "yasuo",
  "draven",
  "rammus",
  "gwen",
  "jhin",
  "teemo",
  "diana",
  "leona",
  "janna",
  "irelia",
  "jayce",
  "vayne",
  "rakan",
  "sett",
  "janna",
  "ivern",
  "braum",
  "braum",
  "kalista",
  "darius",
  "diana",
  "wukong",
  "evelynn",
  "evelynn",
  "janna",
  "maokai",
  "yorick",
  "taliyah",
  "orianna",
  "camille",
  "yuumi",
  "poppy",
  "nami",
  "shen",
  "sylas",
  "jinx",
  "xayah",
  "yuumi",
  "shaco",
  "kaisa",
  "syndra",
  "qiyana",
  "velkoz",
  "garen",
  "viktor",
  "viego",
  "evelynn",
  "soraka",
  "azir",
  "drmundo",
  "poppy",
  "urgot",
  "alistar",
  "corki",
  "poppy",
  "yasuo",
  "khazix",
  "wukong",
  "riven",
  "caitlyn",
  "diana",
  "zilean",
  "darius",
  "leesin",
  "orianna",
  "twitch",
  "ekko",
  "sion",
  "rammus",
  "zyra",
  "aatrox",
  "viktor",
  "kled",
  "senna",
  "kindred",
  "renata",
  "neeko",
  "vayne",
  "ezreal",
  "leblanc",
  "senna",
  "akshan",
  "kayn",
  "illaoi",
  "vayne",
  "senna",
  "kalista",
  "ekko",
  "alistar",
  "rakan",
  "yone",
  "gnar",
  "drmundo",
  "warwick",
  "illaoi",
  "sylas",
  "shyvana",
  "sett",
  "ahri",
  "fizz",
  "talon",
  "ashe",
  "amumu",
  "zeri",
  "graves",
  "sett",
  "ahri",
  "syndra",
  "drmundo",
  "ekko",
  "shaco",
  "karma",
  "drmundo",
  "urgot",
  "ziggs",
  "darius",
  "varus",
  "renata",
  "garen",
  "ryze",
  "aatrox",
  "jayce",
  "kayle",
  "diana",
  "morgana",
  "rengar",
  "evelynn",
  "soraka",
  "elise",
  "jayce",
  "zilean",
  "qiyana",
  "ivern",
  "ekko",
  "kaisa",
  "samira",
  "anivia",
  "riven",
  "sivir",
  "neeko",
  "xayah",
  "trundle",
  "kayle",
  "chogath",
  "yorick",
  "kaisa",
  "kayn",
  "fizz",
  "galio",
  "quinn",
  "kayn",
  "twitch",
  "corki",
  "ahri",
  "caitlyn",
  "ashe",
  "yuumi",
  "amumu",
  "alistar",
  "ivern",
  "lucian",
  "jinx",
  "khazix",
  "kayn",
  "hecarim",
  "orianna",
  "sivir",
  "rumble",
  "illaoi",
  "singed",
  "zilean",
  "warwick",
  "nidalee",
  "lillia",
  "singed",
  "yasuo",
  "ornn",
  "fizz",
  "talon",
  "nami",
  "leesin",
  "nami",
  "darius",
  "kindred",
  "kayle",
  "singed",
  "xerath",
  "kayn",
  "varus",
  "kennen",
  "irelia",
  "illaoi",
  "ziggs",
  "varus",
  "lulu",
  "elise",
  "sejuani",
  "maokai",
  "azir",
  "alistar",
  "chogath",
  "teemo",
  "leona",
  "shyvana",
  "sejuani",
  "kalista",
  "graves",
  "yorick",
  "bard",
  "fizz",
  "rammus",
  "kalista",
  "pyke",
  "jayce",
  "irelia",
  "nidalee",
  "samira",
  "sion",
  "brand",
  "nami",
  "taric",
  "viego",
  "twitch",
  "rell",
  "rengar",
  "reksai",
  "fiora",
  "sett",
  "zeri",
  "zeri",
  "karthus",
  "khazix",
  "leblanc",
  "sett",
  "xinzhao",
  "karma",
  "jinx",
  "ornn",
  "twitch",
  "syndra",
  "braum",
  "skarner",
  "kogmaw",
  "sion",
  "kennen",
  "diana",
  "zeri",
  "ryze",
  "jayce",
  "ivern",
  "camille",
  "veigar",
  "elise",
  "khazix",
  "nami",
  "zeri",
  "wukong",
  "alistar",
  "rell",
  "kindred",
  "fiora",
  "leblanc",
  "zyra",
  "jinx",
  "braum",
  "gnar",
  "lillia",
  "nidalee",
  "yorick",
  "qiyana",
  "rumble",
  "karthus",
  "lucian",
  "ekko",
  "elise",
  "karthus",
  "corki",
  "ashe",
  "urgot",
  "ornn",
  "anivia",
  "taliyah",
  "alistar",
  "fizz",
  "rell",
  "annie",
  "sylas",
  "yuumi",
  "rumble",
  "singed",
  "corki",
  "yone",
  "riven",
  "sett",
  "rengar",
  "braum",
  "camille",
  "darius",
  "yuumi",
  "gwen",
  "shen",
  "annie",
  "hecarim",
  "gragas",
  "quinn",
  "syndra",
  "graves",
  "jhin",
  "taliyah",
  "irelia",
  "zeri",
  "sion",
  "rumble",
  "sivir",
  "ziggs",
  "gragas",
  "yorick",
  "ezreal",
  "ziggs",
  "ivern",
  "veigar",
  "xerath",
  "ahri",
  "jhin",
  "yasuo",
  "kogmaw",
  "nidalee",
  "amumu",
  "sona",
  "sejuani",
  "sivir",
  "nidalee",
  "senna",
  "sion",
  "sona",
  "caitlyn",
  "kayn",
  "taric",
  "gnar",
  "aatrox",
  "ryze",
  "urgot",
  "garen",
  "kogmaw",
  "shen",
  "khazix",
  "fizz",
  "morgana",
  "xerath",
  "darius",
  "trundle",
  "varus",
  "sona",
  "vayne",
  "soraka",
  "kogmaw",
  "ashe",
  "quinn",
  "janna",
  "sona",
  "xerath",
  "yone",
  "orianna",
  "riven",
  "sion",
  "viego",
  "rammus",
  "chogath",
  "renata",
  "viktor",
  "thresh",
  "evelynn",
  "ivern",
  "sona",
  "olaf",
  "janna",
  "xinzhao",
  "janna",
  "shaco",
  "anivia",
  "neeko",
  "samira",
  "poppy",
  "khazix",
  "yasuo",
  "warwick",
  "annie",
  "khazix",
  "nidalee",
  "kennen",
  "udyr",
  "graves",
  "leblanc",
  "trundle",
  "viego",
  "syndra",
  "shaco",
  "akshan",
  "khazix",
  "pyke",
  "elise",
  "singed",
  "ezreal",
  "ezreal",
  "syndra",
  "teemo",
  "quinn",
  "xerath",
  "xinzhao",
  "swain",
  "quinn",
  "aatrox",
  "lucian",
  "draven",
  "ornn",
  "bard",
  "aatrox",
  "fizz",
  "varus",
  "hecarim",
  "viego",
  "sion",
  "poppy",
  "irelia",
  "brand",
  "qiyana",
  "urgot",
  "kennen",
  "yuumi",
  "sona",
  "sona",
  "diana",
  "sivir",
  "leblanc",
  "nasus",
  "akali",
  "samira",
  "leona",
  "reksai",
  "bard",
  "jinx",
  "leblanc",
  "annie",
  "swain",
  "caitlyn",
  "azir",
  "elise",
  "caitlyn",
  "anivia",
  "viktor",
  "akali",
  "reksai",
  "rammus",
  "xayah",
  "rell",
  "kindred",
  "diana",
  "azir",
  "yone",
  "velkoz",
  "galio",
  "riven",
  "kayn",
  "ornn",
  "xinzhao",
  "braum",
  "sona",
  "sylas",
  "trundle",
  "kogmaw",
  "sejuani",
  "leblanc",
];
const targetWords = [...shuffledChampions];
const dictionary = [...CHAMPIONS_LIST];
const NUMBER_OF_GUESSES = 6;
const offsetFromDate = new Date(2022, 3, 13);
const msOffset = Date.now() - offsetFromDate;
const dayOffset = msOffset / 1000 / 60 / 60 / 24;
const targetWord = targetWords[Math.floor(dayOffset)];
let targetWordIndex = Math.floor(dayOffset);
const WORD_LENGTH = targetWord.length;
let numberRows = document.body.style; // define a variable that will be reused in the css
numberRows.setProperty("--number-rows", WORD_LENGTH);
let row = 0;
let col = 0;
let gameOver = false;
let shareArr = [];
let fullDate = new Date();
let today = fullDate.getDate();

window.onload = function () {
  initialize();
  initLocalStorage();
  loadLocalStorage();
  initStatsModal();
  initHelpModal();
  showModal();
};

function initialize() {
  // Create the game board
  for (let r = 0; r < NUMBER_OF_GUESSES; r++) {
    for (let c = 0; c < WORD_LENGTH; c++) {
      // <span id="0-0" class="tile">P</span>
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      tile.innerText = "";
      document.getElementById("board").appendChild(tile);
    }
  }

  // Create the key board
  let keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
  ];

  for (let i = 0; i < keyboard.length; i++) {
    let currRow = keyboard[i];
    let keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");

    for (let j = 0; j < currRow.length; j++) {
      let keyTile = document.createElement("div");

      let key = currRow[j];
      keyTile.innerText = key;
      if (key == "Enter") {
        keyTile.id = "Enter";
        keyTile.classList.add("big");
      } else if (key == "⌫") {
        keyTile.id = "Backspace";
        keyTile.classList.add("big");
      } else if ("A" <= key && key <= "Z") {
        keyTile.id = "Key" + key; // "Key" + "A";
      }

      keyTile.addEventListener("click", processKey);

      if (key == "Enter") {
        keyTile.classList.add("enter", "key-tile");
      } else {
        keyTile.classList.add("key-tile");
      }
      keyboardRow.appendChild(keyTile);
    }
    document.getElementById("keyboard").appendChild(keyboardRow);
  }

  // Listen for Key Press
  document.addEventListener("keyup", (e) => {
    processInput(e);
  });
}

function processKey() {
  e = { code: this.id };
  processInput(e);
}

function processInput(e) {
  if (gameOver) return;
  // alert(e.code);
  if ("KeyA" <= e.code && e.code <= "KeyZ") {
    if (col < WORD_LENGTH) {
      let currTile = document.getElementById(
        row.toString() + "-" + col.toString()
      );
      animateCSS(currTile, "zoomIn");
      if (currTile.innerText == "") {
        if (e.key === undefined) currTile.innerText = e.code[3];
        else currTile.innerText = e.key;
        col += 1;
      }
    }
  } else if (e.code == "Backspace") {
    if (0 < col && col <= WORD_LENGTH) {
      col -= 1;
    }
    let currTile = document.getElementById(
      row.toString() + "-" + col.toString()
    );
    animateCSS(currTile, "swing");
    currTile.innerText = "";
  } else if (e.code == "Enter") {
    update();
  }

  if (!gameOver && row == NUMBER_OF_GUESSES) {
    window.localStorage.setItem("currentStreak", 0);
    window.localStorage.setItem("shareButton", 1);
    updateTotalGames();
    gameOver = true;
    toastr.info(`Today's champion was ${targetWord}`);
    toastr.error("You've run out of guesses! Game over!");
    let shareButton = document.getElementById("share-button");
    shareButton.style.display = "block";
    shareButton.addEventListener("click", shareFunction);
  }
}
let share = () => {
  let board = window.localStorage.getItem("boardContainer");
  let tiles = board.split("</div>");
  for (let i = 0; i < tiles.length; i++) {
    let array = tiles[i].split(" ");
    if (array.includes(`wrong"`) || array.includes("wrong")) {
      shareArr.push("⬛");
    }
    if (array.includes(`correct"`) || array.includes("correct")) {
      shareArr.push("🟩");
    }
    if (array.includes(`wrong-location"`) || array.includes("wrong-location")) {
      shareArr.push("🟨");
    }
  }
};

let separateRows = (arr, size) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
};

let collapseRows = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].join(""));
  }
  return newArr;
};

const copyToClipboard = (str) => {
  navigator.clipboard?.writeText && navigator.clipboard.writeText(str);
};

let shareFunction = () => {
  share();

  let finalShare = collapseRows(separateRows(shareArr, WORD_LENGTH)).join(
    "\r\n"
  );
  copyToClipboard(
    `Trundle #${targetWordIndex}\r\n\r\n${finalShare}\r\n\r\n https://trundle.atkarl.xyz`
  );
  toastr.info("Copied to clipboard!");
};

function update() {
  let guess = "";
  const delay = 300;

  //string up the guesses into the word
  for (let c = 0; c < WORD_LENGTH; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText;
    guess += letter;
  }

  guess = guess.toLowerCase(); //case sensitive
  if (guess.length < WORD_LENGTH) {
    toastr.error(`Please enter a ${WORD_LENGTH} letter word.`);
    return;
  }
  if (!dictionary.includes(guess)) {
    toastr.error("Enter a champion name");
    return;
  }

  //start processing guess
  let correct = 0;

  let letterCount = {}; //keep track of letter frequency, ex) KENNY -> {K:1, E:1, N:2, Y: 1}
  for (let i = 0; i < WORD_LENGTH; i++) {
    let letter = targetWord[i];

    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  //first iteration, check all the correct ones first
  for (let c = 0; c < WORD_LENGTH; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText;
    // setTimeout(() => {
    //   animateCSS(currTile, "rotateIn");
    //Is it in the correct position?
    if (targetWord[c] == letter.toLowerCase()) {
      currTile.classList.add("correct");

      let keyTile = document.getElementById("Key" + letter);
      keyTile.classList.remove("wrong-location");
      keyTile.classList.add("correct");
      // key.classList.add("correct")

      correct += 1;

      letterCount[letter.toLowerCase()] -= 1; //deduct the letter count
    }

    if (correct === WORD_LENGTH) {
      window.localStorage.setItem("shareButton", 1);
      toastr.success("You Found The Right Champion");
      let totalWins = window.localStorage.getItem("totalWins") || 0;
      window.localStorage.setItem("totalWins", Number(totalWins) + 1);
      let currentStreak = window.localStorage.getItem("currentStreak") || 0;
      window.localStorage.setItem("currentStreak", Number(currentStreak) + 1);
      updateTotalGames();
      let shareButton = document.getElementById("share-button");
      shareButton.style.display = "block";
      shareButton.addEventListener("click", shareFunction);
      gameOver = true;
    }
    preserveGameState();
    // }, delay * c);
  }

  //go again and mark which ones are present but in wrong position
  for (let c = 0; c < WORD_LENGTH; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText;
    setTimeout(() => {
      animateCSS(currTile, "rotateIn");
      // skip the letter if it has been marked correct
      if (!currTile.classList.contains("correct")) {
        //Is it in the word?         //make sure we don't double count
        if (
          targetWord.includes(letter.toLowerCase()) &&
          letterCount[letter.toLowerCase()] > 0
        ) {
          currTile.classList.add("wrong-location");

          let keyTile = document.getElementById("Key" + letter);
          if (!keyTile.classList.contains("correct")) {
            keyTile.classList.add("wrong-location");
            // key.classList.add("wrong-location")
          }
          letterCount[letter.toLowerCase()] -= 1;
        } // Not in the word or (was in word but letters all used up to avoid overcount)
        else {
          currTile.classList.add("wrong");
          let keyTile = document.getElementById("Key" + letter);
          keyTile.classList.add("wrong");
          // key.classList.add("wrong")
        }
      }
      preserveGameState();
    }, delay * c);
  }
  let totalGuesses = window.localStorage.getItem("totalGuesses") || 0;
  window.localStorage.setItem("totalGuesses", Number(totalGuesses) + 1);
  row += 1; //start new row
  col = 0; //start at 0 for new row
}

const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    // const node = document.querySelector(element);
    const node = element;
    node.style.setProperty("--animate-duration", "0.4s");

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

let updateTotalGames = () => {
  let totalGames = window.localStorage.getItem("totalGames") || 0;
  window.localStorage.setItem("totalGames", Number(totalGames) + 1);
};

let updateStatsModal = () => {
  let currentStreak = window.localStorage.getItem("currentStreak");
  let totalGames = window.localStorage.getItem("totalGames");
  let totalWins = window.localStorage.getItem("totalWins");
  let totalGuesses = window.localStorage.getItem("totalGuesses");

  document.getElementById("total-played").textContent = totalGames;
  document.getElementById("total-wins").textContent = totalWins;
  document.getElementById("current-streak").textContent = currentStreak;

  let winPct = Math.round((totalWins / totalGames) * 100) || 0;
  document.getElementById("win-pct").textContent = `${winPct}%`;

  let avgGuesses = (totalGuesses / totalGames).toFixed(2);
  document.getElementById("avg-guesses").textContent = avgGuesses;
};

function initStatsModal() {
  const modal = document.getElementById("stats-modal");

  // Get the button that opens the modal
  const btn = document.getElementById("stats");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-stats");

  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    updateStatsModal();
    modal.style.display = "block";
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

function initHelpModal() {
  const modal = document.getElementById("help-modal");

  // Get the button that opens the modal
  const btn = document.getElementById("help");

  // Get the <span> element that closes the modal
  const span = document.getElementById("close-help");

  // When the user clicks on the button, open the modal
  btn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

let preserveGameState = () => {
  const keyboardContainer = document.getElementById("keyboard");
  window.localStorage.setItem("keyboardContainer", keyboardContainer.innerHTML);

  const boardContainer = document.getElementById("board");
  window.localStorage.setItem("boardContainer", boardContainer.innerHTML);
  window.localStorage.setItem("storedRow", row);
  window.localStorage.setItem("gameOverState", gameOver);
};

function showModal() {
  if (!window.sessionStorage.getItem("help-modal")) {
    document.getElementById("help-modal").style.display = "block";
    window.sessionStorage.setItem("help-modal", true);
  }
}

let initLocalStorage = () => {
  const storedTargetWordIndex = window.localStorage.getItem(
    "storedTargetWordIndex"
  );

  if (!storedTargetWordIndex) {
    window.localStorage.setItem("storedTargetWordIndex", targetWordIndex);
  }

  if (
    Number(window.localStorage.getItem("storedTargetWordIndex")) !==
    targetWordIndex
  ) {
    resetGameState();
    window.localStorage.setItem("storedTargetWordIndex", targetWordIndex);
    window.localStorage.setItem("storedDate", today);
  }
  
  const storedDate = window.localStorage.getItem("storedDate");
  if (!storedDate) {
    window.localStorage.setItem("storedDate", today);
  }
  if (Number(window.localStorage.getItem("storedDate")) !== today) {
    resetGameState();
    window.localStorage.setItem("storedDate", today);
    window.localStorage.setItem("storedTargetWordIndex", targetWordIndex);
  }
};

let loadLocalStorage = () => {
  const storedBoardContainer = window.localStorage.getItem("boardContainer");
  if (storedBoardContainer) {
    document.getElementById("board").innerHTML = storedBoardContainer;
  }
  const storedKeyboardContainer =
    window.localStorage.getItem("keyboardContainer");
  if (storedKeyboardContainer) {
    document.getElementById("keyboard").innerHTML = storedKeyboardContainer;
    let keyTile = document.getElementsByClassName("key-tile");

    for (let i = 0; i < keyTile.length; i++) {
      keyTile[i].addEventListener("click", processKey);
    }
    let storedShareButton = document.getElementById("share-button");
    if (storedShareButton) {
      let shareButton = document.getElementById("share-button");
      shareButton.style.display = "block";
      shareButton.addEventListener("click", shareFunction);
    }
  }

  let storedRow = window.localStorage.getItem("storedRow") || 0;
  row = Number(storedRow);
  let gameOverState = window.localStorage.getItem("gameOverState") || false;
  gameOver = gameOverState == "true";
};

let resetGameState = () => {
  window.localStorage.removeItem("keyboardContainer");
  window.localStorage.removeItem("boardContainer");
  window.localStorage.removeItem("storedRow");
  window.localStorage.removeItem("storedTargetWordIndex");
  window.localStorage.removeItem("gameOverState");
  window.localStorage.removeItem("shareButton");
  window.localStorage.removeItem("storedDate");
};
