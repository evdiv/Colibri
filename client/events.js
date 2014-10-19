Template.nav.events({
    'click .addProject':function(evt,tmpl){
        evt.preventDefault();
        Session.set('adding_project',true);
    }
});

Template.addProjectForm.events({
    'click .save':function(evt,tmpl){
        var description = tmpl.find('.description').value;
        var title = tmpl.find('.title').value;
        var timestamp = (new Date);
        var height = 350;
        Projects.insert({description:description,title:title,height:height,width:'25%',timestamp: timestamp});
        Session.set('adding_project',false);
    },
    'click .cancel':function(){
        Session.set('adding_project',false);
    },
    'click .close':function(){
        Session.set('adding_project',false);
    }
});

Template.project.events({
    'click button.close': function(evt, tmpl) {
        Projects.remove(this._id);
    }
});
