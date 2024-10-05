import { range } from 'lodash'
import { NationalDex } from 'pokemon-species-data'
import {
  CapPikachus,
  Gen89RegionalForms,
  HisuianForms,
  LegendsArceusExcludedForms,
  PaldeanForms,
  RegionalForms,
  TransferRestrictions,
} from '../types/TransferRestrictions'
import {
  COMPLETE,
  DAWN_WINGS,
  DUSK_MANE,
  EXCLAMATION,
  FAIRY,
  FAN,
  FROST,
  HEAT,
  MOW,
  ORIGIN,
  QUESTION,
  RESOLUTE,
  SKY,
  SPIKY_EAR,
  TEN_PCT,
  TEN_PCT_PC,
  THERIAN,
  ULTRA,
  UNBOUND,
  WASH,
} from './Formes'

export const GEN1_TRANSFER_RESTRICTIONS: TransferRestrictions = {
  maxDexNum: NationalDex.Mew,
  excludedForms: { ...RegionalForms, ...CapPikachus },
}

export const GEN2_TRANSFER_RESTRICTIONS: TransferRestrictions = {
  maxDexNum: NationalDex.Celebi,
  excludedForms: {
    ...RegionalForms,
    ...CapPikachus,
    [NationalDex.Pichu]: [SPIKY_EAR],
    [NationalDex.Unown]: [EXCLAMATION, QUESTION],
  },
}

export const GEN3_TRANSFER_RESTRICTIONS: TransferRestrictions = {
  maxDexNum: NationalDex.Deoxys,
  excludedForms: {
    ...RegionalForms,
    ...CapPikachus,
    [NationalDex.Pichu]: [SPIKY_EAR],
  },
}

export const DP_TRANSFER_RESTRICTIONS: TransferRestrictions = {
  maxDexNum: NationalDex.Arceus,
  excludedForms: {
    ...RegionalForms,
    ...CapPikachus,
    [NationalDex.Pichu]: [SPIKY_EAR],
    [NationalDex.Rotom]: [HEAT, WASH, FROST, FAN, MOW],
    [NationalDex.Dialga]: [ORIGIN],
    [NationalDex.Palkia]: [ORIGIN],
    [NationalDex.Giratina]: [ORIGIN],
    [NationalDex.Shaymin]: [SKY],
    [NationalDex.Arceus]: [FAIRY],
  },
}

export const PT_TRANSFER_RESTRICTIONS: TransferRestrictions = {
  maxDexNum: NationalDex.Arceus,
  excludedForms: {
    ...RegionalForms,
    ...CapPikachus,
    [NationalDex.Pichu]: [SPIKY_EAR],
    [NationalDex.Dialga]: [ORIGIN],
    [NationalDex.Palkia]: [ORIGIN],
    [NationalDex.Arceus]: [FAIRY],
  },
}

export const HGSS_TRANSFER_RESTRICTIONS: TransferRestrictions = {
  maxDexNum: NationalDex.Arceus,
  excludedForms: {
    ...RegionalForms,
    ...CapPikachus,
    [NationalDex.Dialga]: [ORIGIN],
    [NationalDex.Palkia]: [ORIGIN],
    [NationalDex.Arceus]: [FAIRY],
  },
}

export const BW_TRANSFER_RESTRICTIONS: TransferRestrictions = {
  maxDexNum: NationalDex.Genesect,
  excludedForms: {
    ...RegionalForms,
    ...CapPikachus,
    [NationalDex.Pichu]: [SPIKY_EAR],
    [NationalDex.Dialga]: [ORIGIN],
    [NationalDex.Palkia]: [ORIGIN],
    [NationalDex.Arceus]: [FAIRY],
    [NationalDex.Tornadus]: [THERIAN],
    [NationalDex.Thundurus]: [THERIAN],
    [NationalDex.Landorus]: [THERIAN],
    [NationalDex.Keldeo]: [RESOLUTE],
  },
}

export const BW2_TRANSFER_RESTRICTIONS: TransferRestrictions = {
  maxDexNum: NationalDex.Genesect,
  excludedForms: {
    ...RegionalForms,
    ...CapPikachus,
    [NationalDex.Pichu]: [SPIKY_EAR],
    [NationalDex.Dialga]: [ORIGIN],
    [NationalDex.Palkia]: [ORIGIN],
    [NationalDex.Arceus]: [FAIRY],
  },
}

export const XY_TRANSFER_RESTRICTIONS: TransferRestrictions = {
  maxDexNum: NationalDex.Volcanion,
  excludedForms: {
    ...RegionalForms,
    ...CapPikachus,
    [NationalDex.Pichu]: [SPIKY_EAR],
    [NationalDex.Dialga]: [ORIGIN],
    [NationalDex.Palkia]: [ORIGIN],
    [NationalDex.Zygarde]: [TEN_PCT, TEN_PCT_PC, COMPLETE],
    [NationalDex.Hoopa]: [UNBOUND],
  },
}

