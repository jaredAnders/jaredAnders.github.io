//timeline

var timelineMe = require('jquery-timelineme');

var items = [
    {
      type: 'smallItem',
      label: '8/16 - present',
      shortContent: '<b>Full-stack Web Development</b><br> <i>The Firehose Project</i>',
      fullContent: '<b>Full-stack Web Development</b><br> <i>The Firehose Project</i><br>- Ruby, Rails & JavaScript<br>- Computer Science fundamentals<br>- Development tools and workflows',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '8/16 - present',
      shortContent: '<b>Digital Developer</b><br> <i>Injured Workers Pharmacy</i>',
      fullContent: '<b>Digital Developer</b><br> <i>Injured Workers Pharmacy</i><br>- Digital strategy and web analytics',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'left'
    },
    {
      type: 'smallItem',
      label: '6/16',
      shortContent: '<b>Object-Oriented JavaScript</b> <i>Udacity</i>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '5/16',
      shortContent: '<b>JavaScript Basics</b> <i>Udacity</i>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '4/16',
      shortContent: '<b>jQuery</b> <i>CodeSchool</i>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '3/16',
      shortContent: '<b>Git</b> <i>Codecademy</i>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '1 - 2/16',
      shortContent: '<b>CS50x: Intro to Computer Science</b><br> <i>HarvardX</i>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '4/15 - 8/16',
      shortContent: '<b>e-Marketing Coordinator</b> <i>Injured Workers Pharmacy</i>',
      fullContent: '<b>e-Marketing Coordinator</b> <i>Injured Workers Pharmacy</i><br>- Managed 3rd-party development of web application<br>- Designed and developed landing pages in Drupal<br>- Analyzed web traffic<br>- Coordinated digital marketing strategy',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'left'
    },
    {
      type: 'smallItem',
      label: '8/14',
      shortContent: '<b>jQuery</b> <i>Codecademy</i>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '7/14',
      shortContent: '<b>HTML & CSS</b> <i>Codecademy</i>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '6/14 - 3/15',
      shortContent: '<b>eCommerce Marketing Specialist</b> <i>Trivantage</i>',
      fullContent: '<b>eCommerce Marketing Specialist</b> <i>Trivantage</i><br>- Developed landing pages and administered live chat',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'left'
    },
    {
      type: 'smallItem',
      label: '11/13',
      shortContent: '<b>JavaScript</b> <i>Codecademy</i>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '5/13 - 5/14',
      shortContent: '<b>Supply Chain Specialist</b> <i>Trivantage</i>',
      fullContent: '<b>Supply Chain Specialist</b> <i>Trivantage</i><br>- Developed intranet using Google Apps Script and Google Apps for Work',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'left'
    },
    {
      type: 'smallItem',
      label: '1/13 - 4/13',
      shortContent: '<b>Inventory Control and Marketing Associate</b> <i>Trivantage</i>',
      fullContent: '<b>Inventory Control and Marketing Associate</b> <i>Trivantage</i><br>- Processed orders and optimized ROI for marketing program',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'left'
    },
    {
      type: 'smallItem',
      label: '2013',
      shortContent: '<b>Bachelor of Science, Music Technology</b> <i>Elon University</i>',
      fullContent: '- Music production, recording and theory',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '6/12 - 12/12',
      shortContent: '<b>Marketing Intern</b> <i>Trivantage</i>',
      fullContent: '<b>Marketing Intern</b> <i>Trivantage</i><br>- Researched marketing strategies and created business plans for expanding into new markets',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'left'
    }
  ]

$('#timeline-container-basic').timelineMe({
    labelClass: 'time-label',
    shortContentClass: 'time-short',
    items: items
});
