var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1641",
        "ok": "1282",
        "ko": "359"
    },
    "minResponseTime": {
        "total": "24",
        "ok": "24",
        "ko": "10149"
    },
    "maxResponseTime": {
        "total": "13966",
        "ok": "13966",
        "ko": "11699"
    },
    "meanResponseTime": {
        "total": "6172",
        "ok": "4875",
        "ko": "10805"
    },
    "standardDeviation": {
        "total": "4987",
        "ok": "4909",
        "ko": "378"
    },
    "percentiles1": {
        "total": "7992",
        "ok": "1886",
        "ko": "10613"
    },
    "percentiles2": {
        "total": "10606",
        "ok": "9525",
        "ko": "11192"
    },
    "percentiles3": {
        "total": "12535",
        "ok": "12770",
        "ko": "11472"
    },
    "percentiles4": {
        "total": "13577",
        "ok": "13615",
        "ko": "11545"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 625,
    "percentage": 38
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 15,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 642,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 359,
    "percentage": 22
},
    "meanNumberOfRequestsPerSecond": {
        "total": "96.529",
        "ok": "75.412",
        "ko": "21.118"
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
        "ok": "641",
        "ko": "359"
    },
    "minResponseTime": {
        "total": "1775",
        "ok": "1775",
        "ko": "10149"
    },
    "maxResponseTime": {
        "total": "13966",
        "ok": "13966",
        "ko": "11699"
    },
    "meanResponseTime": {
        "total": "9931",
        "ok": "9442",
        "ko": "10805"
    },
    "standardDeviation": {
        "total": "2144",
        "ok": "2535",
        "ko": "378"
    },
    "percentiles1": {
        "total": "10515",
        "ok": "9525",
        "ko": "10613"
    },
    "percentiles2": {
        "total": "11177",
        "ok": "11139",
        "ko": "11192"
    },
    "percentiles3": {
        "total": "13036",
        "ok": "13302",
        "ko": "11472"
    },
    "percentiles4": {
        "total": "13655",
        "ok": "13753",
        "ko": "11545"
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
    "count": 641,
    "percentage": 64
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 359,
    "percentage": 36
},
    "meanNumberOfRequestsPerSecond": {
        "total": "58.824",
        "ok": "37.706",
        "ko": "21.118"
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
        "total": "641",
        "ok": "641",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4916",
        "ok": "4916",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "308",
        "ok": "308",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "255",
        "ok": "255",
        "ko": "-"
    },
    "percentiles1": {
        "total": "283",
        "ok": "283",
        "ko": "-"
    },
    "percentiles2": {
        "total": "395",
        "ok": "395",
        "ko": "-"
    },
    "percentiles3": {
        "total": "666",
        "ok": "666",
        "ko": "-"
    },
    "percentiles4": {
        "total": "908",
        "ok": "908",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 625,
    "percentage": 98
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 15,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.706",
        "ok": "37.706",
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
