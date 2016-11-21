//chart data

var categories = {
    labels: [
        'Front-end',
        'Back-end',
        // 'Design',
        'Analytics'
    ],
    datasets: [
        {
            label: 'categories',
            data: [9,7,9]
        }
    ]
};

var frontEnd = {
    labels: [
        'HTML',
        'Sass/CSS',
        'JavaScript',
        'jQuery',
        'AJAX/JSON',
        'Bootstrap',
        'Materialize.css'
    ],
    datasets: [
        {
        data: [9,9,7,7,7,5,7],
        }
    ]
};

var backEnd = {
    labels: [
        'Ruby',
        'Rails',
        'Git/GitHub',
        'Heroku',
        'AWS',
        'TDD'
    ],
    datasets: [
        {
        data: [7,9,9,7,5,5]
        }
    ]
};

// var design = {
//     labels: [
//         'Illustrator',
//         'Photoshop',
//         'Sketch',
//         'InVision'
//     ],
//     datasets: [
//         {
//         data: [5,9,3,7]
//         }
//     ]
// };

var analytics = {
    labels: [
        'Tableau',
        'Excel',
        'Google Tag Manager',
        'Google Analytics',
        'Heap'
    ],
    datasets: [
        {
        data: [5,9,7,9,7]
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
//    frontEnd: {
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
//    backEnd: {
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
//    design: {
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
//    analytics: {
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
                recreateChart(frontEnd);
            }
            else if (index == 1){
                recreateChart(backEnd);
            }
            // else if (index == 2){
            //     recreateChart(design);
            // }
            else if (index == 2){
                recreateChart(analytics);
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
