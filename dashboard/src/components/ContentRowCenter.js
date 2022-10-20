import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            <LastMovieInDb />
            <GenresInDb />
        </div>
    )
}

export default ContentRowCenter;