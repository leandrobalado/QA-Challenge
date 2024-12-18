import { Page, Locator } from "@playwright/test";

class ItemPage {
  readonly page: Page;
  readonly backpackItem: Locator;
  readonly onesieItem: Locator;
  readonly itemTitle: Locator;
  readonly itemPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backpackItem = page.locator('[id="item_4_title_link"]');
    this.onesieItem = page.locator('[id="item_2_title_link"]');
    this.itemTitle = page.locator(
      '[class="inventory_details_name large_size"]'
    );
    this.itemPrice = page.locator('[class="inventory_details_price"]');
  }

  async viewBackpack() {
    await this.backpackItem.click();
  }

  async backpackDetails() {
    await this.viewBackpack();
    await this.page.waitForLoadState("domcontentloaded");
    const backpackTitle = await this.itemTitle.textContent();
    console.log(`Item title: ${backpackTitle}`);
    const backpackPrice = await this.itemPrice.textContent();
    console.log(`Item price: ${backpackPrice}`);
  }

  async viewOnesie() {
    await this.onesieItem.click();
  }

  async onesieDeails() {
    await this.viewOnesie();
    await this.page.waitForLoadState("domcontentloaded");
    const onesieTitle = await this.itemTitle.textContent();
    console.log(`Item title: ${onesieTitle}`);
    const onesiePrice = await this.itemPrice.textContent();
    console.log(`Item price: ${onesiePrice}`);
  }
}

export default ItemPage;
