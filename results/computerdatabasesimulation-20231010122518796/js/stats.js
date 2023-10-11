var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "746",
        "ok": "292",
        "ko": "454"
    },
    "minResponseTime": {
        "total": "24",
        "ok": "24",
        "ko": "10142"
    },
    "maxResponseTime": {
        "total": "11479",
        "ok": "9299",
        "ko": "11479"
    },
    "meanResponseTime": {
        "total": "7736",
        "ok": "3460",
        "ko": "10485"
    },
    "standardDeviation": {
        "total": "4112",
        "ok": "3611",
        "ko": "278"
    },
    "percentiles1": {
        "total": "10318",
        "ok": "568",
        "ko": "10411"
    },
    "percentiles2": {
        "total": "10433",
        "ok": "7521",
        "ko": "10466"
    },
    "percentiles3": {
        "total": "11123",
        "ok": "8191",
        "ko": "11162"
    },
    "percentiles4": {
        "total": "11244",
        "ok": "9192",
        "ko": "11310"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 146,
    "percentage": 20
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 145,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 454,
    "percentage": 61
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.909",
        "ok": "13.273",
        "ko": "20.636"
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
        "total": "600",
        "ok": "146",
        "ko": "454"
    },
    "minResponseTime": {
        "total": "846",
        "ok": "846",
        "ko": "10142"
    },
    "maxResponseTime": {
        "total": "11479",
        "ok": "9299",
        "ko": "11479"
    },
    "meanResponseTime": {
        "total": "9596",
        "ok": "6831",
        "ko": "10485"
    },
    "standardDeviation": {
        "total": "1825",
        "ok": "1830",
        "ko": "278"
    },
    "percentiles1": {
        "total": "10371",
        "ok": "7521",
        "ko": "10411"
    },
    "percentiles2": {
        "total": "10447",
        "ok": "7965",
        "ko": "10466"
    },
    "percentiles3": {
        "total": "11134",
        "ok": "9127",
        "ko": "11162"
    },
    "percentiles4": {
        "total": "11259",
        "ok": "9280",
        "ko": "11310"
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
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 145,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 454,
    "percentage": 76
},
    "meanNumberOfRequestsPerSecond": {
        "total": "27.273",
        "ok": "6.636",
        "ko": "20.636"
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
        "total": "146",
        "ok": "146",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "289",
        "ok": "289",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "55",
        "ok": "55",
        "ko": "-"
    },
    "percentiles1": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "percentiles2": {
        "total": "127",
        "ok": "127",
        "ko": "-"
    },
    "percentiles3": {
        "total": "209",
        "ok": "209",
        "ko": "-"
    },
    "percentiles4": {
        "total": "226",
        "ok": "226",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 146,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.636",
        "ok": "6.636",
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
