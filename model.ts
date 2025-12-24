class world{

    bad_guys;
    good_guys;


    constructor(bad_guys, good_guys){
        this.bad_guys = bad_guys;
        this.good_guys = good_guys;
    }

    public build_from_existing(world) : void{
        this.bad_guys = world.bad_guys ?? [];
        this.good_guys = world.good_guys ?? [];
        // etc
    }

    

}

class building{}
class cow{}
class path{}
class alien{}