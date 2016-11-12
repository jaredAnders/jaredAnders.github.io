//timeline

var timelineMe = require('jquery-timelineme');

var items = [
    {
      type: 'smallItem',
      label: '8/16',
      shortContent: '<b>Full-stack Web Development</b><br> <i>The Firehose Project</i>',
      fullContent: 'Ruby, Rails & JavaScript<br>Programming fundamentals<br>Development tools and workflows',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '8/16',
      shortContent: '<b>Digital Developer</b><br> <i>Injured Workers Pharmacy LLC</i>',
      fullContent: 'Digital strategy and web analytics',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'left'
    },
    {
      type: 'smallItem',
      label: '6/16',
      shortContent: '<b>Object-Oriented JavaScript</b> <i>Udacity</i>',
      fullContent: 'Intro to object-oriented programming in JavaScript',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '5/16',
      shortContent: '<b>JavaScript Basics</b> <i>Udacity</i>',
      fullContent: 'Revisit JavaScript fundamentals',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '4/16',
      shortContent: '<b>jQuery</b> <i>CodeSchool</i>',
      fullContent: 'Revisit jQuery fundamentals, introduction to Ajax',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '3/16',
      shortContent: '<b>Git</b> <i>Codecademy</i>',
      fullContent: 'Practiced version control fundamentals',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '1/16 - 2/16',
      shortContent: '<b>CS50x</b> <i>edX</i>',
      fullContent: 'Introduction to Computer Science, HarvardX',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '4/15 - present',
      shortContent: '<b>e-Marketing Coordinator</b> <i>Injured Workers Pharmacy LLC</i>',
      fullContent: 'Manage development of web application, design and develop landing pages in Drupal, analyze web traffic and coordinate digital marketing strategy',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'left'
    },
    {
      type: 'smallItem',
      label: '8/14',
      shortContent: '<b>jQuery</b> <i>Codecademy</i>',
      fullContent: 'Learned to make websites interactive',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '7/14',
      shortContent: '<b>HTML & CSS</b> <i>Codecademy</i>',
      fullContent: 'Learned how to structure and style web pages',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '6/14 - 3/15',
      shortContent: '<b>eCommerce Marketing Specialist</b> <i>Trivantage LLC</i>',
      fullContent: 'Developed landing pages and administered live chat',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'left'
    },
    {
      type: 'smallItem',
      label: '11/13',
      shortContent: '<b>JavaScript</b> <i>Codecademy</i>',
      fullContent: 'Introduction to JavaScript syntax and fundamental concepts',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '5/13 - 5/14',
      shortContent: '<b>Supply Chain Specialist</b> <i>Trivantage LLC</i>',
      fullContent: 'Developed intranet using Google Apps Script and Google Apps for Work',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'left'
    },
    {
      type: 'smallItem',
      label: '1/13 - 4/13',
      shortContent: '<b>Inventory Control and Marketing Associate</b> <i>Trivantage LLC</i>',
      fullContent: 'Processed orders and optimized ROI for marketing program',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'left'
    },
    {
      type: 'smallItem',
      label: '2013',
      shortContent: '<b>Bachelor of Science, Music Technology</b> <i>Elon University</i>',
      fullContent: 'Studied music production, recording and theory',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '6/12 - 12/12',
      shortContent: '<b>Marketing Intern</b> <i>Trivantage LLC</i>',
      fullContent: 'Researched marketing strategies and created business plans for expanding into new markets',
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
