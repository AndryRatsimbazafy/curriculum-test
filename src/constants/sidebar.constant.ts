import { List } from "../interfaces/list.interface";

export const TEMPLATES: List[] = [
    { id: 1, libelle: "Software Engineer"},
    { id: 2, libelle: "Computer hardware engineer"},
    { id: 3, libelle: "Network Engineer"},
    { id: 4, libelle: "Technical Support"},
    { id: 5, libelle: "Network administrator"},
    { id: 6, libelle: "Management"},
    { id: 7, libelle: "Data analysis"},
    { id: 8, libelle: "Computer technician"},
];

export const BOARDS: List[] = [
    { id: 1, libelle: "Board 1", type: "simple"},
    { id: 2, libelle: "Board 2", type: "simple"},
    { id: 3, libelle: "Board 3", type: "simple"},
    { id: 4, libelle: "Board agent 1", type: "agent"},
    { id: 5, libelle: "Board agent 2", type: "agent"},
    { id: 6, libelle: "Board agent 3", type: "agent"},
];

export enum BOARD_TYPE {
    SIMPLE = "simple",
    AGENT = "agent"
}