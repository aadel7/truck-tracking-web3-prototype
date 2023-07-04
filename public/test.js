
const puppeteer = require('puppeteer');
const { expect } = require('chai');

describe('Truck Tracking App', () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch({ headless: true, slowMo: 100 });
    page = await browser.newPage();
    await page.goto('http://localhost:3000'); // Make sure to replace with the correct URL of your app
  });

  after(async () => {
    await browser.close();
  });

  describe('Interfaz Web Inicial', () => {
    it('debe mostrar el titulo de la pagina', async () => {
      const title = await page.title();
      expect(title).to.equal('Truck Tracking');
    });

    it('debe mostrar la cabecera de la pagina', async () => {
      const headerTitle = await page.$eval('.header-title h1', el => el.textContent);
      expect(headerTitle).to.equal('Truck Tracking');
    });

  });

  describe('Inicializacion del Contrato', () => {

    it('debe seleccionar la cuenta y mostrar su balance', async () => {
      await page.select('#accountSelect', '0x8509aFEfd02dc893FaeF394891c0B5EccFfF5220');
      await page.click('#continueBtn');
      await page.waitForSelector('#selectedAccount');
      const selectedAccount = await page.$eval('#selectedAccount', (element) => element.innerText);
      const balance = await page.$eval('#balance', (element) => element.innerText);

      expect(selectedAccount).to.equal('0x8509aFEfd02dc893FaeF394891c0B5EccFfF5220');
      expect(balance).to.not.be.null;
    });
  });

  describe('Escuchadores de Eventos', () => {

    it('debe registrar los escuchadores de eventos', async () => {

      const resultEvents = await page.$eval('#resultContainer', (element) => element.innerText);

      expect(resultEvents).to.not.include('Error');
    });
  });

  describe('Crear Envio', () => {

    it('debe crear un envio y mostrar sus datos', async () => {

      await page.waitForSelector('li a[href="#createCard"]');
      await page.click('li a[href="#createCard"]');


      await page.select('#origin', 'Madrid');
      await page.select('#destination', 'Barcelona');
      await page.select('#carrier', 'FedEx');
      await page.type('#materialId', '123456');
      await page.select('#materialOrigin', 'Madrid');
      await page.$eval('#materialHarvestDate', (element) => element.value = '2023-06-22');
      await page.$eval('#materialPackagingDate', (element) => element.value = '2023-06-23');
      await page.$eval('#materialExpirationDate', (element) => element.value = '2023-06-30');

      await page.select('#status', 'Creado');
      await page.click('#createShipmentButton');

      // Wait for specific elements to appear on the page
      await Promise.all([
        page.waitForSelector('#shipmentId'),
        page.waitForSelector('#originInfo'),
        page.waitForSelector('#destinationInfo'),
        page.waitForSelector('#carrierInfo'),
        page.waitForSelector('#materialIdInfo'),
        page.waitForSelector('#materialOriginInfo'),
        page.waitForSelector('#materialHarvestDateInfo'),
        page.waitForSelector('#materialPackagingDateInfo'),
        page.waitForSelector('#materialExpirationDateInfo'),
        page.waitForSelector('#statusInfo'),
      ]);
0x8509aFEfd02dc893FaeF394891c0B5EccFfF5220
      const shipmentId = await page.$eval('#shipmentId', (element) => element.innerText);
      const origin = await page.$eval('#originInfo', (element) => element.innerText);
      const destination = await page.$eval('#destinationInfo', (element) => element.innerText);
      const carrier = await page.$eval('#carrierInfo', (element) => element.innerText);
      const status = await page.$eval('#statusInfo', (element) => element.innerText);
      const materialId = await page.$eval('#materialIdInfo', (element) => element.innerText);
      const materialOrigin = await page.$eval('#materialOriginInfo', (element) => element.innerText);
      const materialHarvestDate = await page.$eval('#materialHarvestDateInfo', (element) => element.innerText);
      const materialPackagingDate = await page.$eval('#materialPackagingDateInfo', (element) => element.innerText);
      const materialExpirationDate = await page.$eval('#materialExpirationDateInfo', (element) => element.innerText);
      expect(shipmentId).to.not.be.null;
      expect(origin).to.equal('Madrid');
      expect(destination).to.equal('Barcelona');
      expect(carrier).to.equal('FedEx');
      expect(materialId).to.equal('123456');
      expect(materialOrigin).to.equal('Madrid');
      expect(materialHarvestDate).to.equal('2023-06-22');
      expect(materialPackagingDate).to.equal('2023-06-23');
      expect(materialExpirationDate).to.equal('2023-06-30');
      expect(status).to.equal('Creado');
    });
  });

  describe('Modificar Envio', () => {
    it('debe modificar un envio y mostrar sus datos', async () => {
      // Assuming you have already navigated to the page and performed the necessary actions to reach the shipment details

      // Update shipment details
      await page.waitForSelector('li a[href="#updateCard"]');
      await page.click('li a[href="#updateCard"]');

      await page.type('#updateShipmentId', '1');
      await page.select('#updateOrigin', 'Madrid');
      await page.select('#updateDestination', 'Barcelona');
      await page.select('#updateCarrier', 'FedEx');
      await page.type('#updateMaterialId', '654321');
      await page.select('#updateMaterialOrigin', 'Barcelona');
      await page.$eval('#updateMaterialHarvestDate', (element) => element.value = '2023-07-01');
      await page.$eval('#updateMaterialPackagingDate', (element) => element.value = '2023-07-02');
      await page.$eval('#updateMaterialExpirationDate', (element) => element.value = '2023-07-08');
      await page.select('#updateStatus', 'Completado');
      await page.click('#updateShipmentButton');

      // Wait for updated elements to appear on the page
      await Promise.all([
        page.waitForSelector('#shipmentId'),
        page.waitForSelector('#originInfo'),
        page.waitForSelector('#destinationInfo'),
        page.waitForSelector('#carrierInfo'),
        page.waitForSelector('#materialIdInfo'),
        page.waitForSelector('#materialOriginInfo'),
        page.waitForSelector('#materialHarvestDateInfo'),
        page.waitForSelector('#materialPackagingDateInfo'),
        page.waitForSelector('#materialExpirationDateInfo'),
        page.waitForSelector('#statusInfo'),
      ]);

      // Retrieve updated shipment details
      const shipmentId = await page.$eval('#shipmentId', (element) => element.innerText);
      const origin = await page.$eval('#originInfo', (element) => element.innerText);
      const destination = await page.$eval('#destinationInfo', (element) => element.innerText);
      const carrier = await page.$eval('#carrierInfo', (element) => element.innerText);
      const status = await page.$eval('#statusInfo', (element) => element.innerText);
      const materialId = await page.$eval('#materialIdInfo', (element) => element.innerText);
      const materialOrigin = await page.$eval('#materialOriginInfo', (element) => element.innerText);
      const materialHarvestDate = await page.$eval('#materialHarvestDateInfo', (element) => element.innerText);
      const materialPackagingDate = await page.$eval('#materialPackagingDateInfo', (element) => element.innerText);
      const materialExpirationDate = await page.$eval('#materialExpirationDateInfo', (element) => element.innerText);

      // Assert the updated shipment details
      expect(shipmentId).to.equal('3');
      expect(origin).to.equal('Madrid');
      expect(destination).to.equal('Barcelona');
      expect(carrier).to.equal('FedEx');
      expect(status).to.equal('Completado');
      expect(materialId).to.equal('654321');
      expect(materialOrigin).to.equal('Barcelona');
      expect(materialHarvestDate).to.equal('2023-07-01');
      expect(materialPackagingDate).to.equal('2023-07-02');
      expect(materialExpirationDate).to.equal('2023-07-08');
    });
  });

  describe('Obtener Envíos', () => {
    it('debe mostrar todos los envios', async () => {
      // Assuming you have already navigated to the page and performed the necessary actions to reach the all shipments view
      await page.waitForSelector('li a[href="#allShipmentsCard"]');
      await page.click('li a[href="#allShipmentsCard"]');

      // Wait for the shipment list to appear on the page
      await page.waitForSelector('#shipmentList');

      // Get the list of shipments
      const shipmentList = await page.$$eval('#shipmentList li', (elements) =>
        elements.map((element) => element.innerText)
      );

      // Assert that the shipment list is not empty
      expect(shipmentList.length).to.be.greaterThan(0);

    });
  });
});