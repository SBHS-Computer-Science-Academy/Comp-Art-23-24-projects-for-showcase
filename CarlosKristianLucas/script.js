//let goal= false
let total = 0
  function setup() {
  createCanvas(1000, 800);

  // hockeypusherZero = new HockeyPusher(0,0,0, 400, 10, 700, 20);
  // hockeypusherOne = new HockeyPusher(0,100,1, 900);
 
//G1 = new G(100, 225, 250, 150, 300, 400   );
  hPuck = new Sprite(500, 400, 50, 'dynamic');
 
    hPuck.stroke= 'blue'
    hPuck.color= (5,5,5, 0)
   hPuck.direction =180;
  hPuck.speed = 10;
  
  hPusherZero = new Sprite(300, 400, 60, 'dynamic'); 
  hPusherZero.stroke= 'red'
  hPusherZero.color= (5,5,5, 0)
  hPusherZero.speed = 10;

  hPusherOne = new Sprite(600, 400, 60, 'dynamic'); 
  hPusherOne.stroke= 'orange'
  hPusherOne.color= (5,5,5, 0)
  hPusherOne.speed = 10;
  
  floorZero = new Sprite(100, 300, 5, 500, 'static');
    floorOne = new Sprite(900, 300, 5, 500, 'static');
    floorTwo = new Sprite(500, 50, 800, 5, 'static');
    floorThree = new Sprite(500, 550, 800, 5, 'static');
 

GoalWallRight = new Sprite(105, 300, 5, 145, 'static');   
GoalWallTopRight = new Sprite(160, 225, 115, 5, 'static');
GoalWallBottomRight = new Sprite(160, 375, 115, 5, 'static');

GoalWallLeft = new Sprite(895, 300, 5, 145, 'static');   
GoalWallTopLeft = new Sprite(840, 225, 115, 5, 'static');
GoalWallBottomLeft = new Sprite(840, 375, 115, 5, 'static');

BarrierTopLeft = new Sprite(160, 220, 115, 5, 'static');    
BarrierBottomLeft = new Sprite(160, 380, 115, 5, 'static');    
BarrierSideTopLeft = new Sprite(220, 223, 5, 11, 'static');
BarrierSideBottomLeft = new Sprite(220, 377, 5, 11, 'static');
    
BarrierTopRight = new Sprite(840, 220, 115, 5, 'static'); 
BarrierBottomRight = new Sprite(840, 380, 115, 5, 'static');
BarrierSideTopRight = new Sprite(780, 223, 5, 11, 'static');
BarrierSideBottomRight = new Sprite(780, 377, 5, 11, 'static');
    
    draw();
}

function draw() {
  
   background(5, 5, 5);

  
   
  
hPuckMovement();
hPushersMovement();  
  
  direction();
  gTest();
  //print(goal);
  
}

function hPuckMovement(){
  
  if (hPuck.colliding(floorZero)) {
   hPuck.direction = hPuck.direction + random(-50, 50);
    hPuck.speed= 10
  } 
  
  if (hPuck.colliding(floorOne)) {
   hPuck.direction = hPuck.direction + random(-50, 50);
     hPuck.speed= 10
  } 
  
  if (hPuck.colliding(floorTwo)) {
   hPuck.direction = hPuck.direction + random(-50, 50);
    hPuck.speed= 10
  } 
  
  if (hPuck.colliding(floorThree)) {
   hPuck.direction = hPuck.direction + random(-50, 50);
   hPuck.speed= 10
  } 

  if (hPuck.colliding(BarrierTopLeft)){
    hPuck.direction = hPuck.direction + random(-50, 50);
     hPuck.speed= 10
  }

  if (hPuck.colliding(BarrierTopRight)){
    hPuck.direction = hPuck.direction + random(-50, 50);
     hPuck.speed= 10
  }

  if (hPuck.colliding(BarrierBottomLeft)){
    hPuck.direction = hPuck.direction + random(-50, 50);
     hPuck.speed= 10
  }

  if (hPuck.colliding(BarrierBottomRight)){
    hPuck.direction = hPuck.direction + random(-50, 50);
     hPuck.speed= 10
  }

  if (hPuck.colliding(BarrierSideTopLeft)){
    hPuck.direction = hPuck.direction + random(-50, 50);
     hPuck.speed= 10
  }

  if (hPuck.colliding(BarrierSideTopRight)){
    hPuck.direction = hPuck.direction + random(-50, 50);
     hPuck.speed= 10
  }

  if (hPuck.colliding(BarrierSideBottomLeft)){
    hPuck.direction = hPuck.direction + random(-50, 50);
     hPuck.speed= 10
  }

  if (hPuck.colliding(BarrierSideBottomRight)){
    hPuck.direction = hPuck.direction + random(-50, 50);
     hPuck.speed= 10
  }
   

}

function hPushersMovement(){
  
  hPusherZero.speed = 10;
  
  if (kb.pressing('up')) {
      hPusherZero.direction = -90;
  } else if (kb.pressing('down')) {
    hPusherZero.direction = 90;
  } else if (kb.pressing('left')) {
    hPusherZero.direction = 180;
  } else if (kb.pressing('right')) {
    hPusherZero.direction = 0;
  } else {
    hPusherZero.speed = 0;
    }

  hPusherOne.speed = 10;
  
  if (kb.pressing('up2')) {
      hPusherOne.direction = -90;
    } else if (kb.pressing('down2')) {
    hPusherOne.direction = 90;
    } else if (kb.pressing('left2')) {
    hPusherOne.direction = 180;
    } else if (kb.pressing('right2')) {
    hPusherOne.direction = 0;
    } else {
    hPusherOne.speed = 0;
    }
  }
 
function direction(){
  if (hPuck.colliding(hPusherZero)){
    hPuck.speed = 10 
    hPuck.direction = hPuck.direction + random(-20, 20)
  }

  if (hPuck.colliding(hPusherOne)){
    hPuck.speed = 10 
    hPuck.direction = hPuck.direction + random(-20, 20)
  }
}

function gTest(){
  //print(GoalWallLeft.colliding(hPuck));
  
  if (GoalWallRight.colliding(hPuck)){
     goal = true
     //total = total + 1
    print(goal);
    // print(total);

   } else {
     goal = false
   }

  if (GoalWallLeft.colliding(hPuck)){
     goal = true
   } else {
     goal = false
   }

  if (GoalWallTopRight.colliding(hPuck)){
     goal = true
   } else {
     goal = false
   }

  if (GoalWallBottomRight.colliding(hPuck)){
     goal = true
   } else {
     goal = false
   }

  if (GoalWallTopLeft.colliding(hPuck)){
     goal = true
   } else {
     goal = false
   }

  if (GoalWallBottomLeft.colliding(hPuck)){
     goal = true
   } else {
     goal = false
   }

  //print(goal);
  
}




 



