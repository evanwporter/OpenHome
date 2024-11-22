const FORMS_START = 898;
const EXCLUDED_BASE_NAMES = new Set(["HO_OH", "MR_MIME", "NIDORAN_F", "NIDORAN_M", "MR_RIME", "JANGMO_O", "HAKAMO_O", "KOMMO_O", "MINIOR"]);

type ConversionFormat = Record<string, { name: string; number: number; nationalDex: number | null; formeNumber: number | null }[]>;

import { Pokemon, PokemonData } from 'pokemon-species-data';

function parseSpeciesFile(fileContent: string): { name: string; number: number }[] {
    const regex = /^#define SPECIES_([A-Z0-9_]+)\s+(\d+|FORMS_START\s*\+\s*\d+)(?:\s*\/\/.*)?$/gm;

    let match: RegExpExecArray | null;
    const results: { name: string; number: number }[] = [];

    while ((match = regex.exec(fileContent)) !== null) {
        const name = match[1];
        const value = match[2];

        let number: number;
        if (value.startsWith("FORMS_START")) {
            const offset = parseInt(value.split("+")[1].trim(), 10);
            number = FORMS_START + offset;
        } else {
            number = parseInt(value, 10);
        }

        results.push({ name, number });
    }

    return results;
}

function groupForms(speciesList: { name: string; number: number }[]): Record<string, { name: string; number: number }[]> {
    const forms: Record<string, { name: string; number: number }[]> = {};

    speciesList.forEach(species => {

        let baseForm = species.name;
        const excludedBaseNames = Array.from(EXCLUDED_BASE_NAMES);


        for (let i = 0; i < excludedBaseNames.length; i++) {
            const excludedBaseName = excludedBaseNames[i];
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

        forms[baseForm].push(species);
    });

    return forms;
}

function enrichForms(
    groupedForms: Record<string, { name: string; number: number }[]>,
): ConversionFormat {
    const pokemonDataArray = Object.values(PokemonData);

    const enrichedForms: Record<
        string,
        { name: string; number: number; nationalDex: number; formeNumber: number | null }[]
    > = {};

    for (const [baseForm, forms] of Object.entries(groupedForms)) {
        const normalizedBaseForm = baseForm.replace(/_/g, "-").toLowerCase();

        const basePokemon = pokemonDataArray.find((pokemon: Pokemon) =>
            pokemon.formes.some((forme) =>
                forme.alias.replace(/_/g, "").toLowerCase() === normalizedBaseForm
            )
        );

        const nationalDex = basePokemon ? basePokemon.nationalDex : 0;
        let lastFormeNumber = -1;

        enrichedForms[baseForm] = forms.map(species => {
            const normalizedSpeciesName = species.name.replace(/_/g, "").toLowerCase();

            const matchingForme = basePokemon
                ? basePokemon.formes.find((forme: any) =>
                      forme.alias.replace(/_/g, "").toLowerCase() === normalizedSpeciesName
                  )
                : null;

            const formeNumber = matchingForme
                ? matchingForme.formeNumber
                : lastFormeNumber + 1;

            lastFormeNumber = formeNumber;

            return {
                ...species,
                nationalDex,
                formeNumber,
            };
        });
    }

    return enrichedForms;
}

import * as fs from 'fs';

const fileContent = fs.readFileSync("./species.h", 'utf-8');

const speciesList = parseSpeciesFile(fileContent);
const groupedForms = groupForms(speciesList);
const convertionList = enrichForms(groupedForms)
console.log(convertionList)

fs.writeFileSync('./InclementEmeraldSpecies.json', JSON.stringify(convertionList, null, 2), 'utf-8');
