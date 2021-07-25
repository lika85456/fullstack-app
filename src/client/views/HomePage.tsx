import React from "react";
import AppBarContainer from "../features/AppBar/AppBarContainer";

export interface HomePageProps{

}

export const HomePage: React.FunctionComponent<HomePageProps> = ({
}) => {
    return (
        <AppBarContainer>
            Home Page
        </AppBarContainer>
    );
};

export default HomePage;