//chart data

var categories = {
    labels: [
        'JavaScript',
        'Ruby',
        'Front-end',
        'Tools'
    ],
    datasets: [
        {
            label: 'categories',
            data: [7, 7, 9, 7]
        }
    ]
};

var javaScript = {
    labels: [
        'ES6',
        'Node',
        'React',
        'jQuery'
    ],
    datasets: [
        {
        data: [7,5,7,7],
        }
    ]
};

var ruby = {
    labels: [
        'Rails',
        'RSpec',
        'factory_girl'
    ],
    datasets: [
        {
        data: [7,7,5]
        }
    ]
};

var frontEnd = {
    labels: [
        'HTML',
        'Sass/CSS',
        'Bootstrap',
        'Materialize'
    ],
    datasets: [
        {
        data: [7,7,5,7]
        }
    ]
};

var tools = {
    labels: [
        'Git/GitHub',
        'Heroku',
        'AWS',
        'webpack',
        'Gulp'
    ],
    datasets: [
        {
        data: [7,5,5,5,5]
        }
    ]
};

//var data = {
//    categories: {
//    labels: [
//        'Front-end Development',
//        'Platforms',
//        'Design',
//        'Analytics'
//    ],
//    datasets: [
//        {
//            label: 'categories',
//            data: [9,5,5,9]
//        }
//    ]
//},
//    javaScript: {
//        labels: [
//            'HTML',
//            'Sass/CSS',
//            'JavaScript',
//            'jQuery',
//            'Git'
//        ],
//        datasets: [
//            {
//            data: [9,9,5,7,5],
//            }
//        ]
//    },
//    ruby: {
//        labels: [
//            'Drupal',
//            'HubSpot',
//            'IBM Websphere Commerce',
//            'Umbraco'
//        ],
//        datasets: [
//            {
//            data: [9,9,5,7]
//            }
//        ]
//    },
//    frontEnd: {
//        labels: [
//            'Illustrator',
//            'Photoshop',
//            'Sketch',
//            'InVision'
//        ],
//        datasets: [
//            {
//            data: [5,9,3,7]
//            }
//        ]
//    },
//    tools: {
//        labels: [
//            'Google Tag Manager',
//            'Google Analytics',
//            'Tableau',
//            'Heap',
//            'Hotjar'
//        ],
//        datasets: [
//            {
//            data: [7,9,3,7,9]
//            }
//        ]
//    }
//
//};

//chart config
var ctx = document.getElementById('chart').getContext('2d');

ctx.scale(2,2);

//var resizeChart = function(){
//    $('#chart').width($('#chart').parent().innerWidth()); $('#chart').height($('#chart').parent().innerHeight());
//};

//resizeChart();

var options = {
        responsive: true,
        maintainAspectRatio: false,
        color: 'rgba(255,255,255,.87)',
        defaultColor: 'rgba(255,255,255,.87)',
        defaultFontColor: 'rgba(255,255,255,.87)',
        fontColor: 'rgba(255,255,255,.87)',
        pointLabelFontColor: 'rgba(255,255,255,.87)',
        percentageInnerCutout: 50,
        elements: {
            line: {
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderColor: 'transparent',
                tension: -0.25
            },
            point: {
                backgroundColor: 'rgba(29, 233, 182, .75)',
                borderColor: 'rgba(29, 233, 182, .87)',
                borderWidth: 3,
                hoverBorderWidth: 5,
                radius: 10,
                hoverRadius: 12,
                pointStyle: 'circle'
            }
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        scale: {
            scaleLabel: {
                display: true
            },
            ticks: {
                beginAtZero: true,
                display: false,
                min: 0,
                max: 10
            },
            pointLabels: {
                fontColor: 'rgba(255,255,255,.7)'
            },
            angleLines: {
                color: 'rgba(255,255,255,.12)'
            },
            gridLines: {
                color: 'rgba(255,255,255,.12)',
                zeroLineColor: 'rgba(255,255,255,.12)'
            },
            margins: {
                bottom:25
            },
            paddingBottom: 25
        }
};

var myChart = new Chart(ctx, {
    data: categories,
    type: 'radar',
    options: options
});

function recreateChart (data) {

//    resizeChart();
    myChart.destroy();
    ctx = document.getElementById('chart').getContext('2d');
    myChart = new Chart(ctx, {data: data, type: 'radar', options: options});
}

$('#chart').on('click', function (evt){
    var activePoints = myChart.getElementAtEvent(evt);
    var index;
    var dataSet;
    if (activePoints.length !== 0){
        index = activePoints[0]._index;
        dataSet = activePoints[0]._chart.config.data.datasets[0].label;
        if (dataSet == 'categories'){
            if (index === 0){
                recreateChart(javaScript);
            }
            else if (index == 1){
                recreateChart(ruby);
            }
            else if (index == 2){
                recreateChart(frontEnd);
            }
            else if (index == 3){
                recreateChart(tools);
            }
        }
        else {
            recreateChart(categories);
        }
    }
    else if (myChart.data.datasets[0].label != 'categories'){
        recreateChart(categories);
    }
});
