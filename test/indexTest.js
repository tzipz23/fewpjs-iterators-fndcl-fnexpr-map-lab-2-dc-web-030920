describe('index.js', function () {
  describe('capitalizeSentence()', function () {
    it('returns an array with proper capitalization', function () {
      expect(capitalizeSentence()).to.have.all.members(
        [
          'What does the this keyword mean?',
          'What is the Contutorialuctor OO pattern?',
          'How can you implement a Blockchain Web API?',
          'What is Test Driven Development Workflow?',
          'What is NaN and how can we check for it?',
          'What is the difference between stopPropagation and preventDefault?',
          'Should you use immutable state and pure functions?',
          'What is the difference between == and ===?',
          'What is the difference between event capturing and bubbling?',
          'What is JSONP?'
        ]
      )
    });
  });
});
