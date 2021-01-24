class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 200, 0);
    this.title.style('font-size','70px')
    this.title.style('color','red')

    this.input.position(displayWidth/2 - 70 , displayHeight/2 - 80);
    this.input.style('width','300px');
    this.input.style('height','50px');
    this.input.style('font-size','40px');
    this.input.style('background','lightblue')
    this.input.style('color','white');
    
    this.button.position(displayWidth/2 + 150, displayHeight/2 - 10);
    this.button.style('width','80px');
    this.button.style('height','20px');
    this.reset.position(displayWidth-100,20); 

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
