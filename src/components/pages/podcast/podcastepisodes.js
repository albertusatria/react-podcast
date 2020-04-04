import React from 'react';

const Podcastepisodes = (props) => {
    return (
        <div className="podcast-episodes"> 
            {(props.episodes) ? (
                [
                    <ul className="episodes-list" key={props.index}>
                        {props.episodes.map(episode => (
                            <li key={episode.id}>
                                <span>Topic: {episode.id}</span>
                                <audio controls>
                                    <source src={episode.audio} type="audio/mpeg" />
                                </audio>
                            </li>
                        ))}
                    </ul>
                ]
            ) : (
                <span className="episode-coming-soon">Episodes in still on baking. Come back soon... </span>
            )}
        </div>
    );
}

export default Podcastepisodes;
