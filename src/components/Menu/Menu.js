import React from 'react';
import './MenuStyle';
import Logo from '../../assets/투데이로고.svg';
import todayLogo from '../../assets/todayLogo.svg';
import {
    AllLogo, AllName,
    AllWrapper, StarLogo, StarName, StarWrapper,
    TitleLogo,
    TitleName,
    TitleWrapper, TodayLogo, TodayName, TodayWrapper,
    TodoListWrapper,
    TodoMenuWrapper,
    TodoWrapper,
    TopMenuWrapper, WeekLogo, WeekName, WeekWrapper
} from "./MenuStyle";
import * as PropTypes from "prop-types";



function Menu() {
    return (
        <div>
            <TodoWrapper>
                <TodoMenuWrapper>
                {/*    <MenuWrapper>*/}
                        <TopMenuWrapper>
                        <TitleWrapper>
                            <TitleLogo src={Logo} />
                            <TitleName>
                                Today's Croffle
                            </TitleName>
                        </TitleWrapper>
                        <TodayWrapper>
                            <TodayLogo src={todayLogo}/>
                            <TodayName>Today</TodayName>
                        </TodayWrapper>
                            <WeekWrapper>
                                <WeekLogo />
                                <WeekName>Week</WeekName>
                            </WeekWrapper>
                            <AllWrapper>
                                <AllLogo />
                                <AllName>All</AllName>
                            </AllWrapper>
                            <StarWrapper>
                                <StarLogo/>
                                <StarName>Star</StarName>
                            </StarWrapper>
                        </TopMenuWrapper>
                {/*        <UnderMenuWrapper>*/}
                {/*            <CategoryListWrapper>*/}
                {/*            </CategoryListWrapper>*/}
                {/*        </UnderMenuWrapper>*/}
                {/*    </MenuWrapper>*/}
                </TodoMenuWrapper>
                <TodoListWrapper>
                {/*    <DateWrapper>*/}
                {/*    </DateWrapper>*/}
                {/*    <ListWrapper>*/}
                {/*        <TodoWrapper>*/}
                {/*        </TodoWrapper>*/}
                {/*    </ListWrapper>*/}
                {/*    <AddWrapper>*/}
                {/*    </AddWrapper>*/}
                </TodoListWrapper>
            </TodoWrapper>
        </div>
    );
}

export default Menu;