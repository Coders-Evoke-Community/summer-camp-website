import React,{Component} from "react";
import ReactDOM from "react-dom";
import {TeamCard} from "./teamCard";
import KrupeshVithlani from "../assets/img/Team/Krupesh Vithlani.jpg"
export class Teammembers2 extends Component{
    state={
        counters:[
           {id:'Shravanee Kumari', role: 'Social Media Manager', github: '#'},
           {id:'Avnish Bharadva', role: 'Tech Team', github: 'https://github.com/avnishbharadva'},
           {id: 'Sweta Pradhan', role: 'Social Media Manager', github: '#'}
           
        ]
    }
    render(){
        return(
            <div class="container">
              <div class="row">
                {this.state.counters.map((counter) => (
                    <div class="col-lg-4">
                      <TeamCard
                         key={counter.id}
                         id={counter.id}
                         role = {counter.role}
                         github = {counter.github}
                         img = {counter.img}
                      ></TeamCard>
                    </div>
                ))}
                </div>
            </div>
        );
    }
}
