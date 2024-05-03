function gradientVertical(x,y,w,h,clrStart, clrEnd, steps=10){
  for(let i = 0; i < steps; i++){
    fill(lerpColor(clrStart,clrEnd,i/steps));
    rect(x+(i*w/steps),y,w/steps,h)
  }
}

function gradientHorizontal(x,y,w,h,clrStart, clrEnd, steps=10){
  for(let i = 0; i < steps; i++){
    fill(lerpColor(clrStart,clrEnd,i/steps));
    rect(x,y+(i*h/steps),w,h/steps)
  }
}

function gradientEllipse(x,y,w,h,clrStart, clrEnd, steps=10){
  for(let i = 0; i < steps; i++){
    fill(lerpColor(clrStart,clrEnd,i/steps));
    ellipse(x,y,w-(i*w/steps),h-(i*w/steps))
  }
}

function gradientRect(x,y,w,h,clrStart, clrEnd, steps=10){
  for(let i = 0; i < steps; i++){
    fill(lerpColor(clrStart,clrEnd,i/steps));
    rect((x+(i*w/steps))/2,(y+(i*h/steps))/2,w-(i*w/steps),h-(i*h/steps))
  }
}

function isoVertTri(x,y,w=100,h=100){
  triangle(x,y,x+w,y,x+w/2,y+h);
  
}

function isoHorizTri(x,y,w=100,h=100){
  triangle(x,y,x,y+h,x+w,y+h/2);
}

function rightTriangle(x,y,w=100,h=100){
  triangle(x,y,x+w,y,x,y+h);
}


//Optional extention
function equilateral(x,y,s,orient = 'up'){
  if (orient == 'up') {
    //add code here for up triangle
    triangle(x,y,x+s,y,x+s/2,y-s*sqrt(3)/2);
  } else if (orient == 'down'){
    //add code here for down triangle
    triangle(x,y,x+s,y,x+s/2,y+s*sqrt(3)/2);
  } else if (orient == 'right'){
    //add code here for down triangle
    triangle(x,y,x,y+s,x+s*sqrt(3)/2,y+s/2);
  } else {
    //add code here for down triangle
    triangle(x,y,x,y+s,x-s*sqrt(3)/2,y+s/2);
  }
}


