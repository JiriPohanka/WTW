import styled from 'styled-components';

interface Props {
    children: React.ReactNode;
    size?: 'large';
}

const heading1: React.FC <Props> = ({children}: Props) => <h1>{children}</h1>


const Heading = styled(heading1)`
    font-size: ${(props) => props.size === "large" ? props.size : "2rem"};

`


export default Heading;


