

// Create the contents of your room here.
class Door {
  constructor() {
    this.name,
    this.descriptor,
    this.locked = false;
    this.key = null;
    this.keyName = 'rusty key';
  }
}


alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("dusty hallway", "clouds of dust kick up with every step.");
let vase = new Item("vase", "made of blue glass, chipped on top. Filled with a dark liquid.")
let room = new Room("dark room", "It is dark");
let bedroom = new Room('bedroom', 'It is a bedroom')

// Put them in their spots
hallway.addItem(vase);
hallway.addItem(room);
room.addItem(bedroom);
room.addItem(hallway);
player.location = hallway;

player.location.enter();
