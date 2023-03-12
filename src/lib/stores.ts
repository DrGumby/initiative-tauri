import { writable } from "svelte/store";

import type { Writable } from "svelte/store";
import type { InitiativeLineModel } from "./models";

//export const initiative_store: Writable<Array<Writable<InitiativeLine>>> = writable([]);
export const initiative_store: Writable<Array<InitiativeLineModel>> = writable([
    {char_name: "asdf", initiative: 12, current_hp: 12, max_hp: 12}
]);