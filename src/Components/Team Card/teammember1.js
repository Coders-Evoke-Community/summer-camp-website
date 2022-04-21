import React,{Component} from "react";
import ReactDOM from "react-dom";
import {TeamCard} from "./teamCard";
import KrupeshVithlani from "../assets/img/Team/Krupesh Vithlani.jpg"
export class Teammembers1 extends Component{
    state={
        counters:[
           {id:'Ritesh Sahu', role: 'Social Media-Lead', github: 'https://github.com/riteshsahu16', linkedin: 'https://www.linkedin.com/in/ritesh-kumar-sahu-10730b204', twitter: 'https://twitter.com/ritesh_s16', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966599722968166441/Ritesh_Kumar_Sahu.jpg'},
           {id:'Shravanee Kumari', role: 'Social Media Manager', github: '#', linkedin: 'https://www.linkedin.com/in/shravanee-kumari-24b073228', twitter: 'https://twitter.com/shravanee_01?t=u8FjtPnyZJScGhOfydgicw&s=09', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966600165811159040/Shravanee_Kumari.jpg'},
           {id:'Avnish Bharadva', role: 'Tech Team', github: 'https://github.com/avnishbharadva', linkedin: 'https://www.linkedin.com/in/avnish-bharadva', twitter: 'https://twitter.com/AvnishBharadva8?t=VKDVKnMp6ReOztmz5KmZmw&s=08', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966600643861164082/unknown.png'}
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
