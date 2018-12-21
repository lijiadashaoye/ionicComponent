import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.component.html',
  styleUrls: ['./action-sheet.component.scss']
})
export class ActionSheetComponent {
  text: string;
  constructor(public actionSheetController: ActionSheetController) {
    window.addEventListener('ionActionSheetDidDismiss', function (e) { console.log('didDismiss', e) })
  }
  async presentBasic() {
    const actionSheet = await this.actionSheetController.create({
      header: "Albums",
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.text = 'Delete clicked';
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          this.text = 'Share clicked';
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          this.text = 'Play clicked';
        }
      }, {
        text: 'Favorite',
        handler: () => {
          this.text = 'Favorite clicked';
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          this.text = 'Cancel clicked';
        }
      }]
    });
    await actionSheet.present();
  }
  async presentIcons() {
    const actionSheetElement = await this.actionSheetController.create({
      header: "Albums",
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.text = 'Delete clicked';
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          this.text = 'Share clicked';
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          this.text = 'Play clicked';
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        role: 'selected',
        handler: () => {
          this.text = 'Favorite clicked';
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        icon: 'close',
        handler: () => {
          this.text = 'Cancel clicked';
        }
      }]
    })
    await actionSheetElement.present();
  }
  async presentNoBackdropDismiss() {
    const actionSheetElement = await this.actionSheetController.create({
      backdropDismiss: false,
      buttons: [{
        text: 'Archive',
        handler: () => {
          this.text = 'Archive clicked';
        }
      }, {
        text: 'Destructive',
        role: 'destructive',
        handler: () => {
          this.text = 'Destructive clicked';
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          this.text = 'Cancel clicked';
        }
      }]
    });
    await actionSheetElement.present();
  }
  async presentScroll() {
    const actionSheetElement = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        },
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        },
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        },
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        },
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        },
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        },
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        },
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        }, {
          text: 'Copy Text',
          handler: () => {
            this.text = 'Copy Text clicked';
          }
        }, {
          text: 'Share Text',
          handler: () => {
            this.text = 'Share Text clicked';
          }
        }, {
          text: 'Copy Link to Message',
          handler: () => {
            this.text = 'Copy Link to Message clicked';
          }
        }, {
          text: 'Remind Me',
          handler: () => {
            this.text = 'Remind Me clicked';
          }
        }, {
          text: 'Pin File',
          handler: () => {
            this.text = 'Pin File clicked';
          }
        }, {
          text: 'Star File',
          handler: () => {
            this.text = 'Star File clicked';
          }
        }, {
          text: 'Mark Unread',
          handler: () => {
            this.text = 'Mark Unread clicked';
          }
        }, {
          text: 'Edit Title',
          handler: () => {
            this.text = 'Edit Title clicked';
          }
        }, {
          text: 'Save Image',
          handler: () => {
            this.text = 'Save Image clicked';
          }
        }, {
          text: 'Copy Image',
          handler: () => {
            this.text = 'Copy Image clicked';
          }
        }, {
          text: 'Delete File',
          role: 'destructive',
          handler: () => {
            this.text = 'Delete File clicked';
          }
        }, {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {
            this.text = 'Cancel clicked';
          }
        }
      ]
    });
    await actionSheetElement.present();
  }
  async presentScrollNoCancel() {
    const actionSheetElement = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        },
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        },
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        },
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        },
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        },
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        },
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        },
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        },
        {
          text: 'Add Reaction',
          handler: () => {
            this.text = 'Add Reaction clicked';
          }
        },
        {
          text: 'Copy Text',
          handler: () => {
            this.text = 'Copy Text clicked';
          }
        }, {
          text: 'Share Text',
          handler: () => {
            this.text = 'Share Text clicked';
          }
        }, {
          text: 'Copy Link to Message',
          handler: () => {
            this.text = 'Copy Link to Message clicked';
          }
        }, {
          text: 'Remind Me',
          handler: () => {
            this.text = 'Remind Me clicked';
          }
        }, {
          text: 'Pin File',
          handler: () => {
            this.text = 'Pin File clicked';
          }
        }, {
          text: 'Star File',
          handler: () => {
            this.text = 'Star File clicked';
          }
        }, {
          text: 'Mark Unread',
          handler: () => {
            this.text = 'Mark Unread clicked';
          }
        }, {
          text: 'Edit Title',
          handler: () => {
            this.text = 'Edit Title clicked';
          }
        }, {
          text: 'Save Image',
          handler: () => {
            this.text = 'Save Image clicked';
          }
        }, {
          text: 'Copy Image',
          handler: () => {
            this.text = 'Copy Image clicked';
          }
        }, {
          text: 'Delete File',
          role: 'destructive',
          handler: () => {
            this.text = 'Delete File clicked';
          }
        }
      ]
    });
    await actionSheetElement.present();
  }
  async  presentCancelOnly() {
    const actionSheetElement = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {
            this.text = 'Cancel clicked';
          }
        }
      ]
    });
    await actionSheetElement.present();
  }
  async presentWithCssClass() {
    const actionSheetElement = await this.actionSheetController.create({
      header: "自定义css需要写到global",
      buttons: [
        {
          text: 'Test',
          role: 'test',
          cssClass: 'selfCss2',
          handler: () => {
            this.text = 'Test';
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {
            this.text = 'Cancel clicked';
          }
        }
      ]
    });
    await actionSheetElement.present();
  }

  async  withEvent() {
    const actionSheetElement = await this.actionSheetController.create({
      keyboardClose: true,
      backdropDismiss: false,
      buttons: [
        {
          text: 'withEvent',
          handler: async () => {
            this.text = 'Cancel clicked';
            function kk() {     // 需要执行的也可以这样
              console.log(9)
               actionSheetElement.dismiss();
            }
            await kk()
            return false;
          }
        }
      ]
    })
    await actionSheetElement.present()
  }


}
