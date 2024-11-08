import { Move } from '../types/types'

const Moves: Record<number, Move> = {    
    "1": {
        "name": "Pound",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 40,
        "pp": 35,
        "type": "normal",
        "id": 1
    },
    "2": {
        "name": "Karate Chop",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 50,
        "pp": 25,
        "type": "fighting",
        "id": 2
    },
    "3": {
        "name": "Double Slap",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-i",
        "power": 15,
        "pp": 10,
        "type": "normal",
        "id": 3
    },
    "4": {
        "name": "Comet Punch",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-i",
        "power": 18,
        "pp": 15,
        "type": "normal",
        "id": 4
    },
    "5": {
        "name": "Mega Punch",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-i",
        "power": 80,
        "pp": 20,
        "type": "normal",
        "id": 5
    },
    "6": {
        "name": "Pay Day",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 40,
        "pp": 20,
        "type": "normal",
        "id": 6
    },
    "7": {
        "name": "Fire Punch",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 75,
        "pp": 15,
        "pastGenPP": {
        "LA": 10
        },
        "type": "fire",
        "id": 7
    },
    "8": {
        "name": "Ice Punch",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 75,
        "pp": 15,
        "pastGenPP": {
        "LA": 10
        },
        "type": "ice",
        "id": 8
    },
    "9": {
        "name": "Thunder Punch",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 75,
        "pp": 15,
        "pastGenPP": {
        "LA": 10
        },
        "type": "electric",
        "id": 9
    },
    "10": {
        "name": "Scratch",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 40,
        "pp": 35,
        "type": "normal",
        "id": 10
    },
    "11": {
        "name": "Vise Grip",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 55,
        "pp": 30,
        "type": "normal",
        "id": 11
    },
    "12": {
        "name": "Guillotine",
        "accuracy": 30,
        "class": "physical",
        "generation": "generation-i",
        "power": null,
        "pp": 5,
        "type": "normal",
        "id": 12
    },
    "13": {
        "name": "Razor Wind",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 80,
        "pp": 10,
        "type": "normal",
        "id": 13
    },
    "14": {
        "name": "Swords Dance",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "pastGenPP": {
        "G1": 30,
        "G2": 30,
        "G3": 30,
        "G4": 30,
        "G5": 30
        },
        "type": "normal",
        "id": 14
    },
    "15": {
        "name": "Cut",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-i",
        "power": 50,
        "pp": 30,
        "type": "normal",
        "id": 15
    },
    "16": {
        "name": "Gust",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 40,
        "pp": 35,
        "pastGenPP": {
        "LA": 25
        },
        "type": "flying",
        "id": 16
    },
    "17": {
        "name": "Wing Attack",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 60,
        "pp": 35,
        "type": "flying",
        "id": 17
    },
    "18": {
        "name": "Whirlwind",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 18
    },
    "19": {
        "name": "Fly",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-i",
        "power": 90,
        "pp": 15,
        "type": "flying",
        "id": 19
    },
    "20": {
        "name": "Bind",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-i",
        "power": 15,
        "pp": 20,
        "type": "normal",
        "id": 20
    },
    "21": {
        "name": "Slam",
        "accuracy": 75,
        "class": "physical",
        "generation": "generation-i",
        "power": 80,
        "pp": 20,
        "type": "normal",
        "id": 21
    },
    "22": {
        "name": "Vine Whip",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 45,
        "pp": 25,
        "pastGenPP": {
        "G1": 10,
        "G2": 10,
        "G3": 10,
        "G4": 15,
        "G5": 15
        },
        "type": "grass",
        "id": 22
    },
    "23": {
        "name": "Stomp",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 65,
        "pp": 20,
        "type": "normal",
        "id": 23
    },
    "24": {
        "name": "Double Kick",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 30,
        "pp": 30,
        "type": "fighting",
        "id": 24
    },
    "25": {
        "name": "Mega Kick",
        "accuracy": 75,
        "class": "physical",
        "generation": "generation-i",
        "power": 120,
        "pp": 5,
        "type": "normal",
        "id": 25
    },
    "26": {
        "name": "Jump Kick",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-i",
        "power": 100,
        "pp": 10,
        "pastGenPP": {
        "G1": 25,
        "G2": 25,
        "G3": 25,
        "G4": 25
        },
        "type": "fighting",
        "id": 26
    },
    "27": {
        "name": "Rolling Kick",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-i",
        "power": 60,
        "pp": 15,
        "type": "fighting",
        "id": 27
    },
    "28": {
        "name": "Sand Attack",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 15,
        "type": "ground",
        "id": 28
    },
    "29": {
        "name": "Headbutt",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 70,
        "pp": 15,
        "type": "normal",
        "id": 29
    },
    "30": {
        "name": "Horn Attack",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 65,
        "pp": 25,
        "type": "normal",
        "id": 30
    },
    "31": {
        "name": "Fury Attack",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-i",
        "power": 15,
        "pp": 20,
        "type": "normal",
        "id": 31
    },
    "32": {
        "name": "Horn Drill",
        "accuracy": 30,
        "class": "physical",
        "generation": "generation-i",
        "power": null,
        "pp": 5,
        "type": "normal",
        "id": 32
    },
    "33": {
        "name": "Tackle",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 40,
        "pp": 35,
        "pastGenPP": {
        "LA": 30
        },
        "type": "normal",
        "id": 33
    },
    "34": {
        "name": "Body Slam",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 85,
        "pp": 15,
        "type": "normal",
        "id": 34
    },
    "35": {
        "name": "Wrap",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-i",
        "power": 15,
        "pp": 20,
        "type": "normal",
        "id": 35
    },
    "36": {
        "name": "Take Down",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-i",
        "power": 90,
        "pp": 20,
        "type": "normal",
        "id": 36
    },
    "37": {
        "name": "Thrash",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 120,
        "pp": 10,
        "pastGenPP": {
        "G1": 20,
        "G2": 20,
        "G3": 20,
        "G4": 20
        },
        "type": "normal",
        "id": 37
    },
    "38": {
        "name": "Double-Edge",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 120,
        "pp": 15,
        "pastGenPP": {
        "LA": 5
        },
        "type": "normal",
        "id": 38
    },
    "39": {
        "name": "Tail Whip",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 30,
        "type": "normal",
        "id": 39
    },
    "40": {
        "name": "Poison Sting",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 15,
        "pp": 35,
        "pastGenPP": {
        "LA": 20
        },
        "type": "poison",
        "id": 40
    },
    "41": {
        "name": "Twineedle",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 25,
        "pp": 20,
        "type": "bug",
        "id": 41
    },
    "42": {
        "name": "Pin Missile",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-i",
        "power": 25,
        "pp": 20,
        "type": "bug",
        "id": 42
    },
    "43": {
        "name": "Leer",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 30,
        "type": "normal",
        "id": 43
    },
    "44": {
        "name": "Bite",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 60,
        "pp": 25,
        "pastGenPP": {
        "LA": 20
        },
        "type": "dark",
        "id": 44
    },
    "45": {
        "name": "Growl",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 40,
        "type": "normal",
        "id": 45
    },
    "46": {
        "name": "Roar",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 46
    },
    "47": {
        "name": "Sing",
        "accuracy": 55,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 15,
        "type": "normal",
        "id": 47
    },
    "48": {
        "name": "Supersonic",
        "accuracy": 55,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 48
    },
    "49": {
        "name": "Sonic Boom",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 49
    },
    "50": {
        "name": "Disable",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 50
    },
    "51": {
        "name": "Acid",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 40,
        "pp": 30,
        "type": "poison",
        "id": 51
    },
    "52": {
        "name": "Ember",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 40,
        "pp": 25,
        "type": "fire",
        "id": 52
    },
    "53": {
        "name": "Flamethrower",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 90,
        "pp": 15,
        "pastGenPP": {
        "LA": 10
        },
        "type": "fire",
        "id": 53
    },
    "54": {
        "name": "Mist",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 30,
        "type": "ice",
        "id": 54
    },
    "55": {
        "name": "Water Gun",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 40,
        "pp": 25,
        "type": "water",
        "id": 55
    },
    "56": {
        "name": "Hydro Pump",
        "accuracy": 80,
        "class": "special",
        "generation": "generation-i",
        "power": 110,
        "pp": 5,
        "type": "water",
        "id": 56
    },
    "57": {
        "name": "Surf",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 90,
        "pp": 15,
        "type": "water",
        "id": 57
    },
    "58": {
        "name": "Ice Beam",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 90,
        "pp": 10,
        "type": "ice",
        "id": 58
    },
    "59": {
        "name": "Blizzard",
        "accuracy": 70,
        "class": "special",
        "generation": "generation-i",
        "power": 110,
        "pp": 5,
        "type": "ice",
        "id": 59
    },
    "60": {
        "name": "Psybeam",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 65,
        "pp": 20,
        "type": "psychic",
        "id": 60
    },
    "61": {
        "name": "Bubble Beam",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 65,
        "pp": 20,
        "type": "water",
        "id": 61
    },
    "62": {
        "name": "Aurora Beam",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 65,
        "pp": 20,
        "type": "ice",
        "id": 62
    },
    "63": {
        "name": "Hyper Beam",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-i",
        "power": 150,
        "pp": 5,
        "type": "normal",
        "id": 63
    },
    "64": {
        "name": "Peck",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 35,
        "pp": 35,
        "type": "flying",
        "id": 64
    },
    "65": {
        "name": "Drill Peck",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 80,
        "pp": 20,
        "type": "flying",
        "id": 65
    },
    "66": {
        "name": "Submission",
        "accuracy": 80,
        "class": "physical",
        "generation": "generation-i",
        "power": 80,
        "pp": 20,
        "pastGenPP": {
        "G1": 25,
        "G2": 25,
        "G3": 25,
        "G4": 25,
        "G5": 25
        },
        "type": "fighting",
        "id": 66
    },
    "67": {
        "name": "Low Kick",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "type": "fighting",
        "id": 67
    },
    "68": {
        "name": "Counter",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "type": "fighting",
        "id": 68
    },
    "69": {
        "name": "Seismic Toss",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "type": "fighting",
        "id": 69
    },
    "70": {
        "name": "Strength",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 80,
        "pp": 15,
        "type": "normal",
        "id": 70
    },
    "71": {
        "name": "Absorb",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 20,
        "pp": 25,

        "pastGenPP": {
        "G1": 20,
        "G2": 20,
        "G3": 20,
        "LGPE": 15,
        "LA": 20
        },
        "type": "grass",
        "id": 71
    },
    "72": {
        "name": "Mega Drain",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 40,
        "pp": 15,
        "pastGenPP": {
        "G1": 10,
        "G2": 10,
        "G3": 10,
        "LGPE": 10
        },
        "type": "grass",
        "id": 72
    },
    "73": {
        "name": "Leech Seed",
        "accuracy": 90,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 10,
        "type": "grass",
        "id": 73
    },
    "74": {
        "name": "Growth",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "pastGenPP": {
        "G1": 40,
        "G2": 40,
        "G3": 40,
        "G4": 40,
        "G5": 40
        },
        "type": "normal",
        "id": 74
    },
    "75": {
        "name": "Razor Leaf",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-i",
        "power": 55,
        "pp": 25,
        "type": "grass",
        "id": 75
    },
    "76": {
        "name": "Solar Beam",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 120,
        "pp": 10,
        "type": "grass",
        "id": 76
    },
    "77": {
        "name": "Poison Powder",
        "accuracy": 75,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 35,
        "pastGenPP": {
        "LA": 20
        },
        "type": "poison",
        "id": 77
    },
    "78": {
        "name": "Stun Spore",
        "accuracy": 75,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 30,
        "pastGenPP": {
        "LA": 20
        },
        "type": "grass",
        "id": 78
    },
    "79": {
        "name": "Sleep Powder",
        "accuracy": 75,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 15,
        "pastGenPP": {
        "LA": 20
        },
        "type": "grass",
        "id": 79
    },
    "80": {
        "name": "Petal Dance",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 120,
        "pp": 10,
        "pastGenPP": {
        "G1": 20,
        "G2": 20,
        "G3": 20,
        "G4": 20
        },
        "type": "grass",
        "id": 80
    },
    "81": {
        "name": "String Shot",
        "accuracy": 95,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 40,
        "type": "bug",
        "id": 81
    },
    "82": {
        "name": "Dragon Rage",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": null,
        "pp": 10,
        "type": "dragon",
        "id": 82
    },
    "83": {
        "name": "Fire Spin",
        "accuracy": 85,
        "class": "special",
        "generation": "generation-i",
        "power": 35,
        "pp": 15,
        "type": "fire",
        "id": 83
    },
    "84": {
        "name": "Thunder Shock",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 40,
        "pp": 30,
        "pastGenPP": {
        "LA": 25
        },
        "type": "electric",
        "id": 84
    },
    "85": {
        "name": "Thunderbolt",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 90,
        "pp": 15,
        "pastGenPP": {
        "LA": 10
        },
        "type": "electric",
        "id": 85
    },
    "86": {
        "name": "Thunder Wave",
        "accuracy": 90,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "type": "electric",
        "id": 86
    },
    "87": {
        "name": "Thunder",
        "accuracy": 70,
        "class": "special",
        "generation": "generation-i",
        "power": 110,
        "pp": 10,
        "pastGenPP": {
        "LA": 5
        },
        "type": "electric",
        "id": 87
    },
    "88": {
        "name": "Rock Throw",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-i",
        "power": 50,
        "pp": 15,
        "type": "rock",
        "id": 88
    },
    "89": {
        "name": "Earthquake",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 100,
        "pp": 10,
        "type": "ground",
        "id": 89
    },
    "90": {
        "name": "Fissure",
        "accuracy": 30,
        "class": "physical",
        "generation": "generation-i",
        "power": null,
        "pp": 5,
        "type": "ground",
        "id": 90
    },
    "91": {
        "name": "Dig",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 80,
        "pp": 10,
        "type": "ground",
        "id": 91
    },
    "92": {
        "name": "Toxic",
        "accuracy": 90,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 10,
        "type": "poison",
        "id": 92
    },
    "93": {
        "name": "Confusion",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 50,
        "pp": 25,
        "pastGenPP": {
        "LA": 20
        },
        "type": "psychic",
        "id": 93
    },
    "94": {
        "name": "Psychic",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 90,
        "pp": 10,
        "type": "psychic",
        "id": 94
    },
    "95": {
        "name": "Hypnosis",
        "accuracy": 60,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "type": "psychic",
        "id": 95
    },
    "96": {
        "name": "Meditate",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 40,
        "type": "psychic",
        "id": 96
    },
    "97": {
        "name": "Agility",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 30,
        "type": "psychic",
        "id": 97
    },
    "98": {
        "name": "Quick Attack",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 40,
        "pp": 30,
        "pastGenPP": {
        "LA": 20
        },
        "type": "normal",
        "id": 98
    },
    "99": {
        "name": "Rage",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 20,
        "pp": 20,
        "type": "normal",
        "id": 99
    },
    "100": {
        "name": "Teleport",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "type": "psychic",
        "id": 100
    },
    "101": {
        "name": "Night Shade",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": null,
        "pp": 15,
        "type": "ghost",
        "id": 101
    },
    "102": {
        "name": "Mimic",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 102
    },
    "103": {
        "name": "Screech",
        "accuracy": 85,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 40,
        "type": "normal",
        "id": 103
    },
    "104": {
        "name": "Double Team",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 15,
        "type": "normal",
        "id": 104
    },
    "105": {
        "name": "Recover",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 5,
        "pastGenPP": {
        "G1": 20,
        "G2": 20,
        "G3": 20,
        "G4": 10,
        "G5": 10,
        "G6": 10,
        "SMUSUM": 10,
        "LGPE": 10,
        "G8": 10,
        "LA": 10
        },
        "type": "normal",
        "id": 105
    },
    "106": {
        "name": "Harden",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 30,
        "type": "normal",
        "id": 106
    },
    "107": {
        "name": "Minimize",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 10,
        "pastGenPP": {
        "G1": 20,
        "G2": 20,
        "G3": 20,
        "G4": 20,
        "G5": 20
        },
        "type": "normal",
        "id": 107
    },
    "108": {
        "name": "Smokescreen",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 108
    },
    "109": {
        "name": "Confuse Ray",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 10,
        "type": "ghost",
        "id": 109
    },
    "110": {
        "name": "Withdraw",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 40,
        "type": "water",
        "id": 110
    },
    "111": {
        "name": "Defense Curl",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 40,
        "type": "normal",
        "id": 111
    },
    "112": {
        "name": "Barrier",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "pastGenPP": {
        "G1": 30,
        "G2": 30,
        "G3": 30,
        "G4": 30,
        "G5": 30
        },
        "type": "psychic",
        "id": 112
    },
    "113": {
        "name": "Light Screen",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 30,
        "type": "psychic",
        "id": 113
    },
    "114": {
        "name": "Haze",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 30,
        "type": "ice",
        "id": 114
    },
    "115": {
        "name": "Reflect",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "type": "psychic",
        "id": 115
    },
    "116": {
        "name": "Focus Energy",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 30,
        "pastGenPP": {
        "LA": 20
        },
        "type": "normal",
        "id": 116
    },
    "117": {
        "name": "Bide",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-i",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 117
    },
    "118": {
        "name": "Metronome",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 118
    },
    "119": {
        "name": "Mirror Move",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "type": "flying",
        "id": 119
    },
    "120": {
        "name": "Self-Destruct",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 200,
        "pp": 5,
        "type": "normal",
        "id": 120
    },
    "121": {
        "name": "Egg Bomb",
        "accuracy": 75,
        "class": "physical",
        "generation": "generation-i",
        "power": 100,
        "pp": 10,
        "type": "normal",
        "id": 121
    },
    "122": {
        "name": "Lick",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 30,
        "pp": 30,
        "type": "ghost",
        "id": 122
    },
    "123": {
        "name": "Smog",
        "accuracy": 70,
        "class": "special",
        "generation": "generation-i",
        "power": 30,
        "pp": 20,
        "type": "poison",
        "id": 123
    },
    "124": {
        "name": "Sludge",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 65,
        "pp": 20,
        "type": "poison",
        "id": 124
    },
    "125": {
        "name": "Bone Club",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-i",
        "power": 65,
        "pp": 20,
        "type": "ground",
        "id": 125
    },
    "126": {
        "name": "Fire Blast",
        "accuracy": 85,
        "class": "special",
        "generation": "generation-i",
        "power": 110,
        "pp": 5,
        "type": "fire",
        "id": 126
    },
    "127": {
        "name": "Waterfall",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 80,
        "pp": 15,
        "type": "water",
        "id": 127
    },
    "128": {
        "name": "Clamp",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-i",
        "power": 35,
        "pp": 15,
        "pastGenPP": {
        "G1": 10,
        "G2": 10,
        "G3": 10,
        "G4": 10
        },
        "type": "water",
        "id": 128
    },
    "129": {
        "name": "Swift",
        "accuracy": null,
        "class": "special",
        "generation": "generation-i",
        "power": 60,
        "pp": 20,
        "type": "normal",
        "id": 129
    },
    "130": {
        "name": "Skull Bash",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 130,
        "pp": 10,
        "pastGenPP": {
        "G1": 15,
        "G2": 15,
        "G3": 15,
        "G4": 15,
        "G5": 15
        },
        "type": "normal",
        "id": 130
    },
    "131": {
        "name": "Spike Cannon",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 20,
        "pp": 15,
        "type": "normal",
        "id": 131
    },
    "132": {
        "name": "Constrict",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 10,
        "pp": 35,
        "type": "normal",
        "id": 132
    },
    "133": {
        "name": "Amnesia",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "type": "psychic",
        "id": 133
    },
    "134": {
        "name": "Kinesis",
        "accuracy": 80,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 15,
        "type": "psychic",
        "id": 134
    },
    "135": {
        "name": "Soft-Boiled",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 5,
        "pastGenPP": {
        "G1": 10,
        "G2": 10,
        "G3": 10,
        "G4": 10,
        "G5": 10,
        "G6": 10,
        "SMUSUM": 10,
        "LGPE": 10,
        "G8": 10,
        "LA": 10
        },
        "type": "normal",
        "id": 135
    },
    "136": {
        "name": "High Jump Kick",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-i",
        "power": 130,
        "pp": 10,
        "pastGenPP": {
        "G1": 20,
        "G2": 20,
        "G3": 20,
        "G4": 20
        },
        "type": "fighting",
        "id": 136
    },
    "137": {
        "name": "Glare",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 30,
        "type": "normal",
        "id": 137
    },
    "138": {
        "name": "Dream Eater",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 100,
        "pp": 15,
        "type": "psychic",
        "id": 138
    },
    "139": {
        "name": "Poison Gas",
        "accuracy": 90,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 40,
        "pastGenPP": {
        "LA": 20
        },
        "type": "poison",
        "id": 139
    },
    "140": {
        "name": "Barrage",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-i",
        "power": 15,
        "pp": 20,
        "type": "normal",
        "id": 140
    },
    "141": {
        "name": "Leech Life",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 80,
        "pp": 10,
        "pastGenPP": {
        "G1": 15,
        "G2": 15,
        "G3": 15,
        "G4": 15,
        "G5": 15,
        "G6": 15
        },
        "type": "bug",
        "id": 141
    },
    "142": {
        "name": "Lovely Kiss",
        "accuracy": 75,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 142
    },
    "143": {
        "name": "Sky Attack",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-i",
        "power": 140,
        "pp": 5,
        "type": "flying",
        "id": 143
    },
    "144": {
        "name": "Transform",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 144
    },
    "145": {
        "name": "Bubble",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 40,
        "pp": 30,
        "pastGenPP": {
        "LA": 25
        },
        "type": "water",
        "id": 145
    },
    "146": {
        "name": "Dizzy Punch",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 70,
        "pp": 10,
        "type": "normal",
        "id": 146
    },
    "147": {
        "name": "Spore",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 15,
        "pastGenPP": {
        "LA": 10
        },
        "type": "grass",
        "id": 147
    },
    "148": {
        "name": "Flash",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 148
    },
    "149": {
        "name": "Psywave",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": null,
        "pp": 15,
        "type": "psychic",
        "id": 149
    },
    "150": {
        "name": "Splash",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 40,
        "type": "normal",
        "id": 150
    },
    "151": {
        "name": "Acid Armor",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 20,
        "pastGenPP": {
        "G1": 40,
        "G2": 40,
        "G3": 40,
        "G4": 40,
        "G5": 40
        },
        "type": "poison",
        "id": 151
    },
    "152": {
        "name": "Crabhammer",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-i",
        "power": 100,
        "pp": 10,
        "type": "water",
        "id": 152
    },
    "153": {
        "name": "Explosion",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 250,
        "pp": 5,
        "type": "normal",
        "id": 153
    },
    "154": {
        "name": "Fury Swipes",
        "accuracy": 80,
        "class": "physical",
        "generation": "generation-i",
        "power": 18,
        "pp": 15,
        "type": "normal",
        "id": 154
    },
    "155": {
        "name": "Bonemerang",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-i",
        "power": 50,
        "pp": 10,
        "type": "ground",
        "id": 155
    },
    "156": {
        "name": "Rest",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 5,
        "pastGenPP": {
        "G1": 10,
        "G2": 10,
        "G3": 10,
        "G4": 10,
        "G5": 10,
        "G6": 10,
        "SMUSUM": 10,
        "LGPE": 10,
        "G8": 10,
        "LA": 10
        },
        "type": "psychic",
        "id": 156
    },
    "157": {
        "name": "Rock Slide",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-i",
        "power": 75,
        "pp": 10,
        "type": "rock",
        "id": 157
    },
    "158": {
        "name": "Hyper Fang",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-i",
        "power": 80,
        "pp": 15,
        "type": "normal",
        "id": 158
    },
    "159": {
        "name": "Sharpen",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 30,
        "type": "normal",
        "id": 159
    },
    "160": {
        "name": "Conversion",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 30,
        "type": "normal",
        "id": 160
    },
    "161": {
        "name": "Tri Attack",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-i",
        "power": 80,
        "pp": 10,
        "type": "normal",
        "id": 161
    },
    "162": {
        "name": "Super Fang",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-i",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 162
    },
    "163": {
        "name": "Slash",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-i",
        "power": 70,
        "pp": 20,
        "pastGenPP": {
        "LA": 15
        },
        "type": "normal",
        "id": 163
    },
    "164": {
        "name": "Substitute",
        "accuracy": null,
        "class": "status",
        "generation": "generation-i",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 164
    },
    "165": {
        "name": "Struggle",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-i",
        "power": 50,
        "pp": 1,
        "pastGenPP": {
        "G1": 10
        },
        "type": "normal",
        "id": 165
    },
    "166": {
        "name": "Sketch",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 1,
        "type": "normal",
        "id": 166
    },
    "167": {
        "name": "Triple Kick",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-ii",
        "power": 10,
        "pp": 10,
        "type": "fighting",
        "id": 167
    },
    "168": {
        "name": "Thief",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": 60,
        "pp": 25,
        "pastGenPP": {
        "G2": 10,
        "G3": 10,
        "G4": 10,
        "G5": 10
        },
        "type": "dark",
        "id": 168
    },
    "169": {
        "name": "Spider Web",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 10,
        "type": "bug",
        "id": 169
    },
    "170": {
        "name": "Mind Reader",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 5,
        "type": "normal",
        "id": 170
    },
    "171": {
        "name": "Nightmare",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 15,
        "type": "ghost",
        "id": 171
    },
    "172": {
        "name": "Flame Wheel",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": 60,
        "pp": 25,
        "pastGenPP": {
        "LA": 20
        },
        "type": "fire",
        "id": 172
    },
    "173": {
        "name": "Snore",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ii",
        "power": 50,
        "pp": 15,
        "type": "normal",
        "id": 173
    },
    "174": {
        "name": "Curse",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 10,
        "type": "ghost",
        "id": 174
    },
    "175": {
        "name": "Flail",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": null,
        "pp": 15,
        "type": "normal",
        "id": 175
    },
    "176": {
        "name": "Conversion 2",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 30,
        "type": "normal",
        "id": 176
    },
    "177": {
        "name": "Aeroblast",
        "accuracy": 95,
        "class": "special",
        "generation": "generation-ii",
        "power": 100,
        "pp": 5,
        "type": "flying",
        "id": 177
    },
    "178": {
        "name": "Cotton Spore",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 40,
        "type": "grass",
        "id": 178
    },
    "179": {
        "name": "Reversal",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": null,
        "pp": 15,
        "type": "fighting",
        "id": 179
    },
    "180": {
        "name": "Spite",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 10,
        "type": "ghost",
        "id": 180
    },
    "181": {
        "name": "Powder Snow",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ii",
        "power": 40,
        "pp": 25,
        "type": "ice",
        "id": 181
    },
    "182": {
        "name": "Protect",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 182
    },
    "183": {
        "name": "Mach Punch",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": 40,
        "pp": 30,
        "pastGenPP": {
        "LA": 20
        },
        "type": "fighting",
        "id": 183
    },
    "184": {
        "name": "Scary Face",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 184
    },
    "185": {
        "name": "Feint Attack",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-ii",
        "power": 60,
        "pp": 20,
        "type": "dark",
        "id": 185
    },
    "186": {
        "name": "Sweet Kiss",
        "accuracy": 75,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 10,
        "type": "fairy",
        "id": 186
    },
    "187": {
        "name": "Belly Drum",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 187
    },
    "188": {
        "name": "Sludge Bomb",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ii",
        "power": 90,
        "pp": 10,
        "type": "poison",
        "id": 188
    },
    "189": {
        "name": "Mud-Slap",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ii",
        "power": 20,
        "pp": 10,
        "pastGenPP": {
        "LA": 20
        },
        "type": "ground",
        "id": 189
    },
    "190": {
        "name": "Octazooka",
        "accuracy": 85,
        "class": "special",
        "generation": "generation-ii",
        "power": 65,
        "pp": 10,
        "pastGenPP": {
        "LA": 15
        },
        "type": "water",
        "id": 190
    },
    "191": {
        "name": "Spikes",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 20,
        "type": "ground",
        "id": 191
    },
    "192": {
        "name": "Zap Cannon",
        "accuracy": 50,
        "class": "special",
        "generation": "generation-ii",
        "power": 120,
        "pp": 5,
        "type": "electric",
        "id": 192
    },
    "193": {
        "name": "Foresight",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 40,
        "type": "normal",
        "id": 193
    },
    "194": {
        "name": "Destiny Bond",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 5,
        "type": "ghost",
        "id": 194
    },
    "195": {
        "name": "Perish Song",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 5,
        "type": "normal",
        "id": 195
    },
    "196": {
        "name": "Icy Wind",
        "accuracy": 95,
        "class": "special",
        "generation": "generation-ii",
        "power": 55,
        "pp": 15,
        "pastGenPP": {
        "LA": 20
        },
        "type": "ice",
        "id": 196
    },
    "197": {
        "name": "Detect",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 5,
        "type": "fighting",
        "id": 197
    },
    "198": {
        "name": "Bone Rush",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-ii",
        "power": 25,
        "pp": 10,
        "type": "ground",
        "id": 198
    },
    "199": {
        "name": "Lock-On",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 5,
        "type": "normal",
        "id": 199
    },
    "200": {
        "name": "Outrage",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": 120,
        "pp": 10,
        "pastGenPP": {
        "G2": 15,
        "G3": 15,
        "G4": 15
        },
        "type": "dragon",
        "id": 200
    },
    "201": {
        "name": "Sandstorm",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 10,
        "type": "rock",
        "id": 201
    },
    "202": {
        "name": "Giga Drain",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ii",
        "power": 75,
        "pp": 10,
        "pastGenPP": {
        "G1": 5,
        "G2": 5,
        "G3": 5
        },
        "type": "grass",
        "id": 202
    },
    "203": {
        "name": "Endure",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 203
    },
    "204": {
        "name": "Charm",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 20,
        "type": "fairy",
        "id": 204
    },
    "205": {
        "name": "Rollout",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-ii",
        "power": 30,
        "pp": 20,
        "type": "rock",
        "id": 205
    },
    "206": {
        "name": "False Swipe",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": 40,
        "pp": 40,
        "pastGenPP": {
        "LA": 30
        },
        "type": "normal",
        "id": 206
    },
    "207": {
        "name": "Swagger",
        "accuracy": 85,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 15,
        "type": "normal",
        "id": 207
    },
    "208": {
        "name": "Milk Drink",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 5,
        "pastGenPP": {
        "G1": 10,
        "G2": 10,
        "G3": 10,
        "G4": 10,
        "G5": 10,
        "G6": 10,
        "SMUSUM": 10,
        "LGPE": 10,
        "G8": 10
        },
        "type": "normal",
        "id": 208
    },
    "209": {
        "name": "Spark",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": 65,
        "pp": 20,
        "type": "electric",
        "id": 209
    },
    "210": {
        "name": "Fury Cutter",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-ii",
        "power": 40,
        "pp": 20,
        "type": "bug",
        "id": 210
    },
    "211": {
        "name": "Steel Wing",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-ii",
        "power": 70,
        "pp": 25,
        "type": "steel",
        "id": 211
    },
    "212": {
        "name": "Mean Look",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 5,
        "type": "normal",
        "id": 212
    },
    "213": {
        "name": "Attract",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 15,
        "type": "normal",
        "id": 213
    },
    "214": {
        "name": "Sleep Talk",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 214
    },
    "215": {
        "name": "Heal Bell",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 5,
        "type": "normal",
        "id": 215
    },
    "216": {
        "name": "Return",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 216
    },
    "217": {
        "name": "Present",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-ii",
        "power": null,
        "pp": 15,
        "type": "normal",
        "id": 217
    },
    "218": {
        "name": "Frustration",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 218
    },
    "219": {
        "name": "Safeguard",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 25,
        "type": "normal",
        "id": 219
    },
    "220": {
        "name": "Pain Split",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 220
    },
    "221": {
        "name": "Sacred Fire",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-ii",
        "power": 100,
        "pp": 5,
        "type": "fire",
        "id": 221
    },
    "222": {
        "name": "Magnitude",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": null,
        "pp": 30,
        "type": "ground",
        "id": 222
    },
    "223": {
        "name": "Dynamic Punch",
        "accuracy": 50,
        "class": "physical",
        "generation": "generation-ii",
        "power": 100,
        "pp": 5,
        "type": "fighting",
        "id": 223
    },
    "224": {
        "name": "Megahorn",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-ii",
        "power": 120,
        "pp": 10,
        "pastGenPP": {
        "LA": 5
        },
        "type": "bug",
        "id": 224
    },
    "225": {
        "name": "Dragon Breath",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ii",
        "power": 60,
        "pp": 20,
        "type": "dragon",
        "id": 225
    },
    "226": {
        "name": "Baton Pass",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 40,
        "type": "normal",
        "id": 226
    },
    "227": {
        "name": "Encore",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 5,
        "type": "normal",
        "id": 227
    },
    "228": {
        "name": "Pursuit",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": 40,
        "pp": 20,
        "type": "dark",
        "id": 228
    },
    "229": {
        "name": "Rapid Spin",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": 50,
        "pp": 40,
        "type": "normal",
        "id": 229
    },
    "230": {
        "name": "Sweet Scent",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 230
    },
    "231": {
        "name": "Iron Tail",
        "accuracy": 75,
        "class": "physical",
        "generation": "generation-ii",
        "power": 100,
        "pp": 15,
        "pastGenPP": {
        "LA": 5
        },
        "type": "steel",
        "id": 231
    },
    "232": {
        "name": "Metal Claw",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-ii",
        "power": 50,
        "pp": 35,
        "type": "steel",
        "id": 232
    },
    "233": {
        "name": "Vital Throw",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-ii",
        "power": 70,
        "pp": 10,
        "type": "fighting",
        "id": 233
    },
    "234": {
        "name": "Morning Sun",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 5,
        "type": "normal",
        "id": 234
    },
    "235": {
        "name": "Synthesis",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 5,
        "type": "grass",
        "id": 235
    },
    "236": {
        "name": "Moonlight",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 5,
        "type": "fairy",
        "id": 236
    },
    "237": {
        "name": "Hidden Power",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ii",
        "power": 60,
        "pp": 15,
        "type": "normal",
        "id": 237
    },
    "238": {
        "name": "Cross Chop",
        "accuracy": 80,
        "class": "physical",
        "generation": "generation-ii",
        "power": 100,
        "pp": 5,
        "type": "fighting",
        "id": 238
    },
    "239": {
        "name": "Twister",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ii",
        "power": 40,
        "pp": 20,
        "pastGenPP": {
        "LA": 25
        },
        "type": "dragon",
        "id": 239
    },
    "240": {
        "name": "Rain Dance",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 5,
        "type": "water",
        "id": 240
    },
    "241": {
        "name": "Sunny Day",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 5,
        "type": "fire",
        "id": 241
    },
    "242": {
        "name": "Crunch",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": 80,
        "pp": 15,
        "pastGenPP": {
        "LA": 10
        },
        "type": "dark",
        "id": 242
    },
    "243": {
        "name": "Mirror Coat",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ii",
        "power": null,
        "pp": 20,
        "type": "psychic",
        "id": 243
    },
    "244": {
        "name": "Psych Up",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ii",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 244
    },
    "245": {
        "name": "Extreme Speed",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": 80,
        "pp": 5,
        "type": "normal",
        "id": 245
    },
    "246": {
        "name": "Ancient Power",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ii",
        "power": 60,
        "pp": 5,
        "pastGenPP": {
        "LA": 15
        },
        "type": "rock",
        "id": 246
    },
    "247": {
        "name": "Shadow Ball",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ii",
        "power": 80,
        "pp": 15,
        "pastGenPP": {
        "LA": 10
        },
        "type": "ghost",
        "id": 247
    },
    "248": {
        "name": "Future Sight",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ii",
        "power": 120,
        "pp": 10,
        "pastGenPP": {
        "G2": 15,
        "G3": 15,
        "G4": 15
        },
        "type": "psychic",
        "id": 248
    },
    "249": {
        "name": "Rock Smash",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": 40,
        "pp": 15,
        "pastGenPP": {
        "LA": 20
        },
        "type": "fighting",
        "id": 249
    },
    "250": {
        "name": "Whirlpool",
        "accuracy": 85,
        "class": "special",
        "generation": "generation-ii",
        "power": 35,
        "pp": 15,
        "type": "water",
        "id": 250
    },
    "251": {
        "name": "Beat Up",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ii",
        "power": null,
        "pp": 10,
        "type": "dark",
        "id": 251
    },
    "252": {
        "name": "Fake Out",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 40,
        "pp": 10,
        "type": "normal",
        "id": 252
    },
    "253": {
        "name": "Uproar",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iii",
        "power": 90,
        "pp": 10,
        "type": "normal",
        "id": 253
    },
    "254": {
        "name": "Stockpile",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "pastGenPP": {
        "G3": 10
        },
        "type": "normal",
        "id": 254
    },
    "255": {
        "name": "Spit Up",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iii",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 255
    },
    "256": {
        "name": "Swallow",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 256
    },
    "257": {
        "name": "Heat Wave",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-iii",
        "power": 95,
        "pp": 10,
        "type": "fire",
        "id": 257
    },
    "258": {
        "name": "Hail",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 10,
        "type": "ice",
        "id": 258
    },
    "259": {
        "name": "Torment",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 15,
        "type": "dark",
        "id": 259
    },
    "260": {
        "name": "Flatter",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 15,
        "type": "dark",
        "id": 260
    },
    "261": {
        "name": "Will-O-Wisp",
        "accuracy": 85,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 15,
        "type": "fire",
        "id": 261
    },
    "262": {
        "name": "Memento",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 10,
        "type": "dark",
        "id": 262
    },
    "263": {
        "name": "Facade",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 70,
        "pp": 20,
        "type": "normal",
        "id": 263
    },
    "264": {
        "name": "Focus Punch",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 150,
        "pp": 20,
        "type": "fighting",
        "id": 264
    },
    "265": {
        "name": "Smelling Salts",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 70,
        "pp": 10,
        "type": "normal",
        "id": 265
    },
    "266": {
        "name": "Follow Me",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 266
    },
    "267": {
        "name": "Nature Power",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 267
    },
    "268": {
        "name": "Charge",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "type": "electric",
        "id": 268
    },
    "269": {
        "name": "Taunt",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "type": "dark",
        "id": 269
    },
    "270": {
        "name": "Helping Hand",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 270
    },
    "271": {
        "name": "Trick",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 271
    },
    "272": {
        "name": "Role Play",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 272
    },
    "273": {
        "name": "Wish",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 273
    },
    "274": {
        "name": "Assist",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 274
    },
    "275": {
        "name": "Ingrain",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "type": "grass",
        "id": 275
    },
    "276": {
        "name": "Superpower",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 120,
        "pp": 5,
        "type": "fighting",
        "id": 276
    },
    "277": {
        "name": "Magic Coat",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 15,
        "type": "psychic",
        "id": 277
    },
    "278": {
        "name": "Recycle",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 278
    },
    "279": {
        "name": "Revenge",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 60,
        "pp": 10,
        "type": "fighting",
        "id": 279
    },
    "280": {
        "name": "Brick Break",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 75,
        "pp": 15,
        "type": "fighting",
        "id": 280
    },
    "281": {
        "name": "Yawn",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 281
    },
    "282": {
        "name": "Knock Off",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 65,
        "pp": 20,
        "type": "dark",
        "id": 282
    },
    "283": {
        "name": "Endeavor",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": null,
        "pp": 5,
        "type": "normal",
        "id": 283
    },
    "284": {
        "name": "Eruption",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iii",
        "power": 150,
        "pp": 5,
        "type": "fire",
        "id": 284
    },
    "285": {
        "name": "Skill Swap",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 285
    },
    "286": {
        "name": "Imprison",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 286
    },
    "287": {
        "name": "Refresh",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 287
    },
    "288": {
        "name": "Grudge",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 5,
        "type": "ghost",
        "id": 288
    },
    "289": {
        "name": "Snatch",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 10,
        "type": "dark",
        "id": 289
    },
    "290": {
        "name": "Secret Power",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 70,
        "pp": 20,
        "type": "normal",
        "id": 290
    },
    "291": {
        "name": "Dive",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 80,
        "pp": 10,
        "type": "water",
        "id": 291
    },
    "292": {
        "name": "Arm Thrust",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 15,
        "pp": 20,
        "type": "fighting",
        "id": 292
    },
    "293": {
        "name": "Camouflage",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 293
    },
    "294": {
        "name": "Tail Glow",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "type": "bug",
        "id": 294
    },
    "295": {
        "name": "Luster Purge",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iii",
        "power": 70,
        "pp": 5,
        "type": "psychic",
        "id": 295
    },
    "296": {
        "name": "Mist Ball",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iii",
        "power": 70,
        "pp": 5,
        "type": "psychic",
        "id": 296
    },
    "297": {
        "name": "Feather Dance",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 15,
        "type": "flying",
        "id": 297
    },
    "298": {
        "name": "Teeter Dance",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 298
    },
    "299": {
        "name": "Blaze Kick",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-iii",
        "power": 85,
        "pp": 10,
        "type": "fire",
        "id": 299
    },
    "300": {
        "name": "Mud Sport",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 15,
        "type": "ground",
        "id": 300
    },
    "301": {
        "name": "Ice Ball",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-iii",
        "power": 30,
        "pp": 20,
        "type": "ice",
        "id": 301
    },
    "302": {
        "name": "Needle Arm",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 60,
        "pp": 15,
        "type": "grass",
        "id": 302
    },
    "303": {
        "name": "Slack Off",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 5,
        "pastGenPP": {
        "G3": 10,
        "G4": 10,
        "G5": 10,
        "G6": 10,
        "SMUSUM": 10,
        "LGPE": 10,
        "G8": 10
        },
        "type": "normal",
        "id": 303
    },
    "304": {
        "name": "Hyper Voice",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iii",
        "power": 90,
        "pp": 10,
        "type": "normal",
        "id": 304
    },
    "305": {
        "name": "Poison Fang",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 50,
        "pp": 15,
        "type": "poison",
        "id": 305
    },
    "306": {
        "name": "Crush Claw",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-iii",
        "power": 75,
        "pp": 10,
        "type": "normal",
        "id": 306
    },
    "307": {
        "name": "Blast Burn",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-iii",
        "power": 150,
        "pp": 5,
        "type": "fire",
        "id": 307
    },
    "308": {
        "name": "Hydro Cannon",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-iii",
        "power": 150,
        "pp": 5,
        "type": "water",
        "id": 308
    },
    "309": {
        "name": "Meteor Mash",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-iii",
        "power": 90,
        "pp": 10,
        "type": "steel",
        "id": 309
    },
    "310": {
        "name": "Astonish",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 30,
        "pp": 15,
        "pastGenPP": {
        "LA": 25
        },
        "type": "ghost",
        "id": 310
    },
    "311": {
        "name": "Weather Ball",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iii",
        "power": 50,
        "pp": 10,
        "type": "normal",
        "id": 311
    },
    "312": {
        "name": "Aromatherapy",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 5,
        "type": "grass",
        "id": 312
    },
    "313": {
        "name": "Fake Tears",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "type": "dark",
        "id": 313
    },
    "314": {
        "name": "Air Cutter",
        "accuracy": 95,
        "class": "special",
        "generation": "generation-iii",
        "power": 60,
        "pp": 25,
        "pastGenPP": {
        "LA": 15
        },
        "type": "flying",
        "id": 314
    },
    "315": {
        "name": "Overheat",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-iii",
        "power": 130,
        "pp": 5,
        "type": "fire",
        "id": 315
    },
    "316": {
        "name": "Odor Sleuth",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 40,
        "type": "normal",
        "id": 316
    },
    "317": {
        "name": "Rock Tomb",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-iii",
        "power": 60,
        "pp": 15,
        "pastGenPP": {
        "G3": 10,
        "G4": 10,
        "G5": 10
        },
        "type": "rock",
        "id": 317
    },
    "318": {
        "name": "Silver Wind",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iii",
        "power": 60,
        "pp": 5,
        "pastGenPP": {
        "LA": 15
        },
        "type": "bug",
        "id": 318
    },
    "319": {
        "name": "Metal Sound",
        "accuracy": 85,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 40,
        "type": "steel",
        "id": 319
    },
    "320": {
        "name": "Grass Whistle",
        "accuracy": 55,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 15,
        "type": "grass",
        "id": 320
    },
    "321": {
        "name": "Tickle",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 321
    },
    "322": {
        "name": "Cosmic Power",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "type": "psychic",
        "id": 322
    },
    "323": {
        "name": "Water Spout",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iii",
        "power": 150,
        "pp": 5,
        "type": "water",
        "id": 323
    },
    "324": {
        "name": "Signal Beam",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iii",
        "power": 75,
        "pp": 15,
        "type": "bug",
        "id": 324
    },
    "325": {
        "name": "Shadow Punch",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-iii",
        "power": 60,
        "pp": 20,
        "type": "ghost",
        "id": 325
    },
    "326": {
        "name": "Extrasensory",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iii",
        "power": 80,
        "pp": 20,
        "pastGenPP": {
        "G1": 30,
        "G2": 30,
        "G3": 30,
        "G4": 30,
        "G5": 30,
        "LA": 15
        },
        "type": "psychic",
        "id": 326
    },
    "327": {
        "name": "Sky Uppercut",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-iii",
        "power": 85,
        "pp": 15,
        "type": "fighting",
        "id": 327
    },
    "328": {
        "name": "Sand Tomb",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-iii",
        "power": 35,
        "pp": 15,
        "type": "ground",
        "id": 328
    },
    "329": {
        "name": "Sheer Cold",
        "accuracy": 30,
        "class": "special",
        "generation": "generation-iii",
        "power": null,
        "pp": 5,
        "type": "ice",
        "id": 329
    },
    "330": {
        "name": "Muddy Water",
        "accuracy": 85,
        "class": "special",
        "generation": "generation-iii",
        "power": 90,
        "pp": 10,
        "type": "water",
        "id": 330
    },
    "331": {
        "name": "Bullet Seed",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 25,
        "pp": 30,
        "type": "grass",
        "id": 331
    },
    "332": {
        "name": "Aerial Ace",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-iii",
        "power": 60,
        "pp": 20,
        "type": "flying",
        "id": 332
    },
    "333": {
        "name": "Icicle Spear",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 25,
        "pp": 30,
        "type": "ice",
        "id": 333
    },
    "334": {
        "name": "Iron Defense",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 15,
        "pastGenPP": {
        "LA": 20
        },
        "type": "steel",
        "id": 334
    },
    "335": {
        "name": "Block",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 5,
        "type": "normal",
        "id": 335
    },
    "336": {
        "name": "Howl",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 40,
        "type": "normal",
        "id": 336
    },
    "337": {
        "name": "Dragon Claw",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 80,
        "pp": 15,
        "pastGenPP": {
        "LA": 10
        },
        "type": "dragon",
        "id": 337
    },
    "338": {
        "name": "Frenzy Plant",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-iii",
        "power": 150,
        "pp": 5,
        "type": "grass",
        "id": 338
    },
    "339": {
        "name": "Bulk Up",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "pastGenPP": {
        "LA": 10
        },
        "type": "fighting",
        "id": 339
    },
    "340": {
        "name": "Bounce",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-iii",
        "power": 85,
        "pp": 5,
        "type": "flying",
        "id": 340
    },
    "341": {
        "name": "Mud Shot",
        "accuracy": 95,
        "class": "special",
        "generation": "generation-iii",
        "power": 55,
        "pp": 15,
        "type": "ground",
        "id": 341
    },
    "342": {
        "name": "Poison Tail",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 50,
        "pp": 25,
        "type": "poison",
        "id": 342
    },
    "343": {
        "name": "Covet",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 60,
        "pp": 25,
        "pastGenPP": {
        "G1": 40,
        "G2": 40,
        "G3": 40,
        "G4": 40,
        "G5": 40
        },
        "type": "normal",
        "id": 343
    },
    "344": {
        "name": "Volt Tackle",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 120,
        "pp": 15,
        "pastGenPP": {
        "LA": 5
        },
        "type": "electric",
        "id": 344
    },
    "345": {
        "name": "Magical Leaf",
        "accuracy": null,
        "class": "special",
        "generation": "generation-iii",
        "power": 60,
        "pp": 20,
        "type": "grass",
        "id": 345
    },
    "346": {
        "name": "Water Sport",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 15,
        "type": "water",
        "id": 346
    },
    "347": {
        "name": "Calm Mind",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "pastGenPP": {
        "LA": 10
        },
        "type": "psychic",
        "id": 347
    },
    "348": {
        "name": "Leaf Blade",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iii",
        "power": 90,
        "pp": 15,
        "pastGenPP": {
        "LA": 10
        },
        "type": "grass",
        "id": 348
    },
    "349": {
        "name": "Dragon Dance",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iii",
        "power": null,
        "pp": 20,
        "type": "dragon",
        "id": 349
    },
    "350": {
        "name": "Rock Blast",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-iii",
        "power": 25,
        "pp": 10,
        "type": "rock",
        "id": 350
    },
    "351": {
        "name": "Shock Wave",
        "accuracy": null,
        "class": "special",
        "generation": "generation-iii",
        "power": 60,
        "pp": 20,
        "type": "electric",
        "id": 351
    },
    "352": {
        "name": "Water Pulse",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iii",
        "power": 60,
        "pp": 20,
        "type": "water",
        "id": 352
    },
    "353": {
        "name": "Doom Desire",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iii",
        "power": 140,
        "pp": 5,
        "type": "steel",
        "id": 353
    },
    "354": {
        "name": "Psycho Boost",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-iii",
        "power": 140,
        "pp": 5,
        "type": "psychic",
        "id": 354
    },
    "355": {
        "name": "Roost",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 5,
        "pastGenPP": {
        "G4": 10,
        "G5": 10,
        "G6": 10,
        "SMUSUM": 10,
        "LGPE": 10,
        "G8": 10,
        "LA": 10
        },
        "type": "flying",
        "id": 355
    },
    "356": {
        "name": "Gravity",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 5,
        "type": "psychic",
        "id": 356
    },
    "357": {
        "name": "Miracle Eye",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 40,
        "type": "psychic",
        "id": 357
    },
    "358": {
        "name": "Wake-Up Slap",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 70,
        "pp": 10,
        "type": "fighting",
        "id": 358
    },
    "359": {
        "name": "Hammer Arm",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-iv",
        "power": 100,
        "pp": 10,
        "type": "fighting",
        "id": 359
    },
    "360": {
        "name": "Gyro Ball",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": null,
        "pp": 5,
        "type": "steel",
        "id": 360
    },
    "361": {
        "name": "Healing Wish",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 361
    },
    "362": {
        "name": "Brine",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iv",
        "power": 65,
        "pp": 10,
        "type": "water",
        "id": 362
    },
    "363": {
        "name": "Natural Gift",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": null,
        "pp": 15,
        "type": "normal",
        "id": 363
    },
    "364": {
        "name": "Feint",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 30,
        "pp": 10,
        "type": "normal",
        "id": 364
    },
    "365": {
        "name": "Pluck",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 60,
        "pp": 20,
        "type": "flying",
        "id": 365
    },
    "366": {
        "name": "Tailwind",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 15,
        "pastGenPP": {
        "G4": 30,
        "G5": 30
        },
        "type": "flying",
        "id": 366
    },
    "367": {
        "name": "Acupressure",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 30,
        "type": "normal",
        "id": 367
    },
    "368": {
        "name": "Metal Burst",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": null,
        "pp": 10,
        "type": "steel",
        "id": 368
    },
    "369": {
        "name": "U-turn",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 70,
        "pp": 20,
        "type": "bug",
        "id": 369
    },
    "370": {
        "name": "Close Combat",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 120,
        "pp": 5,
        "type": "fighting",
        "id": 370
    },
    "371": {
        "name": "Payback",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 50,
        "pp": 10,
        "type": "dark",
        "id": 371
    },
    "372": {
        "name": "Assurance",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 60,
        "pp": 10,
        "type": "dark",
        "id": 372
    },
    "373": {
        "name": "Embargo",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 15,
        "type": "dark",
        "id": 373
    },
    "374": {
        "name": "Fling",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": null,
        "pp": 10,
        "type": "dark",
        "id": 374
    },
    "375": {
        "name": "Psycho Shift",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 375
    },
    "376": {
        "name": "Trump Card",
        "accuracy": null,
        "class": "special",
        "generation": "generation-iv",
        "power": null,
        "pp": 5,
        "type": "normal",
        "id": 376
    },
    "377": {
        "name": "Heal Block",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 15,
        "type": "psychic",
        "id": 377
    },
    "378": {
        "name": "Wring Out",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iv",
        "power": null,
        "pp": 5,
        "type": "normal",
        "id": 378
    },
    "379": {
        "name": "Power Trick",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 379
    },
    "380": {
        "name": "Gastro Acid",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 10,
        "type": "poison",
        "id": 380
    },
    "381": {
        "name": "Lucky Chant",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 30,
        "type": "normal",
        "id": 381
    },
    "382": {
        "name": "Me First",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 382
    },
    "383": {
        "name": "Copycat",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 383
    },
    "384": {
        "name": "Power Swap",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 384
    },
    "385": {
        "name": "Guard Swap",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 385
    },
    "386": {
        "name": "Punishment",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": null,
        "pp": 5,
        "type": "dark",
        "id": 386
    },
    "387": {
        "name": "Last Resort",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 140,
        "pp": 5,
        "type": "normal",
        "id": 387
    },
    "388": {
        "name": "Worry Seed",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 10,
        "type": "grass",
        "id": 388
    },
    "389": {
        "name": "Sucker Punch",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 70,
        "pp": 5,
        "type": "dark",
        "id": 389
    },
    "390": {
        "name": "Toxic Spikes",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 20,
        "type": "poison",
        "id": 390
    },
    "391": {
        "name": "Heart Swap",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 391
    },
    "392": {
        "name": "Aqua Ring",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 20,
        "type": "water",
        "id": 392
    },
    "393": {
        "name": "Magnet Rise",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 10,
        "type": "electric",
        "id": 393
    },
    "394": {
        "name": "Flare Blitz",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 120,
        "pp": 15,
        "type": "fire",
        "id": 394
    },
    "395": {
        "name": "Force Palm",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 60,
        "pp": 10,
        "type": "fighting",
        "id": 395
    },
    "396": {
        "name": "Aura Sphere",
        "accuracy": null,
        "class": "special",
        "generation": "generation-iv",
        "power": 80,
        "pp": 20,
        "pastGenPP": {
        "LA": 10
        },
        "type": "fighting",
        "id": 396
    },
    "397": {
        "name": "Rock Polish",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 20,
        "type": "rock",
        "id": 397
    },
    "398": {
        "name": "Poison Jab",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 80,
        "pp": 20,
        "pastGenPP": {
        "LA": 10
        },
        "type": "poison",
        "id": 398
    },
    "399": {
        "name": "Dark Pulse",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iv",
        "power": 80,
        "pp": 15,
        "pastGenPP": {
        "LA": 10
        },
        "type": "dark",
        "id": 399
    },
    "400": {
        "name": "Night Slash",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 70,
        "pp": 15,
        "type": "dark",
        "id": 400
    },
    "401": {
        "name": "Aqua Tail",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-iv",
        "power": 90,
        "pp": 10,
        "type": "water",
        "id": 401
    },
    "402": {
        "name": "Seed Bomb",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 80,
        "pp": 15,
        "type": "grass",
        "id": 402
    },
    "403": {
        "name": "Air Slash",
        "accuracy": 95,
        "class": "special",
        "generation": "generation-iv",
        "power": 75,
        "pp": 15,
        "pastGenPP": {
        "G1": 20,
        "G2": 20,
        "G3": 20,
        "G4": 20,
        "G5": 20,
        "LA": 10
        },
        "type": "flying",
        "id": 403
    },
    "404": {
        "name": "X-Scissor",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 80,
        "pp": 15,
        "pastGenPP": {
        "LA": 10
        },
        "type": "bug",
        "id": 404
    },
    "405": {
        "name": "Bug Buzz",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iv",
        "power": 90,
        "pp": 10,
        "type": "bug",
        "id": 405
    },
    "406": {
        "name": "Dragon Pulse",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iv",
        "power": 85,
        "pp": 10,
        "type": "dragon",
        "id": 406
    },
    "407": {
        "name": "Dragon Rush",
        "accuracy": 75,
        "class": "physical",
        "generation": "generation-iv",
        "power": 100,
        "pp": 10,
        "type": "dragon",
        "id": 407
    },
    "408": {
        "name": "Power Gem",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iv",
        "power": 80,
        "pp": 20,
        "pastGenPP": {
        "LA": 10
        },
        "type": "rock",
        "id": 408
    },
    "409": {
        "name": "Drain Punch",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 75,
        "pp": 10,
        "pastGenPP": {
        "G4": 5
        },
        "type": "fighting",
        "id": 409
    },
    "410": {
        "name": "Vacuum Wave",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iv",
        "power": 40,
        "pp": 30,
        "type": "fighting",
        "id": 410
    },
    "411": {
        "name": "Focus Blast",
        "accuracy": 70,
        "class": "special",
        "generation": "generation-iv",
        "power": 120,
        "pp": 5,
        "type": "fighting",
        "id": 411
    },
    "412": {
        "name": "Energy Ball",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iv",
        "power": 90,
        "pp": 10,
        "type": "grass",
        "id": 412
    },
    "413": {
        "name": "Brave Bird",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 120,
        "pp": 15,
        "pastGenPP": {
        "LA": 5
        },
        "type": "flying",
        "id": 413
    },
    "414": {
        "name": "Earth Power",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iv",
        "power": 90,
        "pp": 10,
        "type": "ground",
        "id": 414
    },
    "415": {
        "name": "Switcheroo",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 10,
        "type": "dark",
        "id": 415
    },
    "416": {
        "name": "Giga Impact",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-iv",
        "power": 150,
        "pp": 5,
        "type": "normal",
        "id": 416
    },
    "417": {
        "name": "Nasty Plot",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 20,
        "type": "dark",
        "id": 417
    },
    "418": {
        "name": "Bullet Punch",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 40,
        "pp": 30,
        "pastGenPP": {
        "LA": 20
        },
        "type": "steel",
        "id": 418
    },
    "419": {
        "name": "Avalanche",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 60,
        "pp": 10,
        "type": "ice",
        "id": 419
    },
    "420": {
        "name": "Ice Shard",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 40,
        "pp": 30,
        "pastGenPP": {
        "LA": 20
        },
        "type": "ice",
        "id": 420
    },
    "421": {
        "name": "Shadow Claw",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 70,
        "pp": 15,
        "type": "ghost",
        "id": 421
    },
    "422": {
        "name": "Thunder Fang",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-iv",
        "power": 65,
        "pp": 15,
        "type": "electric",
        "id": 422
    },
    "423": {
        "name": "Ice Fang",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-iv",
        "power": 65,
        "pp": 15,
        "type": "ice",
        "id": 423
    },
    "424": {
        "name": "Fire Fang",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-iv",
        "power": 65,
        "pp": 15,
        "type": "fire",
        "id": 424
    },
    "425": {
        "name": "Shadow Sneak",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 40,
        "pp": 30,
        "pastGenPP": {
        "LA": 20
        },
        "type": "ghost",
        "id": 425
    },
    "426": {
        "name": "Mud Bomb",
        "accuracy": 85,
        "class": "special",
        "generation": "generation-iv",
        "power": 65,
        "pp": 10,
        "pastGenPP": {
        "LA": 15
        },
        "type": "ground",
        "id": 426
    },
    "427": {
        "name": "Psycho Cut",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 70,
        "pp": 20,
        "pastGenPP": {
        "LA": 15
        },
        "type": "psychic",
        "id": 427
    },
    "428": {
        "name": "Zen Headbutt",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-iv",
        "power": 80,
        "pp": 15,
        "pastGenPP": {
        "LA": 10
        },
        "type": "psychic",
        "id": 428
    },
    "429": {
        "name": "Mirror Shot",
        "accuracy": 85,
        "class": "special",
        "generation": "generation-iv",
        "power": 65,
        "pp": 10,
        "type": "steel",
        "id": 429
    },
    "430": {
        "name": "Flash Cannon",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iv",
        "power": 80,
        "pp": 10,
        "type": "steel",
        "id": 430
    },
    "431": {
        "name": "Rock Climb",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-iv",
        "power": 90,
        "pp": 20,
        "type": "normal",
        "id": 431
    },
    "432": {
        "name": "Defog",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 15,
        "type": "flying",
        "id": 432
    },
    "433": {
        "name": "Trick Room",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 5,
        "type": "psychic",
        "id": 433
    },
    "434": {
        "name": "Draco Meteor",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-iv",
        "power": 130,
        "pp": 5,
        "type": "dragon",
        "id": 434
    },
    "435": {
        "name": "Discharge",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iv",
        "power": 80,
        "pp": 15,
        "type": "electric",
        "id": 435
    },
    "436": {
        "name": "Lava Plume",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iv",
        "power": 80,
        "pp": 15,
        "type": "fire",
        "id": 436
    },
    "437": {
        "name": "Leaf Storm",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-iv",
        "power": 130,
        "pp": 5,
        "type": "grass",
        "id": 437
    },
    "438": {
        "name": "Power Whip",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-iv",
        "power": 120,
        "pp": 10,
        "type": "grass",
        "id": 438
    },
    "439": {
        "name": "Rock Wrecker",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-iv",
        "power": 150,
        "pp": 5,
        "type": "rock",
        "id": 439
    },
    "440": {
        "name": "Cross Poison",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 70,
        "pp": 20,
        "pastGenPP": {
        "LA": 15
        },
        "type": "poison",
        "id": 440
    },
    "441": {
        "name": "Gunk Shot",
        "accuracy": 80,
        "class": "physical",
        "generation": "generation-iv",
        "power": 120,
        "pp": 5,
        "type": "poison",
        "id": 441
    },
    "442": {
        "name": "Iron Head",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 80,
        "pp": 15,
        "pastGenPP": {
        "LA": 10
        },
        "type": "steel",
        "id": 442
    },
    "443": {
        "name": "Magnet Bomb",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-iv",
        "power": 60,
        "pp": 20,
        "type": "steel",
        "id": 443
    },
    "444": {
        "name": "Stone Edge",
        "accuracy": 80,
        "class": "physical",
        "generation": "generation-iv",
        "power": 100,
        "pp": 5,
        "type": "rock",
        "id": 444
    },
    "445": {
        "name": "Captivate",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 445
    },
    "446": {
        "name": "Stealth Rock",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 20,
        "type": "rock",
        "id": 446
    },
    "447": {
        "name": "Grass Knot",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iv",
        "power": null,
        "pp": 20,
        "type": "grass",
        "id": 447
    },
    "448": {
        "name": "Chatter",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iv",
        "power": 65,
        "pp": 20,
        "type": "flying",
        "id": 448
    },
    "449": {
        "name": "Judgment",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iv",
        "power": 100,
        "pp": 10,
        "pastGenPP": {
        "LA": 5
        },
        "type": "normal",
        "id": 449
    },
    "450": {
        "name": "Bug Bite",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 60,
        "pp": 20,
        "type": "bug",
        "id": 450
    },
    "451": {
        "name": "Charge Beam",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-iv",
        "power": 50,
        "pp": 10,
        "pastGenPP": {
        "LA": 15
        },
        "type": "electric",
        "id": 451
    },
    "452": {
        "name": "Wood Hammer",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 120,
        "pp": 15,
        "pastGenPP": {
        "LA": 5
        },
        "type": "grass",
        "id": 452
    },
    "453": {
        "name": "Aqua Jet",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 40,
        "pp": 20,
        "type": "water",
        "id": 453
    },
    "454": {
        "name": "Attack Order",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 90,
        "pp": 15,
        "type": "bug",
        "id": 454
    },
    "455": {
        "name": "Defend Order",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 10,
        "type": "bug",
        "id": 455
    },
    "456": {
        "name": "Heal Order",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 10,
        "type": "bug",
        "id": 456
    },
    "457": {
        "name": "Head Smash",
        "accuracy": 80,
        "class": "physical",
        "generation": "generation-iv",
        "power": 150,
        "pp": 5,
        "type": "rock",
        "id": 457
    },
    "458": {
        "name": "Double Hit",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-iv",
        "power": 35,
        "pp": 10,
        "type": "normal",
        "id": 458
    },
    "459": {
        "name": "Roar of Time",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-iv",
        "power": 150,
        "pp": 5,
        "type": "dragon",
        "id": 459
    },
    "460": {
        "name": "Spacial Rend",
        "accuracy": 95,
        "class": "special",
        "generation": "generation-iv",
        "power": 100,
        "pp": 5,
        "type": "dragon",
        "id": 460
    },
    "461": {
        "name": "Lunar Dance",
        "accuracy": null,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 461
    },
    "462": {
        "name": "Crush Grip",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": null,
        "pp": 5,
        "type": "normal",
        "id": 462
    },
    "463": {
        "name": "Magma Storm",
        "accuracy": 75,
        "class": "special",
        "generation": "generation-iv",
        "power": 100,
        "pp": 5,
        "type": "fire",
        "id": 463
    },
    "464": {
        "name": "Dark Void",
        "accuracy": 50,
        "class": "status",
        "generation": "generation-iv",
        "power": null,
        "pp": 10,
        "type": "dark",
        "id": 464
    },
    "465": {
        "name": "Seed Flare",
        "accuracy": 85,
        "class": "special",
        "generation": "generation-iv",
        "power": 120,
        "pp": 5,
        "type": "grass",
        "id": 465
    },
    "466": {
        "name": "Ominous Wind",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-iv",
        "power": 60,
        "pp": 5,
        "pastGenPP": {
        "LA": 15
        },
        "type": "ghost",
        "id": 466
    },
    "467": {
        "name": "Shadow Force",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-iv",
        "power": 120,
        "pp": 5,
        "type": "ghost",
        "id": 467
    },
    "468": {
        "name": "Hone Claws",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 15,
        "type": "dark",
        "id": 468
    },
    "469": {
        "name": "Wide Guard",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 10,
        "type": "rock",
        "id": 469
    },
    "470": {
        "name": "Guard Split",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 470
    },
    "471": {
        "name": "Power Split",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 471
    },
    "472": {
        "name": "Wonder Room",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 472
    },
    "473": {
        "name": "Psyshock",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 80,
        "pp": 10,
        "type": "psychic",
        "id": 473
    },
    "474": {
        "name": "Venoshock",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 65,
        "pp": 10,
        "pastGenPP": {
        "LA": 15
        },
        "type": "poison",
        "id": 474
    },
    "475": {
        "name": "Autotomize",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 15,
        "type": "steel",
        "id": 475
    },
    "476": {
        "name": "Rage Powder",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 20,
        "type": "bug",
        "id": 476
    },
    "477": {
        "name": "Telekinesis",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 15,
        "type": "psychic",
        "id": 477
    },
    "478": {
        "name": "Magic Room",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 478
    },
    "479": {
        "name": "Smack Down",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 50,
        "pp": 15,
        "type": "rock",
        "id": 479
    },
    "480": {
        "name": "Storm Throw",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 60,
        "pp": 10,
        "type": "fighting",
        "id": 480
    },
    "481": {
        "name": "Flame Burst",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 70,
        "pp": 15,
        "type": "fire",
        "id": 481
    },
    "482": {
        "name": "Sludge Wave",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 95,
        "pp": 10,
        "type": "poison",
        "id": 482
    },
    "483": {
        "name": "Quiver Dance",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 20,
        "type": "bug",
        "id": 483
    },
    "484": {
        "name": "Heavy Slam",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": null,
        "pp": 10,
        "type": "steel",
        "id": 484
    },
    "485": {
        "name": "Synchronoise",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 120,
        "pastGenPP": {
        "G5": 15
        },
        "pp": 10,
        "type": "psychic",
        "id": 485
    },
    "486": {
        "name": "Electro Ball",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": null,
        "pp": 10,
        "type": "electric",
        "id": 486
    },
    "487": {
        "name": "Soak",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 20,
        "type": "water",
        "id": 487
    },
    "488": {
        "name": "Flame Charge",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 50,
        "pp": 20,
        "type": "fire",
        "id": 488
    },
    "489": {
        "name": "Coil",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 20,
        "type": "poison",
        "id": 489
    },
    "490": {
        "name": "Low Sweep",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 65,
        "pp": 20,
        "type": "fighting",
        "id": 490
    },
    "491": {
        "name": "Acid Spray",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 40,
        "pp": 20,
        "type": "poison",
        "id": 491
    },
    "492": {
        "name": "Foul Play",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 95,
        "pp": 15,
        "type": "dark",
        "id": 492
    },
    "493": {
        "name": "Simple Beam",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 15,
        "type": "normal",
        "id": 493
    },
    "494": {
        "name": "Entrainment",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 15,
        "type": "normal",
        "id": 494
    },
    "495": {
        "name": "After You",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 15,
        "type": "normal",
        "id": 495
    },
    "496": {
        "name": "Round",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 60,
        "pp": 15,
        "type": "normal",
        "id": 496
    },
    "497": {
        "name": "Echoed Voice",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 40,
        "pp": 15,
        "type": "normal",
        "id": 497
    },
    "498": {
        "name": "Chip Away",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 70,
        "pp": 20,
        "type": "normal",
        "id": 498
    },
    "499": {
        "name": "Clear Smog",
        "accuracy": null,
        "class": "special",
        "generation": "generation-v",
        "power": 50,
        "pp": 15,
        "type": "poison",
        "id": 499
    },
    "500": {
        "name": "Stored Power",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 20,
        "pp": 10,
        "type": "psychic",
        "id": 500
    },
    "501": {
        "name": "Quick Guard",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 15,
        "type": "fighting",
        "id": 501
    },
    "502": {
        "name": "Ally Switch",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 15,
        "type": "psychic",
        "id": 502
    },
    "503": {
        "name": "Scald",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 80,
        "pp": 15,
        "type": "water",
        "id": 503
    },
    "504": {
        "name": "Shell Smash",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 15,
        "type": "normal",
        "id": 504
    },
    "505": {
        "name": "Heal Pulse",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 505
    },
    "506": {
        "name": "Hex",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 65,
        "pp": 10,
        "pastGenPP": {
        "LA": 15
        },
        "type": "ghost",
        "id": 506
    },
    "507": {
        "name": "Sky Drop",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 60,
        "pp": 10,
        "type": "flying",
        "id": 507
    },
    "508": {
        "name": "Shift Gear",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 10,
        "type": "steel",
        "id": 508
    },
    "509": {
        "name": "Circle Throw",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-v",
        "power": 60,
        "pp": 10,
        "type": "fighting",
        "id": 509
    },
    "510": {
        "name": "Incinerate",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 60,
        "pp": 15,
        "type": "fire",
        "id": 510
    },
    "511": {
        "name": "Quash",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 15,
        "type": "dark",
        "id": 511
    },
    "512": {
        "name": "Acrobatics",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 55,
        "pp": 15,
        "type": "flying",
        "id": 512
    },
    "513": {
        "name": "Reflect Type",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 15,
        "type": "normal",
        "id": 513
    },
    "514": {
        "name": "Retaliate",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 70,
        "pp": 5,
        "type": "normal",
        "id": 514
    },
    "515": {
        "name": "Final Gambit",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": null,
        "pp": 5,
        "type": "fighting",
        "id": 515
    },
    "516": {
        "name": "Bestow",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 15,
        "type": "normal",
        "id": 516
    },
    "517": {
        "name": "Inferno",
        "accuracy": 50,
        "class": "special",
        "generation": "generation-v",
        "power": 100,
        "pp": 5,
        "type": "fire",
        "id": 517
    },
    "518": {
        "name": "Water Pledge",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 80,
        "pp": 10,
        "type": "water",
        "id": 518
    },
    "519": {
        "name": "Fire Pledge",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 80,
        "pp": 10,
        "type": "fire",
        "id": 519
    },
    "520": {
        "name": "Grass Pledge",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 80,
        "pp": 10,
        "type": "grass",
        "id": 520
    },
    "521": {
        "name": "Volt Switch",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 70,
        "pp": 20,
        "type": "electric",
        "id": 521
    },
    "522": {
        "name": "Struggle Bug",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 50,
        "pp": 20,
        "type": "bug",
        "id": 522
    },
    "523": {
        "name": "Bulldoze",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 60,
        "pp": 20,
        "type": "ground",
        "id": 523
    },
    "524": {
        "name": "Frost Breath",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-v",
        "power": 60,
        "pp": 10,
        "type": "ice",
        "id": 524
    },
    "525": {
        "name": "Dragon Tail",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-v",
        "power": 60,
        "pp": 10,
        "type": "dragon",
        "id": 525
    },
    "526": {
        "name": "Work Up",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 30,
        "type": "normal",
        "id": 526
    },
    "527": {
        "name": "Electroweb",
        "accuracy": 95,
        "class": "special",
        "generation": "generation-v",
        "power": 55,
        "pp": 15,
        "type": "electric",
        "id": 527
    },
    "528": {
        "name": "Wild Charge",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 90,
        "pp": 15,
        "pastGenPP": {
        "LA": 10
        },
        "type": "electric",
        "id": 528
    },
    "529": {
        "name": "Drill Run",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-v",
        "power": 80,
        "pp": 10,
        "type": "ground",
        "id": 529
    },
    "530": {
        "name": "Dual Chop",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-v",
        "power": 40,
        "pp": 15,
        "type": "dragon",
        "id": 530
    },
    "531": {
        "name": "Heart Stamp",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 60,
        "pp": 25,
        "type": "psychic",
        "id": 531
    },
    "532": {
        "name": "Horn Leech",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 75,
        "pp": 10,
        "type": "grass",
        "id": 532
    },
    "533": {
        "name": "Sacred Sword",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 90,
        "pp": 15,
        "pastGenPP": {
        "G5": 20
        },
        "type": "fighting",
        "id": 533
    },
    "534": {
        "name": "Razor Shell",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-v",
        "power": 75,
        "pp": 10,
        "type": "water",
        "id": 534
    },
    "535": {
        "name": "Heat Crash",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": null,
        "pp": 10,
        "type": "fire",
        "id": 535
    },
    "536": {
        "name": "Leaf Tornado",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-v",
        "power": 65,
        "pp": 10,
        "type": "grass",
        "id": 536
    },
    "537": {
        "name": "Steamroller",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 65,
        "pp": 20,
        "type": "bug",
        "id": 537
    },
    "538": {
        "name": "Cotton Guard",
        "accuracy": null,
        "class": "status",
        "generation": "generation-v",
        "power": null,
        "pp": 10,
        "type": "grass",
        "id": 538
    },
    "539": {
        "name": "Night Daze",
        "accuracy": 95,
        "class": "special",
        "generation": "generation-v",
        "power": 85,
        "pp": 10,
        "type": "dark",
        "id": 539
    },
    "540": {
        "name": "Psystrike",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 100,
        "pp": 10,
        "type": "psychic",
        "id": 540
    },
    "541": {
        "name": "Tail Slap",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-v",
        "power": 25,
        "pp": 10,
        "type": "normal",
        "id": 541
    },
    "542": {
        "name": "Hurricane",
        "accuracy": 70,
        "class": "special",
        "generation": "generation-v",
        "power": 110,
        "pp": 10,
        "pastGenPP": {
        "LA": 5
        },
        "type": "flying",
        "id": 542
    },
    "543": {
        "name": "Head Charge",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 120,
        "pp": 15,
        "type": "normal",
        "id": 543
    },
    "544": {
        "name": "Gear Grind",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-v",
        "power": 50,
        "pp": 15,
        "type": "steel",
        "id": 544
    },
    "545": {
        "name": "Searing Shot",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 100,
        "pp": 5,
        "type": "fire",
        "id": 545
    },
    "546": {
        "name": "Techno Blast",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 120,
        "pp": 5,
        "type": "normal",
        "id": 546
    },
    "547": {
        "name": "Relic Song",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 75,
        "pp": 10,
        "type": "normal",
        "id": 547
    },
    "548": {
        "name": "Secret Sword",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 85,
        "pp": 10,
        "type": "fighting",
        "id": 548
    },
    "549": {
        "name": "Glaciate",
        "accuracy": 95,
        "class": "special",
        "generation": "generation-v",
        "power": 65,
        "pp": 10,
        "type": "ice",
        "id": 549
    },
    "550": {
        "name": "Bolt Strike",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-v",
        "power": 130,
        "pp": 5,
        "type": "electric",
        "id": 550
    },
    "551": {
        "name": "Blue Flare",
        "accuracy": 85,
        "class": "special",
        "generation": "generation-v",
        "power": 130,
        "pp": 5,
        "type": "fire",
        "id": 551
    },
    "552": {
        "name": "Fiery Dance",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 80,
        "pp": 10,
        "type": "fire",
        "id": 552
    },
    "553": {
        "name": "Freeze Shock",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-v",
        "power": 140,
        "pp": 5,
        "type": "ice",
        "id": 553
    },
    "554": {
        "name": "Ice Burn",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-v",
        "power": 140,
        "pp": 5,
        "type": "ice",
        "id": 554
    },
    "555": {
        "name": "Snarl",
        "accuracy": 95,
        "class": "special",
        "generation": "generation-v",
        "power": 55,
        "pp": 15,
        "type": "dark",
        "id": 555
    },
    "556": {
        "name": "Icicle Crash",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-v",
        "power": 85,
        "pp": 10,
        "type": "ice",
        "id": 556
    },
    "557": {
        "name": "V-create",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-v",
        "power": 180,
        "pp": 5,
        "type": "fire",
        "id": 557
    },
    "558": {
        "name": "Fusion Flare",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-v",
        "power": 100,
        "pp": 5,
        "type": "fire",
        "id": 558
    },
    "559": {
        "name": "Fusion Bolt",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-v",
        "power": 100,
        "pp": 5,
        "type": "electric",
        "id": 559
    },
    "560": {
        "name": "Flying Press",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-vi",
        "power": 100,
        "pp": 10,
        "type": "fighting",
        "id": 560
    },
    "561": {
        "name": "Mat Block",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 10,
        "type": "fighting",
        "id": 561
    },
    "562": {
        "name": "Belch",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-vi",
        "power": 120,
        "pp": 10,
        "type": "poison",
        "id": 562
    },
    "563": {
        "name": "Rototiller",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 10,
        "type": "ground",
        "id": 563
    },
    "564": {
        "name": "Sticky Web",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 20,
        "type": "bug",
        "id": 564
    },
    "565": {
        "name": "Fell Stinger",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vi",
        "power": 50,
        "pp": 25,
        "type": "bug",
        "id": 565
    },
    "566": {
        "name": "Phantom Force",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vi",
        "power": 90,
        "pp": 10,
        "type": "ghost",
        "id": 566
    },
    "567": {
        "name": "Trick-or-Treat",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 20,
        "type": "ghost",
        "id": 567
    },
    "568": {
        "name": "Noble Roar",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 30,
        "type": "normal",
        "id": 568
    },
    "569": {
        "name": "Ion Deluge",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 25,
        "type": "electric",
        "id": 569
    },
    "570": {
        "name": "Parabolic Charge",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vi",
        "power": 65,
        "pp": 20,
        "type": "electric",
        "id": 570
    },
    "571": {
        "name": "Forest’s Curse",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 20,
        "type": "grass",
        "id": 571
    },
    "572": {
        "name": "Petal Blizzard",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vi",
        "power": 90,
        "pp": 15,
        "type": "grass",
        "id": 572
    },
    "573": {
        "name": "Freeze-Dry",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vi",
        "power": 70,
        "pp": 20,
        "type": "ice",
        "id": 573
    },
    "574": {
        "name": "Disarming Voice",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vi",
        "power": 40,
        "pp": 15,
        "type": "fairy",
        "id": 574
    },
    "575": {
        "name": "Parting Shot",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 20,
        "type": "dark",
        "id": 575
    },
    "576": {
        "name": "Topsy-Turvy",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 20,
        "type": "dark",
        "id": 576
    },
    "577": {
        "name": "Draining Kiss",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vi",
        "power": 50,
        "pp": 10,
        "pastGenPP": {
        "LA": 15
        },
        "type": "fairy",
        "id": 577
    },
    "578": {
        "name": "Crafty Shield",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 10,
        "type": "fairy",
        "id": 578
    },
    "579": {
        "name": "Flower Shield",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 10,
        "type": "fairy",
        "id": 579
    },
    "580": {
        "name": "Grassy Terrain",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 10,
        "type": "grass",
        "id": 580
    },
    "581": {
        "name": "Misty Terrain",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 10,
        "type": "fairy",
        "id": 581
    },
    "582": {
        "name": "Electrify",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 20,
        "type": "electric",
        "id": 582
    },
    "583": {
        "name": "Play Rough",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-vi",
        "power": 90,
        "pp": 10,
        "type": "fairy",
        "id": 583
    },
    "584": {
        "name": "Fairy Wind",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vi",
        "power": 40,
        "pp": 30,
        "pastGenPP": {
        "LA": 25
        },
        "type": "fairy",
        "id": 584
    },
    "585": {
        "name": "Moonblast",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vi",
        "power": 95,
        "pp": 15,
        "pastGenPP": {
        "LA": 10
        },
        "type": "fairy",
        "id": 585
    },
    "586": {
        "name": "Boomburst",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vi",
        "power": 140,
        "pp": 10,
        "type": "normal",
        "id": 586
    },
    "587": {
        "name": "Fairy Lock",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 10,
        "type": "fairy",
        "id": 587
    },
    "588": {
        "name": "King’s Shield",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 10,
        "type": "steel",
        "id": 588
    },
    "589": {
        "name": "Play Nice",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 589
    },
    "590": {
        "name": "Confide",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 590
    },
    "591": {
        "name": "Diamond Storm",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-vi",
        "power": 100,
        "pp": 5,
        "type": "rock",
        "id": 591
    },
    "592": {
        "name": "Steam Eruption",
        "accuracy": 95,
        "class": "special",
        "generation": "generation-vi",
        "power": 110,
        "pp": 5,
        "type": "water",
        "id": 592
    },
    "593": {
        "name": "Hyperspace Hole",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vi",
        "power": 80,
        "pp": 5,
        "type": "psychic",
        "id": 593
    },
    "594": {
        "name": "Water Shuriken",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vi",
        "power": 15,
        "pp": 20,
        "type": "water",
        "id": 594
    },
    "595": {
        "name": "Mystical Fire",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vi",
        "power": 75,
        "pp": 10,
        "type": "fire",
        "id": 595
    },
    "596": {
        "name": "Spiky Shield",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 10,
        "type": "grass",
        "id": 596
    },
    "597": {
        "name": "Aromatic Mist",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 20,
        "type": "fairy",
        "id": 597
    },
    "598": {
        "name": "Eerie Impulse",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 15,
        "type": "electric",
        "id": 598
    },
    "599": {
        "name": "Venom Drench",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 20,
        "type": "poison",
        "id": 599
    },
    "600": {
        "name": "Powder",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 20,
        "type": "bug",
        "id": 600
    },
    "601": {
        "name": "Geomancy",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 10,
        "type": "fairy",
        "id": 601
    },
    "602": {
        "name": "Magnetic Flux",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 20,
        "type": "electric",
        "id": 602
    },
    "603": {
        "name": "Happy Hour",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 30,
        "type": "normal",
        "id": 603
    },
    "604": {
        "name": "Electric Terrain",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 10,
        "type": "electric",
        "id": 604
    },
    "605": {
        "name": "Dazzling Gleam",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vi",
        "power": 80,
        "pp": 10,
        "type": "fairy",
        "id": 605
    },
    "606": {
        "name": "Celebrate",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 40,
        "type": "normal",
        "id": 606
    },
    "607": {
        "name": "Hold Hands",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 40,
        "type": "normal",
        "id": 607
    },
    "608": {
        "name": "Baby-Doll Eyes",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-vi",
        "power": null,
        "pp": 30,
        "pastGenPP": {
        "LA": 20
        },
        "type": "fairy",
        "id": 608
    },
    "609": {
        "name": "Nuzzle",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vi",
        "power": 20,
        "pp": 20,
        "type": "electric",
        "id": 609
    },
    "610": {
        "name": "Hold Back",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vi",
        "power": 40,
        "pp": 40,
        "type": "normal",
        "id": 610
    },
    "611": {
        "name": "Infestation",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vi",
        "power": 20,
        "pp": 20,
        "type": "bug",
        "id": 611
    },
    "612": {
        "name": "Power-Up Punch",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vi",
        "power": 40,
        "pp": 20,
        "type": "fighting",
        "id": 612
    },
    "613": {
        "name": "Oblivion Wing",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vi",
        "power": 80,
        "pp": 10,
        "type": "flying",
        "id": 613
    },
    "614": {
        "name": "Thousand Arrows",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vi",
        "power": 90,
        "pp": 10,
        "type": "ground",
        "id": 614
    },
    "615": {
        "name": "Thousand Waves",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vi",
        "power": 90,
        "pp": 10,
        "type": "ground",
        "id": 615
    },
    "616": {
        "name": "Land’s Wrath",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vi",
        "power": 90,
        "pp": 10,
        "type": "ground",
        "id": 616
    },
    "617": {
        "name": "Light of Ruin",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-vi",
        "power": 140,
        "pp": 5,
        "type": "fairy",
        "id": 617
    },
    "618": {
        "name": "Origin Pulse",
        "accuracy": 85,
        "class": "special",
        "generation": "generation-vi",
        "power": 110,
        "pp": 10,
        "type": "water",
        "id": 618
    },
    "619": {
        "name": "Precipice Blades",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-vi",
        "power": 120,
        "pp": 10,
        "type": "ground",
        "id": 619
    },
    "620": {
        "name": "Dragon Ascent",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vi",
        "power": 120,
        "pp": 5,
        "type": "flying",
        "id": 620
    },
    "621": {
        "name": "Hyperspace Fury",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vi",
        "power": 100,
        "pp": 5,
        "type": "dark",
        "id": 621
    },
    "622": {
        "name": "Breakneck Blitz",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "normal",
        "id": 622
    },
    "623": {
        "name": "Breakneck Blitz",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "normal",
        "id": 623
    },
    "624": {
        "name": "All-Out Pummeling",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "fighting",
        "id": 624
    },
    "625": {
        "name": "All-Out Pummeling",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "fighting",
        "id": 625
    },
    "626": {
        "name": "Supersonic Skystrike",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "flying",
        "id": 626
    },
    "627": {
        "name": "Supersonic Skystrike",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "flying",
        "id": 627
    },
    "628": {
        "name": "Acid Downpour",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "poison",
        "id": 628
    },
    "629": {
        "name": "Acid Downpour",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "poison",
        "id": 629
    },
    "630": {
        "name": "Tectonic Rage",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "ground",
        "id": 630
    },
    "631": {
        "name": "Tectonic Rage",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "ground",
        "id": 631
    },
    "632": {
        "name": "Continental Crush",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "rock",
        "id": 632
    },
    "633": {
        "name": "Continental Crush",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "rock",
        "id": 633
    },
    "634": {
        "name": "Savage Spin-Out",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "bug",
        "id": 634
    },
    "635": {
        "name": "Savage Spin-Out",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "bug",
        "id": 635
    },
    "636": {
        "name": "Never-Ending Nightmare",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "ghost",
        "id": 636
    },
    "637": {
        "name": "Never-Ending Nightmare",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "ghost",
        "id": 637
    },
    "638": {
        "name": "Corkscrew Crash",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "steel",
        "id": 638
    },
    "639": {
        "name": "Corkscrew Crash",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "steel",
        "id": 639
    },
    "640": {
        "name": "Inferno Overdrive",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "fire",
        "id": 640
    },
    "641": {
        "name": "Inferno Overdrive",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "fire",
        "id": 641
    },
    "642": {
        "name": "Hydro Vortex",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "water",
        "id": 642
    },
    "643": {
        "name": "Hydro Vortex",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "water",
        "id": 643
    },
    "644": {
        "name": "Bloom Doom",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "grass",
        "id": 644
    },
    "645": {
        "name": "Bloom Doom",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "grass",
        "id": 645
    },
    "646": {
        "name": "Gigavolt Havoc",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "electric",
        "id": 646
    },
    "647": {
        "name": "Gigavolt Havoc",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "electric",
        "id": 647
    },
    "648": {
        "name": "Shattered Psyche",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "psychic",
        "id": 648
    },
    "649": {
        "name": "Shattered Psyche",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "psychic",
        "id": 649
    },
    "650": {
        "name": "Subzero Slammer",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "ice",
        "id": 650
    },
    "651": {
        "name": "Subzero Slammer",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "ice",
        "id": 651
    },
    "652": {
        "name": "Devastating Drake",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "dragon",
        "id": 652
    },
    "653": {
        "name": "Devastating Drake",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "dragon",
        "id": 653
    },
    "654": {
        "name": "Black Hole Eclipse",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "dark",
        "id": 654
    },
    "655": {
        "name": "Black Hole Eclipse",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "dark",
        "id": 655
    },
    "656": {
        "name": "Twinkle Tackle",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "fairy",
        "id": 656
    },
    "657": {
        "name": "Twinkle Tackle",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "fairy",
        "id": 657
    },
    "658": {
        "name": "Catastropika",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": 210,
        "pp": 1,
        "type": "electric",
        "id": 658
    },
    "659": {
        "name": "Shore Up",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vii",
        "power": null,
        "pp": 5,
        "pastGenPP": {
        "SMUSUM": 10,
        "LGPE": 10,
        "G8": 10
        },
        "type": "ground",
        "id": 659
    },
    "660": {
        "name": "First Impression",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 90,
        "pp": 10,
        "type": "bug",
        "id": 660
    },
    "661": {
        "name": "Baneful Bunker",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vii",
        "power": null,
        "pp": 10,
        "type": "poison",
        "id": 661
    },
    "662": {
        "name": "Spirit Shackle",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 80,
        "pp": 10,
        "type": "ghost",
        "id": 662
    },
    "663": {
        "name": "Darkest Lariat",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 85,
        "pp": 10,
        "type": "dark",
        "id": 663
    },
    "664": {
        "name": "Sparkling Aria",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vii",
        "power": 90,
        "pp": 10,
        "type": "water",
        "id": 664
    },
    "665": {
        "name": "Ice Hammer",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-vii",
        "power": 100,
        "pp": 10,
        "type": "ice",
        "id": 665
    },
    "666": {
        "name": "Floral Healing",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vii",
        "power": null,
        "pp": 10,
        "type": "fairy",
        "id": 666
    },
    "667": {
        "name": "High Horsepower",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-vii",
        "power": 95,
        "pp": 10,
        "type": "ground",
        "id": 667
    },
    "668": {
        "name": "Strength Sap",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-vii",
        "power": null,
        "pp": 10,
        "type": "grass",
        "id": 668
    },
    "669": {
        "name": "Solar Blade",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 125,
        "pp": 10,
        "type": "grass",
        "id": 669
    },
    "670": {
        "name": "Leafage",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 40,
        "pp": 40,
        "pastGenPP": {
        "LA": 25
        },
        "type": "grass",
        "id": 670
    },
    "671": {
        "name": "Spotlight",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vii",
        "power": null,
        "pp": 15,
        "type": "normal",
        "id": 671
    },
    "672": {
        "name": "Toxic Thread",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-vii",
        "power": null,
        "pp": 20,
        "type": "poison",
        "id": 672
    },
    "673": {
        "name": "Laser Focus",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vii",
        "power": null,
        "pp": 30,
        "type": "normal",
        "id": 673
    },
    "674": {
        "name": "Gear Up",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vii",
        "power": null,
        "pp": 20,
        "type": "steel",
        "id": 674
    },
    "675": {
        "name": "Throat Chop",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 80,
        "pp": 15,
        "type": "dark",
        "id": 675
    },
    "676": {
        "name": "Pollen Puff",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vii",
        "power": 90,
        "pp": 15,
        "type": "bug",
        "id": 676
    },
    "677": {
        "name": "Anchor Shot",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 80,
        "pp": 20,
        "type": "steel",
        "id": 677
    },
    "678": {
        "name": "Psychic Terrain",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vii",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 678
    },
    "679": {
        "name": "Lunge",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 80,
        "pp": 15,
        "type": "bug",
        "id": 679
    },
    "680": {
        "name": "Fire Lash",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 80,
        "pp": 15,
        "type": "fire",
        "id": 680
    },
    "681": {
        "name": "Power Trip",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 20,
        "pp": 10,
        "type": "dark",
        "id": 681
    },
    "682": {
        "name": "Burn Up",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vii",
        "power": 130,
        "pp": 5,
        "type": "fire",
        "id": 682
    },
    "683": {
        "name": "Speed Swap",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vii",
        "power": null,
        "pp": 10,
        "type": "psychic",
        "id": 683
    },
    "684": {
        "name": "Smart Strike",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": 70,
        "pp": 10,
        "type": "steel",
        "id": 684
    },
    "685": {
        "name": "Purify",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vii",
        "power": null,
        "pp": 20,
        "type": "poison",
        "id": 685
    },
    "686": {
        "name": "Revelation Dance",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vii",
        "power": 90,
        "pp": 15,
        "type": "normal",
        "id": 686
    },
    "687": {
        "name": "Core Enforcer",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vii",
        "power": 100,
        "pp": 10,
        "type": "dragon",
        "id": 687
    },
    "688": {
        "name": "Trop Kick",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 70,
        "pp": 15,
        "type": "grass",
        "id": 688
    },
    "689": {
        "name": "Instruct",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vii",
        "power": null,
        "pp": 15,
        "type": "psychic",
        "id": 689
    },
    "690": {
        "name": "Beak Blast",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 100,
        "pp": 15,
        "type": "flying",
        "id": 690
    },
    "691": {
        "name": "Clanging Scales",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vii",
        "power": 110,
        "pp": 5,
        "type": "dragon",
        "id": 691
    },
    "692": {
        "name": "Dragon Hammer",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 90,
        "pp": 15,
        "type": "dragon",
        "id": 692
    },
    "693": {
        "name": "Brutal Swing",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 60,
        "pp": 20,
        "type": "dark",
        "id": 693
    },
    "694": {
        "name": "Aurora Veil",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vii",
        "power": null,
        "pp": 20,
        "type": "ice",
        "id": 694
    },
    "695": {
        "name": "Sinister Arrow Raid",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": 180,
        "pp": 1,
        "type": "ghost",
        "id": 695
    },
    "696": {
        "name": "Malicious Moonsault",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": 180,
        "pp": 1,
        "type": "dark",
        "id": 696
    },
    "697": {
        "name": "Oceanic Operetta",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": 195,
        "pp": 1,
        "type": "water",
        "id": 697
    },
    "698": {
        "name": "Guardian of Alola",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "fairy",
        "id": 698
    },
    "699": {
        "name": "Soul-Stealing 7-Star Strike",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": 195,
        "pp": 1,
        "type": "ghost",
        "id": 699
    },
    "700": {
        "name": "Stoked Sparksurfer",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": 175,
        "pp": 1,
        "type": "electric",
        "id": 700
    },
    "701": {
        "name": "Pulverizing Pancake",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": 210,
        "pp": 1,
        "type": "normal",
        "id": 701
    },
    "702": {
        "name": "Extreme Evoboost",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vii",
        "power": null,
        "pp": 1,
        "type": "normal",
        "id": 702
    },
    "703": {
        "name": "Genesis Supernova",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": 185,
        "pp": 1,
        "type": "psychic",
        "id": 703
    },
    "704": {
        "name": "Shell Trap",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vii",
        "power": 150,
        "pp": 5,
        "type": "fire",
        "id": 704
    },
    "705": {
        "name": "Fleur Cannon",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-vii",
        "power": 130,
        "pp": 5,
        "type": "fairy",
        "id": 705
    },
    "706": {
        "name": "Psychic Fangs",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 85,
        "pp": 10,
        "type": "psychic",
        "id": 706
    },
    "707": {
        "name": "Stomping Tantrum",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 75,
        "pp": 10,
        "type": "ground",
        "id": 707
    },
    "708": {
        "name": "Shadow Bone",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 85,
        "pp": 10,
        "type": "ghost",
        "id": 708
    },
    "709": {
        "name": "Accelerock",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 40,
        "pp": 20,
        "type": "rock",
        "id": 709
    },
    "710": {
        "name": "Liquidation",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 85,
        "pp": 10,
        "type": "water",
        "id": 710
    },
    "711": {
        "name": "Prismatic Laser",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vii",
        "power": 160,
        "pp": 10,
        "type": "psychic",
        "id": 711
    },
    "712": {
        "name": "Spectral Thief",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 90,
        "pp": 10,
        "type": "ghost",
        "id": 712
    },
    "713": {
        "name": "Sunsteel Strike",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 100,
        "pp": 5,
        "type": "steel",
        "id": 713
    },
    "714": {
        "name": "Moongeist Beam",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vii",
        "power": 100,
        "pp": 5,
        "type": "ghost",
        "id": 714
    },
    "715": {
        "name": "Tearful Look",
        "accuracy": null,
        "class": "status",
        "generation": "generation-vii",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 715
    },
    "716": {
        "name": "Zing Zap",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 80,
        "pp": 10,
        "type": "electric",
        "id": 716
    },
    "717": {
        "name": "Nature’s Madness",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 10,
        "type": "fairy",
        "id": 717
    },
    "718": {
        "name": "Multi-Attack",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 120,
        "pp": 10,
        "type": "normal",
        "id": 718
    },
    "719": {
        "name": "10,000,000 Volt Thunderbolt",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": 195,
        "pp": 1,
        "type": "electric",
        "id": 719
    },
    "720": {
        "name": "Mind Blown",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vii",
        "power": 150,
        "pp": 5,
        "type": "fire",
        "id": 720
    },
    "721": {
        "name": "Plasma Fists",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 100,
        "pp": 15,
        "type": "electric",
        "id": 721
    },
    "722": {
        "name": "Photon Geyser",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vii",
        "power": 100,
        "pp": 5,
        "type": "psychic",
        "id": 722
    },
    "723": {
        "name": "Light That Burns the Sky",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": 200,
        "pp": 1,
        "type": "psychic",
        "id": 723
    },
    "724": {
        "name": "Searing Sunraze Smash",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": 200,
        "pp": 1,
        "type": "steel",
        "id": 724
    },
    "725": {
        "name": "Menacing Moonraze Maelstrom",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": 200,
        "pp": 1,
        "type": "ghost",
        "id": 725
    },
    "726": {
        "name": "Let’s Snuggle Forever",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": 190,
        "pp": 1,
        "type": "fairy",
        "id": 726
    },
    "727": {
        "name": "Splintered Stormshards",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": 190,
        "pp": 1,
        "type": "rock",
        "id": 727
    },
    "728": {
        "name": "Clangorous Soulblaze",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": 185,
        "pp": 1,
        "type": "dragon",
        "id": 728
    },
    "729": {
        "name": "Zippy Zap",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 80,
        "pp": 10,
        "type": "electric",
        "id": 729
    },
    "730": {
        "name": "Splishy Splash",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vii",
        "power": 90,
        "pp": 15,
        "type": "water",
        "id": 730
    },
    "731": {
        "name": "Floaty Fall",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-vii",
        "power": 90,
        "pp": 15,
        "type": "flying",
        "id": 731
    },
    "732": {
        "name": "Pika Papow",
        "accuracy": null,
        "class": "special",
        "generation": "generation-vii",
        "power": null,
        "pp": 20,
        "type": "electric",
        "id": 732
    },
    "733": {
        "name": "Bouncy Bubble",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vii",
        "power": 60,
        "pp": 20,
        "type": "water",
        "id": 733
    },
    "734": {
        "name": "Buzzy Buzz",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-vii",
        "power": 60,
        "pp": 20,
        "type": "electric",
        "id": 734
    },
    "735": {
        "name": "Sizzly Slide",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 60,
        "pp": 20,
        "type": "fire",
        "id": 735
    },
    "736": {
        "name": "Glitzy Glow",
        "accuracy": 95,
        "class": "special",
        "generation": "generation-vii",
        "power": 80,
        "pp": 15,
        "type": "psychic",
        "id": 736
    },
    "737": {
        "name": "Baddy Bad",
        "accuracy": 95,
        "class": "special",
        "generation": "generation-vii",
        "power": 80,
        "pp": 15,
        "type": "dark",
        "id": 737
    },
    "738": {
        "name": "Sappy Seed",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-vii",
        "power": 100,
        "pp": 10,
        "type": "grass",
        "id": 738
    },
    "739": {
        "name": "Freezy Frost",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-vii",
        "power": 100,
        "pp": 10,
        "type": "ice",
        "id": 739
    },
    "740": {
        "name": "Sparkly Swirl",
        "accuracy": 85,
        "class": "special",
        "generation": "generation-vii",
        "power": 120,
        "pp": 5,
        "type": "fairy",
        "id": 740
    },
    "741": {
        "name": "Veevee Volley",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-vii",
        "power": null,
        "pp": 20,
        "type": "normal",
        "id": 741
    },
    "742": {
        "name": "Double Iron Bash",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-vii",
        "power": 60,
        "pp": 5,
        "type": "steel",
        "id": 742
    },
    "743": {
        "name": "Max Guard",
        "accuracy": null,
        "class": "status",
        "generation": "generation-viii",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 743
    },
    "744": {
        "name": "Dynamax Cannon",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 100,
        "pp": 5,
        "type": "dragon",
        "id": 744
    },
    "745": {
        "name": "Snipe Shot",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 80,
        "pp": 15,
        "type": "water",
        "id": 745
    },
    "746": {
        "name": "Jaw Lock",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 80,
        "pp": 10,
        "type": "dark",
        "id": 746
    },
    "747": {
        "name": "Stuff Cheeks",
        "accuracy": null,
        "class": "status",
        "generation": "generation-viii",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 747
    },
    "748": {
        "name": "No Retreat",
        "accuracy": null,
        "class": "status",
        "generation": "generation-viii",
        "power": null,
        "pp": 5,
        "type": "fighting",
        "id": 748
    },
    "749": {
        "name": "Tar Shot",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-viii",
        "power": null,
        "pp": 15,
        "type": "rock",
        "id": 749
    },
    "750": {
        "name": "Magic Powder",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-viii",
        "power": null,
        "pp": 20,
        "type": "psychic",
        "id": 750
    },
    "751": {
        "name": "Dragon Darts",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 50,
        "pp": 10,
        "type": "dragon",
        "id": 751
    },
    "752": {
        "name": "Teatime",
        "accuracy": null,
        "class": "status",
        "generation": "generation-viii",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 752
    },
    "753": {
        "name": "Octolock",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-viii",
        "power": null,
        "pp": 15,
        "type": "fighting",
        "id": 753
    },
    "754": {
        "name": "Bolt Beak",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 85,
        "pp": 10,
        "type": "electric",
        "id": 754
    },
    "755": {
        "name": "Fishious Rend",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 85,
        "pp": 10,
        "type": "water",
        "id": 755
    },
    "756": {
        "name": "Court Change",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-viii",
        "power": null,
        "pp": 10,
        "type": "normal",
        "id": 756
    },
    "757": {
        "name": "Max Flare",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 100,
        "pp": 10,
        "type": "fire",
        "id": 757
    },
    "758": {
        "name": "Max Flutterby",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "bug",
        "id": 758
    },
    "759": {
        "name": "Max Lightning",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "electric",
        "id": 759
    },
    "760": {
        "name": "Max Strike",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "normal",
        "id": 760
    },
    "761": {
        "name": "Max Knuckle",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "fighting",
        "id": 761
    },
    "762": {
        "name": "Max Phantasm",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "ghost",
        "id": 762
    },
    "763": {
        "name": "Max Hailstorm",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "ice",
        "id": 763
    },
    "764": {
        "name": "Max Ooze",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "poison",
        "id": 764
    },
    "765": {
        "name": "Max Geyser",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "water",
        "id": 765
    },
    "766": {
        "name": "Max Airstream",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "flying",
        "id": 766
    },
    "767": {
        "name": "Max Starfall",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "fairy",
        "id": 767
    },
    "768": {
        "name": "Max Wyrmwind",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "dragon",
        "id": 768
    },
    "769": {
        "name": "Max Mindstorm",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "psychic",
        "id": 769
    },
    "770": {
        "name": "Max Rockfall",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "rock",
        "id": 770
    },
    "771": {
        "name": "Max Quake",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "ground",
        "id": 771
    },
    "772": {
        "name": "Max Darkness",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "dark",
        "id": 772
    },
    "773": {
        "name": "Max Overgrowth",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "grass",
        "id": 773
    },
    "774": {
        "name": "Max Steelspike",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 10,
        "pp": 10,
        "type": "steel",
        "id": 774
    },
    "775": {
        "name": "Clangorous Soul",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-viii",
        "power": null,
        "pp": 5,
        "type": "dragon",
        "id": 775
    },
    "776": {
        "name": "Body Press",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 80,
        "pp": 10,
        "type": "fighting",
        "id": 776
    },
    "777": {
        "name": "Decorate",
        "accuracy": null,
        "class": "status",
        "generation": "generation-viii",
        "power": null,
        "pp": 15,
        "type": "fairy",
        "id": 777
    },
    "778": {
        "name": "Drum Beating",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 80,
        "pp": 10,
        "type": "grass",
        "id": 778
    },
    "779": {
        "name": "Snap Trap",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 35,
        "pp": 15,
        "type": "grass",
        "id": 779
    },
    "780": {
        "name": "Pyro Ball",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-viii",
        "power": 120,
        "pp": 5,
        "type": "fire",
        "id": 780
    },
    "781": {
        "name": "Behemoth Blade",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 100,
        "pp": 5,
        "type": "steel",
        "id": 781
    },
    "782": {
        "name": "Behemoth Bash",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 100,
        "pp": 5,
        "type": "steel",
        "id": 782
    },
    "783": {
        "name": "Aura Wheel",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 110,
        "pp": 10,
        "type": "electric",
        "id": 783
    },
    "784": {
        "name": "Breaking Swipe",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 60,
        "pp": 15,
        "type": "dragon",
        "id": 784
    },
    "785": {
        "name": "Branch Poke",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 40,
        "pp": 40,
        "type": "grass",
        "id": 785
    },
    "786": {
        "name": "Overdrive",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 80,
        "pp": 10,
        "type": "electric",
        "id": 786
    },
    "787": {
        "name": "Apple Acid",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 80,
        "pp": 10,
        "type": "grass",
        "id": 787
    },
    "788": {
        "name": "Grav Apple",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 80,
        "pp": 10,
        "type": "grass",
        "id": 788
    },
    "789": {
        "name": "Spirit Break",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 75,
        "pp": 15,
        "type": "fairy",
        "id": 789
    },
    "790": {
        "name": "Strange Steam",
        "accuracy": 95,
        "class": "special",
        "generation": "generation-viii",
        "power": 90,
        "pp": 10,
        "type": "fairy",
        "id": 790
    },
    "791": {
        "name": "Life Dew",
        "accuracy": null,
        "class": "status",
        "generation": "generation-viii",
        "power": null,
        "pp": 10,
        "type": "water",
        "id": 791
    },
    "792": {
        "name": "Obstruct",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-viii",
        "power": null,
        "pp": 10,
        "type": "dark",
        "id": 792
    },
    "793": {
        "name": "False Surrender",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-viii",
        "power": 80,
        "pp": 10,
        "type": "dark",
        "id": 793
    },
    "794": {
        "name": "Meteor Assault",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 150,
        "pp": 5,
        "type": "fighting",
        "id": 794
    },
    "795": {
        "name": "Eternabeam",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-viii",
        "power": 160,
        "pp": 5,
        "type": "dragon",
        "id": 795
    },
    "796": {
        "name": "Steel Beam",
        "accuracy": 95,
        "class": "special",
        "generation": "generation-viii",
        "power": 140,
        "pp": 5,
        "type": "steel",
        "id": 796
    },
    "797": {
        "name": "Expanding Force",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 80,
        "pp": 10,
        "type": "psychic",
        "id": 797
    },
    "798": {
        "name": "Steel Roller",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 130,
        "pp": 5,
        "type": "steel",
        "id": 798
    },
    "799": {
        "name": "Scale Shot",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-viii",
        "power": 25,
        "pp": 20,
        "type": "dragon",
        "id": 799
    },
    "800": {
        "name": "Meteor Beam",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-viii",
        "power": 120,
        "pp": 10,
        "type": "rock",
        "id": 800
    },
    "801": {
        "name": "Shell Side Arm",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 90,
        "pp": 10,
        "type": "poison",
        "id": 801
    },
    "802": {
        "name": "Misty Explosion",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 100,
        "pp": 5,
        "type": "fairy",
        "id": 802
    },
    "803": {
        "name": "Grassy Glide",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 70,
        "pp": 20,
        "type": "grass",
        "id": 803
    },
    "804": {
        "name": "Rising Voltage",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 70,
        "pp": 20,
        "type": "electric",
        "id": 804
    },
    "805": {
        "name": "Terrain Pulse",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 50,
        "pp": 10,
        "type": "normal",
        "id": 805
    },
    "806": {
        "name": "Skitter Smack",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-viii",
        "power": 70,
        "pp": 10,
        "type": "bug",
        "id": 806
    },
    "807": {
        "name": "Burning Jealousy",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 70,
        "pp": 5,
        "type": "fire",
        "id": 807
    },
    "808": {
        "name": "Lash Out",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 75,
        "pp": 5,
        "type": "dark",
        "id": 808
    },
    "809": {
        "name": "Poltergeist",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-viii",
        "power": 110,
        "pp": 5,
        "type": "ghost",
        "id": 809
    },
    "810": {
        "name": "Corrosive Gas",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-viii",
        "power": null,
        "pp": 40,
        "type": "poison",
        "id": 810
    },
    "811": {
        "name": "Coaching",
        "accuracy": null,
        "class": "status",
        "generation": "generation-viii",
        "power": null,
        "pp": 10,
        "type": "fighting",
        "id": 811
    },
    "812": {
        "name": "Flip Turn",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 60,
        "pp": 20,
        "type": "water",
        "id": 812
    },
    "813": {
        "name": "Triple Axel",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-viii",
        "power": 20,
        "pp": 10,
        "type": "ice",
        "id": 813
    },
    "814": {
        "name": "Dual Wingbeat",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-viii",
        "power": 40,
        "pp": 10,
        "type": "flying",
        "id": 814
    },
    "815": {
        "name": "Scorching Sands",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 70,
        "pp": 10,
        "type": "ground",
        "id": 815
    },
    "816": {
        "name": "Jungle Healing",
        "accuracy": null,
        "class": "status",
        "generation": "generation-viii",
        "power": null,
        "pp": 10,
        "type": "grass",
        "id": 816
    },
    "817": {
        "name": "Wicked Blow",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 80,
        "pp": 5,
        "type": "dark",
        "id": 817
    },
    "818": {
        "name": "Surging Strikes",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 25,
        "pp": 5,
        "type": "water",
        "id": 818
    },
    "819": {
        "name": "Thunder Cage",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-viii",
        "power": 80,
        "pp": 15,
        "type": "electric",
        "id": 819
    },
    "820": {
        "name": "Dragon Energy",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 150,
        "pp": 5,
        "type": "dragon",
        "id": 820
    },
    "821": {
        "name": "Freezing Glare",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 90,
        "pp": 10,
        "type": "psychic",
        "id": 821
    },
    "822": {
        "name": "Fiery Wrath",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 90,
        "pp": 10,
        "type": "dark",
        "id": 822
    },
    "823": {
        "name": "Thunderous Kick",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 90,
        "pp": 10,
        "type": "fighting",
        "id": 823
    },
    "824": {
        "name": "Glacial Lance",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 130,
        "pp": 5,
        "type": "ice",
        "id": 824
    },
    "825": {
        "name": "Astral Barrage",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 120,
        "pp": 5,
        "type": "ghost",
        "id": 825
    },
    "826": {
        "name": "Eerie Spell",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 80,
        "pp": 5,
        "type": "psychic",
        "id": 826
    },
    "827": {
        "name": "Dire Claw",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 80,
        "pp": 15,
        "type": "poison",
        "id": 827
    },
    "828": {
        "name": "Psyshield Bash",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-viii",
        "power": 70,
        "pp": 10,
        "type": "psychic",
        "id": 828
    },
    "829": {
        "name": "Power Shift",
        "accuracy": null,
        "class": "status",
        "generation": "generation-viii",
        "power": 0,
        "pp": 10,
        "type": "normal",
        "id": 829
    },
    "830": {
        "name": "Stone Axe",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-viii",
        "power": 65,
        "pp": 15,
        "type": "rock",
        "id": 830
    },
    "831": {
        "name": "Springtide Storm",
        "accuracy": 80,
        "class": "special",
        "generation": "generation-viii",
        "power": 100,
        "pp": 5,
        "type": "fairy",
        "id": 831
    },
    "832": {
        "name": "Mystical Power",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-viii",
        "power": 70,
        "pp": 10,
        "type": "psychic",
        "id": 832
    },
    "833": {
        "name": "Raging Fury",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 120,
        "pp": 10,
        "type": "fire",
        "id": 833
    },
    "834": {
        "name": "Wave Crash",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 120,
        "pp": 10,
        "type": "water",
        "id": 834
    },
    "835": {
        "name": "Chloroblast",
        "accuracy": 95,
        "class": "special",
        "generation": "generation-viii",
        "power": 150,
        "pp": 5,
        "type": "grass",
        "id": 835
    },
    "836": {
        "name": "Mountain Gale",
        "accuracy": 85,
        "class": "physical",
        "generation": "generation-viii",
        "power": 100,
        "pp": 10,
        "pastGenPP": {
        "G8": 5
        },
        "type": "ice",
        "id": 836
    },
    "837": {
        "name": "Victory Dance",
        "accuracy": null,
        "class": "status",
        "generation": "generation-viii",
        "power": 0,
        "pp": 10,
        "type": "fighting",
        "id": 837
    },
    "838": {
        "name": "Headlong Rush",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 120,
        "pp": 5,
        "type": "ground",
        "id": 838
    },
    "839": {
        "name": "Barb Barrage",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 60,
        "pp": 10,
        "pastGenPP": {
        "G8": 15
        },
        "type": "poison",
        "id": 839
    },
    "840": {
        "name": "Esper Wing",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 80,
        "pp": 10,
        "type": "psychic",
        "id": 840
    },
    "841": {
        "name": "Bitter Malice",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 75,
        "pp": 10,
        "pastGenPP": {
        "G8": 15
        },
        "type": "ghost",
        "id": 841
    },
    "842": {
        "name": "Shelter",
        "accuracy": null,
        "class": "status",
        "generation": "generation-viii",
        "power": 0,
        "pp": 10,
        "type": "steel",
        "id": 842
    },
    "843": {
        "name": "Triple Arrows",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-viii",
        "power": 90,
        "pp": 10,
        "pastGenPP": {
        "G8": 5
        },
        "type": "fighting",
        "id": 843
    },
    "844": {
        "name": "Infernal Parade",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-viii",
        "power": 60,
        "pp": 15,
        "type": "ghost",
        "id": 844
    },
    "845": {
        "name": "Ceaseless Edge",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-viii",
        "power": 65,
        "pp": 15,
        "type": "dark",
        "id": 845
    },
    "846": {
        "name": "Bleakwind Storm",
        "accuracy": 80,
        "class": "special",
        "generation": "generation-viii",
        "power": 100,
        "pp": 10,
        "pastGenPP": {
        "G8": 5
        },
        "type": "flying",
        "id": 846
    },
    "847": {
        "name": "Wildbolt Storm",
        "accuracy": 80,
        "class": "special",
        "generation": "generation-viii",
        "power": 100,
        "pp": 10,
        "pastGenPP": {
        "G8": 5
        },
        "type": "electric",
        "id": 847
    },
    "848": {
        "name": "Sandsear Storm",
        "accuracy": 80,
        "class": "special",
        "generation": "generation-viii",
        "power": 100,
        "pp": 10,
        "pastGenPP": {
        "G8": 5
        },
        "type": "ground",
        "id": 848
    },
    "849": {
        "name": "Lunar Blessing",
        "accuracy": null,
        "class": "status",
        "generation": "generation-viii",
        "power": 0,
        "pp": 5,
        "pastGenPP": {
        "G8": 10
        },
        "type": "psychic",
        "id": 849
    },
    "850": {
        "name": "Take Heart",
        "accuracy": null,
        "class": "status",
        "generation": "generation-viii",
        "power": 0,
        "pp": 10,
        "type": "psychic",
        "id": 850
    },
    "851": {
        "name": "Tera Blast",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 80,
        "pp": 10,
        "type": "normal",
        "id": 851
    },
    "852": {
        "name": "Silk Trap",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ix",
        "power": 0,
        "pp": 10,
        "type": "bug",
        "id": 852
    },
    "853": {
        "name": "Axe Kick",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-ix",
        "power": 120,
        "pp": 10,
        "type": "fighting",
        "id": 853
    },
    "854": {
        "name": "Last Respects",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 50,
        "pp": 10,
        "type": "ghost",
        "id": 854
    },
    "855": {
        "name": "Lumina Crash",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 80,
        "pp": 10,
        "type": "psychic",
        "id": 855
    },
    "856": {
        "name": "Order Up",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 80,
        "pp": 10,
        "type": "dragon",
        "id": 856
    },
    "857": {
        "name": "Jet Punch",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 60,
        "pp": 15,
        "type": "water",
        "id": 857
    },
    "858": {
        "name": "Spicy Extract",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ix",
        "power": 0,
        "pp": 15,
        "type": "grass",
        "id": 858
    },
    "859": {
        "name": "Spin Out",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 100,
        "pp": 5,
        "type": "steel",
        "id": 859
    },
    "860": {
        "name": "Population Bomb",
        "accuracy": 90,
        "class": "physical",
        "generation": "generation-ix",
        "power": 20,
        "pp": 10,
        "type": "normal",
        "id": 860
    },
    "861": {
        "name": "Ice Spinner",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 80,
        "pp": 15,
        "type": "ice",
        "id": 861
    },
    "862": {
        "name": "Glaive Rush",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 120,
        "pp": 5,
        "type": "dragon",
        "id": 862
    },
    "863": {
        "name": "Revival Blessing",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ix",
        "power": 0,
        "pp": 1,
        "type": "normal",
        "id": 863
    },
    "864": {
        "name": "Salt Cure",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 40,
        "pp": 15,
        "type": "rock",
        "id": 864
    },
    "865": {
        "name": "Triple Dive",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-ix",
        "power": 30,
        "pp": 10,
        "type": "water",
        "id": 865
    },
    "866": {
        "name": "Mortal Spin",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 30,
        "pp": 15,
        "type": "poison",
        "id": 866
    },
    "867": {
        "name": "Doodle",
        "accuracy": 100,
        "class": "status",
        "generation": "generation-ix",
        "power": 0,
        "pp": 10,
        "type": "normal",
        "id": 867
    },
    "868": {
        "name": "Fillet Away",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ix",
        "power": 0,
        "pp": 10,
        "type": "normal",
        "id": 868
    },
    "869": {
        "name": "Kowtow Cleave",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-ix",
        "power": 85,
        "pp": 10,
        "type": "dark",
        "id": 869
    },
    "870": {
        "name": "Flower Trick",
        "accuracy": null,
        "class": "physical",
        "generation": "generation-ix",
        "power": 70,
        "pp": 10,
        "type": "grass",
        "id": 870
    },
    "871": {
        "name": "Torch Song",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 80,
        "pp": 10,
        "type": "fire",
        "id": 871
    },
    "872": {
        "name": "Aqua Step",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 80,
        "pp": 10,
        "type": "water",
        "id": 872
    },
    "873": {
        "name": "Raging Bull",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 90,
        "pp": 10,
        "type": "normal",
        "id": 873
    },
    "874": {
        "name": "Make It Rain",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 120,
        "pp": 5,
        "type": "steel",
        "id": 874
    },
    "875": {
        "name": "Psyblade",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 80,
        "pp": 15,
        "type": "psychic",
        "id": 875
    },
    "876": {
        "name": "Hydro Steam",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 80,
        "pp": 15,
        "type": "water",
        "id": 876
    },
    "877": {
        "name": "Ruination",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-ix",
        "power": 1,
        "pp": 10,
        "type": "dark",
        "id": 877
    },
    "878": {
        "name": "Collision Course",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 100,
        "pp": 5,
        "type": "fighting",
        "id": 878
    },
    "879": {
        "name": "Electro Drift",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 100,
        "pp": 5,
        "type": "electric",
        "id": 879
    },
    "880": {
        "name": "Shed Tail",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ix",
        "power": 0,
        "pp": 10,
        "type": "normal",
        "id": 880
    },
    "881": {
        "name": "Chilly Reception",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ix",
        "power": 0,
        "pp": 10,
        "type": "ice",
        "id": 881
    },
    "882": {
        "name": "Tidy Up",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ix",
        "power": 0,
        "pp": 10,
        "type": "normal",
        "id": 882
    },
    "883": {
        "name": "Snowscape",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ix",
        "power": 0,
        "pp": 10,
        "type": "ice",
        "id": 883
    },
    "884": {
        "name": "Pounce",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 50,
        "pp": 20,
        "type": "bug",
        "id": 884
    },
    "885": {
        "name": "Trailblaze",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 50,
        "pp": 20,
        "type": "grass",
        "id": 885
    },
    "886": {
        "name": "Chilling Water",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 50,
        "pp": 20,
        "type": "water",
        "id": 886
    },
    "887": {
        "name": "Hyper Drill",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 100,
        "pp": 5,
        "type": "normal",
        "id": 887
    },
    "888": {
        "name": "Twin Beam",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 40,
        "pp": 10,
        "type": "psychic",
        "id": 888
    },
    "889": {
        "name": "Rage Fist",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 50,
        "pp": 10,
        "type": "ghost",
        "id": 889
    },
    "890": {
        "name": "Armor Cannon",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 120,
        "pp": 5,
        "type": "fire",
        "id": 890
    },
    "891": {
        "name": "Bitter Blade",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 90,
        "pp": 10,
        "type": "fire",
        "id": 891
    },
    "892": {
        "name": "Double Shock",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 120,
        "pp": 5,
        "type": "electric",
        "id": 892
    },
    "893": {
        "name": "Gigaton Hammer",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 160,
        "pp": 5,
        "type": "steel",
        "id": 893
    },
    "894": {
        "name": "Comeuppance",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 1,
        "pp": 10,
        "type": "dark",
        "id": 894
    },
    "895": {
        "name": "Aqua Cutter",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 70,
        "pp": 20,
        "type": "water",
        "id": 895
    },
    "896": {
        "name": "Blazing Torque",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 80,
        "pp": 10,
        "type": "fire",
        "id": 896
    },
    "897": {
        "name": "Wicked Torque",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 80,
        "pp": 10,
        "type": "dark",
        "id": 897
    },
    "898": {
        "name": "Noxious Torque",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 100,
        "pp": 10,
        "type": "poison",
        "id": 898
    },
    "899": {
        "name": "Combat Torque",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 100,
        "pp": 10,
        "type": "fighting",
        "id": 899
    },
    "900": {
        "name": "Magical Torque",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 100,
        "pp": 10,
        "type": "fairy",
        "id": 900
    },
    "901": {
        "name": "Blood Moon",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 140,
        "pp": 5,
        "type": "normal",
        "id": 901
    },
    "902": {
        "name": "Matcha Gotcha",
        "accuracy": 90,
        "class": "special",
        "generation": "generation-ix",
        "power": 80,
        "pp": 15,
        "type": "grass",
        "id": 902
    },
    "903": {
        "name": "Syrup Bomb",
        "accuracy": 85,
        "class": "special",
        "generation": "generation-ix",
        "power": 60,
        "pp": 10,
        "type": "grass",
        "id": 903
    },
    "904": {
        "name": "Ivy Cudgel",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 100,
        "pp": 10,
        "type": "grass",
        "id": 904
    },
    "905": {
        "name": "Electro Shot",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 130,
        "pp": 10,
        "type": "electric",
        "id": 905
    },
    "906": {
        "name": "Tera Starstorm",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 120,
        "pp": 5,
        "type": "normal",
        "id": 906
    },
    "907": {
        "name": "Fickle Beam",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 80,
        "pp": 5,
        "type": "dragon",
        "id": 907
    },
    "908": {
        "name": "Burning Bulwark",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ix",
        "power": null,
        "pp": 10,
        "type": "fire",
        "id": 908
    },
    "909": {
        "name": "Thunderclap",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 70,
        "pp": 5,
        "type": "electric",
        "id": 909
    },
    "910": {
        "name": "Mighty Cleave",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 95,
        "pp": 5,
        "type": "rock",
        "id": 910
    },
    "911": {
        "name": "Tachyon Cutter",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 50,
        "pp": 10,
        "type": "steel",
        "id": 911
    },
    "912": {
        "name": "Hard Press",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": null,
        "pp": 10,
        "type": "steel",
        "id": 912
    },
    "913": {
        "name": "Dragon Cheer",
        "accuracy": null,
        "class": "status",
        "generation": "generation-ix",
        "power": null,
        "pp": 15,
        "type": "dragon",
        "id": 913
    },
    "914": {
        "name": "Alluring Voice",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 80,
        "pp": 10,
        "type": "fairy",
        "id": 914
    },
    "915": {
        "name": "Temper Flare",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 75,
        "pp": 10,
        "type": "fire",
        "id": 915
    },
    "916": {
        "name": "Supercell Slam",
        "accuracy": 95,
        "class": "physical",
        "generation": "generation-ix",
        "power": 100,
        "pp": 15,
        "type": "electric",
        "id": 916
    },
    "917": {
        "name": "Psychic Noise",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 75,
        "pp": 15,
        "type": "electric",
        "id": 917
    },
    "918": {
        "name": "Upper Hand",
        "accuracy": 100,
        "class": "physical",
        "generation": "generation-ix",
        "power": 65,
        "pp": 15,
        "type": "fighting",
        "id": 918
    },
    "919": {
        "name": "Malignant Chain",
        "accuracy": 100,
        "class": "special",
        "generation": "generation-ix",
        "power": 100,
        "pp": 5,
        "type": "poison",
        "id": 919
    }
}

export const MOVE_DATA: Move[] = Object.values(Moves);
