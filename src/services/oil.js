const axios = require("axios");
const db = require("../../db"); 

class OilService {
    static async getOilData() {
      const url =
        "https://raw.githubusercontent.com/younginnovations/internship-challenges/master/programming/petroleum-report/data.json";
  
      const oilData = await axios.get(url);
  
      return oilData.data;
    };


 



}  


module.exports = OilService;