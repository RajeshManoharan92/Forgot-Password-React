import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import './index.css';
import Grid from '@mui/material/Grid';
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import OutlinedInput from '@mui/material/OutlinedInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import CardMedia from '@mui/material/CardMedia'
import { FaRupeeSign } from 'react-icons/fa';
import { Formik } from "formik";
import { ReactDOM } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl, { useFormControl } from '@mui/material/FormControl';



export default function App() {
  return (

    // Router used for navigation through pages

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/LoginAuth" element={<LoginAuth />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/setnewpassword" element={<Setnewpassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

// function used for login page

function Login() {

  const Navigate = useNavigate()


return (
  <>
    {/* Top-Grid */}

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ height: "200px" }} className="color">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            <div className="fontstyle1">
              Welcome to Product Rental
            </div>
            <div className="fontstyle2">
              Don't need to buy a product anymore.. JUST Rent it !!!!
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

    {/*User Login & New User Button */}

    <div>
      <button id="loginBTNu" class="btn btn-info" onClick={() => Navigate("/userlogin")}>User Login</button>
    </div>
    <div>
      <button id="loginBTNu" class="btn btn-secondary" onClick={() => Navigate("/LoginAuth")}>New User!</button>
    </div>
  </>

);
}

// Function for Login Authentication

function LoginAuth() {
  const Navigate = useNavigate();

  const [formvalue, setformvalue] = useState({
    First_Name: "",
    Last_Name: "",
    E_mail: "",
    Password: ""
  })

  // Formik Error Validation

  const validate = (formData) => {
    var errors = {};
    if (formData.First_Name == "") errors.First_Name = "First Name is Required";
    if (formData.Last_Name == "") errors.Last_Name = "Last Name is Required";
    if (formData.E_mail == "") errors.E_mail = "E_mail is Required";
    if (formData.Password == "") errors.Password = "Password is Required";
    return errors;
  }

  // On Submit Function

  var Register = async (formData) => {
    var response = await axios.post("http://localhost:3002/register", {
      firstName: formData.First_Name,
      lastName: formData.Last_Name,
      email: formData.E_mail,
      password: formData.Password,
    })

    await setformvalue({ First_Name: "", Last_Name: "", E_mail: "", Password: "" })

    if (response.statusText === "Created") {
      alert("Registered Successfully")
      Navigate('/')
    }

    else if (response.data === "User Already Exist. Please Login") {
      alert("User Already Exist. Please Login")
      setformvalue({ First_Name: "", Last_Name: "", E_mail: "", Password: "" })
    }
  }


  return (
    <>

      {/* Top Grid */}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ height: "150px" }} className="color">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              <div className="fontstyle1">
                Register Your Details
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>


      <Formik
        initialValues={formvalue}
        validate={(formData) => validate(formData)}
        onSubmit={(formData) => Register(formData)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>

            {/* First_Name Input */}

            <div id="Fname" class="container">
              <div class="row">
                <div class="col-4">
                  <label for="email" > First_Name </label>
                </div>
                <div id="Ippass">
                  <OutlinedInput
                    placeholder="Enter Your First_Name"
                    type="text"
                    name="First_Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.First_Name}
                  /> &nbsp; &nbsp; <span className="errors">{errors.First_Name && touched.First_Name && errors.First_Name}</span> </div>
              </div>
            </div> <br></br>

            {/* Last_Name Input */}

            <div id="Fname" class="container">
              <div class="row">
                <div class="col-4">
                  <label for="email" > Last_Name </label>
                </div>
                <div id="Ippass">
                  <OutlinedInput
                    placeholder="Enter Your Last_Name"
                    type="text"
                    name="Last_Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Last_Name}
                  /> &nbsp; &nbsp; <span className="errors">  {errors.Last_Name && touched.Last_Name && errors.Last_Name}</span> </div>


              </div>
            </div> <br></br>

            {/* Email Input */}

            <div id="Fname" class="container">
              <div class="row">
                <div class="col-4">
                  <label for="email" > E_mail </label>
                </div>
                <div id="Ippass">
                  <OutlinedInput
                    placeholder="Enter Your E_mail"
                    type="email"
                    name="E_mail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.E_mail}
                  /> &nbsp; &nbsp;<span className="errors">  {errors.E_mail && touched.E_mail && errors.E_mail}</span> </div>


              </div>
            </div> <br></br>

            {/* Password Input */}

            <div id="Fname" class="container">
              <div class="row">
                <div class="col-4">
                  <label for="email" > Password </label> </div>
                <div id="Ippass">
                  <OutlinedInput
                    placeholder="Enter Your Password"
                    type="password"
                    name="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Password}
                  /> &nbsp; &nbsp; <span className="errors"> {errors.Password && touched.Password && errors.Password}</span> </div>


              </div>
            </div> <br></br>

            {/* Register Button */}

            <div id="FnameR" class="container">
              <div class="row">
                <div class="col-4">
                  <button id="Ippassbutn" class="btn btn-info" type="submit" disabled={isSubmitting}>
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>

    </>
  )
}


