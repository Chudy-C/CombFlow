//  
/**
 *  msg.payload => array[71] => array[object, object, object...] 
 *  
 *  object => [id, date, switchFull, machine, switchShort, partType, partNumber]
 * 
 *  patrz plik GS.json
 * 
 */

let apiValues = msg.payload; //pobieranie danych z API

Date.prototype.isToday = function () {
    const today = new Date()
    return this.getDate() === today.getDate() &&
        this.getMonth() === today.getMonth() &&
        this.getFullYear() === today.getFullYear();
};

//let dateOnly = new Date().toISOString().slice(0,10);
//let today = new Date()

apiValues.forEach((element,i)=> {
    let apiDate = new Date(element.date)
    if (!apiDate.isToday()) apiValues.splice(i);   /// Jeżeli usunę ! to funkcja działa i z array[71] robi się array[61] (do ID = 5121) 
                                                   /// Jeżeli zostawię ! to z array[71] robi się array[empty]
});

msg.payload = apiValues; // nadpisywanie wiadomości do przekazania dalej

//let msg2 = {payload: today}
let msg2 = {
    payload: new Date()
    }

return [msg,msg2];