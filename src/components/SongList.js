import React , { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';


class SongList extends Component{
    
    renderSong(){
        const { songs, selectSong } = this.props;

        return songs.map(song => {
            return(
                <div key={song.name} className="item">
                    <div className="right floated content">
                        <button
                            onClick={()=>selectSong(song)}
                            className="ui button primary">Select</button>
                    </div>

                    <div className="content">
                        {song.name}
                    </div>
                </div>
            )
        })
    }
    
    render(){
        console.log(this.props);
        return(
            <div className="ui divided list">
                {this.renderSong()}
            </div>
        )
    }
};

const mapStateToProps = state => {
    console.log(state)
    return {
        songs: state.songsList
    }
}

export default connect(mapStateToProps, { selectSong })(SongList);