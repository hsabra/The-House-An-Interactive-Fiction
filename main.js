class Door extends Room {
  constructor(name, descriptor, room) {
    super(name, descriptor);
    this.keyHole = 'key';
    this.key = 'rusty key';
    this.room = room;
  }

  unlock(key) {
    if(key.name = this.key) {
      this.keyHole = key;
    } else {
      addLine("The " + key.name + " doesn't fit.");
    }
  }

  open(player) {
    if(this.keyHole != null) {

      this.room.inspect(player);

    } else {
      addLine("The door is locked.");
    }
  }

  enter() {
    if(this.keyHole != null) {
      addLine("You find yourself in a " + this.name + ".")

      //Get contents of room
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


alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("dusty hallway", "clouds of dust kick up with every step.");
let vase = new Item("vase", "made of blue glass, chipped on top. Filled with a dark liquid.")
let room = new Room("dark room", "It is dark");
let bedroom = new Room('bedroom', 'It is a bedroom')
let door = new Door('door', 'It is wooden, and scratched up. The doorknob is made of brass.', room)
var key = new Item('rusty key', 'It is a large, heavy brass key.')

// Create the function
let open = function (action, player, object) {
  object.open(player);
  return player
}


//Decide what the player should type to run the function
let openAction = /open/;
//Add the function to the action list
addAction(openAction, open);

// Put them in their spots
hallway.addItem(vase);
hallway.addItem(door);
room.addItem(bedroom);
room.addItem(hallway);


player.move(hallway)
