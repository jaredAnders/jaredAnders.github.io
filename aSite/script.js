//header
$(window).scroll(function(){
    var a = $(window).scrollTop();
    if (a >0) {
        $('header').addClass('scrolled');
    }
    else {
        $('header').removeClass('scrolled');
    }
})

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

//skills chart data
var categories = {
    datasets: [{
        data: [
            9,
            5,
            5,
            9
        ],
        backgroundColor: [
            'rgba(240, 101, 41, 0.9)',
            'rgba(198, 83, 140, 0.9)',
            'rgba(243, 223, 73, 0.9)',
            'rgba(7, 105, 173,0.9)'
            
        ],
        label: 'Experience'
    }],
    labels: [
        'Front-end Development',
        'Platforms',
        'Design',
        'Analytics'
    ]
};

var dev = {
    datasets: [{
        data: [
            9,
            9,
            5,
            7,
            5
        ],
        backgroundColor: [
            '#f06529',
            '#c6538c',
            '#f3df49',
            '#0769ad',
            '#f14e32'
        ],
        label: 'Experience'
    }],
    labels: [
        'HTML',
        'Sass/CSS',
        'JavaScript',
        'jQuery',
        'Git'
    ]
};

var platforms = {
    datasets: [{
        data: [
            9,
            9,
            5,
            7,
            3
        ],
        backgroundColor: [
            '#f06529',
            '#c6538c',
            '#f3df49',
            '#0769ad',
            '#f14e32'
        ],
        label: 'Experience'
    }],
    labels: [
        'Drupal',
        'HubSpot',
        'Umbraco',
        'IBM Websphere Commerce',
        'WordPress'
    ]
};

//skills chart
var ctx = document.getElementById('chart').getContext('2d');

var options = {
        responsive: true,
        elements: {
            arc: {
                borderColor: 'transparent'
            }
        },
        legend: {
            position: 'bottom',
            labels: {
                fontColor: 'rgba(255,255,255,.87)'
            }
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
            gridLines: {
                color: 'rgba(255,255,255,.12)'
            }
        }
}

var myChart = new Chart(ctx, {
    data: categories,
    type: 'polarArea',
    options: options
});

function recreateChart (data) {
    myChart.destroy();
    ctx = document.getElementById('chart').getContext('2d');
    myChart = new Chart(ctx, {data: data, type: 'polarArea', options: options});
}

$('#chart').on('click', function (evt){
    var activePoints = myChart.getElementAtEvent(evt);
    var label = activePoints[0]._model['label'];
    console.log(activePoints);
    console.log(label);
    if (activePoints.length != 0){
        if (label == 'Front-end Development'){
            recreateChart(dev);
        }
        else if (label == 'Platforms'){
            recreateChart(platforms);
        }
        else {
            recreateChart(categories);
        }
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
