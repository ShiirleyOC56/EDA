let qt;
let count = 0;
function setup () {
createCanvas (400 ,400) ;
let boundary = new Rectangle (200 ,200 ,200 ,200) ;
qt = new QuadTree ( boundary , 4) ;
}
function draw () {
background (0) ;
if ( mouseIsPressed ) {
for (let i = 0; i < 1; i ++) {
let m = new Point ( mouseX + random ( -1 ,1) , mouseY + random ( -1 ,1) );
qt. insert (m)
}
}
background (0) ;
qt. show () ;
}