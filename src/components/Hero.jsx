import React from "react";
import { Box, IconButton, Typography, Button } from "@mui/material";
import bottomShape from "../assets/images/BottomShape.png";
import me from "../assets/images/BWImage.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ImBehance2 } from "react-icons/im";
import "./hero.css";
import CarouselD from "./Carousel";
import Typed from "react-typed";
import { motion } from "framer-motion/dist/es/index";

const containerVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.3,
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  },
};

export default function Hero() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="hero"
      style={{
        backgroundImage: `url(${bottomShape})`,
        backgroundRepeat: "repeat-x",
        flexGrow: 1,
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box
          sx={{
            flex: 1.3,
            order: { xs: 2, sm: 1 },
            alignItems: "flex-start",
            p: "4rem 4rem 0.5rem 4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ mb: "2rem", display: "flex", alignItems: "center" }}
          >
            Hi there!
          </Typography>
          <Typography
            variant="h2"
            className="hero_intro"
            sx={{
              fontSize: "3.40rem",
              fontFamily: "Libre Baskerville",
              mb: "1.5rem",
            }}
          >
            I`m Adebisi Temi, a{" "}
            <div
              className="adb_title"
              style={{
                backgroundImage:
                  "linear-gradient(247.96deg, #A145A9 -31.52%, #636BBC 63.23%, #4A7BC4 106.42%)",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              <Typed
                strings={["Product Designer"]}
                typeSpeed={150}
                backSpeed={100}
                backDelay={250}
                startDelay={250}
                loop
              />
            </div>
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{
              fontFamily: "IBM Plex Mono",
              color: "rgba(223, 223, 223, 0.8)",
              mb: "3rem",
              lineHeight: "2.0rem",
            }}
          >
            A creative UI/UX Designer, passionate about solving complex users'
            problems through intuitive and beautiful designs. I have a profound
            interest in creating aesthetically pleasing, functional, and usable
            digital products with strategic design thinking process to provide a
            great user experience for all kind of users and to aid business
            growth and profitability.
          </Typography>
          <Box
            sx={{
              flex: 1.3,
              alignItems: "center",
              justifyContent: "space-between",
              mt: "auto",
            }}
            className="hero_btns"
          >
            <Button
              variant="contained"
              sx={{
                mr: 4,
                fontSize: {xs:"0.5rem", sm:"0.8rem"},
                padding: { xs: "10px 15px", sm: "10px 20px" },
                borderRadius: "30px",
                background:
                  "linear-gradient(247.96deg, #A145A9 -31.52%, #636BBC 63.23%, #4A7BC4 106.42%)",
              }}
              href="https://drive.google.com/file/d/1QTUOLEAnqedeMUPakZtC4-Yw2N211FOU/view?usp=drivesdk"
              download
              target="_blanck"
            >
              View Resume
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "30px",
                fontSize: {xs:"0.5rem", sm:"0.8rem"},
                padding: { xs: "10px 15px", sm: "10px 20px" },
                background: "#F7F7F8",
                color: "#6C66B9",
              }}
              href="about"
            >
              Contact me
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            order: { xs: 1, sm: 2 },
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ borderRadius: "60%", height: "78%" }}>
            <motion.img
              initial={{
                opacity: 0,
                x: "100vw",
              }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 3 }}
              when="beforeChildren"
              src={me}
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "60%",
                height: "90%",
              }}
              alt="adebisi temi"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <IconButton
              href="https://instagram.com/designlotw?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <InstagramIcon sx={{ color: "rgba(213, 184, 255, 0.6)" }} />
            </IconButton>
            <IconButton
              href="https://www.behance.net/adebisikupoluyi"
              target="_blank"
            >
              <ImBehance2 fontSize="20px" color="rgba(213, 184, 255, 0.6)" />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/adebisi-kupoluyi"
              target="_blank"
            >
              <LinkedInIcon sx={{ color: "rgba(213, 184, 255, 0.6)" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <CarouselD />
      <style>
        {`
        @media(max-width:500px){
          .hero_intro{
            font-size:22px;
          }
          .adb_title{
              font-size:24px;
          }
        }  
            `}
      </style>
    </motion.div>
  );
}
