package towers.model.game_objects

import play.api.libs.json.{JsValue, Json}
import towers.model.genetics.genes.Gene
import towers.model.physics.PhysicsVector

import scala.collection.mutable.ListBuffer

class DodgeBallTower(val x: Int, val y: Int) extends GameObject {

  // The height at which projectiles are fired
  val height = 3.0

  // Towers can only fire at players closer than this distance from the tower
  val sightRange = 5.0

  // The magnitude of the velocity at which projectiles are fired
  val projectileVelocity = 5.0


  def fire(jsonGameState: String): List[Projectile] = {
    // TODO: Objective 2
    var projectileList: List[Projectile] = List()
    val parsed: JsValue = Json.parse (jsonGameState)
    val players = (parsed \ "players").as[List[Map[String, JsValue]]]

    if (players.nonEmpty){
      var playersList: List[Player] = List ()
      for (p <- players) {
        val pLoc = new PhysicsVector(p("x").as[Double], p("y").as[Double])
        val pVel = new PhysicsVector(p("v_x").as[Double], p("v_y").as[Double])
        var newPlayer: Player = new Player(pLoc, pVel)
        playersList = playersList :+ newPlayer
      }
      val tLoc: PhysicsVector = new PhysicsVector(x+0.5,y+0.5, height)
      var smallestDist: Double = playersList(0).location.distance2d(tLoc)
      var closestPlayer: Player = playersList(0)
      for (p <- playersList){
        val pLoc1: PhysicsVector = p.location
        var dist: Double = pLoc1.distance2d(tLoc)
        if (smallestDist > dist){
          smallestDist = dist
          closestPlayer = p
        }
      }
      if (smallestDist <= sightRange) {
        var midX = x + 0.5
        var midY = y + 0.5
        projectileList = List (new Projectile(new PhysicsVector(midX, midY, height), new PhysicsVector(projectileVelocity * ((closestPlayer.location.x-midX)/smallestDist),projectileVelocity * ((closestPlayer.location.y-midY)/smallestDist))))
      }
    }
    println(projectileList)
    projectileList
  }


  def aimFire(jsonGameState: String): List[Projectile] = {
    // TODO: Bonus Objective
    List()
  }


  // Suggested Genetic Algorithm setup
  def getFitnessFunction(targetPlayer: Player): PhysicsVector => Double = {
    null
  }

  def vectorIncubator(genes: List[Gene]): PhysicsVector = {
    null
  }

}
