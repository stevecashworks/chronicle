import styled from "styled-components";
import logo from "../../../assets/state-logo.png"; // <-- change to your logo path

import {
  FiHome,
  FiUsers,
  FiUserCheck,
  FiActivity,
  FiBriefcase,
  FiShield,
  FiBarChart2,
  FiDollarSign,
  FiPackage,
  FiAlertTriangle,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";

const Container = styled.aside`
  width: 290px;
  min-height: 100vh;
  background: var(--sidebar-bg);
  color: var(--text-light);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow-md);
`;

const Top = styled.div``;

const Brand = styled.div`
  padding: 28px 24px;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Logo = styled.img`
  width: 58px;
  height: 58px;
  object-fit: contain;
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h5`
  margin: 0;
  font-weight: 700;
  color: white;
  line-height: 1.2;
`;

const Subtitle = styled.small`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 13px;
`;

const Menu = styled.div`
  margin-top: 16px;
  padding: 0 18px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 18px;
  margin-bottom: 8px;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.25s ease;

  background: ${({ active }) =>
    active ? "rgba(255,255,255,.12)" : "transparent"};

  color: ${({ active }) =>
    active ? "#fff" : "rgba(255,255,255,.82)"};

  svg {
    font-size: 20px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(6px);
    color: white;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin: 20px 0;
`;

const Bottom = styled.div`
  padding: 18px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px;
  border-radius: 14px;
  cursor: pointer;
  transition: .25s;

  &:hover{
    background:rgba(255,255,255,.08);
  }
`;

const Avatar = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 15px;
`;

const Role = styled.small`
  color: rgba(255,255,255,.65);
`;

const menu = [
  {
    icon: <FiHome />,
    title: "Overview",
    active: true,
  },
  {
    icon: <FiBriefcase />,
    title: "Health Facilities",
  },
  {
    icon: <FiUserCheck />,
    title: "Health Workers",
  },
  
  
  {
    icon: <FiActivity />,
    title: "Facility Categories",
  },
  {
    icon: <FiBarChart2 />,
    title: "Reports & Analytics",
  },
  {
    icon: <FiDollarSign />,
    title: "Finance & Budget",
  },
  {
    icon: <FiPackage />,
    title: "Inventory",
  },
  {
    icon: <FiAlertTriangle />,
    title: "Zones",
  },
  {
    icon: <FiSettings />,
    title: "Settings",
  },
];

const StateSidebar = () => {
  return (
    <Container>
      <Top>
        <Brand>
          <LogoRow>
            <Logo src={logo} />

            <BrandText>
              <Title>
                State Ministry
                <br />
                of Health
              </Title>

              <Subtitle>
                Building a healthier state
              </Subtitle>
            </BrandText>
          </LogoRow>
        </Brand>

        <Menu>
          {menu.map((item) => (
            <MenuItem
              key={item.title}
              active={item.active}
            >
              {item.icon}
              <span>{item.title}</span>
            </MenuItem>
          ))}
        </Menu>
      </Top>

      <Bottom>
        <Divider />

        <Profile>
          <Avatar>SC</Avatar>

          <UserInfo>
            <Name>Dr. Stephen C.</Name>
            <Role>Commissioner</Role>
          </UserInfo>

          <FiChevronDown />
        </Profile>
      </Bottom>
    </Container>
  );
};

export default StateSidebar;