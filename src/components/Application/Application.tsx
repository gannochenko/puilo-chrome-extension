import React, { FC } from 'react';

import Box from '@mui/material/Box';
import { ApplicationPropsType } from './type';
import { useApplication } from './hooks/useApplication';

export const Application: FC<ApplicationPropsType> = () => {
    const params = useApplication();

    return (
        <Box padding={2} width={200}>
            Ы
        </Box>
    );
};
