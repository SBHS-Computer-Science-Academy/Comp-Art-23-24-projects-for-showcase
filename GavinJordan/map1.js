let maze = [
  "##############",
  "#            #",
  "# ####  #### #",
  "# #     #    #",
  "#   #     #  #",
  "# # ###  ### #",
  "#            #",
  "#  ### ###   #",
  "#    # #     #",
  "# ##     ## ##",
  "# #  ###  #  #",
  "# # #   # #  #",
  "#            #",
  "##############"
]

function drawMap1(){
  
  //background(3);
  for(let i = 0; i < maze.length; i++){
    for(let j = 0; j < maze[i].length; j++){
      if(maze[i][j] == "#"){
        fill(133);
        rect(j*70, i*70, 70, 70);
        rectangles.push(new Rectangle(j*70, i*70, 70, 70))
      }
    }
  }
  //Source Caje Cora
//   Fill(0);
// T = millis();
//   let timeEllapsed = timer + T/1000
//   text(int((timeEllapsed)),100,0);;
}
