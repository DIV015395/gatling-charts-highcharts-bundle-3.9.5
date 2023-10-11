var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1000",
        "ok": "500",
        "ko": "500"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "570",
        "ko": "29"
    },
    "maxResponseTime": {
        "total": "9893",
        "ok": "9893",
        "ko": "647"
    },
    "meanResponseTime": {
        "total": "3001",
        "ok": "5876",
        "ko": "126"
    },
    "standardDeviation": {
        "total": "3477",
        "ok": "2763",
        "ko": "84"
    },
    "percentiles1": {
        "total": "683",
        "ok": "6121",
        "ko": "107"
    },
    "percentiles2": {
        "total": "6121",
        "ok": "8280",
        "ko": "147"
    },
    "percentiles3": {
        "total": "9516",
        "ok": "9676",
        "ko": "297"
    },
    "percentiles4": {
        "total": "9757",
        "ok": "9802",
        "ko": "433"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 21,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 478,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 500,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "50",
        "ko": "50"
    }
},
contents: {
"req_websocket-conne-94980": {
        type: "REQUEST",
        name: "WebSocket Connection",
path: "WebSocket Connection",
pathFormatted: "req_websocket-conne-94980",
stats: {
    "name": "WebSocket Connection",
    "numberOfRequests": {
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "570",
        "ok": "570",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9893",
        "ok": "9893",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5876",
        "ok": "5876",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2763",
        "ok": "2763",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6121",
        "ok": "6121",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8280",
        "ok": "8280",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9676",
        "ok": "9676",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9802",
        "ok": "9802",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 21,
    "percentage": 4
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 478,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    }
}
    },"req_websocket-inter-f3ca5": {
        type: "REQUEST",
        name: "WebSocket Interaction",
path: "WebSocket Interaction",
pathFormatted: "req_websocket-inter-f3ca5",
stats: {
    "name": "WebSocket Interaction",
    "numberOfRequests": {
        "total": "500",
        "ok": "0",
        "ko": "500"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "-",
        "ko": "29"
    },
    "maxResponseTime": {
        "total": "647",
        "ok": "-",
        "ko": "647"
    },
    "meanResponseTime": {
        "total": "126",
        "ok": "-",
        "ko": "126"
    },
    "standardDeviation": {
        "total": "84",
        "ok": "-",
        "ko": "84"
    },
    "percentiles1": {
        "total": "107",
        "ok": "-",
        "ko": "107"
    },
    "percentiles2": {
        "total": "147",
        "ok": "-",
        "ko": "147"
    },
    "percentiles3": {
        "total": "297",
        "ok": "-",
        "ko": "297"
    },
    "percentiles4": {
        "total": "433",
        "ok": "-",
        "ko": "433"
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
    "count": 500,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "-",
        "ko": "50"
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
