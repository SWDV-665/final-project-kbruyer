import {Injectable} from "@angular/core";
import {AlertController} from "@ionic/angular";
import {WikiServiceService} from "./wiki-service.service";

@Injectable({
    providedIn: "root",
})
export class InputDialogServiceService {
    constructor(
        public alertController: AlertController,
        public dataService: WikiServiceService
    ) {
    }

    async showPromptDaily(entry?, index?) {
        const alert = await this.alertController.create({
            cssClass: "my-custom-class",
            header: entry ? "Edit Entry" : "Add Entry",
            message: entry ? "Please edit entry..." : "Please enter information...",
            inputs: [
                {
                    name: "name",
                    type: "text",
                    placeholder: "Name",
                    value: entry ? entry.name : null,
                },
                {
                    name: "description",
                    type: "textarea",
                    placeholder: "Description",
                    value: entry ? entry.description : null,
                },
            ],
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    cssClass: "secondary",
                    handler: (entry) => {
                        console.log("Confirm Cancel");
                    },
                },
                {
                    text: "Save",
                    handler: (entry) => {
                        console.log("Confirm Save", entry);
                        if (index !== undefined) {
                            this.dataService.editDailyEntry(entry, index);
                        } else {
                            this.dataService.addDailyEntry(entry);
                        }
                    },
                },
            ],
        });

        await alert.present();
    }

    async showPromptTech(entry?, index?) {
        const alert = await this.alertController.create({
            cssClass: "my-custom-class",
            header: entry ? "Edit Entry" : "Add Entry",
            message: entry ? "Please edit entry..." : "Please enter information...",
            inputs: [
                {
                    name: "name",
                    type: "text",
                    placeholder: "Name",
                    value: entry ? entry.name : null,
                },
                {
                    name: "description",
                    type: "textarea",
                    placeholder: "Description",
                    value: entry ? entry.description : null,
                },
            ],
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    cssClass: "secondary",
                    handler: (entry) => {
                        console.log("Confirm Cancel");
                    },
                },
                {
                    text: "Save",
                    handler: (entry) => {
                        console.log("Confirm Save", entry);
                        if (index !== undefined) {
                            this.dataService.editTechEntry(entry, index);
                        } else {
                            this.dataService.addTechEntry(entry);
                        }
                    },
                },
            ],
        });

        await alert.present();
    }
}
