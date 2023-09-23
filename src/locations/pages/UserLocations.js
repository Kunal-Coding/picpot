import React from "react";
import {useParams} from "react-router-dom"

import  LocationsList from "../components/LocationsList" 


const UserLoctions = ()=>{
    const USER_LOCATIONS = [
        {
            id:"loc1",
            title:"Red Fort",
            desc:"The Red Fort, the largest monument in Delhi, is one of its most popular tourist destinations and attracts thousands of visitors every year.",
            pic:"https://assets-news.housing.com/news/wp-content/uploads/2021/07/20184714/All-about-the-Delhi-Red-Fort-or-Lal-Kila-FB-1200x700-compressed-2-686x400.jpg",
            address:"Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi, 110006",
            userid: "u1"
        },
        {
            id:"loc2",
            title:"Taj Mahal",
            desc:"The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. ",
            pic:"https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
            address:"Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
            userid: "u1"
        },
        {
            id:"loc3",
            title:"Jatayu Park",
            desc:"Jatayu Earth Center, also known as Jatayu Nature Park or Jatayu Rock, is a park and tourism centre at Chadayamangalam in Kollam district of Kerala, India.",
            pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jatayu_Earth_Centre.jpg/375px-Jatayu_Earth_Centre.jpg",
            address:"Jatayu Nature Park Rd, Jatayu Junction, Chadayamangalam, Kerala 691534",
            userid: "u2"
        },
    ];
    const userid = useParams().userid;
    const FILTERED_LOCATIONS = USER_LOCATIONS.filter(location => location.userid===userid)
    return <LocationsList items = {FILTERED_LOCATIONS} />
};

export  default UserLoctions;