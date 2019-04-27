import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => (
    <div className="ui container grid" style={{marginTop:'16px'}}>
        <div className="ui row">
            <div className="column eight wide">
                <SongList/>
            </div>
            <div className="column eight wide">
                <SongDetail/>
            </div>
        </div>
    </div>
);

export default App