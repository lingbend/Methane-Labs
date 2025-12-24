const canvas = document.getElementById("game_screen") as HTMLCanvasElement;
const context = canvas?.getContext("2d") as CanvasRenderingContext2D;


function Render(world){
    context.moveTo(0, 0);
    context.lineTo(30, 30);
    context.stroke();
}