function Userlogin() {

  const Navigate = useNavigate();

  const [formvalue, setformvalue] = useState({
    E_mail: "",
    Password: ""
  })

  // Formik error validation

  const validate = (formData) => {
    var errors = {};
    if (formData.E_mail == "") errors.E_mail = "E_mail is Required";
    if (formData.Password == "") errors.Password = "Password is Required";
    return errors;

  }

  // On Submit Function

  const Login = async (formData) => {
    var response = await axios.post("http://localhost:3002/login", {
      email: formData.E_mail,
      password: formData.Password,
    })

    if (response.data === "Loggedin") {
      alert("Logged In Successfully")
      Navigate('/dashboard')
    }
    if (response.data === "Invalid") {
      alert("Invalid creditional")
    }
  }


  return (
    <>

      {/* Top Grid */}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ height: "150px" }} className="color">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              <div className="fontstyle1">
                Log In Page
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>


      <Formik
        initialValues={formvalue}
        validate={(formData) => validate(formData)}
        onSubmit={(formData) => Login(formData)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>

            {/* E-mail Input */}

            <div id="Fname" class="container">
              <div class="row">
                <div class="col-4">
                  <label for="email" > E-mail Id </label>
                </div>
                <div id="Ippass">
                  <OutlinedInput
                    placeholder="Enter Your Email-Id"
                    type="email"
                    name="E_mail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.E_mail}
                  /> &nbsp; &nbsp; <span className="errors">{errors.E_mail && touched.E_mail && errors.E_mail}</span>  </div>


              </div>
            </div> <br></br>

            {/* Password Input */}

            <div id="Fname" class="container">
              <div class="row">
                <div class="col-4">
                  <label for="email" > Password </label> </div>
                <div id="Ippass">
                  <OutlinedInput
                    placeholder="Enter Your Password"
                    type="password"
                    name="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Password}
                  /> &nbsp; &nbsp;<span className="errors">{errors.Password && touched.Password && errors.Password}</span>   </div>
              </div>
            </div> <br></br>

            {/* Login &  Forgot Password Button */}

            <div id="Fname" class="container">
              <div class="row">
                <div class="col-4">
                  <button id="Ippassbutn" class="btn btn-info" type="submit" disabled={isSubmitting}>
                    Log In
                  </button>
                  <button id="IppassbutnR" class="btn btn-secondary" type="button" onClick={() => Navigate('/forgotpassword')} disabled={isSubmitting}>
                    Forgot password
                  </button>
                </div>
              </div>
            </div>

          </form>
        )}
      </Formik>
    </>
  )
}


