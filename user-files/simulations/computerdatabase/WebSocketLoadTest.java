package computerdatabase;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;
import static io.gatling.recorder.internal.bouncycastle.oer.its.ieee1609dot2.basetypes.Duration.seconds;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import java.util.concurrent.ThreadLocalRandom;

class WebSocketLoadTest extends Simulation {
    HttpProtocolBuilder httpProtocol = http
            .baseUrl("https://chatqa.clovedental.in") // Replace with the WebSocket URL's base URL
            .acceptHeader("application/json");
    ScenarioBuilder users  = scenario("WebSocket Load Test")
            .exec(http("WebSocket Connection")
                    .get("/wss2/socket") // Replace with the WebSocket path
                    .check(status().is(101))) // Check if the WebSocket connection is successfully upgraded to WebSocket

            .pause(5 ,seconds) // Adjust the pause duration as needed

            .exec(http("WebSocket Interaction")
                    .post("/wss2/socket") // Replace with the WebSocket path
                    .header("Upgrade", "websocket")
                    .header("Connection", "Upgrade")
                    .header("Sec-WebSocket-Key", "dGhlIHNhbXBsZSBub25jZQ==")
                    .header("Sec-WebSocket-Version", "13")
                    .body(StringBody(""))
                    .check(status().is(101))) // Check if WebSocket interaction is successful

            .pause(5, seconds) ;
    // Adjust the pause duration as needed
    {
        setUp(
                users.injectOpen(atOnceUsers(10)) // Adjust the number of users as needed
        ).protocols(httpProtocol);
    }
}
