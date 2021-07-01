import Alert from 'react-bootstrap/Alert'
const alert = (title, body, variant, onClose) => {
    return (
        <Alert variant={variant} onClose={() => onClose} dismissible>
            <Alert.Heading>{title}</Alert.Heading>
            <p>
                {body}
            </p>
        </Alert>
    );
}
export default alert