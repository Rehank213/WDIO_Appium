const AddNoteScreen = require("./add-note.screen");

class EditNoteScreen {
  get firstNote() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    );
  }

  get menuBtn() {
    return $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/menu_btn']"
    );
  }

  get deleteBtn() {
    return $("//*[@text='Delete']");
  }

  get okBtn() {
    return $("//*[@text='OK']");
  }

  get navMenu() {
    return $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/icon_nav']"
    );
  }

  get titleText() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    );
  }
  get trasnCanBtn() {
    return $("//*[@text='Trash Can']");
  }

  async skipTutorial() {
    await AddNoteScreen.skipBtn.click();
    await expect(AddNoteScreen.addNoteText).toBeDisplayed();
  }

  async addAndSaveNote(noteHeading, noteBody) {
    await AddNoteScreen.addNoteText.click();
    await AddNoteScreen.textOption.click();

    await AddNoteScreen.noteHeading.setValue(noteHeading);
    await AddNoteScreen.noteBody.setValue(noteBody);

    await AddNoteScreen.saveNote();

    await expect(AddNoteScreen.editBtn).toBeDisplayed();
    await expect(AddNoteScreen.viewNote).toHaveText(noteBody);
  }
}

module.exports = new EditNoteScreen();
//export default new AddNoteScreen()