function Forgotpassword() {
  const Navigate = useNavigate();

  const [formvalue, setformvalue] = useState({
    E_mail: "",
  })

  //  Formik Error Validation

  const validate = (formData) => {
    var errors = {};
    if (formData.E_mail == "") errors.E_mail = "E_mail is Required";
    return errors;
  }

  // On submit Function

  var Forgotpassword = async (formData) => {
    var response = await axios.post("http://localhost:3002/forgotpass", {
      email: formData.E_mail,

    })

    console.log(response)

    if (response.data.message === "Sorry Email does not Exist!") {
      alert("Sorry Email does not Exist!")
    }

    if (response.data === "mail_sent") {
      alert("mail sent")
      Navigate('/setnewpassword')
    }


  }


  return (
    <>

      {/* Top Grid */}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ height: "150px" }} className="color">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              <div className="fontstyle1">
                Change Your Password
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Formik
        initialValues={formvalue}
        validate={(formData) => validate(formData)}
        onSubmit={(formData) => Forgotpassword(formData)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>

            {/* Email Input */}

            <div id="Fname" class="container">
              <div class="row">
                <div class="col-4">
                  <label for="email" > E_mail </label>
                </div>
                <div id="Ippass">
                  <OutlinedInput
                    placeholder="Enter Your E_mail"
                    type="email"
                    name="E_mail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.E_mail}
                  /> &nbsp; &nbsp;<span className="errors">  {errors.E_mail && touched.E_mail && errors.E_mail}</span> </div>
              </div>
            </div> <br></br>

            {/* Send Verification E-mail button */}

            <div id="Fname" class="container">
              <div class="row">
                <div class="col-4">
                  <button id="Ippassbutns" class="btn btn-info" type="submit" disabled={isSubmitting}>
                    Send Verification E-mail
                  </button>
                </div>
              </div>
            </div>

          </form>
        )}
      </Formik>
    </>
  )
}

// Function for set new password

function Setnewpassword() {
  const Navigate = useNavigate();

  const [formvalue, setformvalue] = useState({

    E_mail: "",
    New_Password: ""

  })

  // Formik Error Validation

  const validate = (formData) => {
    var errors = {};

    if (formData.E_mail == "") errors.E_mail = "E_mail is Required";
    if (formData.New_Password == "") errors.New_Password = "New_Password is Required";

    return errors;

  }

  // Onsubmit Function

  var Forgotpassword = async (formData) => {

    var response = await axios.post("http://localhost:3002/setnewpassword", {
      email: formData.E_mail,
      password: formData.New_Password

    })


    if (response.data.message === "Sorry Email does not Exist!") {
      alert("Sorry Email does not Exist!")
      return;
    }

    alert('Password changed successfully')
    Navigate('/')

  }


  return (
    <>

      {/* Top Grid */}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ height: "150px" }} className="color">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              <div className="fontstyle1">
                Set Your New Password
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>


      <Formik
        initialValues={formvalue}
        validate={(formData) => validate(formData)}
        onSubmit={(formData) => Forgotpassword(formData)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>

            {/* E_mail Input */}

            <div id="Fname" class="container">
              <div class="row">
                <div class="col-4">
                  <label for="email" > E_mail </label>
                </div>
                <div id="Ippass">
                  <OutlinedInput
                    placeholder="Enter Your E_mail"
                    type="email"
                    name="E_mail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.E_mail}
                  /> &nbsp; &nbsp; <span className="errors">  {errors.E_mail && touched.E_mail && errors.E_mail} </span></div>
              </div>
            </div> <br></br>

            {/* New_Password Input */}

            <div id="Fname" class="container">
              <div class="row">
                <div id="FnameC" class="col-3">
                  <label for="New_Password" > New_Password </label>
                </div>
                <div id="Ippass">
                  <OutlinedInput
                    placeholder="Enter Your New_Password"
                    type="text"
                    name="New_Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.New_Password}
                  /> &nbsp; &nbsp; <span className="errors">  {errors.New_Password && touched.New_Password && errors.New_Password}</span> </div>
              </div>
            </div> <br></br>

            {/* Change password Button */}

            <div id="Fname" class="container">
              <div class="row">
                <div class="col-4">

                  <button id="IppassbutnC" class="btn btn-info" type="submit" disabled={isSubmitting}>
                    Change password
                  </button>
                </div>
              </div>
            </div>

          </form>
        )}
      </Formik>
    </>
  )
}



// Function used for Dashboard Page

