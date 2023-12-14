import loading from "../images/loading.png";
const Loading: React.FC = () => {
    return (
        <div className="loading-container">
            <img src={loading} />
            <p>Loading...</p>
        </div>
    )
}

export default Loading;