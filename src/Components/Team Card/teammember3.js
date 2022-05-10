import React,{Component} from "react";
import {TeamCard} from "./teamCard";
export class Teammembers3 extends Component{
    state={
        counters:[
           {id: 'Tanvi Sanghvi', role: 'Graphic Designer', github: 'http://github.com/tanvisanghvi', linkedin: 'https://www.linkedin.com/in/tanvi-sanghvi-7b714420a', twitter: '#', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966603064750514227/unknown.png'},
           {id:'Tushar Gupta', role: 'Content Writer', github: 'https://github.com/Tushar-2003', linkedin: 'https://www.linkedin.com/in/tushargupta3002', twitter: 'https://twitter.com/Tushar1Gupta', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966603910544494622/unknown.png'},
           {id:'Anjali Sahu', role: 'UI/UX Designer', github: 'https://github.com/99anjali', linkedin: 'https://www.linkedin.com/in/anjali-sahu-1439ba207/', twitter: 'https://twitter.com/AnjaliS10154712?t=1FrV7Dg4-14uZUS-4QngHw&s=08', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966604274723336202/unknown.png'}
           
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
