const { DriverConfig } = require("appium/build/lib/extension/driver-config");

describe("dest", () => {
  it("Add Note", async () => {
    await $('//*[@text="SKIP"]').click();
    await expect($('//*[@text="Add note"]')).toBeDisplayed();

    await $('//*[@text="Add note"]').click();
    await $('//*[@text="Text"]').click();

    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    ).setValue("My First Text");

    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    ).setValue("My notes for my First Text");

    await driver.back();
    await driver.back();
    await driver.pause(2000);

    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
      )
    ).toBeDisplayed();

    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'
      )
    ).toHaveText("My notes for my First Text");
  });

  it("Delete Note", async () => {
    await driver.back();
    await $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/title']"
    ).click();

    await $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/menu_btn']"
    ).click();

    await $("//*[@text='Delete']").click();
    await $("//*[@text='OK']").click();

    await $(
      "//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/icon_nav']"
    ).click();

    await $("//*[@text='Trash Can']").click();

    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
      )
    ).toHaveText("My First Text");
  });
});
