class AddNoteScreen {
  get skipBtn() {
    return $('//*[@text="SKIP"]');
  }
  get addNoteText() {
    return $('//*[@text="Add note"]');
  }

  get textOption() {
    return $('//*[@text="Text"]');
  }

  get noteHeading() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    );
  }

  get noteBody() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    );
  }

  get editBtn() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
    );
  }

  get viewNote() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'
    );
  }

  async saveNote() {
    await driver.back();
    await driver.back();
  }

  async skipTutorial() {
    
  }
}

module.exports = new AddNoteScreen();
//export default new AddNoteScreen()
