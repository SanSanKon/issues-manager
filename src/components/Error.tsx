interface ErrorProps {
    errorMessage: string;
}

const Error: React.FC<ErrorProps> = ({errorMessage}) => {
    return (
        <div className="error-container">
            <p>Error: {errorMessage}</p>
        </div>
    )
}

export default Error;