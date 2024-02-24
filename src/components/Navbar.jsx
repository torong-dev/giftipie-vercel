import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import theme from "../styles/theme";
import {
  NavbarIconContainer,
  NavbarLogoBtn,
  NavbarBtn,
  LogoIcon,
  LogoTextIcon,
  LogoDiv,
} from "../pages/Home/HomeStyles";
import {
  NotificationContainer,
  NotificationDiv,
  NotificationItem,
} from "../pages/Home/NotificationStyles";
import { warnToast } from "./toast";

const Navbar = ({ isLoggedIn, handleLoginClick, handleLogoutClick }) => {
  const navigate = useNavigate();
  const [isNotificationOpen] = useState(false); // setIsNotificationOpen
  const [notifications, setNotifications] = useState([
    { id: 1, text: "알림1" },
    { id: 32, text: "알림2" },
    { id: 42, text: "알림3" },
    { id: 55, text: "알림4" },
    { id: 53, text: "알림5" },
    { id: 52, text: "알림6" },
    { id: 51, text: "알림7" },
  ]);
  // 선택된 알림 아이디를 저장하는 상태
  const [selectedNotifications, setSelectedNotifications] = useState([]);

  const toggleNotification = () => {
    // setIsNotificationOpen(!isNotificationOpen);
    warnToast("알림 서비스 개발 중입니다.");
  };

  const handleNotificationClick = (notification) => {
    console.log(`알림 클릭: ${notification.id}`);
    navigate(`/fundingdetail/${notification.id}`);
  };

  const handleNavbarIconClick = () => navigate("/");

  // 체크박스의 상태를 변경하는 함수
  const handleCheckboxChange = (notificationId) => {
    setSelectedNotifications((prevSelected) =>
      prevSelected.includes(notificationId)
        ? prevSelected.filter((id) => id !== notificationId)
        : [...prevSelected, notificationId]
    );
  };

  // 선택된 알림 삭제를 처리하는 함수
  const handleDeleteSelected = () => {
    setNotifications((prev) =>
      prev.filter(
        (notification) => !selectedNotifications.includes(notification.id)
      )
    );
    // 선택한 알림 초기화
    setSelectedNotifications([]);
  };

  // 전체 알림 삭제를 처리하는 함수
  const handleDeleteAll = () => {
    setNotifications([]);
    setSelectedNotifications([]);
    toggleNotification();
  };

  // 상태에 따라 Navbar에 표시될 아이콘 결정
  const navbarContents = isLoggedIn ? (
    <>
      <NavbarIconContainer>
        <NavbarBtn onClick={toggleNotification} pt="10px">
          <img src="/imgs/Home/no-notification.svg" alt="notification" />
        </NavbarBtn>
        {isNotificationOpen && (
          <NotificationContainer>
            <NotificationDiv>
              <button onClick={toggleNotification}>
                <FaAngleLeft size="" color={theme.white} />
              </button>
              <div>
                <button onClick={handleDeleteSelected}>선택삭제</button>
                <button onClick={handleDeleteAll}>전체삭제</button>
              </div>
            </NotificationDiv>
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                onClick={() => handleNotificationClick(notification)}
              >
                {notification.text}
                <input
                  type="checkbox"
                  checked={selectedNotifications.includes(notification.id)}
                  onChange={() => handleCheckboxChange(notification.id)}
                />
              </NotificationItem>
            ))}
          </NotificationContainer>
        )}
        {/* <NavbarBtn pt="10px">
          <img src="/imgs/Home/login.svg" alt="login" />
        </NavbarBtn> */}
        <NavbarBtn onClick={handleLogoutClick} fs="24px" pt="10px">
          <img src="/imgs/Home/logout.svg" alt="logout" />
        </NavbarBtn>
      </NavbarIconContainer>
    </>
  ) : (
    <>
      <NavbarBtn onClick={handleLoginClick} pt="10px">
        <img src="/imgs/Home/login.svg" alt="login" />
      </NavbarBtn>
    </>
  );

  return (
    <>
      <NavbarLogoBtn onClick={handleNavbarIconClick} fs="10px" color="white">
        <LogoDiv>
          <LogoIcon src="/imgs/Common/pie-navbar.png" />
          <LogoTextIcon src="/imgs/Common/giftipie.png" />
        </LogoDiv>
      </NavbarLogoBtn>
      {navbarContents}
    </>
  );
};

export default Navbar;
