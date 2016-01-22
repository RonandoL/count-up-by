describe('countUp5', function() {

  it("will take two numbers and count up to the first number in multiples of the second number", function() {
    expect(countUp5(30, 5)).to.eql([0, 5, 10, 15, 20, 25, 30]);
  });
});

// describe("countUp7", function(){
//
//   it("will take two numbers and count up to the first number in multiples of the second number", function(){
//     expect(countUp7(50, 7)).to.equal(0, 7, 14, 21, 28, 35, 42, 49);
//
//   });
