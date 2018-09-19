const questions = [
  {
    'q_text': 'Which is NOT a way to declare a variable?',
    'a_text': '"new" is used for declaring new class instances! The others are the typical ways for declaring new variables.',
    'answers':[
      {
        'text': 'var',
        'correct': false
      }, {
        'text': 'let',
        'correct': false
      }, {
        'text': 'new',
        'correct': true
      }, {
        'text': 'const',
        'correct': false
      }
    ]
  },
  {
    'q_text': 'What will the following code return?',
    'q_image': 'https://image.ibb.co/hXWy9z/Screen_Shot_2018_09_18_at_8_00_18_PM.png',
    'a_text': 'The `.some` function returns true if at least one item in the array meets the condition. Since at least one number in this array is greater than 18, it returns true.',
    'a_image': 'https://image.ibb.co/hXWy9z/Screen_Shot_2018_09_18_at_8_00_18_PM.png',
    'answers':[
      {
        'text': '[22, 31, 25]',
        'correct': false
      }, {
        'text': '[9, 17]',
        'correct': false
      }, {
        'text': 'true',
        'correct': true
      }, {
        'text': '[true, false, false, true, true]',
        'correct': false
      }, {
        'text': '["voter", "baby", "baby", "voter", "voter"]',
        'correct': false
      }
    ]
  },
  {
    'q_text': 'Which of these is NOT a JavaScript framework?',
    'a_text': 'React is a UI library and is not technically a framework. The other options are full frameworks of various ages and strengths.',
    'answers':[
      {
        'text': 'React',
        'correct': true
      }, {
        'text': 'Vue',
        'correct': false
      }, {
        'text': 'Ember',
        'correct': false
      }, {
        'text': 'Backbone',
        'correct': false
      }, {
        'text': 'Mithril',
        'correct': false
      }
    ]
  },
  {
    'q_text': 'What is the most popular tool today for writing server-side JavaScript?',
    'a_text': 'There may be others out there, but the most obvious one today (and with the most jobs for it) is Node.',
    'answers':[
      {
        'text': 'TypeScript',
        'correct': false
      }, {
        'text': 'Netscape Enterprise',
        'correct': false
      }, {
        'text': 'Redux',
        'correct': false
      }, {
        'text': 'Node',
        'correct': true
      }, {
        'text': 'Prayer',
        'correct': false
      }
    ]
  },
  {
    'q_text': 'What will this code return?',
    'q_image': 'https://image.ibb.co/hn472K/Screen_Shot_2018_09_18_at_8_03_22_PM.png',
    'a_text': 'Combining a boolean and string in this way will turn the boolean into a string and then stick them both together',
    'a_image': 'https://image.ibb.co/hn472K/Screen_Shot_2018_09_18_at_8_03_22_PM.png',
    'answers':[
      {
        'text': '"truexyz"',
        'correct': true
      }, {
        'text': 'true',
        'correct': false
      }, {
        'text': '"xyz"',
        'correct': false
      }, {
        'text': '"1xyz"',
        'correct': false
      }, {
        'text': 'Yep, that\'s a string',
        'correct': false
      }
    ]
  },
  {
    'q_text': 'Which of the following is FALSE about methods and functions?',
    'a_text': 'Methods can only be called as object properties, which functions can be called completely separate from objects.',
    'answers':[
      {
        'text': 'They are called the same way',
        'correct': true
      }, {
        'text': 'They are both types of functions',
        'correct': false
      }, {
        'text': 'They cannot be associated with objects',
        'correct': false
      }, {
        'text': 'They can be given parameters',
        'correct': false
      }, {
        'text': 'They are both part of JavaScript',
        'correct': false
      }
    ]
  },
  {
    'q_text': 'What is the term for declaring new variables by extracting their values from objects or arrays?',
    'a_image': 'https://image.ibb.co/iM36we/Screen_Shot_2018_09_20_at_11_52_30_AM.png',
    'answers':[
      {
        'text': 'Destructuring',
        'correct': true
      }, {
        'text': 'Abstraction',
        'correct': false
      }, {
        'text': 'Assembly',
        'correct': false
      }, {
        'text': 'Composition',
        'correct': false
      }, {
        'text': 'Yankity-yanking',
        'correct': false
      }
    ]
  },
  {
    'q_text': 'What lets a function easily take any number of variables and combine them into an array?',
    'a_image': 'https://image.ibb.co/nJF3be/Screen_Shot_2018_09_20_at_11_53_45_AM.png',
    'answers':[
      {
        'text': 'A Spread Operator',
        'correct': true
      }, {
        'text': 'An Array Factory',
        'correct': false
      }, {
        'text': 'Concatenation',
        'correct': false
      }, {
        'text': 'Splicing and Merging',
        'correct': false
      }, {
        'text': 'Little Squishing',
        'correct': false
      }
    ]
  },
  {
    'q_text': 'What is the source of JavaScript\'s asynchronous functionality?',
    'a_text': 'JavaScript itself is synchronous and only goes step-by-step. It borrows ansynchrounous functionality from the Web Browser API.',
    'answers':[
      {
        'text': 'The Web Browser API',
        'correct': true
      }, {
        'text': 'Callbacks',
        'correct': false
      }, {
        'text': 'Async/Await',
        'correct': false
      }, {
        'text': 'Wizards',
        'correct': false
      }
    ]
  },
  {
    'q_text': 'When JavaScript was in development, it was done so under a different name. What was this language\'s first name?',
    'answers':[
      {
        'text': 'Mocha',
        'correct': true
      }, {
        'text': 'LiveScript',
        'correct': false
      }, {
        'text': 'Java',
        'correct': false
      }, {
        'text': 'BrowserScript',
        'correct': false
      }, {
        'text': 'RegretScript',
        'correct': false
      }
    ]
  }
];

export default questions;
