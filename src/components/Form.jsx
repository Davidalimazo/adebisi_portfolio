import React from "react";
import { Box, Button } from "@mui/material";
import contact_img from "../assets/images/contact_img.png";
import axios from "axios";
import {messageSchema} from './messageSchema';
import { useFormik } from "formik";

export default function Form() {
  const [isClicked, setIsClicked] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState(false);

  const onSubmit=(e)=>{
    setIsClicked(true)
      axios.post('https://formsubmit.co/info@designlotw.com', {...values}).then(res=>{
        setAlertMessage(true);
      }).catch(err=>console.log(err.message))

}
const {
  values,
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
} = useFormik({
  initialValues: {
    name: "",
    email: "",
    message: ""
  },
  validationSchema: messageSchema,
  onSubmit,
});


  return (
    <Box
      sx={{
        background: "rgba(26, 18, 58, 0.6)",
        borderRadius: "20px",
        mt: "3.5rem",
        width: { sx: "100%", sm: "70%", lg: "50%" },
      }}formData
      className="contact"
      id="contact"
    >
      <form className="ab_form" style={{ flexDirection: "column" }} onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ fontSize: "24px", fontWeight: "700", lineHeight: "40px" }}>
            Contact me
          </Box>
          <Box
            sx={{
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "16px",
              textAlign: "center",
              color: "rgba(223, 223, 223, 0.8)",
            }}
          >
            Get in touch with me👋🏽 and i will respond shortly.....
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
            flexDirection: "column",
            mt: "2.5rem",
          }}
        >
          <input
            placeholder="Enter your name"
            type={"text"}
            className="adb_txf"
            value={values.name} 
            onChange={handleChange}
            onBlur={handleBlur}
            name='name'
            style={{border:errors.name ? '1px solid red' : ''}}
          />
          <input
            placeholder="Enter your email address"
            type={"text"}
            className="adb_txf"
            value={values.email} 
            onChange={handleChange}
            onBlur={handleBlur}
            name='email'
            style={{border:errors.email ? '1px solid red' : ''}}
          />
          <textarea
            placeholder="Type your message..."
            type={"text"}
            rows={10}
            name='message'
            className="adb_txf adb_message"
            value={values.message} 
            onChange={handleChange}
            onBlur={handleBlur}
            style={{border:errors.message ? '1px solid red' : ''}}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              mt: "2rem",
              borderRadius: "30px",
              background:
                "linear-gradient(247.96deg, #A145A9 -31.52%, #636BBC 63.23%, #4A7BC4 106.42%)",
              padding: "10px 20px",
            }}
            disabled={isClicked}
          >
            send message
          </Button>
          {
            alertMessage &&  <Box sx={{textAlign:'center', fontSize:'12px', mt:'14px',  background:
            "linear-gradient(247.96deg, #A145A9 -31.52%, #636BBC 63.23%, #4A7BC4 106.42%)", p:'12px'}}>Thanks for contacting me, I will get in touch with you shortly</Box>
          }
         
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={contact_img}
            className="about_emoji"
            style={{ filter: "grayscale(70%)" }}
            alt=""
          />
        </Box>
      </form>
      <style>
        {`
                .adb_txf{
                    flexGrow:0;
                    alignSelf:stretch;
                    color:rgba(223, 223, 223, 0.8);
                    flex:none;
                    background:#181133;
                    width:100%;
                    padding:15px;
                    border-radius:10px;
                    border:none;
                    outline:none;
                    margin-bottom:15px;
                  }
                  .adb_txf:focus{
                    outline:1px solid white;
                  }
                  .ab_form{
                    padding:5rem 5rem 1rem 5rem;
                    display:flex;
                    alignItems:center;
                    justifyContent:center;
                    gap:1rem;
                    width:100%;
                  }
                  .about_emoji{
                    width: 20%;
                  }
                  @media(max-width:600px){
                    .about_emoji{
                      width: 45%;
                    }
                    .ab_form{
                      padding:1rem 2rem 1rem 2rem;
                    }
                  }
                `}
      </style>
    </Box>
  );
}
