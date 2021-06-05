package com.mpbauer.serverless.samples.awslambda

import io.gatling.core.Predef._
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.concurrent.duration.DurationInt

class QuarkusPetclinicAWSLambdaNativeColdStart extends Simulation {

  val httpProtocol: HttpProtocolBuilder = http
    .baseUrl("https://qeh5i8z4ya.execute-api.eu-central-1.amazonaws.com")
    .inferHtmlResources()
    .acceptHeader("application/json, text/plain, */*")
    .contentTypeHeader("application/json")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.9,de;q=0.8")
    .authorizationHeader("Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJncm91cHMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVkVUX0FETUlOIiwiUk9MRV9PV05FUl9BRE1JTiJdLCJzdWIiOiJYMDAwMDQiLCJpYXQiOjE2MTQ4Nzg2NjksImV4cCI6NDc3MDU1MjI2OSwianRpIjoiZjUwM2FkMWItMTkyNy00ZDQ0LTlhNjAtOWU4ZThmNDM2YTA2IiwiaXNzIjoiaHR0cHM6Ly9zcHJpbmctcGV0Y2xpbmljLmdpdGh1Yi5pby9pc3N1ZXIifQ.w2-po_4b9S6Y08tNuv1dn0J0jyd84QiP2qTlWKgj3pGY9VUeXefIKRq9-MTyP-LvkDXNgCyQ6DbDRUt-A7uRdxiDiteirdvg0-7aRKDQBMWtJmEIDAVqZfz20q7ycGMmu2wOEPnDxtSyWJoHLacDIHDQPXyR2AnUHZ1weuFnlipI5OGjeFw7aqT5QXhnj8RwMpw77bqofgIWBTRLLe-VJUYrP8ARiqpoqfPUM6oiS7spSMvItu9IFKWpbzHd0aEHxjfMk6gI8E0q8FEsqgn9l60vV0_FGQNiEXorgGZmPDXSCCK29kgGesvCBk0RYBKrR7LkNEj3uAsXITZKAs9bMA")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36")

  object OwnerAPI {
    val getOwners: ChainBuilder = exec(http("Get Owners")
      .get("/petclinic/api/owners")
      .requestTimeout(1.minutes)
    ).pause(930.seconds)
  }

  val quarkusPetclinicJVM: ScenarioBuilder = scenario("AWS Lambda - Quarkus Petclinic Native - Cold Start Testing")
    .repeat(400, "n") {
      exec(
        OwnerAPI.getOwners
      )
    }

  setUp(
    quarkusPetclinicJVM.inject(rampUsers(1).during(1.seconds)).protocols(httpProtocol)
  )
}