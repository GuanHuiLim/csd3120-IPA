import { Engine } from "babylonjs";
import { App } from './app';

//console.log('hello my very sad world');
const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
/*
const ctx = canvas.getContext('2d');
ctx.font = '50px Arial';
ctx.fillText('Hello XR',50,50);
*/

const engine = new Engine(canvas, true);

const app = new App(engine,canvas);
const scene = app.createXRScene(canvas.id, {});
/*engine.runRenderLoop( () => {
    scene.render();    
});*/
scene.then(scene => {
    engine.runRenderLoop(() => {
        scene.render();
    })
})

