module.exports = {
    name: "helper",

    actions: {
        random(){
            return Math.random()*10;
        }
    },

    events: {
        "hello.called" (payload){
            this.logger.info("Helper service caught an event");
            this.logger.info(payload);

            //emit "hello.called" --payload "yo"
        }
    }
}

//check if service works
//emit "hello.called" --payload "Hello from terminal"