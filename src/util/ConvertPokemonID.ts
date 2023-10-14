const svToNatMap: { [key: number]: number } = {
  917: 982,
  918: 917,
  919: 918,
  920: 919,
  921: 920,
  922: 953,
  923: 954,
  924: 971,
  925: 972,
  926: 955,
  927: 956,
  928: 981,
  929: 960,
  930: 961,
  931: 977,
  932: 976,
  933: 963,
  934: 964,
  935: 928,
  936: 929,
  937: 930,
  938: 951,
  939: 952,
  940: 938,
  941: 939,
  942: 965,
  943: 966,
  944: 968,
  945: 924,
  946: 925,
  947: 974,
  948: 975,
  949: 996,
  950: 997,
  951: 998,
  952: 978,
  953: 967,
  954: 921,
  955: 922,
  956: 923,
  957: 940,
  958: 941,
  959: 962,
  960: 931,
  961: 973,
  962: 950,
  963: 932,
  964: 933,
  965: 934,
  966: 969,
  967: 970,
  968: 944,
  969: 945,
  970: 926,
  971: 927,
  972: 942,
  973: 943,
  974: 946,
  975: 947,
  976: 999,
  977: 1000,
  978: 984,
  979: 986,
  980: 1009,
  981: 989,
  982: 985,
  983: 987,
  984: 988,
  985: 1005,
  986: 990,
  987: 1010,
  988: 994,
  989: 992,
  990: 993,
  991: 995,
  992: 991,
  993: 1006,
  994: 1003,
  995: 1002,
  996: 1001,
  997: 1004,
  998: 1007,
  999: 1008,
  1000: 957,
  1001: 958,
  1002: 959,
  1003: 935,
  1004: 936,
  1005: 937,
  1006: 948,
  1007: 949,
  1008: 983,
  1009: 980,
  1010: 979,
  1011: 1017,
  1012: 1011,
  1013: 1012,
}

const natToSVMap: { [key: number]: number } = {
  917: 918,
  918: 919,
  919: 920,
  920: 921,
  921: 954,
  922: 955,
  923: 956,
  924: 945,
  925: 946,
  926: 970,
  927: 971,
  928: 935,
  929: 936,
  930: 937,
  931: 960,
  932: 963,
  933: 964,
  934: 965,
  935: 1003,
  936: 1004,
  937: 1005,
  938: 940,
  939: 941,
  940: 957,
  941: 958,
  942: 972,
  943: 973,
  944: 968,
  945: 969,
  946: 974,
  947: 975,
  948: 1006,
  949: 1007,
  950: 962,
  951: 938,
  952: 939,
  953: 922,
  954: 923,
  955: 926,
  956: 927,
  957: 1000,
  958: 1001,
  959: 1002,
  960: 929,
  961: 930,
  962: 959,
  963: 933,
  964: 934,
  965: 942,
  966: 943,
  967: 953,
  968: 944,
  969: 966,
  970: 967,
  971: 924,
  972: 925,
  973: 961,
  974: 947,
  975: 948,
  976: 932,
  977: 931,
  978: 952,
  979: 1010,
  980: 1009,
  981: 928,
  982: 917,
  983: 1008,
  984: 978,
  985: 982,
  986: 979,
  987: 983,
  988: 984,
  989: 981,
  990: 986,
  991: 992,
  992: 989,
  993: 990,
  994: 988,
  995: 991,
  996: 949,
  997: 950,
  998: 951,
  999: 976,
  1000: 977,
  1001: 996,
  1002: 995,
  1003: 994,
  1004: 997,
  1005: 985,
  1006: 993,
  1007: 998,
  1008: 999,
  1009: 980,
  1010: 979,
  1017: 1011,
  1011: 1012,
  1012: 1013,
}

export const svToNatDex = (svNum: number) => {
  if (svNum in svToNatMap) {
    return svToNatMap[svNum]
  }
  return svNum
}

export const natDexToSV = (dexNum: number) => {
  if (dexNum in natToSVMap) {
    return natToSVMap[dexNum]
  }
  return dexNum
}

