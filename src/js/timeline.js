//timeline

var timelineMe = require('jquery-timelineme');

var items = [
    {
      type: 'smallItem',
      label: '8/16 - 1/17',
      shortContent: '<b>Software Engineering</b><br><i>The Firehose Project</i>',
      fullContent: '<b>Software Engineering</b><br><i>The Firehose Project</i><br><b>&middot;</b> Ruby, Rails & JavaScript<br><b>&middot;</b> MVC architecture<br><b>&middot;</b> Data structures and algorithms<br><b>&middot;</b> Test-Driven Development<br><b>&middot;</b> Agile methodologies',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '8/16 - present',
      shortContent: '<b>Digital Developer</b><br><i>Injured Workers Pharmacy</i>',
      fullContent: '<b>Digital Developer</b><br><i>Injured Workers Pharmacy</i><br><b>&middot;</b> Manage 3rd-party development of .NET web application<br><b>&middot;</b> Analyze web traffic and behavior using Tableau, Google Analytics and Heap<br><b>&middot;</b> Provide strategy and recommendations for digital initiatives',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'left'
    },
    {
      type: 'smallItem',
      label: '3 - 6/16',
      shortContent: '<b>Front-end Development Courses</b>',
      fullContent: '<b>Front-end Development Courses</b><br><b>&middot;</b> Object-Oriented JavaScript -<i> Udacity</i><br><b>&middot;</b> JavaScript Basics - <i>Udacity</i><br><b>&middot;</b> Git - <i>Codecademy</i>',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '1 - 2/16',
      shortContent: '<b>CS50x: Intro to Computer Science</b><br><i>HarvardX</i>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '4/15 - 8/16',
      shortContent: '<b>e-Marketing Coordinator</b><br><i>Injured Workers Pharmacy</i>',
      fullContent: '<b>e-Marketing Coordinator</b><br><i>Injured Workers Pharmacy</i><br><b>&middot;</b> Coordinated UX enhancements and architecture optimization for .NET web application<br><b>&middot;</b> Deployed and configured web analytics, provided reporting and led weekly meetings on user behavior patterns<br><b>&middot;</b> Designed and developed landing pages in Drupal using HTML, CSS and jQuery<br><b>&middot;</b> Configured technical setup of blog and marketing automation through HubSpot<br><b>&middot;</b> Evaluated and configured solutions for marketing technology stack',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'left'
    },
    {
      type: 'smallItem',
      label: '7 - 8/14',
      shortContent: '<b>HTML, CSS & jQuery</b><br><i>Codecademy</i>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '6/14 - 3/15',
      shortContent: '<b>eCommerce Marketing Specialist</b><br><i>Trivantage</i>',
      fullContent: '<b>eCommerce Marketing Specialist</b><br><i>Trivantage</i><br><b>&middot;</b> Designed and developed landing pages using HTML, CSS and jQuery for an IBM WebSphere Commerce site<br><b>&middot;</b> Configured JavaScript API, administered live chat, wrote user manual and trained operators<br><b>&middot;</b> Optimized internal site search synonyms',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'left'
    },
    {
      type: 'smallItem',
      label: '11/13',
      shortContent: '<b>JavaScript</b><br><i>Codecademy</i>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '5/13 - 5/14',
      shortContent: '<b>Supply Chain Specialist</b><br><i>Trivantage</i>',
      fullContent: '<b>Supply Chain Specialist</b><br><i>Trivantage</i><br><b>&middot;</b> Developed intranet using Google Apps and JavaScript to resolve production issues, coordinate installations, send email confirmations, display real-time analytics, generate reports and host a product and procedure wiki<br><b>&middot;</b> Modeled diagram of Trivantage IT solution architecture',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'left'
    },
    {
      type: 'smallItem',
      label: '1/13 - 4/13',
      shortContent: '<b>Inventory Control and Marketing Associate</b><br><i>Trivantage</i>',
      fullContent: '<b>Inventory Control and Marketing Associate</b><br><i>Trivantage</i><br><b>&middot;</b> Processed orders and optimized ROI for marketing program',
      forcePosition: 'left'
    },
    {
      type: 'smallItem',
      label: '2013',
      shortContent: '<b>Bachelor of Science, Music Technology</b><br><i>Elon University</i>',
      fullContent: '<b>Bachelor of Science, Music Technology</b><br><i>Elon University</i><br><b>&middot;</b> Music production, recording and theory',
      showMore: '<a class="custom-show-btn"><i class="material-icons">add</i></a>',
      showLess: '<a class="custom-show-btn"><i class="material-icons">remove</i></a>',
      forcePosition: 'right'
    },
    {
      type: 'smallItem',
      label: '6/12 - 12/12',
      shortContent: '<b>Marketing Intern</b> <i>Trivantage</i>',
      fullContent: '<b>Marketing Intern</b> <i>Trivantage</i><br><b>&middot;</b> Researched marketing strategies and created business plans for expanding into new markets',
      forcePosition: 'left'
    }
  ];

$('#timeline-container-basic').timelineMe({
    labelClass: 'time-label',
    shortContentClass: 'time-short',
    items: items
});
