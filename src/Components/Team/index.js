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
          twitter="https://twitter.com/muhammadbmasood"
          linkedin="https://www.linkedin.com/in/muhammad-bin-masood-4535057b/"
        />
        <TeamMember
          img={Aiman}
          name="Aiman Saeed"
          title="Creative Lead"
          twitter="https://twitter.com/aimans_3"
          linkedin="http://pk.linkedin.com/in/aimansaeed"
        />
        <TeamMember
          img={Aimen}
          name="Hufsa Munawar"
          title="Marketing Lead"
          twitter="https://twitter.com/HufsaMunawar"
        />
        <TeamMember
          img={Huzaifa}
          name="Houzaif Khan"
          title="Technical LEad"
          twitter="https://twitter.com/HouzaifKhan?s=08"
          linkedin="https://www.linkedin.com/in/huzaifa-habib-0250a2177"
        />
        <TeamMember
          img={Ali}
          name="Ali Naqi Rizvi"
          title="Corporate Outreach"
          twitter="https://twitter.com/AliNaqiRizvi1"
          linkedin="https://www.linkedin.com/in/syed-muhammad-ali-naqi/"
        />
        <TeamMember
          img={Qadeer}
          name="Abdul Qadeer Khan"
          title="Logistic Lead"
          twitter="https://www.facebook.com/qadeerkhan.a7x"
        />
        <TeamMember
          img={Ayesha}
          name="Ayesha Akhtar"
          title="Workshops Lead"
          linkedin="https://www.linkedin.com/in/ayesha-akhtar-336033119/"
        />
        <TeamMember
          img={Khwaja}
          name="Ayesha Imran Khwaja"
          title="Programs Lead"
          twitter="https://twitter.com/AyeshaIKhawaja?s=08"
          linkedin="https://www.linkedin.com/in/ayesha-imran-khawaja/"
        />
        <TeamMember
          img={Danial}
          name="Danial Nasir"
          title="University Outreach"
        />
        <TeamMember
          img={Sarwat}
          name="Sarwat Rizvi"
          title="Social Media Lead"
          twitter="https://twitter.com/isarwatrizvi_"
          linkedin="https://www.linkedin.com/in/sarwat-rizvi-893aa418b"
        />
        <TeamMember
          img={Mashal}
          name="Mashal Riaz"
          title="Design Lead"
          facebook="https://twitter.com/mashaallriaz"
          linkedin="https://www.linkedin.com/in/mashal-riaz-43a096125/"
        />
        <TeamMember
          img={Umair}
          name="Umair Bin Tahir"
          title="Volunteers Lead"
        />
      </div>
    </div>
  );
};

export default index;
