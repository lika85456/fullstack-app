import React, {
    ReactChild, ReactChildren
} from "react";
import Navigation from "./Navigation";

export interface NavigationContainerProps {
    children: ReactChild | ReactChildren;
}

export const NavigationContainer: React.FunctionComponent<NavigationContainerProps> = ({
    children
}) => {
    return (
        <Navigation>
            {
                children
            }
        </Navigation>
    );
};

export default NavigationContainer;