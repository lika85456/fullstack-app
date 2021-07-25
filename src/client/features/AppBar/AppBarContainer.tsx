import React, {
    ReactChild, ReactChildren
} from "react";
import AppBar from "./AppBar";

export interface AppBarProps {
    children: ReactChild | ReactChildren;
}

export const AppBarContainer: React.FunctionComponent<AppBarProps> = ({
    children
}) => {
    return (
        <div>
            <AppBar/>
            {
                children
            }
        </div>

    );
};

export default AppBarContainer;