export interface Dictionary {

    word: string;
    phonetic: string;
    meanings: Meanings[];
    phonetics: Phonetics[];
}

export interface Meanings {

    antonyms: any[];
    synonyms: any[];
    definitions: any[];
    partOfSpeech: string;
}

export interface Phonetics {

    text: string;
    audio: string;

}