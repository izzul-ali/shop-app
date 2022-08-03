import { writable } from "svelte/store";

export const tagsList = writable();

let tags = ['Shirts', 'Accessories', 'Hoddie', 'Jeans', 'Shoesh', 'Jacket']

tagsList.set(tags);