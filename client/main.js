Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

Template.colibri.projects = function() {
    var search = {};
    return Projects.find(search, {limit:20});
};

Template.colibri.adding_project = function(){
    return Session.get('adding_project');
};

Template.project.prettyDate = function () {
    return relativeDate(this.timestamp);
};

var timeDependency = new Deps.Dependency;
var relativeDate = function (then) {
    timeDependency.depend();
    var now = new Date;
    var secondsAgo = Math.floor((now.getTime() - then.getTime()) / 1000);
    var minutesAgo = Math.floor(secondsAgo / 60);
    var hoursAgo = Math.floor(minutesAgo / 60);
    var daysAgo = Math.floor(hoursAgo / 24);

    if (minutesAgo < 1)
        return "just now";
    else if (hoursAgo < 1) {
        return minutesAgo + " minute" + (minutesAgo !== 1 ? "s" : "") + " ago";
    } else if (daysAgo < 1) {
        return hoursAgo + " hour" + (hoursAgo !== 1 ? "s" : "") + " ago";
    } else if (daysAgo < 40) {
        return daysAgo + " day" + (daysAgo !== 1 ? "s" : "") + " ago";
    } else
        return "Long long time ago";
};

Meteor.setInterval(function () {
    timeDependency.changed();
}, 1000);