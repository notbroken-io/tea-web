import React, { useState } from 'react'
import Container from '@/components/Container';
import Loader from '@/components/Loader';


const NotFound: React.FC = () => {
    const [isLoading] = useState(false);

    return isLoading
        ? <Loader />
        : (<>
            <Container>
                {"NOT_FOUND"}
            </Container>
        </>);
}

export default NotFound;