function Dashboard() {
  const Navigate = useNavigate();
  // to store datas array used

  const [array, setarray] = useState({ Product: [] })

  // to store cartvalue  

  const [cartvalue, setcartvalue] = useState(0)

  // to disable add to cart button on click

  const [disable1, setDisable1] = React.useState(false);
  const [disable2, setDisable2] = React.useState(false)
  const [disable3, setDisable3] = React.useState(false)
  const [disable4, setDisable4] = React.useState(false)
  const [disable5, setDisable5] = React.useState(false)
  const [disable6, setDisable6] = React.useState(false)

  // using useEffect to get data on page load

  useEffect(
    () => {
      cartcount();
    }, [])


  var cartcount = async () => {
    var response = await axios.get('http://localhost:3000/product/gettotalproductcount')
    var res = response.data.map((row) => {
      setcartvalue(row.Totalcount)
    })
  }

  // below function used for posting datas during Add to cart button pressed

  const IncreaseValue = async (e) => {
    var button = document.querySelector('#B1')

    // If atomos's Add to cart button clicked following if condition take place

    if (e.target.name === 'Atomos') {

      // Posting datas on database

      var post = await axios.post('http://localhost:3000/product/post', {
        ProductName: "Shogun Monitor",
        Productcompany: "Atomos",
        Productprice: 50000,
        Quantity: "",
        Hours: "",
        TotalAMount: ""
      })

      // Pushing fetched data to Product Array

      var Product = [...array.Product];
      Product.push(post.data);
      setarray({ Product });

      // to make add to cart button disable

      setDisable1(true)

      // to get posted data count and pushing it to cartvalue 

      var response = await axios.get('http://localhost:3000/product/gettotalproductcount')
      var res = response.data.map((row) => {
        setcartvalue(row.Totalcount)
      })
    }

    // If light's Add to cart button clicked following if condition take place

    else if (e.target.name === 'light') {


      // Posting datas on database

      var post = await axios.post('http://localhost:3000/product/post', {
        ProductName: "Baby Light",
        Productcompany: "Canon",
        Productprice: 5000,
        Quantity: "",
        Hours: "",
        TotalAMount: ""
      })

      // Pushing fetched data to Product Array

      var Product = [...array.Product];
      Product.push(post.data);
      setarray({ Product });

      // to make add to cart button disable

      setDisable2(true)

      // to get posted data count and pushing it to cartvalue

      var response = await axios.get('http://localhost:3000/product/gettotalproductcount')
      var res = response.data.map((row) => {
        setcartvalue(row.Totalcount)
      })

    }

    // If stand's Add to cart button clicked following if condition take place

    else if (e.target.name === 'stand') {

      // Posting datas on database

      var post = await axios.post('http://localhost:3000/product/post', {
        ProductName: "Backdrop Stand",
        Productcompany: "Epson",
        Productprice: 10000,
        Quantity: "",
        Hours: "",
        TotalAMount: ""
      })

      // Pushing fetched data to Product Array

      var Product = [...array.Product];
      Product.push(post.data);
      setarray({ Product });

      // to make add to cart button disable

      setDisable3(true)

      // to get posted data count and pushing it to cartvalue

      var response = await axios.get('http://localhost:3000/product/gettotalproductcount')
      var res = response.data.map((row) => {
        setcartvalue(row.Totalcount)
      })
    }

    // If monopad's Add to cart button clicked following if condition take place

    else if (e.target.name === 'monopad') {


      // Posting datas on database

      var post = await axios.post('http://localhost:3000/product/post', {
        ProductName: "Monopad",
        Productcompany: "Benro",
        Productprice: 2000,
        Quantity: "",
        Hours: "",
        TotalAMount: ""
      })

      // Pushing fetched data to Product Array

      var Product = [...array.Product];
      Product.push(post.data);
      setarray({ Product });

      // to make add to cart button disable

      setDisable4(true)

      // to get posted data count and pushing it to cartvalue

      var response = await axios.get('http://localhost:3000/product/gettotalproductcount')
      var res = response.data.map((row) => {
        setcartvalue(row.Totalcount)
      })

    }

    // If tripod's Add to cart button clicked following if condition take place

    else if (e.target.name === 'tripod') {

      // Posting datas on database

      var post = await axios.post('http://localhost:3000/product/post', {
        ProductName: "Tripod",
        Productcompany: "Benro",
        Productprice: 5000,
        Quantity: "",
        Hours: "",
        TotalAMount: ""
      })

      // Pushing fetched data to Product Array

      var Product = [...array.Product];
      Product.push(post.data);
      setarray({ Product });

      // to make add to cart button disable

      setDisable5(true)

      // to get posted data count and pushing it to cartvalue

      var response = await axios.get('http://localhost:3000/product/gettotalproductcount')
      var res = response.data.map((row) => {
        setcartvalue(row.Totalcount)
      })
    }

    // If camera's Add to cart button clicked following if condition take place

    else if (e.target.name === 'camera') {

      // Posting datas on database

      var post = await axios.post('http://localhost:3000/product/post', {
        ProductName: "Camera",
        Productcompany: "canon",
        Productprice: 45000,
        Quantity: "",
        Hours: "",
        TotalAMount: ""
      })

      // Pushing fetched data to Product Array

      var Product = [...array.Product];
      Product.push(post.data);
      setarray({ Product });

      // to make add to cart button disable

      setDisable6(true)

      // to get posted data count and pushing it to cartvalue

      var response = await axios.get('http://localhost:3000/product/gettotalproductcount')
      var res = response.data.map((row) => {
        setcartvalue(row.Totalcount)
      })
    }

    // to move to top of page after clicking Add to Cart Button 

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>

      {/* contact us button */}

      <div class="container-fluid">
        <div class="row">
          <div class="col-75">
            <div className="topgrid">
              <Grid container spacing={2}>
                <Grid className='home' >
                  <button class="btn btn-outline-secondary"  >  Contact Us </button>
                </Grid>

                {/* cart button */}

                <div className="cart">
                  <Grid >
                    <button id="cartbtn" class="btn btn-outline-secondary" size="sl" startIcon={<DeleteIcon />}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} /> Cart <span id="cv" className="Cnum">{cartvalue}</span>
                    </button>
                  </Grid>

                  {/* Log Out button */}

                </div>
                <div className="cartHomeDp">
                  <button class="btn btn-outline-secondary" onClick={() => Navigate('/')} >  Log Out </button>
                </div>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <br></br>

      {/* Top Grid */}

      <div class="container-fluid">
        <div class="row">
          <div class="col-75">
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar style={{ height: "300px" }} className="color">
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                    <div className="fontstyle1">
                      Products For Rental<br></br>
                    </div>
                    <div className="fontstyle2">
                      Don't need to buy a product anymore JUST Rent It !!!!
                    </div>
                  </Typography>
                </Toolbar>
              </AppBar>
            </Box>
          </div>
        </div>
      </div>
      <br></br>

      {/* product cards */}

      {/* Atomos Shogun Monitor card */}

      <div class="container-fluid">
        <div class="row">
          <div class="col-75">
            <Grid container spacing={7} className="grid" >
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 300 }}>

                  <CardMedia
                    component="img"
                    height="194"
                    image="monitor.jpg"
                    alt="Paella dish"
                  />

                  <CardContent style={{ height: "150px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <div className="fontstyle3">
                        Atomos Shogun Monitor
                      </div>
                      <div className="fontstyle4">
                        <span>7 hours</span> <FaRupeeSign /> 1500
                      </div><br></br>
                    </Typography>
                  </CardContent>

                  <CardActions >
                    <div className="Button">
                      <button onClick={(e) => IncreaseValue(e)} id='B1' name="Atomos" disabled={disable1} class="btn btn-outline-secondary"  >Add To Cart</button>{' '}
                    </div>
                  </CardActions>
                </Card>
              </Grid>

              {/*  Baby light card */}

              <Grid item xs={4}>
                <Card sx={{ maxWidth: 300 }}>
                  <CardMedia
                    component="img"
                    height="194"
                    image="light.jpg"
                    alt="Paella dish"
                  />

                  <CardContent style={{ height: "150px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <div className="fontstyle3">
                        Baby light
                      </div>
                      <div className="fontstyle4">
                        <span>7 Hours</span> <FaRupeeSign /> 500
                      </div><br></br>
                    </Typography>
                  </CardContent>

                  <CardActions >
                    <div className="Button">
                      <button onClick={(e) => IncreaseValue(e)} id='B1' name="light" disabled={disable2} class="btn btn-outline-secondary">Add To Cart</button>{' '}
                    </div>
                  </CardActions>
                </Card>
              </Grid>

              {/*  Backdrop Stand card */}

              <Grid item xs={4}>
                <Card sx={{ maxWidth: 300 }}>

                  <CardMedia
                    component="img"
                    height="194"
                    image="stand.jpg"
                    alt="Paella dish"
                  />

                  <CardContent style={{ height: "150px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <div className="fontstyle3">
                        Backdrop Stand
                      </div>
                      <div className="fontstyle4">
                        7 Hours - <FaRupeeSign /> 500
                      </div><br></br>
                    </Typography>
                  </CardContent>

                  <CardActions >
                    <div className="Button">
                      <button onClick={(e) => IncreaseValue(e)} id='B1' name="stand" disabled={disable3} class="btn btn-outline-secondary">Add To Cart</button>{' '}
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <br></br>

      {/*  Benro Monopad card */}

      <div class="container-fluid">
        <div class="row">
          <div class="col-75">

            <Grid container spacing={7} className="grid1" >
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 300 }}>

                  <CardMedia
                    component="img"
                    height="194"
                    image="monopad.jpg"
                    alt="Paella dish"
                  />


                  <CardContent style={{ height: "150px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <div className="fontstyle3">
                        Benro Monopad
                      </div>
                      <div className="fontstyle4">
                        <span>7 hours</span> <FaRupeeSign /> 150
                      </div><br></br>
                    </Typography>
                  </CardContent>

                  <CardActions >
                    <div className="Button">
                      <button onClick={(e) => IncreaseValue(e)} id='B1' name="monopad" disabled={disable4} class="btn btn-outline-secondary">Add To Cart</button>{' '}
                    </div>
                  </CardActions>
                </Card>
              </Grid>

              {/*  Benro Photo Tripod card */}

              <Grid item xs={4}>
                <Card sx={{ maxWidth: 300 }}>

                  <CardMedia
                    component="img"
                    height="194"
                    image="benro tripod.jpg"
                    alt="Paella dish"
                  />

                  <CardContent style={{ height: "150px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <div className="fontstyle3">
                        Benro Photo Tripod
                      </div>
                      <div className="fontstyle4">
                        <span>7 hours</span> <FaRupeeSign /> 300
                      </div><br></br>
                    </Typography>
                  </CardContent>

                  <CardActions >
                    <div className="Button">
                      <button onClick={(e) => IncreaseValue(e)} id='B1' name="tripod" disabled={disable5} class="btn btn-outline-secondary">Add To Cart</button>{' '}
                    </div>
                  </CardActions>
                </Card>
              </Grid>

              {/*   Camera card */}

              <Grid item xs={4}>
                <Card sx={{ maxWidth: 300 }}>
                  <CardMedia
                    component="img"
                    height="194"
                    image="camera.jpg"
                    alt="Paella dish"
                  />
                  <CardContent style={{ height: "150px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <div className="fontstyle3">
                        Camera
                      </div>
                      <div className="fontstyle4">
                        7 Hours - <FaRupeeSign /> 2000
                      </div><br></br>
                    </Typography>
                  </CardContent>
                  <CardActions >
                    <div className="Button">
                      <button onClick={(e) => IncreaseValue(e)} id='B1' name="camera" disabled={disable6} class="btn btn-outline-secondary">Add To Cart</button>{' '}
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <br></br>

      {/* Bottom Grid */}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ height: "150px" }} className="color">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              <div className="fontstyle2">
                Copyright © Product Rental Website 2022
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

