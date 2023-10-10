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
            .baseUrl("https://chatqa.clovedental.in/cometchat_send.php") // Replace with the WebSocket URL's base URL
            .header("basedata","W3WNF%2BGgnXSGZV%2Bp8uJFKLzVqk3dJs5s2cCpjVe0Yzk%3D")
            .header("file_url","")
            .header("localmessageid","55663239408920")
            .header("msg_type","10")
            .header("to","65");
    ScenarioBuilder users  = scenario("WebSocket Load Test")
            .exec(http("WebSocket Connection")
                    .get("/wss2/socket") // Replace with the WebSocket path
                    .check(status().is(101))) // Check if the WebSocket connection is successfully upgraded to WebSocket

            .pause(5 ,seconds) // Adjust the pause duration as needed

            .exec(http("WebSocket Interaction")
                    .post("wss://chatqa.clovedental.in/wss2/socket") // Replace with the WebSocket path
                    .header("platform", "android")
                    .header("appVersion", "3.1.3")
                    .header("platformVersion", "33")
                    .header("userId", "14")
                    .header("current_chat_id", "0")
                    .header("authToken", "W3WNF%2BGgnXSGZV%2Bp8uJFKLzVqk3dJs5s2cCpjVe0Yzk%3D")
                    .header("connected_in", "2")
                    .header("deviceId", "3e5830ea-d0a9-4e66-968d-fd8314730a4a")
                    .body(StringBody(""))
                    .check(status().is(101))) // Check if WebSocket interaction is successful
            .pause(5, seconds) ;

    {
        setUp(
                users.injectOpen(atOnceUsers(10)) // Adjust the number of users as needed
        ).protocols(httpProtocol);
    }
}
