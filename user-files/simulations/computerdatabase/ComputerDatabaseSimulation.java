package computerdatabase;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;
import static io.gatling.recorder.internal.bouncycastle.oer.its.ieee1609dot2.basetypes.Duration.seconds;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import java.util.concurrent.ThreadLocalRandom;


public class ComputerDatabaseSimulation extends Simulation
{
    HttpProtocolBuilder httpProtocol = http
            .baseUrl("https://chatqa.clovedental.in")
            .wsBaseUrl("wss://chatqa.clovedental.in") // WebSocket URL
            .acceptHeader("text/plain, */*; q=0.01")
            .header("Sec-WebSocket-Version", "13")
            .header("Sec-WebSocket-Extensions", "permessage-deflate; client_max_window_bits; server_max_window_bits=15")
            .header("Sec-WebSocket-Key", "amxpZGVmbHh5bGljeXl2aQ==")
            .header("current_chat_id", "0")
            .header("userId", "7")
            .header("Connection", "Upgrade")
            .header("authToken", "RDZgQ1v6bZ2LyQvy5mObo9PtnrB1fICp7BWAOIaD6a4%3D")
            .header("deviceId", "93723B60-19AE-4B82-831F-9DD9A4899351-1696586186.616768-12EFBD82-6609-4FBE-A588-B5A75B8C2779")
            .header("connected_in", "1")
            .header("Upgrade", "websocket")
            .header("Host", "chatqa.clovedental.in:443")
            .header("Origin", "wss://chatqa.clovedental.in")
            .header("platform", "iOS");
    ScenarioBuilder scn = scenario("WebSocket Load Test")
            .exec(
                    ws("WebSocket Connect")
                            .connect("/wss2/socket")
            )
            .pause(10) // Adjust as needed for your load testing scenario
            .exec(
                    ws("WebSocket Close").close()
            );
    {
        setUp(scn.injectOpen(atOnceUsers(1000))).protocols(httpProtocol);// Adjust the number of users as needed)
    }


}
