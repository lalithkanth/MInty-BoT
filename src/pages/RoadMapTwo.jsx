import React from 'react';
import dataRoadmap from '../assets/fake-data/data-roadmap2';
import PageTitle from '../components/pagetitle';
import RoadMap from '../features/roadmap/home-v3';
import dataRoadmap2 from '../assets/fake-data/data-roadmap2';


function RoadMapTwo(props) {
    return (
        <div className='page-roadmap-v2'>
            <PageTitle title='Roadmap' />

            <RoadMap data={dataRoadmap2} />
        </div>
    );
}

export default RoadMapTwo;