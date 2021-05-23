function interviewQuestion (profession) {
  function interviewee (yourName) {
    if (profession === 'teacher') {
      console.log ('What subject do you teach ' + yourName + '?')
    } else if (profession === 'designer') {
      console.log (yourName + ' can you please explain what UX design is? ')
    } else {
      console.log ('Hello ' + yourName + ', what do you do? ')
    }
    return yourName;
  }
  return interviewee;
}
interviewQuestion('teacher') ('John');
interviewQuestion('designer') ('Mike');
interviewQuestion('other') ('Nick');