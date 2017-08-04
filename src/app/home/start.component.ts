import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'start',
    templateUrl: 'app/home/start.html',
})
export class StartComponent implements OnInit, OnDestroy{

    public notFound:boolean = false;
    public searchTerm: string;
    private subscription:any;

    constructor(private router:Router) {
    }

    ngOnInit() {

    }

    // onSelect(workout:WorkoutPlan) {
    //     this.router.navigate(['/workout', workout.name]);
    // }

    ngOnDestroy() {
        //this.subscription.unsubscribe();
    }
}
