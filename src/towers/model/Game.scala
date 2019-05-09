package towers.model

import play.api.libs.json.{JsValue, Json}
import towers.model.game_objects._
import towers.model.physics.{Physics, PhysicsVector, World}


class Game {

  val world: World = new World(10)

  var towers: List[DodgeBallTower] = List()
  var walls: List[Wall] = List()
  var projectiles: List[PhysicalObject] = List()

  var baseHealth = 10

  var level: Level = new Level()

  var players: Map[String, Player] = Map()
  val playerSize: Double = 0.3

  var lastUpdateTime: Long = System.nanoTime()

  //add
  var timer = 0


  def loadLevel(newLevel: Level): Unit = {
    world.boundaries = List()
    level = newLevel

    projectiles.foreach(po => po.destroy())
    towers = List()
    walls = List()
    projectiles = List()

    blockTile(0, 0, level.gridWidth, level.gridHeight)

    level.towerLocations.foreach(tower => placeTower(tower.x, tower.y))
    level.wallLocations.foreach(wall => placeWall(wall.x, wall.y))
    players.values.foreach(player => player.location = startingVector())

    baseHealth = level.maxBaseHealth
  }


  def addPlayer(id: String): Unit = {
    val player = new Player(startingVector(), new PhysicsVector(0, 0))
    players += (id -> player)
    world.objects = player :: world.objects
  }


  def removePlayer(id: String): Unit = {
    players(id).destroy()
    players -= id
  }

  def blockTile(x: Int, y: Int, width: Int = 1, height: Int = 1): Unit = {
    val ul = new PhysicsVector(x, y)
    val ur = new PhysicsVector(x + width, y)
    val lr = new PhysicsVector(x + width, y + height)
    val ll = new PhysicsVector(x, y + height)

    world.boundaries ::= new Boundary(ul, ur)
    world.boundaries ::= new Boundary(ur, lr)
    world.boundaries ::= new Boundary(lr, ll)
    world.boundaries ::= new Boundary(ll, ul)
  }


  def placeWall(x: Int, y: Int): Unit = {
    blockTile(x, y)
    walls = new Wall(x, y) :: walls
  }

  def placeTower(x: Int, y: Int): Unit = {
    towers = new DodgeBallTower(x, y) :: towers
  }


  def addProjectile(projectile: PhysicalObject): Unit = {
    projectiles = projectile :: projectiles
    world.objects = projectile :: world.objects
  }


  def startingVector(): PhysicsVector = {
    new PhysicsVector(level.startingLocation.x + 0.5, level.startingLocation.y + 0.5)
  }



  def update(): Unit = {
    val time: Long = System.nanoTime()
    val dt = (time - this.lastUpdateTime) / 1000000000.0
    Physics.updateWorld(this.world, dt)
    checkForPlayerHits()
    checkForBaseDamage()
    projectiles = projectiles.filter(po => !po.destroyed)
    this.lastUpdateTime = time
    if (timer == 60000){
      timer = 0
    }
    timer += 1
  }

  def gameState(): String = {
    val gameState: Map[String, JsValue] = Map(
      "time" -> Json.toJson(timer),
      "NumPlay" -> Json.toJson (players.size)
    )

    Json.stringify(Json.toJson(gameState))
  }




  def checkForBaseDamage(): Unit = {
    // TODO: Objective 1
    //Map of players and a var player size
    val baseLoc: PhysicsVector = new PhysicsVector(level.base.x +0.5,level.base.y+0.5)
    for (p <- players.values){
      //get position of the player and the position of the enemy base
      var dist: Double = p.location.distance2d(baseLoc)
      if (dist < playerSize){
        baseHealth -= 1
        p.location = startingVector()
      }
    }
  }


  def checkForPlayerHits(): Unit = {
    // TODO: Objective 3
    for (p <- players.values){
      for (pr <- projectiles) {
        var dist: Double = p.location.distance2d(pr.location)
        if (dist < playerSize) {
          p.location = startingVector()
          pr.destroy()
        }
      }
    }
  }


}
