import React from 'react';
import Podcastlistitem from './podcastlistitem';

const Podcastlist = ({podcastgrid, keyword}) => {
    const rows=[];

    podcastgrid.map((podcastdata,index) => {  
        if(keyword){
            if (podcastdata.title.toLowerCase().indexOf(keyword.toLowerCase()) === -1) {
                return;
            }                
        }
        rows.push(<Podcastlistitem key={index} podcastdata={podcastdata}/>)
    })
    if (!podcastgrid) {
        return null;
    } 
    
    return (
        <div className="podcast-list">
            {rows}
        </div>
    );
}

export default Podcastlist;
