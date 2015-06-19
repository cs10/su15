/* Shortcuts for creating schedule objects
 * Paramters:
 * Reading: (title, link, 'type [required is default]')
 * Lecture: (title, '[slides folder]', '[video URL]', '[Guest Name]')
 * Lab:     (title, 'topic file path', [boolean -- Reading Quiz?], 'video link')
 * Disc:    (title, [boolean -- Resources available?])
 * HW:      (title, TBD...)
 * NOTE: These links are currently relative to the home page.
 */
var lab      = cs10.newLabObject,
    work     = lab, // shortcut for work sessions.
    reading  = cs10.newReadingsObject,
    lect     = cs10.newLectureObject,
    disc     = cs10.newDiscussionObject,
    hw       = cs10.newHomeworkObject;

function docs(id) {
    return 'assign.html?//docs.google.com/document/d/' + id + '/pub';
}
// CONSTANTS:
var hw1Spec = docs('1ybuatsrUMCI-tHHRPwxUpGoZoGxk_SEiGEArocQtIlI');
var hw2Spec = docs('1InDacW4tmqeFfxgDxsSv0ebY8LiBTj_3A03uhY7-vIw');
var hw3Spec = docs('1InDacW4tmqeFfxgDxsSv0ebY8LiBTj_3A03uhY7-vIw');
var mtProjSpec = docs('1InDacW4tmqeFfxgDxsSv0ebY8LiBTj_3A03uhY7-vIw');
var finalProjSpec = docs('1InDacW4tmqeFfxgDxsSv0ebY8LiBTj_3A03uhY7-vIw');
var final_spec = docs('1InDacW4tmqeFfxgDxsSv0ebY8LiBTj_3A03uhY7-vIw');


// ==================================================
// ==========     SCHEDULE ITEMS           ==========
// ==================================================

// JUN 22 - 26
cs10.week1 = {
    readings: 'No Readings',
    lectM: lect('Welcome and Abstraction', 'L01 - Abstraction'),
    lab: lab("Welcome to <span class='snap'>snap</span>", "berkeley_bjc/intro_pair/1-introduction.topic"),
    disc: disc('Welcome to CS10!'),
    lectT: lect('Functions', 'L02 - Functions'),
    work: work('')
};
// JUN 22 - 26
cs10.week2 = {
    readings: [
        reading('Prof. Harvey\'s Intro to Abstraction',
                '{{ site.baseurl }}/resources/readings/BH-Abstraction.txt'),
        reading('Why Software is Eating the World',
                bcourses('53889491')),
        reading('Learning to Code!',
                'http://www.youtube.com/watch?v=dU1xS07N-FA',
                'optional'),
        reading('Is Abstraction the Key to Computing?',
                bcourses('53889492'),
                'optional'),
        reading('Scratch: Programming for All',
                'https://bcourses.berkeley.edu/courses/1301472/files/folder/Readings?preview=53889490',
                'optional')
    ],
    lectW: lect('Creativity and Abstraction', 'L03 - Abstraction II'),
    lab: lab('Build Your Own Blocks', 'berkeley_bjc/intro_pair/2-loops-variables.topic'),
    lectT: lect('Creativity and Abstraction', 'L03 - Abstraction II'),
    disc: disc('Anatomy of a Computer and the Power of Binary', true),
    hw: hw('HW0', '1/24', 'quizzes/1869517')
    // hw: hw('HW1', '2/1', 'assignments/5919083', hw1Spec)
};


