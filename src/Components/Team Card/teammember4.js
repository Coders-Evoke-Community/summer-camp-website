import React,{Component} from "react";
import ReactDOM from "react-dom";
import {TeamCard} from "./teamCard";
import KrupeshVithlani from "../assets/img/Team/Krupesh Vithlani.jpg"
export class Teammembers4 extends Component{
    state={
        counters:[
           {id: 'Kaushik Lakhani', role: 'Content Writer', github: 'https://github.com/kaal-coder', linkedin: 'https://www.linkedin.com/in/kaushik-lakhani-08012001', twitter: 'https://twitter.com/_K_a_a_L', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966604687241519124/unknown.png'},
           {id:'Sanjib Kumar Mohanty', role: 'Video Editor', github: 'https://github.com/0KrEsT0', linkedin: 'https://www.linkedin.com/in/sanjib-mohanty-07072001/', twitter: 'https://twitter.com/Sanjibmohanty05', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966604953227522108/unknown.png'},
           {id: 'Sparsh Bhatia', role: 'Social Media Manager', github: 'https://github.com/sparshb4', linkedin: 'https://www.linkedin.com/in/sparsh-b-68ba4b91/', twitter: 'https://twitter.com/sparshb4', img: 'https://cdn.discordapp.com/attachments/852063239277903892/966605618179870730/unknown.png'}

           
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
