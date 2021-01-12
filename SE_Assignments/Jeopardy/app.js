$(()=>{
    const team1 = new Team('team1', $('#team1')).setup();
    const team2 = new Team('team2', $('#team2')).setup();
    const team3 = new Team('team3', $('#team3')).setup();
	//Declare variables/Instantiate new objects
	
	//Functionality for game tiles
    const $tiles = $('.tile').on('click', (event)=>{
      $(event.currentTarget).toggleClass('active')  
       
      console.log($(event.currentTarget).text().split(/\s+/)[1].slice(1));
      const currentTileValue = Number($(event.currentTarget).text().split(/\s+/)[1].slice(1));
    
      team1.increaseBy = currentTileValue;
      team2.increaseBy = currentTileValue;
      team3.increaseBy = currentTileValue;

    })
})

//Fuctionality for scorecard
class Team {
    constructor(name, $el){
        this.name = name;
        this.score = 0;
        this.$el = $el;
        this.increaseBy = 100;
        
    }
    
    increaseScore(pointValue){
     
     this.score += pointValue;
     
     this.$el.children().eq(0).text(this.score);
    }

    decreaseScore(pointValue){
        this.score -= pointValue;
        this.$el.children().eq(0).text(this.score);
    }
    setup(){
        
        this.$el.children().eq(1).on('click', () => {
            
            this.increaseScore(this.increaseBy)

        })
        this.$el.children().eq(2).on('click', () => {
            this.decreaseScore(this.increaseBy)
            
        })
			   
		return this;
    }

}