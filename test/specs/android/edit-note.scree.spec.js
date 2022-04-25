class EditScreen {
  get skipBtn() {
    return $('//*[@text="SKIP"]');
  }
  get addNote() {
    return $('//*[@text="Add note"]');
  }

  get textBtn() {
    return $('//*[@text="Text"]');
  }

  get titleField() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    );
  }

  get noteField() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    );
  }

  get editBtn() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
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

  async saveNote() {
    await driver.back();
    await driver.back();
  }
}

module.exports = new AddNoteScreen();
//export default new AddNoteScreen()
