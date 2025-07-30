"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Fade from "@mui/material/Fade";

export default function AccordionTransition() {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {/* First Accordion */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleExpansion("panel1")}
      >
        <AccordionSummary
          expandIcon={expanded === "panel1" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{color:"#1C2F58FC"}} component="span">Why is digital marketing important for my business?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#878C91">
            Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Second Accordion */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleExpansion("panel2")}
      >
        <AccordionSummary
          expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{color:"#1C2F58FC"}} component="span">How can digital marketing help improve my website's visibility?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#878C91">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Third Accordion */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleExpansion("panel3")}
      >
        <AccordionSummary
          expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography style={{color:"#1C2F58FC"}} component="span">How long does it take to see results from digital marketing efforts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#878C91">
            Practice component-based structures, routing strategies, and layout techniques to build polished UIs.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Fourth Accordion */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleExpansion("panel4")}
      >
        <AccordionSummary
          expandIcon={expanded === "panel4" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography style={{color:"#1C2F58FC"}} component="span">How do you measure the success of digital marketing campaigns?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#878C91">
            Explore backend data flows using Express, build REST APIs, and connect your UI with live data.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
