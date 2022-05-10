import React,{Component} from "react";
import {TeamCard} from "./teamCard";
export class Teammembers5 extends Component{
    state={
        counters:[
           
           {id:'Ashrita Nayak', role: 'Content Writer', github: 'https://github.com/ASHRITA2001', linkedin: 'https://www.linkedin.com/in/ashrita-nayak-ab6915226/', twitter: '#', img:'https://cdn.discordapp.com/attachments/852063239277903892/966606028265385994/unknown.png'},
           {id: 'Nikitha Challa', role: 'Tech Team', github:'https://github.com/CHALLANIKITHA', linkedin: 'https://www.linkedin.com/in/nikitha-challa-5bb37a21b/', twitter: 'https://twitter.com/challanikitha29', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966606389973766194/unknown.png'},
           {id: 'Sparsh Sahu ', role: 'Discord Mod', github: 'https://github.com/GeneralSparsh', linkedin: 'https://www.linkedin.com/in/sparsh-sahu-439383227', twitter: 'https://twitter.com/SparshSahu770?t=yO5dxioJHZCnKnKzf1EeIQ&s=09', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966607116867633192/unknown.png'}
           
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
