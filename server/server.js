Meteor.startup(function(){
    return Meteor.methods({
        'removeProjects':function(){
            Projects.remove({});
        },
        'removeComments':function(){
            Comments.remove({});
        }
    })
});