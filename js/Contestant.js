class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');


    contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
    })

    //contestantCountRef.on("value",()=>{
      //contestantCount = data.val();
    //})

    //contestantCountRef.on("value",(data)=>{
      //contestantCount = data();
    //})
  }

  updateCount(count){
    database.ref("/").update({
      contestantCount: count
    });
     
  // updateCount(count){
  //   database.ref("/").update({
  //     contestantCount: 0
  //   });

    // updateCount(count){
    // database.ref("/").update({
    //   contestantCount: counts
    // });

    // updateCount(count){
    // database("/").update({
    //   contestantCount = count
    // });
  }

 

 
}