import React,{useState}from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
const DashBoard = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
           
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/addbook" label="AddBook" />
            <Tab LinkComponent={NavLink} to="/books" label="OrderDetails" />
            <Tab LinkComponent={NavLink} to="/payment" label="PaymentDetails" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default DashBoard;
