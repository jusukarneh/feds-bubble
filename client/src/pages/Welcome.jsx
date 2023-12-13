import Rating from '../components/Rating'
function Welcome() {
    return (
        <>
            <video className="video" controls autoPlay muted>
                <source src="bubble.mp4" type="video/mp4" />
                <source src="mov_bbb.ogg" type="video/ogg" />
                Your browser does not support HTML video.
            </video>
            <Rating/>
        </>
    )
}
export default Welcome

