import React from "react";

import { Image } from "../ui";

import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const DetailUser = (props) => {
  return (
    <>
      <LowerUserInfo>
        <User
          onClick={() => {
            window.alert("Comming Soon!");
          }}
        >
          <div>
            <ImageCircle
              shape="circle"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASbSURBVHgB7Z0tTytBFIYP914BDiQ4cIADB0EhwYFE8ifq7g/hJ2CRSCQ4kOCobF3ruHk3maS5aSnbdnfPOe/7JE0oCTvTnmc+dvbMsNbr9b5M0PLLBDUSgBwJQI4EIEcCkCMByJEA5EgAciQAORKAHAlAjgQgRwKQIwHIkQDkSAByJAA5EoAcCUCOBCBHApAjAciRAORIAHIkADkSgBwJQI4EIEcCkCMByJEA5EgAciQAOX+MhPX1dTs+Prbt7W3b3d21jY2N6ndgPB7bYDCw4XBor6+v9vHxUb1nIL0Ae3t7dn5+XgV9FhABYuC1v79f/Q4SPD8/28vLi2UmrQA/Cfx34O/wwjXu7u7S9gi/z87O/loyELTr62vb2tqyZcFQcXp6Wv2MXiEb6SaBCDwEWDVFqmykEgABOjo6sqbAtbNJkEaAi4uLRoNfQBmXl5eWhRQCIChlnG6Dk5OTVstrkvACYKLXxJg/D5RZ1hEiE14ABGIVs/26IPgZeoHQAiDwbYz7s4AA0XuB0AIsusizKsrycmRCC+Dhyz84OLDIhBUAra/rHgCgDpGHgbAC7OzsmBc81aUuYQXY3Nw0L3iqS13CCtDFrd8sPNWlLsoIIkcCkBNWAE8JGpGTRcIKgPw9L3iqS13CCvD5+Wle8FSXuoQVAJm8HlK0UAfUJSqhJ4Fvb2/WNcgcjkxoAfDld936oieKhhYAwX96erKuwJ6B6Oni4dcBIEAXvQAC//j4aNEJLwCC30UgUGaGzSIpVgLRC7Q5FKCsLFvG0iwFPzw8tBIUlIGyspDqWcD9/X2jEuDaKCMT6R4GIUBNzAlwzWzBByl3ByNYaK23t7dLP6vHfT6u9/7+bhlZ6/V6X5YYpI0jebRu/mD2wBfSHxCBngAv9ASQ4PDwsErhwvvJE0JGo1EV9H6/72KFsS1SCDAZyFngnh2vVUwSUV4WQUILULZnlR06aMGYqDW1QDN56khZho6+Ghh2DoBgXF1dTZ3koZWvcqWubECdtg0NZUQ+QiakAGjxOA9gHhABj4wXeWyMHgX5/j85Zwi9AXoeD4+n6xJOAASk7nbwkjyCGT0meXg/mcWDYOMsIJwShtaO3mWRHT/odaINCaHmAIsEHyCQOP6tHAHXFKVukSQIsxK4aPDbBnWMdG5ACAHwhUYIfgHzEwwjEXAvQFdHwCzLzc1NiC1jrgXA2I31/Ijbr1HnCEfKuRagq/N/VgXuJLzPB9wKgMBnOITJu8RuBUDXnwHvQ4FLAbDkGrnr/x8MBV7vClwKEHHWPw+vn8mdANlaf8FrL+BOgIytv+Dxs7kSAC0kY+sveOwFXAnQ5bGvbdH0A6m6uBLAw8GPTePtaFk3AmTv/gtYF/A0DLgRgKH1Fzx9VjcCIBuHBU89nRsBkKrFgqfNJm5SwpBGVc7fz/CvWKZRUsk9bS1PvzVMfI+OiiVHApAjAciRAORIAHIkADkSgBwJQI4EIEcCkCMByJEA5EgAciQAORKAHAlAjgQgRwKQIwHIkQDkSAByJAA5EoAcCUCOBCBHApAjAciRAORIAHIkADkSgBwJQI4EIOcfGjV2tEfztqEAAAAASUVORK5CYII="
            />
          </div>
          <UserName>{props.data.userName}</UserName>
        </User>
        <hr className="line" />
        <ThreeIcons
          onClick={() => {
            window.alert("Comming Soon!");
          }}
        >
          <GitHubIcon sx={{ fontSize: 35 }} />
          <div className="icons">
            <HomeIcon sx={{ fontSize: 35 }} />
          </div>
          <EmailOutlinedIcon sx={{ fontSize: 35 }} />
        </ThreeIcons>
      </LowerUserInfo>
    </>
  );
};

export default DetailUser;

const LowerUserInfo = styled.div`
  font-size: 16px;
  text-decoration: none solid rgb(33, 37, 41);
  word-spacing: 0px;
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #212529;
  height: 221px;
  width: 768px;
  display: block;

  margin: 0px auto;
  .line {
    color: 1px solid gray;
    margin: 30px auto;
  }
`;
const User = styled.div`
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #212529;
  height: 128px;
  width: 100%;
  display: flex;
  margin-top: 150px;
`;
const ImageCircle = styled.div`
  min-width: 128px;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  margin: 3px 15px 3px 3px;
  background-color: black;
  cursor: pointer;
`;

const UserName = styled.div`
  font-size: 24px;
  font-weight: 700;
  word-spacing: 0px;
  background-color: #ffffff;
  background-position: 0% 0%;
  margin: auto 0px;
  color: #212529;
  height: auto;
  width: auto;
  display: inline;
  cursor: pointer;
`;

const ThreeIcons = styled.div`
  background-color: #ffffff;
  color: #868e96;
  height: 36px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  .icons {
    width: 35px;
    height: 36px;
    margin: 0px 10px 0px 10px;
  }
  :hover {
    cursor: pointer;
  }
`;

const LowerBox = styled.div`
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #212529;
  height: 100%;
  width: 768px;
  margin: 0px auto;
  display: block;
  border: 1px solid blue;
  margin-top: 100px;
`;
