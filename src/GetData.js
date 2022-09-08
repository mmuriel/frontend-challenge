import data from "./data/data.json";

let channels = []
let channelsList = []

for (let i = 0; i < Object.keys(data.events).length; i++){
    if(channels.filter((idx)=>{return idx.id === data.events[i].channel.id}).length === 0){
        channels.push(data.events[i].channel)
    }
}

for(let i = 0; i < channels.length; i++){
    channelsList[channels[i].id] = data.events.filter((idx)=>{return idx.channel.id === channels[i].id})
}

export const getChannelsID = ()=>{
    return channels
}

export const getChannelsList = (id)=>{

    return channelsList[id];
}