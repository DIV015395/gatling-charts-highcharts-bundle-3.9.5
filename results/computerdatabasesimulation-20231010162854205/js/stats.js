var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "650",
        "ok": "300",
        "ko": "350"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "42",
        "ko": "10253"
    },
    "maxResponseTime": {
        "total": "11019",
        "ok": "10313",
        "ko": "11019"
    },
    "meanResponseTime": {
        "total": "7254",
        "ok": "3487",
        "ko": "10484"
    },
    "standardDeviation": {
        "total": "4322",
        "ok": "3753",
        "ko": "169"
    },
    "percentiles1": {
        "total": "10303",
        "ok": "666",
        "ko": "10455"
    },
    "percentiles2": {
        "total": "10472",
        "ok": "7874",
        "ko": "10534"
    },
    "percentiles3": {
        "total": "10751",
        "ok": "8816",
        "ko": "10852"
    },
    "percentiles4": {
        "total": "10937",
        "ok": "10272",
        "ko": "10967"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 150,
    "percentage": 23
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 147,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 350,
    "percentage": 54
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15.476",
        "ok": "7.143",
        "ko": "8.333"
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
        "total": "500",
        "ok": "150",
        "ko": "350"
    },
    "minResponseTime": {
        "total": "1133",
        "ok": "1133",
        "ko": "10253"
    },
    "maxResponseTime": {
        "total": "11019",
        "ok": "10313",
        "ko": "11019"
    },
    "meanResponseTime": {
        "total": "9397",
        "ok": "6862",
        "ko": "10484"
    },
    "standardDeviation": {
        "total": "2096",
        "ok": "2322",
        "ko": "169"
    },
    "percentiles1": {
        "total": "10359",
        "ok": "7877",
        "ko": "10455"
    },
    "percentiles2": {
        "total": "10500",
        "ok": "8691",
        "ko": "10534"
    },
    "percentiles3": {
        "total": "10827",
        "ok": "10250",
        "ko": "10852"
    },
    "percentiles4": {
        "total": "10949",
        "ok": "10296",
        "ko": "10967"
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
    "count": 3,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 147,
    "percentage": 29
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 350,
    "percentage": 70
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.905",
        "ok": "3.571",
        "ko": "8.333"
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
        "total": "150",
        "ok": "150",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "198",
        "ok": "198",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "112",
        "ok": "112",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "35",
        "ok": "35",
        "ko": "-"
    },
    "percentiles1": {
        "total": "112",
        "ok": "112",
        "ko": "-"
    },
    "percentiles2": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "percentiles3": {
        "total": "172",
        "ok": "172",
        "ko": "-"
    },
    "percentiles4": {
        "total": "188",
        "ok": "188",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 150,
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
        "total": "3.571",
        "ok": "3.571",
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
