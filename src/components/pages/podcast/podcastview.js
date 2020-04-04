import React, { lazy, Suspense } from "react";
import {
    Link,
    useParams
} from 'react-router-dom';

const Podcastepisodes = lazy(() => import('./podcastepisodes.js'));

const Podcastview = ({ podcastdata }) => {
    const { podcastID } = useParams();
    const currentPodcast = getPodcastByID(podcastID);

    function getPodcastByID(id) {
        const podcastItem = podcastdata;
        const resultIndex = podcastItem.findIndex(room => room.id === parseInt(id));
        const result = podcastItem[resultIndex];
        return result;
    }

    return (
        <div className="podcast-wrapper-details">
            <div className="podcast-data">
                <div className="podcast-media">
                    <img src={currentPodcast.thumbnail} alt={currentPodcast.title} />
                </div>
                <div className="podcast-description">
                    <h3 className="podcast-name">{currentPodcast.title}</h3>
                    <div className="podcast-source">
                        <a href={currentPodcast.url}>
                            {currentPodcast.url}</a>
                    </div>
                </div>
            </div>
            <Suspense>
                <Podcastepisodes key={currentPodcast.id} index={currentPodcast.id} episodes={currentPodcast.episodes} />
            </Suspense>
            <Link className="back-to-home" to="/"> Back to Home </Link>
        </div>
    );
}

export default Podcastview;
