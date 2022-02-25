const express = require("express");
const fs = require("fs");
const { join } = require("path");

const router = express.Router();

router.post("/api/join", async (req, res, next) => {
  try {
    let contact = req.body;
    console.log(contact);
    res.json({ msg: "success", contact });
    // fs.appendFile(
    //   join(__dirname, "../data/BPNMembersSpreadsheet.copy.csv"),
    //   `${new Date().toString()},${contact.firstName},${contact.lastName},${
    //     contact.email
    //   },${contact.city},${contact.state},${contact.phoneNumber},${
    //     contact.preferredContactMethod
    //   },${contact.areYoucheckAllthatApply},${
    //     contact.pleaseTellusMoreaboutYourselfwhatWouldyouLiketheGrouptoKnowaboutYouieEmployercareerGoalsentrepreneurFieldofKnowledgeexperience
    //   },${
    //     contact.DoyouGivepermissionForyourInformationtoBeIncludedinTheBPNdirectory
    //   },${contact.howDidyouHearaboutBPN},${
    //     contact.additionalCommentsquestionsSuggestions
    //   }`,
    //   () => {
    //     res.json({ message: "Thank you for joining BPN" });
    //   }
    // );
  } catch (e) {
    next(e);
  }
});

router.get("/", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../../public/index.html"));
  } catch (e) {
    next(e);
  }
});

router.get("/contact", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../../public/contactUs.html"));
  } catch (e) {
    next(e);
  }
});

router.get("/partners", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../../public/bpnPartners.html"));
  } catch (e) {
    next(e);
  }
});

router.get("/join", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../../public/joinBpn.html"));
  } catch (e) {
    next(e);
  }
});

router.get("/programs-and-services", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../../public/programsAndServices.html"));
  } catch (e) {
    next(e);
  }
});

router.get("/upcoming-events", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../../public/upcomingEvents.html"));
  } catch (e) {
    next(e);
  }
});

module.exports = router;
