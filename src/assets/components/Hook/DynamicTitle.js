import React, { useEffect } from 'react';

const DynamicTittle = (title) => {
    useEffect(() => {
        document.title = `${title} - Green Shopping`
    }, [title])
};

export default DynamicTittle;