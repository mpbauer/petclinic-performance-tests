package com.mpbauer.serverless.samples.cloudrun

import io.gatling.core.Predef._
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.concurrent.duration.DurationInt

class SpringPetclinicSlimCloudRunJVMColdStart extends Simulation {

  val httpProtocol: HttpProtocolBuilder = http
    .baseUrl("https://spring-petclinic-rest-slim-jvm-dev-s2xflp6dzq-ey.a.run.app")
    .inferHtmlResources()
    .acceptHeader("application/json, text/plain, */*")
    .contentTypeHeader("application/json")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.9,de;q=0.8")
    .authorizationHeader("Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJYMDAwMDQiLCJncm91cHMiOlsiUk9MRV9PV05FUl9BRE1JTiIsIlJPTEVfVkVUX0FETUlOIiwiUk9MRV9BRE1JTiJdLCJleHAiOjQ3NzA1NTUyMTEsImlhdCI6MTYxNDg3ODAxOCwianRpIjoiNGVmMjY0MjctYWUyNi00MGJjLWEzYjYtYzk3NGE0YTc0YWEzIn0.ypi1TQiGEuWqTKZwNe1pqMn7aIGXPCgMfONEoYmL2mrYW66vF5B3wFxVHyApcOOqttqNWtxNw7kPCdmqtW730Q")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36")

  object OwnerAPI {
    val getOwners: ChainBuilder = exec(http("Get Owner")
      .get("/petclinic/api/owners")
      .requestTimeout(1.minutes)
    ).pause(930.seconds)
  }

  val springPetclinicSlimJVM: ScenarioBuilder = scenario("Google Cloud Run - Spring Petclinic Slim JVM - Cold Start Testing")
    .repeat(400, "n") {
      exec(
        OwnerAPI.getOwners
      )
    }

  setUp(
    springPetclinicSlimJVM.inject(rampUsers(1).during(1.seconds)).protocols(httpProtocol)
  )
}