import {Component} from "@angular/core";
import {AlertController, ToastController} from "@ionic/angular";
import {WikiServiceService} from "../wiki-service.service";
import {InputDialogServiceService} from "../input-dialog-service.service";
import {SocialSharing} from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
    selector: "app-tab1",
    templateUrl: "tab1.page.html",
    styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
    title = "Northern Quest";
    date: Date = new Date();

    constructor(
        public toastController: ToastController,
        public alertController: AlertController,
        public dataService: WikiServiceService,
        public InputDialogService: InputDialogServiceService,
        public socialSharing: SocialSharing
    ) {
    }

    loadItem() {
        return this.dataService.getDailyEntry();
    }

    async editItem(item, index) {
        console.log("Editing Entry - ", item, index);
        const toast = await this.toastController.create({
            message: "Editing Entry - " + index + "...",
            duration: 2000,
        });
        await toast.present();

        await this.InputDialogService.showPromptDaily(item, index);
    }

    async shareItem(item, index) {
        console.log("Sharing Entry - ", item, index);
        const toast = await this.toastController.create({
            message: "Sharing Entry - " + index + "...",
            duration: 2000,
        });
        await toast.present();

        let message = "Entry - Name: " + item.name + " - Description: " + item.description;
        let subject = "Shared via Wiki app";

        this.socialSharing.share(message, subject).then(() => {
            // Sharing via email is possible
            console.log("Shared successfully!")
        }).catch((error) => {
            // Sharing via email is not possible
            console.error("Error while sharing ", error);
        });

    }

    async removeItem(item, index) {
        console.log("Removing Entry - ", item, index);
        const toast = await this.toastController.create({
            message: "Removing Entry - " + index + "...",
            duration: 2000,
        });
        await toast.present();

        this.dataService.removeDailyEntry(index);
    }

    addItem() {
        console.log("Adding Entry");
        this.InputDialogService.showPromptDaily();
    }
}
