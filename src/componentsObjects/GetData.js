import data from "../data/data.json"


class DataLoader{
    constructor() {

        this.state = {
            Data: data,
            Time: new Date(1654079700000),
        };
        this.state.Channels = this.GetChannels();

    }

    GetChannels() {
        let ChannelsList = [];
        for(let i = 0; i<Object.keys(this.state.Data.events).length; i++){
            if(ChannelsList.filter((idx)=>{return idx.id === data.events[i].channel.id}).length === 0){
                ChannelsList.push(this.state.Data.events[i].channel)
            }
        }
        return ChannelsList;
    }
    GetProgramsByChannelId(id){

        return this.state.Data.events.filter((idx)=>{return idx.channel.id === id})
    }
    GetChannelById(id){

        return this.state.Channels.filter((idx)=>{return idx.id === id})
    }

    IsProgramCurrent(timestamp, duration){

        let start = new Date(timestamp);
        let end = new Date(start.getTime() + duration * 1000)

        const today = this.state.Time;
        if(today.getTime() >= start.getTime() && today.getTime() < end.getTime()){
            return true;
        }

    }

    isToday(someDate){
        const today = this.state.Time;
        return someDate.getDate() === today.getDate() &&
            someDate.getMonth() === today.getMonth() &&
            someDate.getFullYear() === today.getFullYear()
    }

}

let DL = new DataLoader()

export default DL;