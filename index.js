
/*
  _____                .___.__                             
  _/ ____\___________  __| _/|__|   ____________ ___________ 
  \   __\/ __ \_  __ \/ __ | |  |  /  _ \___   // __ \_  __ \
   |  | \  ___/|  | \/ /_/ | |  | (  <_> )    /\  ___/|  | \/
   |__|  \___  >__|  \____ | |__|  \____/_____ \\___  >__|   
             \/           \/                  \/    \/       
*/
'use strict';

var lib = require("./lib")


var allData = new lib.MyLib().setInitDataFromXlsx() || []

var formattedData = allData.map(v => {
    return {
        il: v.il.trim(),
        ilce: v.ilçe.trim(),
        semt: v.semt_bucak_belde.trim(),
        mahalle: v.Mahalle.trim(),
        posta_kodu: v.PK.trim()
    }
})

module.exports = {
    getAllData: formattedData
}







//NOTE
//https://postakodu.ptt.gov.tr/Dosyalar/pk_list.zip

// TEST
// getData: [],
// setMyTest: new lib.MyLib().setInitDataFromXlsx()
