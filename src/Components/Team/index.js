import React from "react";
import TeamMember from "./member";
import { Grid } from "@material-ui/core";
import classes from "./index.module.scss";
import Aiman from "../../assets/aiman.jpg";
import Aimen from "../../assets/aimen.jpg";
import Danial from "../../assets/danial.jpg";
import Huzaifa from "../../assets/huzaifa.jpg";
import Mashal from "../../assets/mashal.jpg";
import Masood from "../../assets/masood.jpg";
import Qadeer from "../../assets/qadeer.jpg";
import Ali from "../../assets/ali.jpg";
import Umair from "../../assets/umair.jpg";
import Khwaja from "../../assets/khwaja.jpg";
import Sarwat from "../../assets/sarwat.jpg";
import Ayesha from "../../assets/ayesha.jpg";

const index = () => {
  return (
    <div className={classes.team}>
      <h2 className={classes.hero_head}>
        People <span>Behind</span> the Wheel
      </h2>
      <p className={classes.hero_content}>
        At sessions that span from the technical to the visionary, let’s
        celebrate and discover what the technologies can enable: how product
        innovation, open source, and ML and AI can propel enterprises forward
        and solve the big problems that impact all of us.
      </p>
      {/* <Grid container className={classes.team_list} spacing={5}>
        <Grid item xs={12} md={3}>
          <TeamMember />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamMember />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamMember />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamMember />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamMember />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamMember />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamMember />
        </Grid>
        <Grid item xs={12} md={3}>
          <TeamMember />
        </Grid>
      </Grid> */}
      <div className={classes.team_list}>
        <TeamMember
          img={Masood}
          name="Muhammed Bin Masood"
          title="Strategic Lead"
          facebook="https://www.facebook.com/EmmBeeEm"
        />
        <TeamMember
          img={Aiman}
          name="Aiman Saeed"
          title="Creative Lead"
          facebook="www.facebook.com/aiman.azfar.saeed"
        />
        <TeamMember
          img={Aimen}
          name="Hufsa Munawar"
          title="Marketing Lead"
          facebook="https://www.facebook.com/hufsa.munawar"
        />
        <TeamMember
          img={Huzaifa}
          name="Houzaif Khan"
          title="Technical LEad"
          facebook="https://www.facebook.com/houzaif.khan"
        />
        <TeamMember
          img={Ali}
          name="Ali Naqi Rizvi"
          title="Corporate Outreach"
          facebook="https://www.facebook.com/SyedNaqiRizvi79"
        />
        <TeamMember
          img={Qadeer}
          name="Abdul Qadeer Khan"
          title="Logistic Lead"
          facebook="https://www.facebook.com/qadeerkhan.a7x"
        />
        <TeamMember
          img={Ayesha}
          name="Ayesha Akhtar"
          title="Workshops Lead"
          facebook="https://www.facebook.com/ayesha.akhtar.2095"
        />
        <TeamMember
          img={Khwaja}
          name="Ayesha Imran Khwaja"
          title="Programs Lead"
          facebook="https://www.facebook.com/ayesha.i.khawaja"
        />
        <TeamMember
          img={Danial}
          name="Danial Nasir"
          title="University Outreach"
          facebook="https://www.facebook.com/imdanial123"
        />
        <TeamMember
          img={Sarwat}
          name="Sarwat Rizvi"
          title="Social Media Lead"
          facebook="https://www.facebook.com/syedaneha.rizvi.9"
        />
        <TeamMember
          img={Mashal}
          name="Mashal Riaz"
          title="Design Lead"
          facebook="https://www.facebook.com/mashaallriaz"
        />
        <TeamMember
          img={Umair}
          name="Umair Bin Tahir"
          title="Volunteers Lead"
          facebook="https://www.facebook.com/umairbintahir33447"
        />
      </div>
    </div>
  );
};

export default index;