// JUN 29 - JUL 3
cs10.week3 = {
    readings: [
        reading('The Story of Alan Turing &amp; His Machine',
                'http://youtu.be/CQhrMmbiaM0'),
        reading('Designing Games with a Purpose (GWAP)',
                bcourses('53889493')),
        reading('Justices Split on Violent Games',
                bcourses('53994720')),
        reading('Video Games Lecture',
                'https://coursesharing.org/courses/6/lectures/11'),
        reading('(Slides)',
                '{{ site.baseurl }}/resources/readings/graphics'),
        reading('More readings on video games',
                '{{ site.baseurl }}/resources/readings/video-games/',
                'optional'),
        reading('Kinect\'s Future a Game Controller in Everything',
                'http://www.msnbc.msn.com/id/40077373/ns/technology_and_science-games/',
                'optional')
    ],
    lectM: lect('Creativity', 'L04 - Creativity'),
    lab: lab('Conditionals', 'berkeley_bjc/intro_pair/3-conditionals.topic', true),
    // lab: lab('Functions', 'berkeley_bjc/intro_pair/4-abstraction-testing.topic', true),
    lectT: lect('Programming Paradigms', 'L05 - Programming Paradigms'),
    // lab: lab('Lists I', 'berkeley_bjc/lists/lists-I.topic'),
    disc: disc('All about lists', true),
    work: work('Start on HW2: Snowman')
};
// JUN 29 - JUL 3
cs10.week4 = {
    readings: [
        reading('How Algorithms Shape Our World',
                'http://www.ted.com/talks/kevin_slavin_how_algorithms_shape_our_world.html'),
        reading('BtB Chapter 1',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter1.pdf'),
        reading('Program or Be Programmed',
                'http://tedxtalks.ted.com/video/Douglas-Rushkoff-at-TEDxNYED'),
        reading('Program or Be Programmed: A Guide',
                'http://dtc-wsuv.org/hashnextchapter/wp-content/uploads/2013/03/Rushkoff-Study-Guide.pdf',
                'optional'),
        reading('Animating a Blockbuster',
                'http://www.wired.com/magazine/2010/05/process_pixar/',
                'optional')
    ],
    lectW: lect('Algorithms', 'L06 - Algorithms I'),
    lab: lab('Algorithms', 'berkeley_bjc/areas/algorithms.topic', true),
    lectT: lect('Algorithmic Complexity', 'L07 - Algorithms II'),
    lab: lab('Algorithmic Complexity', "berkeley_bjc/areas/algorithm-complexity.topic"),
    disc: disc('Algorithmic Complexity and Quest Review', true),
    hw: hw('HW2: Snowman', '2/13', 'assignments/5919084', 'assign.html?//docs.google.com/document/d/1iJDOxWMBnmE5lOzqmUi_-F-HoSyGuQrzn-COiGQd29Y/pub')
};


// JUL 6 - JUL 10
cs10.week5 = {
    readings: 'No Readings<br><br><strong>Quest Review Session</strong><br>(<a href=http://tinyurl.com/questsp15 target="_blank">Slides</a>)<br>Monday, 2/16 1-3pm<br>306 Soda',
    lectM: lect('No Lecture (Holiday)'),
    lab: lab('No Labs Monday<br>Quest Help and Review'),
    lectT: lect('Quest In Class', '../exams/quest.html'),
    lab: lab('Finch Robots', 'berkeley_bjc/robots/robots.topic'),
    disc: disc('Quest Debrief and HW3 Intro'),
    hw: 'Start HW3: Abominable Snowman'
};
cs10.week5.lectT.classes = 'exam';
cs10.week5.lab.classes = ''; // Remove 'noClass'
cs10.week5.readings.title += '<br>';
// JUL 6 - JUL 10
cs10.week6 = {
    readings: [
        reading('BtB Chapter 2',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter2.pdf'),
        reading('BtB Chapter 4 Reading Segment 1',
                '{{ site.baseurl }}/resources/readings/btb/BtB4-pt1.pdf'),
        reading('BtB Chapter 4 Reading Segment 2',
                '{{ site.baseurl }}/resources/readings/btb/BtB4-pt2.pdf'),
        reading('Living in a Digital World',
                'http://cacm.acm.org/magazines/2011/10/131393-living-in-a-digital-world/pdf',
                'optional'),
        reading('BtB Chapter 3',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter3.pdf',
                'optional')
    ],
    lectW: lect('Concurrency', 'L08 - Concurrency', 'Michael Ball'),
    lab: lab('Concurrency', 'berkeley_bjc/areas/concurrency.topic', true),
    lectT: lect('Recursion I', 'L09 - Recursion I'),
    lab: lab('Trees and Fractals using Recursion', 'berkeley_bjc/recur/recursion-trees-fractals.topic'),
    disc: disc('<span style="font-size:150%">R<sup>e<sup>c<sup>u<sup>r<sup>s<sup>i<sup>o<sup>n</sup></sup></sup></sup></sup></sup></sup></sup></span>'),
    // disc: disc('<span style="font-size:150%">Recursion</span>'),
    hw: hw('HW3', '2/27', 'assignments/5919085', 'assign.html?//docs.google.com/document/d/1JBK9QEub82fxr0fkbSQJY68kKS0QBSzqe4ufafZ0mqo/pub')
};


// JUL 13 - JUL 17
cs10.week7 = {
    readings: [
        reading('How Moore\'s Law Works',
                'http://computer.howstuffworks.com/moores-law.htm'),
        reading('Free Lunch is Over',
                'http://www.gotw.ca/publications/concurrency-ddj.htm',
                'hard'),
        reading('What is IBM\'s Watson?',
                bcourses('54271633')),
        reading('Brian Harvey\'s AI notes',
                '{{ site.baseurl }}/resources/readings/BH-ai.txt'),
        reading('The First Church of Robotics',
                'http://www.nytimes.com/2010/08/09/opinion/09lanier.html',
                'optional'),
        // reading('The Thinking Machine (Video)',
        //         'http://www.youtube.com/watch?v=4gzpd0irP58',
        //         'optional'),
        reading('Spending Moore\'s dividend (CACM)',
                bcourses('54271571'),
                'optional')
    ],
    lectM: lect('Recursion II', 'L10 - Recursion II'),
    lab: lab('Recursive Reporters I', 'berkeley_bjc/recur/recursive-reporters-part1.topic', true),
    lectT: lect('Artificial Intelligence', 'L10.5 AI Pat Virtue', 'Patrick Virtue'),
    lab: lab('Project Work Session'),
    disc: disc('Concurrency and Midterm Intro'),
    hw: hw('Midterm Project<br><strong>Proposals</strong>', '3/6', 'assignments/6119910', 'assign.html?//docs.google.com/document/d/1-uGB5qRYzM0bX5BjDTh527Zo-3GlZMGcLcyKHIViFiA/pub')
};
// JUL 13 - JUL 17
cs10.week8 = {
    readings: [
        reading('BtB Chapter 5 Reading Segment 1',
                '{{ site.baseurl }}/resources/readings/btb/BtB5-pt1.pdf'),
        reading('BtB Chapter 5 Reading Segment 2',
                '{{ site.baseurl }}/resources/readings/btb/BtB5-pt2.pdf'),
        reading('BtB Chapter 5 Reading Segment 3',
                '{{ site.baseurl }}/resources/readings/btb/BtB5-pt3.pdf'),
        reading('BtB Chapter 6 (27-37)',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter6.pdf')
    ],
    lectW: lect('Social Implications I', 'L11 - Social Implications I'),
    lab: lab('Tic Tac Toe', 'berkeley_bjc/lists/tic-tac-toe.topic', true),
    lectT: lect('HCI', '', 'Björn Hartmann'),
    lab: lab('Project Work Session'),
    disc: disc('Midterm Review'),
    hw: [
        hw('Midterm Project<br><strong>Individual</strong> Milestone', '3/13', 'assignments/6120151'),
        hw('Midterm Project<br><strong>Group</strong> Milestone', '3/13', 'assignments/6120100')
    ]
};


// JUL 20 - JUL 24
cs10.week9 = {
    readings: 'No Readings<br><br><strong>Midterm Review Session</strong><br>Sun 3/15 2-5pm<br>2050 VLSB<br><a href="http://tinyurl.com/midtermsp15" target="_blank">Slides</a> | (<a href="http://snap.berkeley.edu/snapsource/snap.html#present:Username=jasnowiss10&ProjectName=Midterm%20Review%20Solutions" target="_blank">Solutions</a>)',
    lectM: lect('Social Implications II', 'L14 - Social Implications II'),
    lab: lab('Online <span class="snap">snap</span> Midterm'),
    lectT: lect('The Internet', 'L15 - Internet I'),
    lab: lab('Project Work Session'),
    disc: disc('Midterm Debrief'),
    hw: hw('Midterm Project', '3/21', 'assignments/5919087', 'assign.html?//docs.google.com/document/d/1-uGB5qRYzM0bX5BjDTh527Zo-3GlZMGcLcyKHIViFiA/pub')
};
cs10.week9.lab.classes = 'exam';
// cs10.week9.lectT.title += '<br><br><div class="exam inner"><a href="exams/midterm.20html">Midterm Exam</a><br><br>Thursday 3/19<br>7-9pm; Location: 2050 VLSB</div>';
// JUL 20 - JUL 24
cs10.week10 = {
    special: 'Spring Break',
    hw: 'Get Some Rest!'
};


// JUL 27 - JUL 31
cs10.week11 = {
    readings: [
        reading('BtB Chapter 7',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter7.pdf'),
        reading('BtB Appendix',
                '{{ site.baseurl }}/resources/readings/btb/Btb_Appendix.pdf'),
        reading('BtB Chapter 8',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter8.pdf',
                'optional'),
        reading('TED: What is the Internet?',
                'https://www.youtube.com/watch?v=XE_FPEFpHt4',
                'optional')
    ],
    lectM: lect('The Internet II', 'L16 - Internet II'),
    lab: lab('The Internet', 'berkeley_bjc/areas/internet.topic', true),
    lectT: lect('Lambda and HOFs', 'L17 - HOF'),
    lab: lab('Practice with HOFs and Functions as Data', 'berkeley_bjc/hofs/hofs-practice.topic'),
    disc: disc('The Internet'),
    hw: [
        hw('"Explore" Writing Assignment', '4/3', 'discussion_topics/3968074', 'assign.html?//docs.google.com/document/d/13OqKNmhbN8PfuGhv5yZYLqvzHKHm08n1dV3n7Prxb5o/pub'),
        hw('Midterm Regrade Requests<br>(Gradescope)', '4/4')
    ]
};
// JUL 27 - JUL 31
cs10.week12 = {
    readings: [
        // TODO: Replace these with Superfish?
        reading('The Heartbleed Bug',
                'http://blog.agilebits.com/2014/04/08/imagine-no-ssl-encryption-its-scary-if-you-try/'),
        reading('When Servers Bleed',
                'https://medium.com/p/804cdf4b48c1',
                'hard')
    ],
    lectW: lect('Besides Blocks I', 'L18 - Besides Blocks I', 'Michael Ball'),
    lab: lab('Besides Blocks: Welcome to Python', 'berkeley_bjc/python/besides-blocks-welcome.topic', true),
    lectT: lect('Social Implications III','L19 - Social Implications III', 'Gerald Friedland'),
    lab: lab('Lab Catch Up Session'),
    disc: disc('Data and HOFs'),
    hw: hw('"Explore" Peer Comments and Artifact', '4/10', 'discussion_topics/3968074', 'assign.html?//docs.google.com/document/d/13OqKNmhbN8PfuGhv5yZYLqvzHKHm08n1dV3n7Prxb5o/pub')
};


// AUG 3 - AUG 7
cs10.week13 = {
    readings: [
        reading('Data Explosion Creates Revolution',
                'http://www.sfgate.com/cgi-bin/article.cgi?f=/c/a/2011/10/19/BU5K1LJ4R3.DTL'),
        reading('Data Mining',
                'http://webdocs.cs.ualberta.ca/~zaiane/courses/cmput690/notes/Chapter1/ch1.pdf'),
        reading('Data Pitfalls',
                'http://searchenginewatch.com/article/2289574/Big-Data-Big-Trouble-How-to-Avoid-5-Data-Analysis-Pitfalls'),
        reading('Computing as Social Science',
                'http://cacm.acm.org/magazines/2009/4/22953-computing-as-social-science/fulltext',
                'optional'),
        reading('Data Visualization',
                'http://datavisualization.ch/',
                'optional'),
        reading('Basic Statistics (Helpful for Project)',
                'http://www.cimt.plymouth.ac.uk/projects/mepres/stats/handlg_data_ch3.pdf',
                'optional')
    ],
    lectM: lect('Besides Blocks II', 'L20 - Besides Blocks II'),
    lab: lab('Besides Blocks: Data Structures in Python', 'berkeley_bjc/python/besides-blocks-data-struct.topic', true),
    lectT: lect('Data', 'L21 - Data'),
    lab: lab('Besides Blocks: Data in Python', 'berkeley_bjc/python/besides-blocks-data.topic'),
    disc: disc('Practical Privacy Pointers'),
    hw: hw('Final Project Proposal', '4/17', 'quizzes/1869514', final_spec)
};
// AUG 3 - AUG 7
cs10.week14 = {
    readings: [
        reading('The Great Robot Race (Video)',
                'https://www.youtube.com/watch?v=uoiJeIb0wBA'),
        reading('Halting Problem Poem',
                'http://introcs.cs.princeton.edu/java/76computability/halting-poem.html',
                'optional')
    ],
    lectW: lect('Limits of Computing', 'L22 - Limits of Computing'),
    lab: lab('Project Work Session', '', true),
    lectT: lect('Future of Computing', 'L23 - Future of Computing'),
    lab: lab('Project Work Session'),
    disc: disc('CS @ Cal and Beyond'),
    hw: hw('Final Project Milestone', '4/24', 'assignments/6209589', final_spec)
};

// AUG 10 - AUG 14
cs10.week15 = {
    readings: [
        reading('Why is Quantum Different?',
                'http://www.scientificamerican.com/article.cfm?id=what-makes-a-quantum-comp'),
        reading('Here is why we should be really excited about Quantum Computers',
                'http://www.businessinsider.com/why-be-excited-about-quantum-computers-2015-4'),
        reading('Man-made DNA can now Store Data for Millions of Years',
                'https://gigaom.com/2015/02/17/man-made-dna-can-now-store-data-for-millions-of-years/'),
        reading('DNA Storage',
                'http://radar.oreilly.com/2012/08/dna-storage.html',
                'hard'),
        reading('Quantum Leap',
                'http://money.cnn.com/2006/07/26/magazines/fortune/futureoftech_quantum.fortune/index.htm',
                'optional'),
        reading('Twenty Top Predictions for life 100 years from now',
                'http://www.bbc.co.uk/news/magazine-16536598',
                'optional'),
        reading('BtB: Conclusion',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter9.pdf',
                'optional')
    ],
    lectM: lect('Saving the World with Computing', 'L24 - Saving the World with Computing', 'Kathy Yelick'),
    lab: lab('Project Work Lab', '', true),
    lectT: lect('Summary and Farewell', 'L25 - Farewell'),
    lab: lab('With-<span class="snap">snap</span> Exam'),
    disc: disc('Summary and Farewell'),
    hw: hw('Final Project', '5/1', 'assignments/5919088', final_spec)
};
cs10.week15.lab.classes = 'exam';
cs10.week15.lectT.classes = 'exam';
// Add note after link is made.
cs10.week15.lectT.title += '<br>In-Class Final Question';
// AUG 10 - AUG 14
cs10.week16 = {
    special: 'RRR Week -- No Class',
    readings: [],
    lectT: lect('Optional: Python Review Session - 105 Stanley | 11-12 PM'),
    hw: hw('Study for the Final')
};


// Load the Calendar
$(document).ready(function() {
    cs10.renderTableCalendar();
    updateCalendar();
});
