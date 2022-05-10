import React,{Component} from "react";
import {TeamCard} from "./teamCard";
export class Teammembers6 extends Component{
    state={
        counters:[
           
           {id:'Sumedha Basu', role: 'Content Writer', github: 'https://github.com/SumedhaBasu', linkedin: 'https://www.linkedin.com/mwlite/in/sumedha-basu-a6682421a', twitter: 'https://twitter.com/Sumedha_Basu_?t=hEIDRB1uZgrPLKzkFEXAqg&s=09', img:'https://cdn.discordapp.com/attachments/852063239277903892/966608050595172362/unknown.png'},
           {id: 'Anmol Gupta', role: 'Social Media Manager', github:'https://github.com/anamolguptaa', linkedin: 'https://www.linkedin.com/in/anmol-kumar-gupta-620a9b202', twitter: 'https://twitter.com/anmolgupta41', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966608477747302411/unknown.png'},
           {id: 'Aditi Dubey ', role: 'Graphics Designer', github: 'https://github.com/Aditidubey223', linkedin: 'https://www.linkedin.com/in/aditi-dubey-80265320a/', twitter: 'https://twitter.com/Aditi_Dubey9669', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966609678371024896/unknown.png'}
           
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
