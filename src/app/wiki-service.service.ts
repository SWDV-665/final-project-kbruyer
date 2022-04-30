import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class WikiServiceService {
    dailyEntries = [];
    techEntries = [];

    constructor() {
    }

    getDailyEntry() {
        return this.dailyEntries;
    }

    removeDailyEntry(entry) {
        this.dailyEntries.splice(entry, 1);
    }

    addDailyEntry(entry) {
        this.dailyEntries.push(entry);
    }

    editDailyEntry(entry, index) {
        this.dailyEntries[index] = entry;
    }

    getTechEntry() {
        return this.techEntries;
    }

    addTechEntry(entry) {
        this.techEntries.push(entry);
    }

    editTechEntry(entry, index) {
        this.techEntries[index] = entry;
    }
}
