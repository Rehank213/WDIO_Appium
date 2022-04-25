const AddNoteScreen = require("../../screenobjects/android/add-note.screen");
const deleteNoteScreen = require("../../screenobjects/android/edit-note.screen");

describe("Add Notes", () => {
  it("Skip tutorial", async () => {
    await AddNoteScreen.skipBtn.click();
    await expect(AddNoteScreen.addNoteText).toBeDisplayed();
  });

  it("add a note, save changes & verify note", async () => {
    await AddNoteScreen.addNoteText.click();
    await AddNoteScreen.textOption.click();

    await AddNoteScreen.noteHeading.setValue("My First Text");
    await AddNoteScreen.noteBody.setValue("My notes for my First Text");

    await AddNoteScreen.saveNote();

    await expect(AddNoteScreen.editBtn).toBeDisplayed();
    await expect(AddNoteScreen.viewNote).toHaveText(
      "My notes for my First Text"
    );
  });

  it("Delete Note & verify deleted", async () => {
    // await deleteNoteScreen.noteTitleText.click();
    await deleteNoteScreen.menuBtn.click();
    await deleteNoteScreen.deleteBtn.click();
    await deleteNoteScreen.okBtn.click();

    await deleteNoteScreen.navMenu.click();
    await deleteNoteScreen.trasnCanBtn.click();

    await expect(await deleteNoteScreen.titleText).toHaveText("My First Text");
  });
});
