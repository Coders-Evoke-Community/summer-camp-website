import React,{Component} from "react";
import ReactDOM from "react-dom";
import {TeamCard} from "./teamCard";
import KrupeshVithlani from "../assets/img/Team/Krupesh Vithlani.jpg"
export class Teammembers2 extends Component{
    state={
        counters:[
           {id: 'Sweta Pradhan', role: 'Social Media Manager', github: '#', linkedin: 'https://www.linkedin.com/in/sweta-pradhan-a75612224', twitter: 'https://twitter.com/PSweta230', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966601338073022514/unknown.png'},
           {id:'Priyanshu Mundra', role: 'Tech Team', github: 'https://github.com/Spyder15', linkedin: 'https://www.linkedin.com/in/priyanshu-mundra-b66626216/', twitter: 'https://twitter.com/Mundr1Priyanshu', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966601992422182932/unknown.png'},
           {id:'Susmita Bhattacharya', role: 'Content Writer', github: 'https://github.com/SB2318', linkedin: 'https://www.linkedin.com/in/susmita-bhattacharya-3687621b7', twitter: 'https://twitter.com/SUSMITA2360', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966602646788128798/unknown.png'}
           
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