export const ORAS_TRANSFER_RESTRICTIONS: TransferRestrictions = {
  maxDexNum: NationalDex.Volcanion,
  excludedForms: {
    ...RegionalForms,
    ...CapPikachus,
    [NationalDex.Pichu]: [SPIKY_EAR],
    [NationalDex.Dialga]: [ORIGIN],
    [NationalDex.Palkia]: [ORIGIN],
    [NationalDex.Zygarde]: [TEN_PCT, TEN_PCT_PC, COMPLETE],
  },
}

export const SM_TRANSFER_RESTRICTIONS: TransferRestrictions = {
  maxDexNum: NationalDex.Marshadow,
  excludedForms: {
    ...Gen89RegionalForms,
    [NationalDex.Pichu]: [SPIKY_EAR],
    [NationalDex.Dialga]: [ORIGIN],
    [NationalDex.Palkia]: [ORIGIN],
    [NationalDex.Necrozma]: [DUSK_MANE, DAWN_WINGS, ULTRA],
  },
}

export const USUM_TRANSFER_RESTRICTIONS: TransferRestrictions = {
  maxDexNum: NationalDex.Zeraora,
  excludedForms: {
    ...Gen89RegionalForms,
    [NationalDex.Pichu]: [SPIKY_EAR],
    [NationalDex.Dialga]: [ORIGIN],
    [NationalDex.Palkia]: [ORIGIN],
  },
}

export const LGPE_TRANSFER_RESTRICTIONS: TransferRestrictions = {
  transferableDexNums: [
    ...range(NationalDex.Bulbasaur, NationalDex.Chikorita),
    NationalDex.Meltan,
    NationalDex.Melmetal,
  ],
  excludedForms: Gen89RegionalForms,
}

export const SWSH_TRANSFER_RESTRICTIONS: TransferRestrictions = {
  transferableDexNums: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
    39, 40, 41, 42, 43, 44, 45, 50, 51, 52, 53, 54, 55, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
    72, 73, 77, 78, 79, 80, 81, 82, 83, 90, 91, 92, 93, 94, 95, 98, 99, 102, 103, 104, 105, 106,
    107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125,
    126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
    145, 146, 147, 148, 149, 150, 151, 163, 164, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178,
    182, 183, 184, 185, 186, 194, 195, 196, 197, 199, 202, 206, 208, 211, 212, 213, 214, 215, 220,
    221, 222, 223, 224, 225, 226, 227, 230, 233, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245,
    246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 263, 264, 270, 271,
    272, 273, 274, 275, 278, 279, 280, 281, 282, 290, 291, 292, 293, 294, 295, 298, 302, 303, 304,
    305, 306, 309, 310, 315, 318, 319, 320, 321, 324, 328, 329, 330, 333, 334, 337, 338, 339, 340,
    341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 355, 356, 359, 360, 361, 362, 363, 364, 365,
    369, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 403, 404, 405,
    406, 407, 415, 416, 420, 421, 422, 423, 425, 426, 427, 428, 434, 435, 436, 437, 438, 439, 440,
    442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 458, 459, 460, 461, 462, 463,
    464, 465, 466, 467, 468, 470, 471, 473, 474, 475, 477, 478, 479, 480, 481, 482, 483, 484, 485,
    487, 488, 494, 506, 507, 508, 509, 510, 517, 518, 519, 520, 521, 524, 525, 526, 527, 528, 529,
    530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 543, 544, 545, 546, 547, 548, 549, 550, 551,
    552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570,
    571, 572, 573, 574, 575, 576, 577, 578, 579, 582, 583, 584, 587, 588, 589, 590, 591, 592, 593,
    595, 596, 597, 598, 599, 600, 601, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616,
    617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635,
    636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 649, 659, 660, 661, 662, 663, 674,
    675, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694,
    695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713,
    714, 715, 716, 717, 718, 719, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 736, 737, 738,
    742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760,
    761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 776, 777, 778, 780, 781, 782,
    783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801,
    802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820,
    821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839,
    840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858,
    859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877,
    878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896,
    897, 898,
  ],
  excludedForms: {
    ...HisuianForms,
    ...PaldeanForms,
    [NationalDex.Pichu]: [SPIKY_EAR],
    [NationalDex.Dialga]: [ORIGIN],
    [NationalDex.Palkia]: [ORIGIN],
  },
}

