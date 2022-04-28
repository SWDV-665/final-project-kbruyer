import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WikiServiceService {
  entries = [];
  constructor() {}

  getEntry() {
    return this.entries;
  }
  removeEntry(entry) {
    this.entries.splice(entry, 1);
  }

  addEntry(entry) {
    this.entries.push(entry);
  }

  editEntry(entry, index) {
    this.entries[index] = entry;
  }
}
