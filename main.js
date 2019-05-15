class Door extends Room {
  constructor(name, descriptor, room) {
    super(name, descriptor);
    this.locked = true;
    let key = 'rusty key'
    this.key = key;
    this.room = room;
  }

  enter() {
    if(this.key != null) {
      this.addItem(this.room);
      this.locked = false;
    }
    if(this.locked == true) {
      addLine("The door is locked.");
    } else {
      let contents = ""
      if (this.contents.length > 0) {
        for (var i = 0; i < this.contents.length; i++) {
          if (i == this.contents.length - 1) {
            if (i > 0) {
              contents = contents + " and a " + this.contents[i].name + ".";
            } else {
              contents = contents + this.contents[i].name + ".";
            }
          } else {
            contents = contents + this.contents[i].name + ", ";
          }
        }
        addLine("You see a " + contents);
      } else {
        addLine("You see nothing")
      }
    }
  }


}

// Create the contents of your room here.
regexes.push(/open/)


alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("dusty hallway", "clouds of dust kick up with every step.");
let vase = new Item("vase", "made of blue glass, chipped on top. Filled with a dark liquid.")
let room = new Room("dark room", "It is dark");
let door = new Door('door', 'made of wood. There are long scratches down it.', room)
let bedroom = new Room('bedroom', 'It is a bedroom')

// Put them in their spots
hallway.addItem(vase);
hallway.addItem(door);
//hallway.addItem(room);
room.addItem(bedroom);
room.addItem(hallway);
player.location = hallway;

player.location.enter();
