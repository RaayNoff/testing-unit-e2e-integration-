const HelloPage = require("../pages/hello.page");

describe("My hello world page", () => {
  it("should toggle", async () => {
    await HelloPage.open();

    await HelloPage.toggleTitleWithInput("hello");
    await expect(HelloPage.helloTItle).toBeExisting();

    await HelloPage.toggleBtn.click();

    await expect(HelloPage.helloTItle).not.toBeExisting();
  });
  it("should not toggle", async () => {
    await HelloPage.open();

    await HelloPage.toggleTitleWithInput("fdsafsda");
    await expect(HelloPage.helloTItle).not.toBeExisting();
  });
});
