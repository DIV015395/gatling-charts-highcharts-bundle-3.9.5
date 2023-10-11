var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1594",
        "ok": "1188",
        "ko": "406"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "10072"
    },
    "maxResponseTime": {
        "total": "17405",
        "ok": "17123",
        "ko": "17405"
    },
    "meanResponseTime": {
        "total": "7187",
        "ok": "5464",
        "ko": "12226"
    },
    "standardDeviation": {
        "total": "5800",
        "ok": "5743",
        "ko": "1212"
    },
    "percentiles1": {
        "total": "9242",
        "ok": "1220",
        "ko": "13117"
    },
    "percentiles2": {
        "total": "12860",
        "ok": "10655",
        "ko": "13338"
    },
    "percentiles3": {
        "total": "14932",
        "ok": "15229",
        "ko": "13454"
    },
    "percentiles4": {
        "total": "15801",
        "ok": "15852",
        "ko": "13504"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 583,
    "percentage": 37
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 10,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 595,
    "percentage": 37
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 406,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "83.895",
        "ok": "62.526",
        "ko": "21.368"
    }
},
contents: {
"req_websocket-conne-b6a6d": {
        type: "REQUEST",
        name: "WebSocket Connect",
path: "WebSocket Connect",
pathFormatted: "req_websocket-conne-b6a6d",
stats: {
    "name": "WebSocket Connect",
    "numberOfRequests": {
        "total": "1000",
        "ok": "594",
        "ko": "406"
    },
    "minResponseTime": {
        "total": "1006",
        "ok": "1006",
        "ko": "10072"
    },
    "maxResponseTime": {
        "total": "17405",
        "ok": "17123",
        "ko": "17405"
    },
    "meanResponseTime": {
        "total": "11295",
        "ok": "10659",
        "ko": "12226"
    },
    "standardDeviation": {
        "total": "2880",
        "ok": "3459",
        "ko": "1212"
    },
    "percentiles1": {
        "total": "11419",
        "ok": "10656",
        "ko": "13117"
    },
    "percentiles2": {
        "total": "13335",
        "ok": "13267",
        "ko": "13338"
    },
    "percentiles3": {
        "total": "15367",
        "ok": "15664",
        "ko": "13454"
    },
    "percentiles4": {
        "total": "15895",
        "ok": "16264",
        "ko": "13504"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 590,
    "percentage": 59
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 406,
    "percentage": 41
},
    "meanNumberOfRequestsPerSecond": {
        "total": "52.632",
        "ok": "31.263",
        "ko": "21.368"
    }
}
    },"req_websocket-close-9c2d8": {
        type: "REQUEST",
        name: "WebSocket Close",
path: "WebSocket Close",
pathFormatted: "req_websocket-close-9c2d8",
stats: {
    "name": "WebSocket Close",
    "numberOfRequests": {
        "total": "594",
        "ok": "594",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2085",
        "ok": "2085",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "270",
        "ok": "270",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "percentiles1": {
        "total": "222",
        "ok": "222",
        "ko": "-"
    },
    "percentiles2": {
        "total": "345",
        "ok": "345",
        "ko": "-"
    },
    "percentiles3": {
        "total": "523",
        "ok": "523",
        "ko": "-"
    },
    "percentiles4": {
        "total": "943",
        "ok": "943",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 583,
    "percentage": 98
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 6,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 5,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "31.263",
        "ok": "31.263",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
