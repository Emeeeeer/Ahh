gdjs._26410_21629_21517_22330_26223Code = {};
gdjs._26410_21629_21517_22330_26223Code.localVariables = [];
gdjs._26410_21629_21517_22330_26223Code.idToCallbackMap = new Map();
gdjs._26410_21629_21517_22330_26223Code.GDMerged_9595Full_9595BackgroundObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDMerged_9595Full_9595BackgroundObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDCannon_9595BallObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDCannon_9595BallObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDZombieObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDZombieObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDBig_9595square_9595stoneObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDBig_9595square_9595stoneObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDIcon_9595BackgroundObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDIcon_9595BackgroundObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDWood_9595Platform_9595Tall_9595BigObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDWood_9595Platform_9595Tall_9595BigObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDYouWinObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDYouWinObjects2= [];
gdjs._26410_21629_21517_22330_26223Code.GDGrass_9595backgroundObjects1= [];
gdjs._26410_21629_21517_22330_26223Code.GDGrass_9595backgroundObjects2= [];


gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522330_959526223Code_9546GDCannon_95959595BallObjects1Objects = Hashtable.newFrom({"Cannon_Ball": gdjs._26410_21629_21517_22330_26223Code.GDCannon_9595BallObjects1});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522330_959526223Code_9546GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs._26410_21629_21517_22330_26223Code.GDZombieObjects1});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522330_959526223Code_9546GDCannon_95959595BallObjects1Objects = Hashtable.newFrom({"Cannon_Ball": gdjs._26410_21629_21517_22330_26223Code.GDCannon_9595BallObjects1});
gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522330_959526223Code_9546GDGrass_95959595backgroundObjects1Objects = Hashtable.newFrom({"Grass_background": gdjs._26410_21629_21517_22330_26223Code.GDGrass_9595backgroundObjects1});
gdjs._26410_21629_21517_22330_26223Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Icon_Background"), gdjs._26410_21629_21517_22330_26223Code.GDIcon_9595BackgroundObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "", 1);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs._26410_21629_21517_22330_26223Code.GDIcon_9595BackgroundObjects1.length !== 0 ? gdjs._26410_21629_21517_22330_26223Code.GDIcon_9595BackgroundObjects1[0] : null), true, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cannon_Ball"), gdjs._26410_21629_21517_22330_26223Code.GDCannon_9595BallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs._26410_21629_21517_22330_26223Code.GDZombieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522330_959526223Code_9546GDCannon_95959595BallObjects1Objects, "Physics2", gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522330_959526223Code_9546GDZombieObjects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDZombieObjects1 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDZombieObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "WinLayer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cannon_Ball"), gdjs._26410_21629_21517_22330_26223Code.GDCannon_9595BallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Grass_background"), gdjs._26410_21629_21517_22330_26223Code.GDGrass_9595backgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522330_959526223Code_9546GDCannon_95959595BallObjects1Objects, gdjs._26410_21629_21517_22330_26223Code.mapOfGDgdjs_9546_959526410_959521629_959521517_959522330_959526223Code_9546GDGrass_95959595backgroundObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._26410_21629_21517_22330_26223Code.GDCannon_9595BallObjects1 */
{for(var i = 0, len = gdjs._26410_21629_21517_22330_26223Code.GDCannon_9595BallObjects1.length ;i < len;++i) {
    gdjs._26410_21629_21517_22330_26223Code.GDCannon_9595BallObjects1[i].getBehavior("DraggablePhysics").ReleaseDrag(null);
}
}
}

}


};

gdjs._26410_21629_21517_22330_26223Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._26410_21629_21517_22330_26223Code.GDMerged_9595Full_9595BackgroundObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDMerged_9595Full_9595BackgroundObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDCannon_9595BallObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDCannon_9595BallObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDZombieObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDZombieObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDBig_9595square_9595stoneObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDBig_9595square_9595stoneObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDIcon_9595BackgroundObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDIcon_9595BackgroundObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDWood_9595Platform_9595Tall_9595BigObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDWood_9595Platform_9595Tall_9595BigObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDYouWinObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDYouWinObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDGrass_9595backgroundObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDGrass_9595backgroundObjects2.length = 0;

gdjs._26410_21629_21517_22330_26223Code.eventsList0(runtimeScene);
gdjs._26410_21629_21517_22330_26223Code.GDMerged_9595Full_9595BackgroundObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDMerged_9595Full_9595BackgroundObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDCannon_9595BallObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDCannon_9595BallObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDZombieObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDZombieObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDBig_9595square_9595stoneObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDBig_9595square_9595stoneObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDIcon_9595BackgroundObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDIcon_9595BackgroundObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDWood_9595Platform_9595Tall_9595BigObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDWood_9595Platform_9595Tall_9595BigObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDYouWinObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDYouWinObjects2.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDGrass_9595backgroundObjects1.length = 0;
gdjs._26410_21629_21517_22330_26223Code.GDGrass_9595backgroundObjects2.length = 0;


return;

}

gdjs['_26410_21629_21517_22330_26223Code'] = gdjs._26410_21629_21517_22330_26223Code;
