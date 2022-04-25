describe("Android Elements Tests", () => {
  it("Find element by accessibility id", async () => {
    const appOptions = await $("~App");
    await appOptions.click();
    const actionBar = await $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });

  it("Find element by class name", async () => {
    const className = await $("android.widget.TextView");
    console.log(await className.getText());
    // await appOptions.click();
    // const actionBar = await $("~Action Bar");
    await expect(className).toHaveText("API Demos");
  });

  xit("Find element by xpath", async () => {
    // await $("~App").click();

    //find by class name
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

    //find by resource-id
    await $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    ).click();

    //find element by Text
    await $('//android.widget.TextView[@text="Command two"]').click();

    const textAssertion = await $("android.widget.TextView");
    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
  });

  it("Find element by UiAutomator", async () => {
    await $('android= new UiSelector().textContains("Alert Dialogs")').click();
  });

  it("Find multiple elements", async () => {
    const actualList = [];
    const expectedList = [
      "API Demos",
      "Access'ibility",
      "Accessibility",
      "Animation",
      "App",
      "Content",
      "Graphics",
      "Media",
      "NFC",
      "OS",
      "Preference",
      "Text",
      "Views",
    ];

    //find multiple elements
    const textList = await $$("android.widget.TextView");

    //loop through them
    for (const element1 of textList) {
      actualList.push(await element1.getText());
    }

    //assert the list
    await expect(actualList).toEqual(expectedList);
  });

  it.only("Enter text and validate", async () => {
    await $("~Views").click();
    await $("~Auto Complete").click();
    await $("~1. Screen Top").click();

    const textField = await $(
      '//*[@resource-id="io.appium.android.apis:id/edit"]'
    );
    await textField.setValue("Pakistan");
    await expect(textField).toHaveText("Pakistan");
  });
});
