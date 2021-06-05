package com.mpbauer.serverless.samples.gke

import io.gatling.core.Predef._
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.concurrent.duration.DurationInt

class SpringPetclinicSlimKnativeJVM extends Simulation {

  val httpProtocol: HttpProtocolBuilder = http
    .baseUrl("TODO>")
    .inferHtmlResources()
    .acceptHeader("application/json, text/plain, */*")
    .contentTypeHeader("application/json")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.9,de;q=0.8")
    .authorizationHeader("Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJYMDAwMDQiLCJncm91cHMiOlsiUk9MRV9PV05FUl9BRE1JTiIsIlJPTEVfVkVUX0FETUlOIiwiUk9MRV9BRE1JTiJdLCJleHAiOjQ3NzA1NTUyMTEsImlhdCI6MTYxNDg3ODAxOCwianRpIjoiNGVmMjY0MjctYWUyNi00MGJjLWEzYjYtYzk3NGE0YTc0YWEzIn0.ypi1TQiGEuWqTKZwNe1pqMn7aIGXPCgMfONEoYmL2mrYW66vF5B3wFxVHyApcOOqttqNWtxNw7kPCdmqtW730Q")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36")

  object OwnerAPI {
    val createOwner: ChainBuilder = exec(http("Create Owner")
      .post("/petclinic/api/owners")
      .body(ElFileBody("request-bodies/create-owner-request.json"))
      .check(jsonPath("$.id")
        .saveAs("ownerId"))
    ).pause(1)

    val getOwner: ChainBuilder = exec(http("Get Owner")
      .get("/petclinic/api/owners/${ownerId}")
    ).pause(1)

    val updateOwner: ChainBuilder = exec(http("Update Owner")
      .put("/petclinic/api/owners/${ownerId}")
      .body(ElFileBody("request-bodies/update-owner-request.json"))
    ).pause(1)

    val deleteOwner: ChainBuilder = exec(
      http("Delete Owner")
        .delete("/petclinic/api/owners/${ownerId}")
    ).pause(1)
  }

  val jsonFileFeeder = jsonFile("data/owner-data.json").circular

  val springPetclinicSlimJVM: ScenarioBuilder = scenario("GKE with Knative - Spring Petclinic Slim JVM")
    .feed(jsonFileFeeder)
    .repeat(500, "n") {
      exec(
        OwnerAPI.createOwner,
        OwnerAPI.getOwner,
        OwnerAPI.updateOwner,
        OwnerAPI.deleteOwner
      )
    }

  setUp(
    springPetclinicSlimJVM.inject(rampUsers(70).during(14.seconds)).protocols(httpProtocol)
  )
}