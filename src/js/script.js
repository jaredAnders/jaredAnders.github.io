//header
$(window).scroll(function(){
    var a = $(window).scrollTop();
    if (a >0) {
        $('header').addClass('scrolled');
    }
    else {
        $('header').removeClass('scrolled');
    }
});

//menu
$('#menu-toggle').click(function() {
    $('.overlay').addClass('open', 300);
    $('#menu').css(
        'transform','translateX(0%)'
    );
});

$('.overlay').on('click',function(){
    $('.overlay').removeClass('open', 300);
    $('#menu').css(
        'transform','translateX(100%)'
    );
});

//close-nav function, on buttons

/*
$('#menu li').click(function(){
    
    $('#menu li').removeClass('selected',0);
    $(this).addClass('selected',0);
});
*/

//chart data

var categories = {
    labels: [
        'Front-end Development',
        'Platforms',
        'Design',
        'Analytics'
    ],
    datasets: [
        {
            label: 'categories',
            data: [9,5,5,9]
        }
    ]
};

var dev = {
    labels: [
        'HTML',
        'Sass/CSS',
        'JavaScript',
        'jQuery',
        'Git'
    ],
    datasets: [
        {
        data: [9,9,5,7,5],
        }
    ]
};

var platforms = {
    labels: [
        'Drupal',
        'HubSpot',
        'IBM Websphere Commerce',
        'Umbraco'
    ],
    datasets: [
        {
        data: [9,9,5,7]
        }
    ]
};

var design = {
    labels: [
        'Illustrator',
        'Photoshop',
        'Sketch',
        'InVision'
    ],
    datasets: [
        {
        data: [5,9,3,7]
        }
    ]
};

var analytics = {
    labels: [
        'Google Tag Manager',
        'Google Analytics',
        'Tableau',
        'Heap',
        'Hotjar'
    ],
    datasets: [
        {
        data: [7,9,3,7,9]
        }
    ]
};

//chart config
var ctx = document.getElementById('chart').getContext('2d');

var options = {
        responsive: true,
        color: 'rgba(255,255,255,.87)',
        defaultColor: 'rgba(255,255,255,.87)',
        defaultFontColor: 'rgba(255,255,255,.87)',
        fontColor: 'rgba(255,255,255,.87)',
        pointLabelFontColor: 'rgba(255,255,255,.87)',
        elements: {
            line: {
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderColor: 'transparent'
            },
            point: {
                backgroundColor: 'rgba(224, 64, 251, 0.75)',
                borderColor: 'rgba(224, 64, 251, .87)',
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
                fontColor: 'rgba(255,255,255,.87)'
            },
            angleLines: {
                color: 'rgba(255,255,255,.12)'
            },
            gridLines: {
                color: 'rgba(255,255,255,.12)',
                zeroLineColor: 'rgba(255,255,255,.12)'
            }
        }
}

var myChart = new Chart(ctx, {
    data: categories,
    type: 'radar',
    options: options
});

function recreateChart (data) {
    myChart.destroy();
    ctx = document.getElementById('chart').getContext('2d');
    myChart = new Chart(ctx, {data: data, type: 'radar', options: options});
}

var activePoints;

$('#chart').on('click', function (evt){
    activePoints = myChart.getElementAtEvent(evt);
    var index;
    var dataSet;
    if (activePoints.length != 0){
        index = activePoints[0]._index;
        dataSet = activePoints[0]._chart.config.data.datasets[0].label;
        if (dataSet == 'categories'){
            if (index == 0){
                recreateChart(dev);
            }
            else if (index == 1){
                recreateChart(platforms);
            }
            else if (index == 2){
                recreateChart(design);
            }
            else if (index == 3){
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

//form
var url = '//formspree.io/' + 'pciowr20' + '@robot.' + 'zapier.com';

function submitForm() {
    $.ajax({
        url: url,
        method: 'POST',
        data: $('#contactform').serialize(),
        dataType:'json'
    })
    $('#contactform').fadeOut();
};

var test = {
    dev: {
        category: 'Development',
        skills: [
            {
            title: 'HTML',
            level: 3
            },
            {
            title: 'Sass/CSS',
            level: 3
            }
        ]
    }
};
