import { test, expect } from "@playwright/test";

test("tooltip click shows definition", async ({ page }) => {
  await page.goto("");
  const term = page.getByText("Term", { exact: true });
  const popup = page.getByText("This is the definition");

  await expect(term).toBeVisible();
  await expect(popup).not.toBeVisible();

  await term.click();
  await expect(popup).toBeVisible();
});
