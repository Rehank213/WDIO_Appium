const { DriverConfig } = require("appium/build/lib/extension/driver-config");

describe("Android Native Feature Tests", () => {
  it("Access an activity directly", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );

    await driver.pause(2000);

    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
  });

  it("Working on Dialog box", async () => {
    await $(
      '//*[@resource-id="io.appium.android.apis:id/two_buttons"]'
    ).click();

    //   await driver.acceptAlert();

    // await driver.dismissAlert();

    console.log(await driver.getAlertText());

    await $('//*[@resource-id="android:id/button1"]').click();

    await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
  });

  it("Vertical Scorlling", async () => {
    await $("~App").click();
    await $("~Activity").click();

    // await $(
    //   "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)"
    // );

    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
    ).click();

    // await $("~Secure Surfaces").click();

    await expect($("~Secure Dialog")).toExist();
  });

  it("Horizental view", async () => {
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Views")'
    ).click();
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Gallery")'
    ).click();

    await $("~1. Photos").click();

    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward(2)"
    );

    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward(2)"
    );

    await driver.pause(2000);
  });

  it.only("Date Widget", async () => {
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Views")'
    ).click();

    await $("~Date Widgets").click();
    await $("~1. Dialog").click();

    const date = await $(
      '//*[@resource-id="io.appium.android.apis:id/dateDisplay"]'
    );

    const currentDate = await date.getText();

    await $("~change the date").click();

    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );

    await $('//*[@text="10"]').click();
    await $('//*[@resource-id="android:id/button1"]').click();

    await expect(date.getText()).not.toEqual(currentDate);
  });
});
