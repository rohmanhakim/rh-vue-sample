new Vue({
    // we want to target the div with an id of 'events'
    el: '#events',

    //here we can register any values or collections that hold data
    // for the application
    data: {
        event: { name: '', description: '', date: '' },
        events: []
    },

    //anything within the ready function will run when the application loads
    ready: function() {
        // when the application loads, we want to call the method that initializes some data
        this.fetchEvents();
    },

    //methods we want to use in our application are registered here
    methods: {

        // we dedicate a method to retrieving and setting some data
        fetchEvents: function() {
            var events = [
                {
                    id: 1,
                    name: 'TIFF',
                    description: 'Toronto International Film Festival',
                    date: '2015-09-10'
                },
                {
                    id: 2,
                    name: 'The Martian Premiere',
                    description: 'The Martian comes to the theatres',
                    date: '2015-10-02'
                },
                {
                    id: 3,
                    name: 'SXSW',
                    description: 'Music, film and interactive festival in Austin, TX.',
                    date: '2016-03-11'
                }
            ];
            // $set is a convenience method provided by Vue that similar to pushing data onto an array
            this.$set('events',events);
            
        },

        // adds an event to the existing events array
        addEvent: function(){
            if(this.event.name) {
                this.events.push(this.event);
                this.event = { name: '', description: '', date: ''};
            }
        },

        deleteEvent: function (index) {
            if(confirm("Are you sure you want to delete this event?")){
                // $remove is a Vue convenience method similar to splice
                this.events.$remove(this.events[index]);
            }
        }
    }
});