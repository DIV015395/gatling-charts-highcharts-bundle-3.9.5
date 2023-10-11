var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "350",
        "ok": "300",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "50",
        "ok": "50",
        "ko": "10166"
    },
    "maxResponseTime": {
        "total": "10300",
        "ok": "9012",
        "ko": "10300"
    },
    "meanResponseTime": {
        "total": "3735",
        "ok": "2655",
        "ko": "10214"
    },
    "standardDeviation": {
        "total": "4010",
        "ok": "3256",
        "ko": "32"
    },
    "percentiles1": {
        "total": "1271",
        "ok": "787",
        "ko": "10209"
    },
    "percentiles2": {
        "total": "8131",
        "ok": "5890",
        "ko": "10228"
    },
    "percentiles3": {
        "total": "10221",
        "ok": "8303",
        "ko": "10285"
    },
    "percentiles4": {
        "total": "10283",
        "ok": "8973",
        "ko": "10294"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 150,
    "percentage": 43
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 8,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 142,
    "percentage": 41
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 50,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.537",
        "ok": "7.317",
        "ko": "1.22"
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
        "total": "200",
        "ok": "150",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "1089",
        "ok": "1089",
        "ko": "10166"
    },
    "maxResponseTime": {
        "total": "10300",
        "ok": "9012",
        "ko": "10300"
    },
    "meanResponseTime": {
        "total": "6436",
        "ok": "5177",
        "ko": "10214"
    },
    "standardDeviation": {
        "total": "3334",
        "ok": "2911",
        "ko": "32"
    },
    "percentiles1": {
        "total": "7085",
        "ok": "5892",
        "ko": "10209"
    },
    "percentiles2": {
        "total": "9301",
        "ok": "8131",
        "ko": "10228"
    },
    "percentiles3": {
        "total": "10233",
        "ok": "8654",
        "ko": "10285"
    },
    "percentiles4": {
        "total": "10285",
        "ok": "8989",
        "ko": "10294"
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
    "count": 8,
    "percentage": 4
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 142,
    "percentage": 71
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 50,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.878",
        "ok": "3.659",
        "ko": "1.22"
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
        "total": "50",
        "ok": "50",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "484",
        "ok": "484",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "percentiles1": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "percentiles2": {
        "total": "145",
        "ok": "145",
        "ko": "-"
    },
    "percentiles3": {
        "total": "215",
        "ok": "215",
        "ko": "-"
    },
    "percentiles4": {
        "total": "421",
        "ok": "421",
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
        "total": "3.659",
        "ok": "3.659",
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
