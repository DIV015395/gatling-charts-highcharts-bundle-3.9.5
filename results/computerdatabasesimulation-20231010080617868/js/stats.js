var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "20",
        "ok": "0",
        "ko": "20"
    },
    "minResponseTime": {
        "total": "71",
        "ok": "-",
        "ko": "71"
    },
    "maxResponseTime": {
        "total": "557",
        "ok": "-",
        "ko": "557"
    },
    "meanResponseTime": {
        "total": "314",
        "ok": "-",
        "ko": "314"
    },
    "standardDeviation": {
        "total": "222",
        "ok": "-",
        "ko": "222"
    },
    "percentiles1": {
        "total": "279",
        "ok": "-",
        "ko": "279"
    },
    "percentiles2": {
        "total": "552",
        "ok": "-",
        "ko": "552"
    },
    "percentiles3": {
        "total": "555",
        "ok": "-",
        "ko": "555"
    },
    "percentiles4": {
        "total": "557",
        "ok": "-",
        "ko": "557"
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
    "count": 20,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20",
        "ok": "-",
        "ko": "20"
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
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "455",
        "ok": "-",
        "ko": "455"
    },
    "maxResponseTime": {
        "total": "557",
        "ok": "-",
        "ko": "557"
    },
    "meanResponseTime": {
        "total": "534",
        "ok": "-",
        "ko": "534"
    },
    "standardDeviation": {
        "total": "39",
        "ok": "-",
        "ko": "39"
    },
    "percentiles1": {
        "total": "552",
        "ok": "-",
        "ko": "552"
    },
    "percentiles2": {
        "total": "554",
        "ok": "-",
        "ko": "554"
    },
    "percentiles3": {
        "total": "556",
        "ok": "-",
        "ko": "556"
    },
    "percentiles4": {
        "total": "557",
        "ok": "-",
        "ko": "557"
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
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "-",
        "ko": "10"
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
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "71",
        "ok": "-",
        "ko": "71"
    },
    "maxResponseTime": {
        "total": "102",
        "ok": "-",
        "ko": "102"
    },
    "meanResponseTime": {
        "total": "94",
        "ok": "-",
        "ko": "94"
    },
    "standardDeviation": {
        "total": "12",
        "ok": "-",
        "ko": "12"
    },
    "percentiles1": {
        "total": "100",
        "ok": "-",
        "ko": "100"
    },
    "percentiles2": {
        "total": "100",
        "ok": "-",
        "ko": "100"
    },
    "percentiles3": {
        "total": "102",
        "ok": "-",
        "ko": "102"
    },
    "percentiles4": {
        "total": "102",
        "ok": "-",
        "ko": "102"
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
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "-",
        "ko": "10"
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
