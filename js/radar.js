/**
 * Created by User on 3/18/2016.
 */

function convertX(x){
    if (x == 0)
        x = 100;
    else {
        x += 100;
    }
    return x;
}

function convertY(y){
    if (y > 0){
        y = Math.abs(y - 100);
    }
    else if (y < 0){
       y = Math.abs(y) + 100;
    }
    else{
        y = 100;
    }
    return y;
}

function twoRadar(x, y, x2, y2, ctx){
    var newx = convertX(x);
    var newy = convertY(y);
    var newx2 = convertX(x2);
    var newy2 = convertY(y2);

    document.getElementById("radar").style.bottom = "300px";
    document.getElementById("radar").style.right = "685px";

    ctx.fillStyle = "green";
    ctx.fillRect(0,0,200,200);
    ctx.beginPath();
    ctx.lineWidth = 3;

    ctx.moveTo(newx,newy);
    ctx.lineTo(newx-10,newy+10);
    ctx.lineTo(newx,newy+20);
    ctx.lineTo(newx+10,newy+10);
    ctx.lineTo(newx,newy);
    ctx.stroke();

    ctx.font = "10px Arial";
    ctx.strokeText("1",newx-3,newy+13);

    ctx.beginPath();
    ctx.lineWidth = 3;

    ctx.moveTo(newx2,newy2);
    ctx.lineTo(newx2-10,newy2+10);
    ctx.lineTo(newx2,newy2+20);
    ctx.lineTo(newx2+10,newy2+10);
    ctx.lineTo(newx2,newy2);
    ctx.stroke();

    ctx.font = "10px Arial";
    ctx.strokeText("2",newx2-3,newy2+13);

}


function radar(x, y, ctx) {
    // real world to canvas coordinate conversion
    // -99, 99 -> 1, 1          99, 99 -> 199, 1
    //              0,0 -> 100, 100
    // -99, -99 -> 0, 199      99, -99 -> 199, 199

    var newx = convertX(x);
    var newy = convertY(y);

    ctx.fillStyle = "green";
    ctx.fillRect(0,0,200,200);
    ctx.beginPath();
    ctx.lineWidth = 3;

    ctx.moveTo(newx,newy);
    ctx.lineTo(newx-10,newy+10);
    ctx.lineTo(newx,newy+20);
    ctx.lineTo(newx+10,newy+10);
    ctx.lineTo(newx,newy);
    ctx.stroke(); // the ship start

    ctx.font = "10px Arial";
    ctx.strokeText("1",newx-3,newy+13);

}