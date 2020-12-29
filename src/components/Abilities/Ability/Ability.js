import React, { useEffect } from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Icons
import IconBGGold from '../../../assets/img/icon-badge-background-gold.svg';
import IconBGSilver from '../../../assets/img/icon-badge-background-silver.svg';
import IconBGTools from '../../../assets/img/icon-badge-background-tools.svg';

// Stylesheet
import './Ability.scss';

export default function Ability({ abilityTitle,
                                  abilitySubTitle,
                                  abilityIcon,
                                  abilityPriority
                               }) {

  useEffect(() => {
    animateIconPerspective();
  });

  let iconBG;
  if (abilityPriority === 1) {
    iconBG = IconBGGold;
  } else if (abilityPriority === 2) {
    iconBG = IconBGSilver;
  } else if (abilityPriority === 3) {
    iconBG = IconBGTools;
  }

  function animateIconPerspective() {
    let abilityIcons = document.querySelectorAll('.IconContainer');

    function transforms(x, y, el) {
      let constrain = 60;
      let box = el.getBoundingClientRect();
      let calcX = -(y - box.y - (box.height / 2)) / constrain;
      let calcY = (x - box.x - (box.width / 2)) / constrain;
      
      return "perspective(100px) "
        + "   rotateX("+ calcX +"deg) "
        + "   rotateY("+ calcY +"deg) ";
    };

    function transformElement(el, xyEl) {
      el.style.transform = transforms.apply(null, xyEl);
    }

    // Rotate icons with mouse
    document.onmousemove = function(e) {
      let xy = [e.clientX, e.clientY];

      abilityIcons.forEach(abilityIcon => {
        let position = xy.concat([abilityIcon]);

        window.requestAnimationFrame(function(){
          transformElement(abilityIcon, position);
        });
      });
    };

    // Rotate icons with phone gyroscope
    window.addEventListener("deviceorientation", function(event) {
      let constrain = 6;
      let positionX = (Math.round(event.beta) / constrain) - 9;
      let positionY = Math.round(event.alpha) / constrain;

      abilityIcons.forEach(abilityIcon => {
          let style = "perspective(100px) "
          + "   rotateX(" + positionX + "deg)"
          + "   rotateY(" + positionY + "deg)";
          abilityIcon.style.transform = style;
      });
    });
  }

  return (
    <Grid item xs={6} md={4} lg={3}>
      <Grid className="Skill" container item spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <div className="IconContainer">
            {abilityIcon}
            <img className="IconBG" src={iconBG} />
          </div>  
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography component="h5" variant="h6">
            {abilityTitle}
          </Typography>
          <Typography variant="p">
            {abilitySubTitle}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}