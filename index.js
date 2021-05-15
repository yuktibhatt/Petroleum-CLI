const cliProgram = require("commander");
const oilService = require("./src/services/oil");
const fs = require("fs");

cliProgram
.version("v1.0.0")
.name("oil-data-utils")
.description("Oil Data functionalities");

//fetching data
cliProgram
.command('fetch-oil-data-from-server')
.alias('fetch-oil-data')
.option('--count <count>', 'No. of rows to display')
.description('Fetch the latest data from the oli service provider')
.action(async (program) => {
  const oilData = await oilService.getOilData();
  for(i=0; i<program.count; i++) {
    console.log(oilData[i]);
  }
});

//store data into a file
cliProgram
.command('store-oil-data-to-file')
.alias('store-oil-data-in-file')
.option('--filename <filename>', 'Name of file')
.description('Store the latest data from the oil service provider')

.action(async (program) => {
  const { filename } = program;
  const oilData = await oilService.getOilData();
  fs.writeFileSync(filename, JSON.stringify(oilData), 'utf-8');

  console.log(`Data saved in file named ${filename}`);
});

//store oil data in database
 cliProgram
.command('store-oil-data-to-database')
.alias('store-oil-data')
.option('--tablename <tablename>', 'Name of table in database')
.description('Store the latest data from the oil service provider')

.action(async (program) => {
  const { tablename } = program;
  const oilData = await oilService.getOilData();
  console.log(oilData);
  await oilService.storeOilData(oilData, tablename);

  console.log(`Data stored in database - ${tablename}`);
});


//view all data
cliProgram
.command('view-oil-data-from-database')
.alias('view-oil-data')
.option('--tablename <tablename>', 'Name of table in datbaase')
.description('View all data from the oil service provider')
// .parse(process.argv)
.action(async (program) => {
  const { tablename } = program;
  const oilData = await oilService.viewOilData();
  console.log(oilData);
  await oilService.viewOilData(oilData, tablename);

  console.log(`All Data form database - ${tablename}`);
});


//view avg sale of each product by country
cliProgram
.command('view-oil-data-avg-from-database')
.alias('view-oil-data-avg')
.option('--tablename <tablename>', 'Name of table in datbaase')
.description('View avg data from the oil service provider')
// .parse(process.argv)
.action(async (program) => {
  const { tablename } = program;
  const oilData = await oilService.viewOilDataAvg();
  console.log(oilData);
  await oilService.viewOilDataAvg(oilData, tablename);

  console.log(`All Data form database - ${tablename}`);
});

//view min sale of each product by country
cliProgram
.command('view-oil-data-min-from-database')
.alias('view-oil-data-min')
.option('--tablename <tablename>', 'Name of table in datbaase')
.description('View min sale year for a product from the oil service provider')
// .parse(process.argv)
.action(async (program) => {
  const { tablename } = program;
  const oilData = await oilService.viewOilDataMin();
  console.log(oilData);
  await oilService.viewOilDataMin(oilData, tablename);

  console.log(`All Data form database - ${tablename}`);
});


cliProgram.parse(process.argv);


