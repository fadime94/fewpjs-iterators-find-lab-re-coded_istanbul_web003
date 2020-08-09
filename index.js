const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records){
   const record = records.find(record=>{
     return record.result==="W";
    });
    if(record){
      return record.year;
    }else {
      return undefined;
    }
    
}
superbowlWin(records)