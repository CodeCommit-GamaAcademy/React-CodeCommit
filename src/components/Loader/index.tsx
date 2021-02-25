import React, { HTMLAttributes } from 'react';

import { LoaderIcon } from './styles';

interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
    children?: React.ReactNode
}

const Loader: React.FC<LoaderProps> = (props) => <LoaderIcon { ...props } className="loader" />;

export default Loader;