export const SV_TRANSFER_RESTRICTIONS: TransferRestrictions = {
  transferableDexNums: [
    25, 26, 39, 40, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 79, 80, 81, 82, 88, 89, 90, 91,
    92, 93, 94, 96, 97, 100, 101, 113, 123, 128, 129, 130, 132, 133, 134, 135, 136, 147, 148, 149,
    172, 174, 179, 180, 181, 183, 184, 185, 187, 188, 189, 191, 192, 194, 196, 197, 198, 199, 200,
    203, 204, 205, 206, 211, 212, 214, 215, 216, 217, 225, 228, 229, 231, 232, 234, 242, 246, 247,
    248, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 296, 297, 298, 302, 307, 308,
    316, 317, 322, 323, 324, 325, 326, 331, 332, 333, 334, 335, 336, 339, 340, 353, 354, 357, 361,
    362, 370, 371, 372, 373, 396, 397, 398, 401, 402, 403, 404, 405, 415, 416, 417, 418, 419, 422,
    423, 425, 426, 429, 430, 434, 435, 436, 437, 438, 440, 442, 443, 444, 445, 447, 448, 449, 450,
    456, 457, 459, 460, 461, 462, 470, 471, 475, 478, 479, 548, 549, 550, 551, 552, 553, 570, 571,
    574, 574, 576, 585, 586, 590, 591, 594, 602, 603, 604, 610, 611, 612, 613, 614, 615, 624, 625,
    627, 628, 633, 634, 635, 636, 637, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672,
    673, 690, 691, 692, 693, 700, 701, 702, 704, 705, 706, 707, 712, 713, 714, 715, 734, 735, 739,
    740, 741, 744, 745, 747, 748, 749, 750, 753, 754, 757, 758, 761, 762, 763, 765, 766, 769, 770,
    775, 778, 779, 819, 820, 821, 822, 823, 833, 834, 837, 838, 839, 840, 841, 842, 843, 844, 846,
    847, 848, 849, 854, 855, 856, 857, 858, 859, 860, 861, 870, 871, 872, 873, 874, 875, 876, 878,
    879, 885, 886, 887, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920,
    921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939,
    940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958,
    959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977,
    978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996,
    997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 4, 5, 6, 144,
    145, 146, 150, 151, 155, 156, 157, 195, 382, 383, 384, 480, 481, 482, 483, 484, 485, 487, 488,
    493, 501, 502, 503, 641, 642, 645, 648, 650, 651, 652, 653, 654, 655, 656, 657, 658, 703, 719,
    720, 721, 722, 723, 724, 801, 810, 811, 812, 813, 814, 815, 816, 817, 818, 863, 888, 889, 890,
    891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 23, 24, 27, 28, 35,
    36, 37, 38, 60, 61, 62, 69, 70, 71, 74, 75, 76, 109, 110, 143, 161, 162, 163, 164, 173, 190,
    193, 207, 218, 219, 220, 221, 261, 262, 270, 271, 272, 273, 274, 275, 299, 341, 313, 314, 342,
    349, 350, 355, 356, 358, 387, 388, 389, 390, 391, 392, 393, 394, 395, 424, 433, 446, 469, 472,
    473, 477, 492, 532, 533, 534, 540, 541, 542, 580, 581, 607, 608, 609, 619, 620, 629, 630, 708,
    709, 736, 737, 738, 742, 742, 782, 783, 784, 845, 1011, 1012, 1013, 1014, 1015, 1016, 1017,
    1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1, 2, 3, 7, 8, 9, 43, 44, 45, 72, 73, 84, 85,
    86, 87, 102, 103, 106, 107, 111, 112, 116, 117, 125, 126, 131, 137, 152, 153, 154, 158, 159,
    160, 170, 171, 182, 209, 210, 227, 230, 233, 235, 236, 237, 239, 240, 243, 244, 245, 249, 250,
    252, 253, 254, 255, 256, 257, 258, 259, 260, 311, 312, 328, 329, 330, 374, 375, 376, 377, 378,
    379, 380, 381, 386, 408, 409, 410, 411, 464, 466, 467, 474, 486, 495, 496, 497, 498, 499, 500,
    522, 523, 529, 530, 546, 547, 559, 560, 572, 573, 577, 578, 579, 595, 596, 622, 623, 638, 639,
    640, 643, 644, 646, 647, 677, 678, 686, 687, 725, 726, 727, 728, 729, 730, 731, 732, 733, 751,
    752, 764, 774, 789, 790, 791, 792, 800, 868, 869, 884,
  ],
  excludedForms: {
    [NationalDex.Pichu]: [SPIKY_EAR],
  },
}

export const LA_TRANSFER_RESTRICTIONS: TransferRestrictions = {
  transferableDexNums: [
    25, 26, 35, 36, 37, 38, 41, 42, 46, 47, 54, 55, 58, 59, 63, 64, 65, 66, 67, 68, 72, 73, 74, 75,
    76, 77, 78, 81, 82, 92, 93, 94, 95, 100, 101, 108, 111, 112, 113, 114, 122, 123, 125, 126, 129,
    130, 133, 134, 135, 136, 137, 143, 155, 156, 157, 169, 172, 173, 175, 176, 185, 190, 193, 196,
    197, 198, 200, 201, 207, 208, 211, 212, 214, 215, 216, 217, 220, 221, 223, 224, 226, 233, 234,
    239, 240, 242, 265, 266, 267, 268, 269, 280, 281, 282, 299, 339, 340, 315, 355, 356, 358, 361,
    362, 363, 364, 365, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401,
    402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420,
    421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439,
    440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458,
    459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477,
    478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 501, 502, 503,
    548, 549, 550, 570, 571, 627, 628, 641, 642, 645, 700, 704, 705, 706, 712, 713, 722, 723, 724,
    899, 900, 901, 902, 903, 904, 905,
  ],
  excludedForms: LegendsArceusExcludedForms,
}
