if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to yoyo.";
  };

  Template.hello.events({
    'click input': function(e){
      alert(1);
    }
  })


  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}