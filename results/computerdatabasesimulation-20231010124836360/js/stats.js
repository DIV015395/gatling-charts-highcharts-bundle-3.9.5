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
        "total": "22",
        "ok": "22",
        "ko": "10158"
    },
    "maxResponseTime": {
        "total": "11379",
        "ok": "8170",
        "ko": "11379"
    },
    "meanResponseTime": {
        "total": "7288",
        "ok": "1993",
        "ko": "10694"
    },
    "standardDeviation": {
        "total": "4534",
        "ok": "2491",
        "ko": "385"
    },
    "percentiles1": {
        "total": "10343",
        "ok": "855",
        "ko": "10508"
    },
    "percentiles2": {
        "total": "10545",
        "ok": "2454",
        "ko": "11150"
    },
    "percentiles3": {
        "total": "11248",
        "ok": "6947",
        "ko": "11273"
    },
    "percentiles4": {
        "total": "11282",
        "ok": "7881",
        "ko": "11282"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 145,
    "percentage": 19
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 14,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 133,
    "percentage": 18
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
        "total": "871",
        "ok": "871",
        "ko": "10158"
    },
    "maxResponseTime": {
        "total": "11379",
        "ok": "8170",
        "ko": "11379"
    },
    "meanResponseTime": {
        "total": "9029",
        "ok": "3851",
        "ko": "10694"
    },
    "standardDeviation": {
        "total": "3173",
        "ok": "2343",
        "ko": "385"
    },
    "percentiles1": {
        "total": "10449",
        "ok": "2459",
        "ko": "10508"
    },
    "percentiles2": {
        "total": "11091",
        "ok": "6451",
        "ko": "11150"
    },
    "percentiles3": {
        "total": "11255",
        "ok": "7334",
        "ko": "11273"
    },
    "percentiles4": {
        "total": "11282",
        "ok": "7978",
        "ko": "11282"
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
    "count": 13,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 133,
    "percentage": 22
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
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "838",
        "ok": "838",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "134",
        "ok": "134",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "122",
        "ok": "122",
        "ko": "-"
    },
    "percentiles1": {
        "total": "127",
        "ok": "127",
        "ko": "-"
    },
    "percentiles2": {
        "total": "134",
        "ok": "134",
        "ko": "-"
    },
    "percentiles3": {
        "total": "349",
        "ok": "349",
        "ko": "-"
    },
    "percentiles4": {
        "total": "722",
        "ok": "722",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 145,
    "percentage": 99
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 1
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
