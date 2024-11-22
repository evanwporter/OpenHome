"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var FORMS_START = 898;
var EXCLUDED_BASE_NAMES = new Set(["HO_OH", "MR_MIME", "NIDORAN_F", "NIDORAN_M", "MR_RIME", "JANGMO_O", "HAKAMO_O", "KOMMO_O", "MINIOR"]);
var pokemon_species_data_1 = require("pokemon-species-data");
function parseSpeciesFile(fileContent) {
    var regex = /^#define SPECIES_([A-Z0-9_]+)\s+(\d+|FORMS_START\s*\+\s*\d+)(?:\s*\/\/.*)?$/gm;
    var match;
    var results = [];
    while ((match = regex.exec(fileContent)) !== null) {
        var name_1 = match[1];
        var value = match[2];
        var number = void 0;
        if (value.startsWith("FORMS_START")) {
            var offset = parseInt(value.split("+")[1].trim(), 10);
            number = FORMS_START + offset;
        }
        else {
            number = parseInt(value, 10);
        }
        results.push({ name: name_1, number: number });
    }
    return results;
}
function groupForms(speciesList) {
    var forms = {};
    speciesList.forEach(function (species) {
        var baseForm = species.name;
        var excludedBaseNames = Array.from(EXCLUDED_BASE_NAMES);
        for (var i = 0; i < excludedBaseNames.length; i++) {
            var excludedBaseName = excludedBaseNames[i];
            if (species.name.startsWith(excludedBaseName)) {
                baseForm = excludedBaseName;
                break;
            }
        }
        if (!EXCLUDED_BASE_NAMES.has(baseForm) && species.name.includes('_')) {
            baseForm = species.name.split('_')[0];
        }
        if (!forms[baseForm]) {
            forms[baseForm] = [];
        }
        // Add the species to the appropriate base form group
        forms[baseForm].push(species);
    });
    return forms;
}
function enrichForms(groupedForms) {
    var pokemonDataArray = Object.values(pokemon_species_data_1.PokemonData);
    var enrichedForms = {};
    var _loop_1 = function (baseForm, forms) {
        var normalizedBaseForm = baseForm.replace(/_/g, "-").toLowerCase();
        var basePokemon = pokemonDataArray.find(function (pokemon) {
            return pokemon.formes.some(function (forme) {
                return forme.alias.replace(/_/g, "").toLowerCase() === normalizedBaseForm;
            });
        });
        var nationalDex = basePokemon ? basePokemon.nationalDex : 0;
        var lastFormeNumber = -1;
        enrichedForms[baseForm] = forms.map(function (species) {
            var normalizedSpeciesName = species.name.replace(/_/g, "").toLowerCase();
            var matchingForme = basePokemon
                ? basePokemon.formes.find(function (forme) {
                    return forme.alias.replace(/_/g, "").toLowerCase() === normalizedSpeciesName;
                })
                : null;
            var formeNumber = matchingForme
                ? matchingForme.formeNumber
                : lastFormeNumber + 1;
            lastFormeNumber = formeNumber;
            return __assign(__assign({}, species), { nationalDex: nationalDex, formeNumber: formeNumber });
        });
    };
    for (var _i = 0, _a = Object.entries(groupedForms); _i < _a.length; _i++) {
        var _b = _a[_i], baseForm = _b[0], forms = _b[1];
        _loop_1(baseForm, forms);
    }
    return enrichedForms;
}
var fs = require("fs");
var fileContent = fs.readFileSync("./species.h", 'utf-8');
var speciesList = parseSpeciesFile(fileContent);
var groupedForms = groupForms(speciesList);
var convertionList = enrichForms(groupedForms);
console.log(convertionList);
fs.writeFileSync('../conversion/InclementEmeraldSpecies.json', JSON.stringify(convertionList, null, 2), 'utf-8');
