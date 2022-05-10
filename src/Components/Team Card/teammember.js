import React,{Component} from "react";
import ReactDOM from "react-dom";
import {TeamCard} from "./teamCard";
export class Teammembers extends Component{
    state={
        counters:[
           {id:'Ayan Gupta', role: 'Founder', github: 'https://github.com/Ayan-thecodeking', linkedin: 'https://www.linkedin.com/in/ayan-gupta-924833201', twitter: 'https://twitter.com/CodeXayan_', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966610470867988490/unknown.png'},
           {id:'Krupesh Vithlani', role: 'Lead', github: 'https://github.com/tkrupesh14',linkedin: 'https://linkedin.com/in/krupeshvithlani', twitter: 'https://twitter.com/krupeshvv', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966598569270312990/Krupesh_Vithlani_2_1.jpg'},
           {id:'Rohit Gupta', role: 'Event-Lead', img: 'https://cdn.discordapp.com/attachments/852063239277903892/965993616256405575/PSX_20200930_222329_-_Rohit.jpg', github: 'https://github.com/vilgad', linkedin: 'https://www.linkedin.com/in/rohit-gupta-230168205', twitter: 'https://twitter.com/vilgad_'},

          
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
                         linkedin = {counter.linkedin}
                         twitter = {counter.twitter}
                         img = {counter.img}
                      ></TeamCard>
                    </div>
                ))}
                </div>
            </div>
        );
    }
}