export const gen3IDs = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
  75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
  119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137,
  138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156,
  157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175,
  176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194,
  195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213,
  214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232,
  233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 252, 253, 254, 255, 256,
  257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275,
  290, 291, 292, 276, 277, 285, 286, 327, 278, 279, 283, 284, 320, 321, 300, 301, 352, 343, 344,
  299, 324, 302, 339, 340, 370, 341, 342, 349, 350, 318, 319, 328, 329, 330, 296, 297, 309, 310,
  322, 323, 363, 364, 365, 331, 332, 361, 362, 337, 338, 298, 325, 326, 311, 312, 303, 307, 308,
  333, 334, 360, 355, 356, 315, 287, 288, 289, 316, 317, 357, 293, 294, 295, 366, 367, 368, 359,
  353, 354, 336, 335, 369, 304, 305, 306, 351, 313, 314, 345, 346, 347, 348, 280, 281, 282, 371,
  372, 373, 374, 375, 376, 377, 378, 379, 382, 383, 384, 380, 381, 385, 386, 358,
]

export function gen3ToNational(value: number) {
  return value < gen3IDs.length ? gen3IDs[value] : 0
}

export function nationalToGen3(value: number) {
  return gen3IDs.indexOf(value) ?? 0
}

export const gen1IDToNatDex = [
  -1, 112, 115, 32, 35, 21, 100, 34, 80, 2, 103, 108, 102, 88, 94, 29, 31, 104, 111, 131, 59, 151,
  130, 90, 72, 92, 123, 120, 9, 127, 114, -1, -1, 58, 95, 22, 16, 79, 64, 75, 113, 67, 122, 106,
  107, 24, 47, 54, 96, 76, -1, 126, -1, 125, 82, 109, -1, 56, 86, 50, 128, -1, -1, -1, 83, 48, 149,
  -1, -1, -1, 84, 60, 124, 146, 144, 145, 132, 52, 98, -1, -1, -1, 37, 38, 25, 26, -1, -1, 147, 148,
  140, 141, 116, 117, -1, -1, 27, 28, 138, 139, 39, 40, 133, 136, 135, 134, 66, 41, 23, 46, 61, 62,
  13, 14, 15, -1, 85, 57, 51, 49, 87, -1, -1, 10, 11, 12, 68, -1, 55, 97, 42, 150, 143, 129, -1, -1,
  89, -1, 99, 91, -1, 101, 36, 110, 53, 105, -1, 93, 63, 65, 17, 18, 121, 1, 3, 73, -1, 118, 119,
  -1, -1, -1, -1, 77, 78, 19, 20, 33, 30, 74, 137, 142, -1, 81, -1, -1, 4, 7, 5, 8, 6, -1, -1, -1,
  -1, 43, 44, 45, 69, 70, 71,
]

export const natDexToGen1ID = [
  -1, 153, 9, 154, 176, 178, 180, 177, 179, 28, 123, 124, 125, 112, 113, 114, 36, 150, 151, 165,
  166, 5, 35, 108, 45, 84, 85, 96, 97, 15, 168, 16, 3, 167, 7, 4, 142, 82, 83, 100, 101, 107, 130,
  185, 186, 187, 109, 46, 65, 119, 59, 118, 77, 144, 47, 128, 57, 117, 33, 20, 71, 110, 111, 148,
  38, 149, 106, 41, 126, 188, 189, 190, 24, 155, 169, 39, 49, 163, 164, 37, 8, 173, 54, 64, 70, 116,
  58, 120, 13, 136, 23, 139, 25, 147, 14, 34, 48, 129, 78, 138, 6, 141, 12, 10, 17, 145, 43, 44, 11,
  55, 143, 18, 1, 40, 30, 2, 92, 93, 157, 158, 27, 152, 42, 26, 72, 53, 51, 29, 60, 133, 22, 19, 76,
  102, 105, 104, 103, 170, 98, 99, 90, 91, 171, 132, 74, 75, 73, 88, 89, 66, 131, 21,
]
