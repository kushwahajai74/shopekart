import React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Backdrop from "@mui/material/Backdrop";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { logout } from "../../../features/User/UserSlice";
import { useDispatch } from "react-redux";
import "./Header.css";

const UserOptions = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const actions = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <AccountCircleIcon />, name: "Profile", func: account },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];
  if (user.role === "admin")
    actions.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });

  function dashboard() {
    navigate("/dashboard");
  }
  function orders() {
    navigate("/orders");
  }
  function logoutUser() {
    dispatch(logout());
    toast.success("Logout successfully");
  }
  function account() {
    navigate("/account");
  }

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        sx={{ zIndex: "11" }}
        className="speedDial"
        ariaLabel="SpeedDial controlled open example"
        icon={
          <img className="speedDialIcon" src={user.avatar.url} alt="Profile" />
        }
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.func}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default UserOptions;
