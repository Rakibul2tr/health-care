import { useEffect, useState } from "react";

const useFackdata=()=>{

    const [services,setservices]=useState([]);
    const [Teams,setTeams]=useState([]);

    useEffect(()=>{
        fetch('/FackApi.json')
        .then(res=>res.json())
        .then(data=>setservices(data.dantal))
    },[])

    useEffect(()=>{
        fetch('/Teams.json')
        .then(res=>res.json())
        .then(data=>setTeams(data.teams))
    },[])
    return {
        services,
        Teams,
    }
}

export default useFackdata;