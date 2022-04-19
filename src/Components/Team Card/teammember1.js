import React,{Component} from "react";
import ReactDOM from "react-dom";
import {TeamCard} from "./teamCard";
import KrupeshVithlani from "../assets/img/Team/Krupesh Vithlani.jpg"
export class Teammembers1 extends Component{
    state={
        counters:[
           {id:'Rohit Gupta', role: 'Event-Lead', img: 'https://cdn.discordapp.com/attachments/852063239277903892/965993616256405575/PSX_20200930_222329_-_Rohit.jpg', github: 'https://github.com/vilgad'},
           {id:'Ritesh Sahu', role: 'Social Media-Lead'},
           {id: 'Tegveer Singh', role: 'Video Editing-Lead'}
           
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
