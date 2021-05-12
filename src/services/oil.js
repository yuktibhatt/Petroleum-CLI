const axios = require("axios");
const db = require("../../db"); 

class OilService {
    static async getOilData() {
      const url =
        "https://raw.githubusercontent.com/younginnovations/internship-challenges/master/programming/petroleum-report/data.json";
  
      const oilData = await axios.get(url);
  
      return oilData.data;
    };

    static async storeOilData(dataSet, tableName) {
      dataSet.forEach(async (data,index) => {
        try {
          const { year, petroleum_product, sale, country } = data;
          const sql = `INSERT INTO reports(id, year, petroleum_product, sale, country) VALUES(${index}, ${year},'${petroleum_product}', ${sale}, '${country}')`;
          
          await db.raw(sql);
        } catch (err) {
          console.log("Error", err);
        }
      });
  
      console.log("Data stored successfully");
    };
 
static async viewOilData(dataSet, tableName) {
  
    try {
      
      const sql = "SELECT * FROM reports";
      const oilData = await db.raw(sql);

      return oilData;
    } catch (err) {
      console.log("Error", err);
    }
  };



}  


module.exports = OilService;