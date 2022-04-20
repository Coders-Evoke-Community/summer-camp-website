import React,{Component} from "react";
import ReactDOM from "react-dom";
import {TeamCard} from "./teamCard";
import KrupeshVithlani from "../assets/img/Team/Krupesh Vithlani.jpg"
export class Teammembers extends Component{
    state={
        counters:[
           {id:'Ayan Gupta', role: 'Founder'},
           {id:'Sanika', role: 'Co-Founder'},
           {id:'Krupesh Vithlani', role: 'Lead', github: 'https://github.com/tkrupesh14', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966035597942718534/Krupesh_Vithlani.jpg'},
          
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
