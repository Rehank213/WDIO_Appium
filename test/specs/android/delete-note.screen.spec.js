const EditNoteScreen = require("../../screenobjects/android/edit-note.screen");

describe("Delete Note", () => {
  it("Delete Note", async () => {
    await EditNoteScreen.skipTutorial();
    await EditNoteScreen.addAndSaveNote("Note Heading", "Note Body");

    await driver.back();

    const note = await EditNoteScreen.firstNote.getText();

    await EditNoteScreen.firstNote.click();
    await EditNoteScreen.menuBtn.click();
    await EditNoteScreen.deleteBtn.click();
    await EditNoteScreen.okBtn.click();

    await EditNoteScreen.navMenu.click();
    await EditNoteScreen.trasnCanBtn.click();

    await expect(await EditNoteScreen.titleText).toHaveText(note);
  });
});
